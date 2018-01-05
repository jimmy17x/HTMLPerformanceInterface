/*
 * This function logs properties using Performance Timing interface info for various events which occur during loading and use ofo current page 
 * Events recorded - 
 * 1 -Time taken to download the webpage from server
 * 2- Time taken to render the webpage 
 * 3- DNS lookup timing
 * 4- TCP connection establishment timing
 * 5- Response loading timing 
 * 
 * For more info visit -   
 * https://www.w3.org/TR/navigation-timing/#processing-model#processing-model
 * https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming
 * https://www.html5rocks.com/en/tutorials/webperformance/basics/
 * 
 * 
 */

window.onload = function()
{
            console.log( "Performance API  -  "  );
            console.log("Time taken to download the webpage from server  : " + (window.performance.timing.responseEnd - window.performance.timing.navigationStart) + " ms" );
            console.log( "Taken to render the webpage  is : " + (window.performance.timing.loadEventStart - window.performance.timing.domLoading) + " ms" );
       
            var item = window.performance;
            var timing = item.timing;
            var navStart = timing.navigationStart;
            var redStart = timing.redirectStart - navStart;
            var redEnd = timing.redirectEnd - navStart;
            var dnsStart = timing.domainLookupStart - navStart;
            var dnsEnd = timing.domainLookupEnd - navStart;
            var tcpStart = timing.connectStart - navStart;
            var tcpEnd = timing.connectEnd - navStart;
            var reqStart = timing.requestStart - navStart;
            var loadStart = timing.responseStart - navStart;
            var loadEnd = timing.loadEventStart - navStart;
            console.log(
                'DNS lookup = ' + (dnsEnd - dnsStart) + 'ms ' +
                'Established TCP connection = ' + (tcpEnd - tcpStart ) + 'ms  ' +
                'Response loading = ' + (loadStart - reqStart ) + 'ms  '
            );
       

}
