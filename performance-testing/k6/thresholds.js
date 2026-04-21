export const THRESHOLDS = {
  http_req_duration: ['p(95)<1000'], // 95% bajo 1s
  http_req_failed: ['rate<0.05'],    // menos del 5% de errores
  checks: ['rate>0.95'],             // 95% checks pasan
};