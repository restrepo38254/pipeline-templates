import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

route: process.env.ROUTE;

export const options = {
  stages: [
    { duration: '10s', target: 15 },
    { duration: '20s', target: 15 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<250'],
  },
};

export default function () {
  const res = http.get(route);
  sleep(5);
}

    let index = http.get(route)
    check(index, {
        'index status is 200': (r) => r.status === 200,
    })
    
  
export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }