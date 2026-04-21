import http from 'k6/http';
import { check, sleep } from 'k6';
import { BASE_URL, DEFAULT_PARAMS } from './config.js';
import { THRESHOLDS } from './thresholds.js';

export const options = {
  stages: [
    { duration: '20s', target: 20 },
    { duration: '10s', target: 300 }, // spike brutal
    { duration: '20s', target: 20 },
  ],
  thresholds: THRESHOLDS,
};

export default function () {
  const res = http.get(`${BASE_URL}/products`, DEFAULT_PARAMS);

  check(res, {
    'status 200': (r) => r.status === 200,
  });

  sleep(1);
}