/**
 * 문제: TypeScript 타입 시스템 활용하기
 * 
 * 아래 요구사항에 맞는 타입과 함수들을 구현하세요.
 * 타입 안정성을 보장하면서 실용적인 유틸리티 함수들을 만들어봅시다.
 */

// TODO: 1. User 타입 정의
// id (number), name (string), email (string), role ('admin' | 'user' | 'guest')
type User = any;

// TODO: 2. Product 타입 정의  
// id (number), name (string), price (number), stock (number), tags (string[])
type Product = any;

// TODO: 3. Order 타입 정의
// id (number), userId (number), products (배열: {productId: number, quantity: number}),
// status ('pending' | 'completed' | 'cancelled'), createdAt (Date)
type Order = any;

/**
 * 4. 제네릭을 사용한 API 응답 타입
 * success (boolean), data (T), error (string | null)
 */
type ApiResponse<T> = any;

/**
 * 5. Partial 타입을 활용한 업데이트 함수
 * 사용자 정보를 부분적으로 업데이트합니다.
 */
function updateUser(user: User, updates: Partial<User>): User {
  // TODO: 구현하세요
  return user;
}

/**
 * 6. 타입 가드 함수
 * 주어진 role이 admin인지 확인합니다.
 */
function isAdmin(user: User): boolean {
  // TODO: 구현하세요
  return false;
}

/**
 * 7. Pick 타입을 활용한 함수
 * Product에서 display에 필요한 정보만 추출합니다.
 */
type ProductDisplay = Pick<Product, 'id' | 'name' | 'price'>;

function getProductDisplay(product: Product): ProductDisplay {
  // TODO: 구현하세요
  return {} as ProductDisplay;
}

/**
 * 8. Union 타입과 타입 좁히기
 * 다양한 결제 방법을 처리하는 함수
 */
type PaymentMethod = 
  | { type: 'card'; cardNumber: string; cvv: string }
  | { type: 'bank'; accountNumber: string; bankCode: string }
  | { type: 'cash' };

function processPayment(payment: PaymentMethod): string {
  // TODO: 각 결제 타입에 따라 다른 처리를 구현하세요
  // 'card' -> "카드 결제: ****{마지막 4자리}"
  // 'bank' -> "계좌 이체: {은행코드}-****"
  // 'cash' -> "현금 결제"
  return '';
}

/**
 * 9. 제네릭 함수
 * 배열에서 특정 속성으로 아이템을 찾습니다.
 */
function findByProperty<T, K extends keyof T>(
  items: T[],
  property: K,
  value: T[K]
): T | undefined {
  // TODO: 구현하세요
  return undefined;
}

/**
 * 10. Readonly와 불변성
 * 주문을 완료 처리하되, 원본을 변경하지 않습니다.
 */
function completeOrder(order: Readonly<Order>): Order {
  // TODO: 새로운 Order 객체를 반환하세요 (status를 'completed'로)
  return {} as Order;
}

// 테스트 코드
const runTests = () => {
  console.log('=== TypeScript 타입 테스트 시작 ===');
  
  // 테스트 데이터
  const testUser: User = {
    id: 1,
    name: 'John',
    email: 'john@example.com',
    role: 'user'
  };
  
  const testProduct: Product = {
    id: 1,
    name: 'Laptop',
    price: 1500000,
    stock: 10,
    tags: ['electronics', 'computers']
  };
  
  const testOrder: Order = {
    id: 1,
    userId: 1,
    products: [{productId: 1, quantity: 2}],
    status: 'pending',
    createdAt: new Date()
  };
  
  // Test 5: updateUser
  const updated = updateUser(testUser, { name: 'Jane' });
  console.log('5. updateUser:', updated.name === 'Jane' ? '✅' : '❌');
  
  // Test 6: isAdmin
  const adminUser = { ...testUser, role: 'admin' as const };
  console.log('6. isAdmin:', isAdmin(adminUser) === true && isAdmin(testUser) === false ? '✅' : '❌');
  
  // Test 7: getProductDisplay
  const display = getProductDisplay(testProduct);
  console.log('7. getProductDisplay:', 
    display.id === 1 && display.name === 'Laptop' && display.price === 1500000 ? '✅' : '❌');
  
  // Test 8: processPayment
  const cardPayment: PaymentMethod = { type: 'card', cardNumber: '1234567812345678', cvv: '123' };
  console.log('8. processPayment:', 
    processPayment(cardPayment) === '카드 결제: ****5678' ? '✅' : '❌');
  
  // Test 9: findByProperty
  const users: User[] = [testUser, adminUser];
  const found = findByProperty(users, 'role', 'admin');
  console.log('9. findByProperty:', found?.id === adminUser.id ? '✅' : '❌');
  
  // Test 10: completeOrder
  const completed = completeOrder(testOrder);
  console.log('10. completeOrder:', 
    completed.status === 'completed' && testOrder.status === 'pending' ? '✅' : '❌');
  
  console.log('=== 테스트 완료 ===');
};

// 테스트 실행
runTests();

export { User, Product, Order, ApiResponse, PaymentMethod };