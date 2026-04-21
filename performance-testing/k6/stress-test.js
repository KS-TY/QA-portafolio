import http from 'k6/http';
import { check, sleep } from 'k6';
import { BASE_URL, DEFAULT_PARAMS } from './config.js';
import { THRESHOLDS } from './thresholds.js';

export const options = {
  scenarios: {
    stress_test: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '30s', target: 50 },
        { duration: '30s', target: 100 },
        { duration: '30s', target: 200 },
        { duration: '30s', target: 400 },
      ],
      gracefulRampDown: '30s',
    },
  },
  thresholds: THRESHOLDS,
};

export default function () {
  const res = http.get(`${BASE_URL}/products`, DEFAULT_PARAMS);

  check(res, {
    'status 200': (r) => r.status === 200,
  });

  sleep(1);
}