import http from 'k6/http';
import { check, sleep } from 'k6';
import { BASE_URL, DEFAULT_PARAMS } from './config.js';
import { THRESHOLDS } from './thresholds.js';

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m', target: 50 },
    { duration: '30s', target: 0 },
  ],
  thresholds: THRESHOLDS,
};

export default function () {
  const res = http.get(`${BASE_URL}/products`, DEFAULT_PARAMS);

  check(res, {
    'status 200': (r) => r.status === 200,
    'tiempo < 1s': (r) => r.timings.duration < 1000,
  });

  sleep(1);
}