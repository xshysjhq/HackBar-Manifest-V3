/**
 When we receive the message, execute the given script in the given
 tab.
 */
'use strict';
let referer;
let user_agent;
let cookie;
let method;
let postDataCurrent = [];

function setCurrentPostData(e) {
    if (e.method === "POST" && e.requestBody) {
        let rawData = e.requestBody.formData;
        var post_data_array = [];
        for (let key in rawData) {
            if (rawData.hasOwnProperty(key)) {
                var item = key + "=" + rawData[key];
                post_data_array.push(item);
            }
        }
        chrome.tabs.query(
            {currentWindow: true, active: true},
            function (tabArray) {
                const currentTabId = tabArray[0].id;
                postDataCurrent.push({'tabId': currentTabId, 'data': post_data_array.join("&")});
            }
        );
    }
}

function getCurrentPostData(currentTabId) {
    for (let i = 0; i < postDataCurrent.length; i++) {
        if (postDataCurrent[i].tabId === currentTabId) {
            return postDataCurrent[i].data;
        }
    }
    return null;
}

// Removed rewriteHeaders function as it's no longer needed in MV3
// We're now using scripting API to handle header modifications

function handleMessage(request, sender, sendResponse) {
    if (sender.url !== chrome.runtime.getURL("/theme/hackbar-panel.html")) {
        return;
    }
    const tabId = request.tabId;
    const action = request.action;
    switch (action) {
        case 'send_requests':
            const Data = request.data;
            const url = Data.url;
            method = Data.method;
            referer = Data.referer;
            user_agent = Data.user_agent;
            cookie = Data.cookie;
            if (method === 'GET') {
                chrome.tabs.update(tabId, {url: url});
            } else {
                const post_data = JSON.stringify(Data.post_data);
                chrome.scripting.executeScript({
                    target: {tabId: tabId},
                    func: (postData, targetUrl) => {
                        let post_data = postData;
                        let url = targetUrl;
                    },
                    args: [encodeURIComponent(post_data), encodeURIComponent(url)]
                }).then(() => {
                    chrome.scripting.executeScript({
                        target: {tabId: tabId},
                        files: ['theme/js/post_form.js']
                    });
                });
            }
            // Using declarativeNetRequest API for MV3
            // This requires a different approach for modifying headers
            // For now, we'll use scripting to inject header modification code
            chrome.scripting.executeScript({
                target: {tabId: tabId},
                func: (refererValue, userAgentValue, cookieValue) => {
                    // Store header values in sessionStorage for later use
                    if (refererValue) sessionStorage.setItem('hackbar_referer', refererValue);
                    if (userAgentValue) sessionStorage.setItem('hackbar_user_agent', userAgentValue);
                    if (cookieValue) sessionStorage.setItem('hackbar_cookie', cookieValue);
                },
                args: [referer, user_agent, cookie]
            });
            sendResponse({status: true});
            break;
        case 'load_url':
            chrome.tabs.get(tabId, function (tab) {
                const data = getCurrentPostData(tabId);
                sendResponse({url: tab.url, data: data});
            });
            break;
    }
    return true;
}

chrome.webRequest.onBeforeRequest.addListener(
    setCurrentPostData,
    {urls: ["<all_urls>"]},
    ["requestBody"]
);

/**
 Listen for messages from our devtools panel.
 */
chrome.runtime.onMessage.addListener(handleMessage);
