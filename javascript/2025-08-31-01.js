/**
 * 문제: 배열 메서드 활용하기
 * 
 * 아래 요구사항을 만족하는 함수들을 구현하세요.
 * 가능한 한 for 루프 대신 배열 메서드(map, filter, reduce 등)를 사용해보세요.
 */

const products = [
  { id: 1, name: '노트북', price: 1500000, category: '전자제품' },
  { id: 2, name: '마우스', price: 30000, category: '전자제품' },
  { id: 3, name: '키보드', price: 100000, category: '전자제품' },
  { id: 4, name: '모니터', price: 350000, category: '전자제품' },
  { id: 5, name: '책상', price: 200000, category: '가구' },
  { id: 6, name: '의자', price: 150000, category: '가구' }
];

/**
 * 1. 모든 상품의 가격을 10% 할인된 가격으로 반환하는 함수
 * @param {Array} items - 상품 배열
 * @returns {Array} 할인된 가격이 적용된 새로운 상품 배열
 */
function applyDiscount(items) {
  // TODO: 구현하세요
}

/**
 * 2. 특정 카테고리의 상품만 필터링하는 함수
 * @param {Array} items - 상품 배열
 * @param {string} category - 필터링할 카테고리
 * @returns {Array} 해당 카테고리의 상품만 포함된 배열
 */
function filterByCategory(items, category) {
  // TODO: 구현하세요
}

/**
 * 3. 장바구니의 총 가격을 계산하는 함수
 * @param {Array} items - 상품 배열
 * @returns {number} 모든 상품 가격의 합계
 */
function calculateTotal(items) {
  // TODO: 구현하세요
}

/**
 * 4. 가장 비싼 상품을 찾는 함수
 * @param {Array} items - 상품 배열
 * @returns {Object} 가장 비싼 상품 객체
 */
function findMostExpensive(items) {
  // TODO: 구현하세요
}

/**
 * 5. 상품 이름들을 알파벳 순으로 정렬하여 반환하는 함수
 * @param {Array} items - 상품 배열
 * @returns {Array} 정렬된 상품 이름 배열
 */
function getSortedNames(items) {
  // TODO: 구현하세요
}

// 테스트 코드 (수정하지 마세요)
const runTests = () => {
  console.log('=== 테스트 시작 ===');
  
  // Test 1
  const discounted = applyDiscount(products);
  console.log('1. 10% 할인 적용:', discounted[0].price === 1350000 ? '✅' : '❌');
  
  // Test 2
  const electronics = filterByCategory(products, '전자제품');
  console.log('2. 전자제품 필터링:', electronics.length === 4 ? '✅' : '❌');
  
  // Test 3
  const total = calculateTotal(products);
  console.log('3. 총 가격 계산:', total === 2330000 ? '✅' : '❌');
  
  // Test 4
  const expensive = findMostExpensive(products);
  console.log('4. 가장 비싼 상품:', expensive.id === 1 ? '✅' : '❌');
  
  // Test 5
  const names = getSortedNames(products);
  console.log('5. 이름 정렬:', names[0] === '노트북' && names[5] === '키보드' ? '✅' : '❌');
  
  console.log('=== 테스트 완료 ===');
};

// 테스트 실행
runTests();