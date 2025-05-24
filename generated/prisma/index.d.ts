
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model CartItem
 * 
 */
export type CartItem = $Result.DefaultSelection<Prisma.$CartItemPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model PaymentMethod
 * 
 */
export type PaymentMethod = $Result.DefaultSelection<Prisma.$PaymentMethodPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PaymentStatus: {
  NEW: 'NEW',
  PENDING: 'PENDING',
  CANCELLED: 'CANCELLED',
  DECLINED: 'DECLINED',
  SUCCESS: 'SUCCESS'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const OrderStatus: {
  PENDING: 'PENDING',
  TRANSPORT: 'TRANSPORT',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.CartItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentMethod`: Exposes CRUD operations for the **PaymentMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentMethods
    * const paymentMethods = await prisma.paymentMethod.findMany()
    * ```
    */
  get paymentMethod(): Prisma.PaymentMethodDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql


  /**
   * Prisma.skip
   */
  export import skip = runtime.skip


  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.0
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Review: 'Review',
    Product: 'Product',
    File: 'File',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Cart: 'Cart',
    CartItem: 'CartItem',
    Address: 'Address',
    Category: 'Category',
    Payment: 'Payment',
    PaymentMethod: 'PaymentMethod'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "review" | "product" | "file" | "order" | "orderItem" | "cart" | "cartItem" | "address" | "category" | "payment" | "paymentMethod"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      CartItem: {
        payload: Prisma.$CartItemPayload<ExtArgs>
        fields: Prisma.CartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItem>
          }
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      PaymentMethod: {
        payload: Prisma.$PaymentMethodPayload<ExtArgs>
        fields: Prisma.PaymentMethodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentMethodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentMethodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findFirst: {
            args: Prisma.PaymentMethodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentMethodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          findMany: {
            args: Prisma.PaymentMethodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          create: {
            args: Prisma.PaymentMethodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          createMany: {
            args: Prisma.PaymentMethodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentMethodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          delete: {
            args: Prisma.PaymentMethodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          update: {
            args: Prisma.PaymentMethodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          deleteMany: {
            args: Prisma.PaymentMethodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentMethodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentMethodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>[]
          }
          upsert: {
            args: Prisma.PaymentMethodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentMethodPayload>
          }
          aggregate: {
            args: Prisma.PaymentMethodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentMethod>
          }
          groupBy: {
            args: Prisma.PaymentMethodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentMethodCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentMethodCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    review?: ReviewOmit
    product?: ProductOmit
    file?: FileOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
    cart?: CartOmit
    cartItem?: CartItemOmit
    address?: AddressOmit
    category?: CategoryOmit
    payment?: PaymentOmit
    paymentMethod?: PaymentMethodOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
    payments: number
    reviews: number
    addresses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    addresses?: boolean | UserCountOutputTypeCountAddressesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput | $Types.Skip
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput | $Types.Skip
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput | $Types.Skip
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput | $Types.Skip
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    review: number
    orderItem: number
    cartItem: number
    images: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ProductCountOutputTypeCountReviewArgs
    orderItem?: boolean | ProductCountOutputTypeCountOrderItemArgs
    cartItem?: boolean | ProductCountOutputTypeCountCartItemArgs
    images?: boolean | ProductCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput | $Types.Skip
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput | $Types.Skip
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput | $Types.Skip
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput | $Types.Skip
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderItems: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput | $Types.Skip
  }


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    cartItems: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cartItems?: boolean | CartCountOutputTypeCountCartItemsArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountCartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput | $Types.Skip
  }


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    Order: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | AddressCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput | $Types.Skip
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput | $Types.Skip
  }


  /**
   * Count Type PaymentCountOutputType
   */

  export type PaymentCountOutputType = {
    Order: number
  }

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | PaymentCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput | $Types.Skip
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    cpf: string | null
    nome: string | null
    dataDeNascimento: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    cpf: string | null
    nome: string | null
    dataDeNascimento: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    cpf: number
    nome: number
    dataDeNascimento: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    cpf?: true | $Types.Skip
    nome?: true | $Types.Skip
    dataDeNascimento?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type UserMaxAggregateInputType = {
    cpf?: true | $Types.Skip
    nome?: true | $Types.Skip
    dataDeNascimento?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type UserCountAggregateInputType = {
    cpf?: true | $Types.Skip
    nome?: true | $Types.Skip
    dataDeNascimento?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput | $Types.Skip
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[] | $Types.Skip
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    cpf: string
    nome: string
    dataDeNascimento: Date
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean | $Types.Skip
    nome?: boolean | $Types.Skip
    dataDeNascimento?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    orders?: boolean | User$ordersArgs<ExtArgs> | $Types.Skip
    payments?: boolean | User$paymentsArgs<ExtArgs> | $Types.Skip
    reviews?: boolean | User$reviewsArgs<ExtArgs> | $Types.Skip
    addresses?: boolean | User$addressesArgs<ExtArgs> | $Types.Skip
    cart?: boolean | User$cartArgs<ExtArgs> | $Types.Skip
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean | $Types.Skip
    nome?: boolean | $Types.Skip
    dataDeNascimento?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean | $Types.Skip
    nome?: boolean | $Types.Skip
    dataDeNascimento?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    cpf?: boolean | $Types.Skip
    nome?: boolean | $Types.Skip
    dataDeNascimento?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cpf" | "nome" | "dataDeNascimento" | "createdAt" | "updatedAt", ExtArgs["result"]["user"], $Types.Skip>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | User$ordersArgs<ExtArgs> | $Types.Skip
    payments?: boolean | User$paymentsArgs<ExtArgs> | $Types.Skip
    reviews?: boolean | User$reviewsArgs<ExtArgs> | $Types.Skip
    addresses?: boolean | User$addressesArgs<ExtArgs> | $Types.Skip
    cart?: boolean | User$cartArgs<ExtArgs> | $Types.Skip
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      addresses: Prisma.$AddressPayload<ExtArgs>[]
      cart: Prisma.$CartPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      cpf: string
      nome: string
      dataDeNascimento: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `cpf`
     * const userWithCpfOnly = await prisma.user.findMany({ select: { cpf: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `cpf`
     * const userWithCpfOnly = await prisma.user.createManyAndReturn({
     *   select: { cpf: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `cpf`
     * const userWithCpfOnly = await prisma.user.updateManyAndReturn({
     *   select: { cpf: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    addresses<T extends User$addressesArgs<ExtArgs> = {}>(args?: Subset<T, User$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cart<T extends User$cartArgs<ExtArgs> = {}>(args?: Subset<T, User$cartArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly cpf: FieldRef<"User", 'String'>
    readonly nome: FieldRef<"User", 'String'>
    readonly dataDeNascimento: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput | $Types.Skip
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[] | $Types.Skip
    cursor?: OrderWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput | $Types.Skip
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[] | $Types.Skip
    cursor?: PaymentWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput | $Types.Skip
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[] | $Types.Skip
    cursor?: ReviewWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User.addresses
   */
  export type User$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput | $Types.Skip
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[] | $Types.Skip
    cursor?: AddressWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User.cart
   */
  export type User$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput | $Types.Skip
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    productId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    productId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    title: string | null
    message: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userCPF: string | null
    productId: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    title: string | null
    message: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userCPF: string | null
    productId: number | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    title: number
    message: number
    rating: number
    createdAt: number
    updatedAt: number
    userCPF: number
    productId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true | $Types.Skip
    rating?: true | $Types.Skip
    productId?: true | $Types.Skip
  }

  export type ReviewSumAggregateInputType = {
    id?: true | $Types.Skip
    rating?: true | $Types.Skip
    productId?: true | $Types.Skip
  }

  export type ReviewMinAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    message?: true | $Types.Skip
    rating?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    userCPF?: true | $Types.Skip
    productId?: true | $Types.Skip
  }

  export type ReviewMaxAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    message?: true | $Types.Skip
    rating?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    userCPF?: true | $Types.Skip
    productId?: true | $Types.Skip
  }

  export type ReviewCountAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    message?: true | $Types.Skip
    rating?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    userCPF?: true | $Types.Skip
    productId?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput | $Types.Skip
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[] | $Types.Skip
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    title: string
    message: string
    rating: number
    createdAt: Date
    updatedAt: Date
    userCPF: string
    productId: number
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    message?: boolean | $Types.Skip
    rating?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    userCPF?: boolean | $Types.Skip
    productId?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    product?: boolean | ProductDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    message?: boolean | $Types.Skip
    rating?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    userCPF?: boolean | $Types.Skip
    productId?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    product?: boolean | ProductDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    message?: boolean | $Types.Skip
    rating?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    userCPF?: boolean | $Types.Skip
    productId?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    product?: boolean | ProductDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    message?: boolean | $Types.Skip
    rating?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    userCPF?: boolean | $Types.Skip
    productId?: boolean | $Types.Skip
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "message" | "rating" | "createdAt" | "updatedAt" | "userCPF" | "productId", ExtArgs["result"]["review"], $Types.Skip>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    product?: boolean | ProductDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    product?: boolean | ProductDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    product?: boolean | ProductDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      message: string
      rating: number
      createdAt: Date
      updatedAt: Date
      userCPF: string
      productId: number
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly title: FieldRef<"Review", 'String'>
    readonly message: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
    readonly userCPF: FieldRef<"Review", 'String'>
    readonly productId: FieldRef<"Review", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number | $Types.Skip
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput | $Types.Skip
    /**
     * Limit how many Reviews to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput | $Types.Skip
    /**
     * Limit how many Reviews to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput | $Types.Skip
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    availableUnits: number | null
    categoryId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    availableUnits: number | null
    categoryId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    productName: string | null
    price: Decimal | null
    description: string | null
    sku: string | null
    availableUnits: number | null
    slug: string | null
    updatedAt: Date | null
    categoryId: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    productName: string | null
    price: Decimal | null
    description: string | null
    sku: string | null
    availableUnits: number | null
    slug: string | null
    updatedAt: Date | null
    categoryId: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    productName: number
    price: number
    description: number
    sku: number
    availableUnits: number
    slug: number
    updatedAt: number
    categoryId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true | $Types.Skip
    price?: true | $Types.Skip
    availableUnits?: true | $Types.Skip
    categoryId?: true | $Types.Skip
  }

  export type ProductSumAggregateInputType = {
    id?: true | $Types.Skip
    price?: true | $Types.Skip
    availableUnits?: true | $Types.Skip
    categoryId?: true | $Types.Skip
  }

  export type ProductMinAggregateInputType = {
    id?: true | $Types.Skip
    productName?: true | $Types.Skip
    price?: true | $Types.Skip
    description?: true | $Types.Skip
    sku?: true | $Types.Skip
    availableUnits?: true | $Types.Skip
    slug?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    categoryId?: true | $Types.Skip
  }

  export type ProductMaxAggregateInputType = {
    id?: true | $Types.Skip
    productName?: true | $Types.Skip
    price?: true | $Types.Skip
    description?: true | $Types.Skip
    sku?: true | $Types.Skip
    availableUnits?: true | $Types.Skip
    slug?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    categoryId?: true | $Types.Skip
  }

  export type ProductCountAggregateInputType = {
    id?: true | $Types.Skip
    productName?: true | $Types.Skip
    price?: true | $Types.Skip
    description?: true | $Types.Skip
    sku?: true | $Types.Skip
    availableUnits?: true | $Types.Skip
    slug?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    categoryId?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput | $Types.Skip
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[] | $Types.Skip
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    productName: string
    price: Decimal
    description: string | null
    sku: string | null
    availableUnits: number
    slug: string
    updatedAt: Date
    categoryId: number | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    productName?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    sku?: boolean | $Types.Skip
    availableUnits?: boolean | $Types.Skip
    slug?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    categoryId?: boolean | $Types.Skip
    category?: boolean | Product$categoryArgs<ExtArgs> | $Types.Skip
    review?: boolean | Product$reviewArgs<ExtArgs> | $Types.Skip
    orderItem?: boolean | Product$orderItemArgs<ExtArgs> | $Types.Skip
    cartItem?: boolean | Product$cartItemArgs<ExtArgs> | $Types.Skip
    images?: boolean | Product$imagesArgs<ExtArgs> | $Types.Skip
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    productName?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    sku?: boolean | $Types.Skip
    availableUnits?: boolean | $Types.Skip
    slug?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    categoryId?: boolean | $Types.Skip
    category?: boolean | Product$categoryArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    productName?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    sku?: boolean | $Types.Skip
    availableUnits?: boolean | $Types.Skip
    slug?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    categoryId?: boolean | $Types.Skip
    category?: boolean | Product$categoryArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean | $Types.Skip
    productName?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    sku?: boolean | $Types.Skip
    availableUnits?: boolean | $Types.Skip
    slug?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    categoryId?: boolean | $Types.Skip
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productName" | "price" | "description" | "sku" | "availableUnits" | "slug" | "updatedAt" | "categoryId", ExtArgs["result"]["product"], $Types.Skip>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs> | $Types.Skip
    review?: boolean | Product$reviewArgs<ExtArgs> | $Types.Skip
    orderItem?: boolean | Product$orderItemArgs<ExtArgs> | $Types.Skip
    cartItem?: boolean | Product$cartItemArgs<ExtArgs> | $Types.Skip
    images?: boolean | Product$imagesArgs<ExtArgs> | $Types.Skip
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs> | $Types.Skip
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs> | $Types.Skip
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      review: Prisma.$ReviewPayload<ExtArgs>[]
      orderItem: Prisma.$OrderItemPayload<ExtArgs>[]
      cartItem: Prisma.$CartItemPayload<ExtArgs>[]
      images: Prisma.$FilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productName: string
      price: Prisma.Decimal
      description: string | null
      sku: string | null
      availableUnits: number
      slug: string
      updatedAt: Date
      categoryId: number | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Product$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    review<T extends Product$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Product$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItem<T extends Product$orderItemArgs<ExtArgs> = {}>(args?: Subset<T, Product$orderItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cartItem<T extends Product$cartItemArgs<ExtArgs> = {}>(args?: Subset<T, Product$cartItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Product$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Product$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly productName: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly description: FieldRef<"Product", 'String'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly availableUnits: FieldRef<"Product", 'Int'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly categoryId: FieldRef<"Product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number | $Types.Skip
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput | $Types.Skip
    /**
     * Limit how many Products to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput | $Types.Skip
    /**
     * Limit how many Products to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput | $Types.Skip
    /**
     * Limit how many Products to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Product.category
   */
  export type Product$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput | $Types.Skip
  }

  /**
   * Product.review
   */
  export type Product$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput | $Types.Skip
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[] | $Types.Skip
    cursor?: ReviewWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Product.orderItem
   */
  export type Product$orderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput | $Types.Skip
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[] | $Types.Skip
    cursor?: OrderItemWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Product.cartItem
   */
  export type Product$cartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput | $Types.Skip
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[] | $Types.Skip
    cursor?: CartItemWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Product.images
   */
  export type Product$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput | $Types.Skip
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[] | $Types.Skip
    cursor?: FileWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type FileSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type FileMinAggregateOutputType = {
    id: number | null
    path: string | null
    productId: number | null
  }

  export type FileMaxAggregateOutputType = {
    id: number | null
    path: string | null
    productId: number | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    path: number
    productId: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    id?: true | $Types.Skip
    productId?: true | $Types.Skip
  }

  export type FileSumAggregateInputType = {
    id?: true | $Types.Skip
    productId?: true | $Types.Skip
  }

  export type FileMinAggregateInputType = {
    id?: true | $Types.Skip
    path?: true | $Types.Skip
    productId?: true | $Types.Skip
  }

  export type FileMaxAggregateInputType = {
    id?: true | $Types.Skip
    path?: true | $Types.Skip
    productId?: true | $Types.Skip
  }

  export type FileCountAggregateInputType = {
    id?: true | $Types.Skip
    path?: true | $Types.Skip
    productId?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput | $Types.Skip
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[] | $Types.Skip
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: number
    path: string
    productId: number | null
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    path?: boolean | $Types.Skip
    productId?: boolean | $Types.Skip
    Product?: boolean | File$ProductArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["file"]>

  export type FileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    path?: boolean | $Types.Skip
    productId?: boolean | $Types.Skip
    Product?: boolean | File$ProductArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["file"]>

  export type FileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    path?: boolean | $Types.Skip
    productId?: boolean | $Types.Skip
    Product?: boolean | File$ProductArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    id?: boolean | $Types.Skip
    path?: boolean | $Types.Skip
    productId?: boolean | $Types.Skip
  }

  export type FileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "path" | "productId", ExtArgs["result"]["file"], $Types.Skip>
  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | File$ProductArgs<ExtArgs> | $Types.Skip
  }
  export type FileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | File$ProductArgs<ExtArgs> | $Types.Skip
  }
  export type FileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | File$ProductArgs<ExtArgs> | $Types.Skip
  }

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      Product: Prisma.$ProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      path: string
      productId: number | null
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FileUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(args: SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Product<T extends File$ProductArgs<ExtArgs> = {}>(args?: Subset<T, File$ProductArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the File model
   */
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'Int'>
    readonly path: FieldRef<"File", 'String'>
    readonly productId: FieldRef<"File", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[] | $Types.Skip
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[] | $Types.Skip
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number | $Types.Skip
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[] | $Types.Skip
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * File createManyAndReturn
   */
  export type FileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput | $Types.Skip
    /**
     * Limit how many Files to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * File updateManyAndReturn
   */
  export type FileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput | $Types.Skip
    /**
     * Limit how many Files to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput | $Types.Skip
    /**
     * Limit how many Files to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * File.Product
   */
  export type File$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput | $Types.Skip
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    total: Decimal | null
    shippingCost: Decimal | null
    shippingAddressId: number | null
    paymentId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    total: Decimal | null
    shippingCost: Decimal | null
    shippingAddressId: number | null
    paymentId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    total: Decimal | null
    shippingCost: Decimal | null
    shippingMethod: string | null
    paymentMethod: string | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userCPF: string | null
    shippingAddressId: number | null
    paymentId: number | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    total: Decimal | null
    shippingCost: Decimal | null
    shippingMethod: string | null
    paymentMethod: string | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userCPF: string | null
    shippingAddressId: number | null
    paymentId: number | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    total: number
    shippingCost: number
    shippingMethod: number
    paymentMethod: number
    status: number
    createdAt: number
    updatedAt: number
    userCPF: number
    shippingAddressId: number
    paymentId: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true | $Types.Skip
    total?: true | $Types.Skip
    shippingCost?: true | $Types.Skip
    shippingAddressId?: true | $Types.Skip
    paymentId?: true | $Types.Skip
  }

  export type OrderSumAggregateInputType = {
    id?: true | $Types.Skip
    total?: true | $Types.Skip
    shippingCost?: true | $Types.Skip
    shippingAddressId?: true | $Types.Skip
    paymentId?: true | $Types.Skip
  }

  export type OrderMinAggregateInputType = {
    id?: true | $Types.Skip
    total?: true | $Types.Skip
    shippingCost?: true | $Types.Skip
    shippingMethod?: true | $Types.Skip
    paymentMethod?: true | $Types.Skip
    status?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    userCPF?: true | $Types.Skip
    shippingAddressId?: true | $Types.Skip
    paymentId?: true | $Types.Skip
  }

  export type OrderMaxAggregateInputType = {
    id?: true | $Types.Skip
    total?: true | $Types.Skip
    shippingCost?: true | $Types.Skip
    shippingMethod?: true | $Types.Skip
    paymentMethod?: true | $Types.Skip
    status?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    userCPF?: true | $Types.Skip
    shippingAddressId?: true | $Types.Skip
    paymentId?: true | $Types.Skip
  }

  export type OrderCountAggregateInputType = {
    id?: true | $Types.Skip
    total?: true | $Types.Skip
    shippingCost?: true | $Types.Skip
    shippingMethod?: true | $Types.Skip
    paymentMethod?: true | $Types.Skip
    status?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    userCPF?: true | $Types.Skip
    shippingAddressId?: true | $Types.Skip
    paymentId?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput | $Types.Skip
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[] | $Types.Skip
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    total: Decimal
    shippingCost: Decimal
    shippingMethod: string
    paymentMethod: string
    status: $Enums.OrderStatus
    createdAt: Date
    updatedAt: Date
    userCPF: string
    shippingAddressId: number
    paymentId: number | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    total?: boolean | $Types.Skip
    shippingCost?: boolean | $Types.Skip
    shippingMethod?: boolean | $Types.Skip
    paymentMethod?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    userCPF?: boolean | $Types.Skip
    shippingAddressId?: boolean | $Types.Skip
    paymentId?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    shippingAddress?: boolean | AddressDefaultArgs<ExtArgs> | $Types.Skip
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs> | $Types.Skip
    payment?: boolean | Order$paymentArgs<ExtArgs> | $Types.Skip
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    total?: boolean | $Types.Skip
    shippingCost?: boolean | $Types.Skip
    shippingMethod?: boolean | $Types.Skip
    paymentMethod?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    userCPF?: boolean | $Types.Skip
    shippingAddressId?: boolean | $Types.Skip
    paymentId?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    shippingAddress?: boolean | AddressDefaultArgs<ExtArgs> | $Types.Skip
    payment?: boolean | Order$paymentArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    total?: boolean | $Types.Skip
    shippingCost?: boolean | $Types.Skip
    shippingMethod?: boolean | $Types.Skip
    paymentMethod?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    userCPF?: boolean | $Types.Skip
    shippingAddressId?: boolean | $Types.Skip
    paymentId?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    shippingAddress?: boolean | AddressDefaultArgs<ExtArgs> | $Types.Skip
    payment?: boolean | Order$paymentArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean | $Types.Skip
    total?: boolean | $Types.Skip
    shippingCost?: boolean | $Types.Skip
    shippingMethod?: boolean | $Types.Skip
    paymentMethod?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    userCPF?: boolean | $Types.Skip
    shippingAddressId?: boolean | $Types.Skip
    paymentId?: boolean | $Types.Skip
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "total" | "shippingCost" | "shippingMethod" | "paymentMethod" | "status" | "createdAt" | "updatedAt" | "userCPF" | "shippingAddressId" | "paymentId", ExtArgs["result"]["order"], $Types.Skip>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    shippingAddress?: boolean | AddressDefaultArgs<ExtArgs> | $Types.Skip
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs> | $Types.Skip
    payment?: boolean | Order$paymentArgs<ExtArgs> | $Types.Skip
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    shippingAddress?: boolean | AddressDefaultArgs<ExtArgs> | $Types.Skip
    payment?: boolean | Order$paymentArgs<ExtArgs> | $Types.Skip
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    shippingAddress?: boolean | AddressDefaultArgs<ExtArgs> | $Types.Skip
    payment?: boolean | Order$paymentArgs<ExtArgs> | $Types.Skip
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      shippingAddress: Prisma.$AddressPayload<ExtArgs>
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      total: Prisma.Decimal
      shippingCost: Prisma.Decimal
      shippingMethod: string
      paymentMethod: string
      status: $Enums.OrderStatus
      createdAt: Date
      updatedAt: Date
      userCPF: string
      shippingAddressId: number
      paymentId: number | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shippingAddress<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends Order$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Order$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly total: FieldRef<"Order", 'Decimal'>
    readonly shippingCost: FieldRef<"Order", 'Decimal'>
    readonly shippingMethod: FieldRef<"Order", 'String'>
    readonly paymentMethod: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly userCPF: FieldRef<"Order", 'String'>
    readonly shippingAddressId: FieldRef<"Order", 'Int'>
    readonly paymentId: FieldRef<"Order", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number | $Types.Skip
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput | $Types.Skip
    /**
     * Limit how many Orders to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput | $Types.Skip
    /**
     * Limit how many Orders to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput | $Types.Skip
    /**
     * Limit how many Orders to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Order.orderItems
   */
  export type Order$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput | $Types.Skip
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[] | $Types.Skip
    cursor?: OrderItemWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Order.payment
   */
  export type Order$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput | $Types.Skip
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    id?: true | $Types.Skip
    orderId?: true | $Types.Skip
    productId?: true | $Types.Skip
  }

  export type OrderItemSumAggregateInputType = {
    id?: true | $Types.Skip
    orderId?: true | $Types.Skip
    productId?: true | $Types.Skip
  }

  export type OrderItemMinAggregateInputType = {
    id?: true | $Types.Skip
    orderId?: true | $Types.Skip
    productId?: true | $Types.Skip
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true | $Types.Skip
    orderId?: true | $Types.Skip
    productId?: true | $Types.Skip
  }

  export type OrderItemCountAggregateInputType = {
    id?: true | $Types.Skip
    orderId?: true | $Types.Skip
    productId?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput | $Types.Skip
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[] | $Types.Skip
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: number
    orderId: number
    productId: number
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    orderId?: boolean | $Types.Skip
    productId?: boolean | $Types.Skip
    order?: boolean | OrderDefaultArgs<ExtArgs> | $Types.Skip
    product?: boolean | ProductDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    orderId?: boolean | $Types.Skip
    productId?: boolean | $Types.Skip
    order?: boolean | OrderDefaultArgs<ExtArgs> | $Types.Skip
    product?: boolean | ProductDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    orderId?: boolean | $Types.Skip
    productId?: boolean | $Types.Skip
    order?: boolean | OrderDefaultArgs<ExtArgs> | $Types.Skip
    product?: boolean | ProductDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean | $Types.Skip
    orderId?: boolean | $Types.Skip
    productId?: boolean | $Types.Skip
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productId", ExtArgs["result"]["orderItem"], $Types.Skip>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs> | $Types.Skip
    product?: boolean | ProductDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs> | $Types.Skip
    product?: boolean | ProductDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs> | $Types.Skip
    product?: boolean | ProductDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      productId: number
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'Int'>
    readonly orderId: FieldRef<"OrderItem", 'Int'>
    readonly productId: FieldRef<"OrderItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[] | $Types.Skip
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[] | $Types.Skip
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number | $Types.Skip
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[] | $Types.Skip
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput | $Types.Skip
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput | $Types.Skip
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput | $Types.Skip
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    id: number | null
  }

  export type CartSumAggregateOutputType = {
    id: number | null
  }

  export type CartMinAggregateOutputType = {
    id: number | null
    userCPF: string | null
  }

  export type CartMaxAggregateOutputType = {
    id: number | null
    userCPF: string | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    userCPF: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type CartSumAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type CartMinAggregateInputType = {
    id?: true | $Types.Skip
    userCPF?: true | $Types.Skip
  }

  export type CartMaxAggregateInputType = {
    id?: true | $Types.Skip
    userCPF?: true | $Types.Skip
  }

  export type CartCountAggregateInputType = {
    id?: true | $Types.Skip
    userCPF?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput | $Types.Skip
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[] | $Types.Skip
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: number
    userCPF: string
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    userCPF?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    cartItems?: boolean | Cart$cartItemsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["cart"]>

  export type CartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    userCPF?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["cart"]>

  export type CartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    userCPF?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["cart"]>

  export type CartSelectScalar = {
    id?: boolean | $Types.Skip
    userCPF?: boolean | $Types.Skip
  }

  export type CartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userCPF", ExtArgs["result"]["cart"], $Types.Skip>
  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    cartItems?: boolean | Cart$cartItemsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type CartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type CartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      cartItems: Prisma.$CartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userCPF: string
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartFindManyArgs>(args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends CartCreateArgs>(args: SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartCreateManyArgs>(args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {CartCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartCreateManyAndReturnArgs>(args?: SelectSubset<T, CartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends CartDeleteArgs>(args: SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartUpdateArgs>(args: SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDeleteManyArgs>(args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartUpdateManyArgs>(args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {CartUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartUpdateManyAndReturnArgs>(args: SelectSubset<T, CartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends CartUpsertArgs>(args: SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cartItems<T extends Cart$cartItemsArgs<ExtArgs> = {}>(args?: Subset<T, Cart$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cart model
   */
  interface CartFieldRefs {
    readonly id: FieldRef<"Cart", 'Int'>
    readonly userCPF: FieldRef<"Cart", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number | $Types.Skip
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Cart createManyAndReturn
   */
  export type CartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput | $Types.Skip
    /**
     * Limit how many Carts to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Cart updateManyAndReturn
   */
  export type CartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput | $Types.Skip
    /**
     * Limit how many Carts to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput | $Types.Skip
    /**
     * Limit how many Carts to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Cart.cartItems
   */
  export type Cart$cartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput | $Types.Skip
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[] | $Types.Skip
    cursor?: CartItemWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
  }


  /**
   * Model CartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    id: number | null
    cartId: number | null
    productId: number | null
    quantity: number | null
  }

  export type CartItemSumAggregateOutputType = {
    id: number | null
    cartId: number | null
    productId: number | null
    quantity: number | null
  }

  export type CartItemMinAggregateOutputType = {
    id: number | null
    cartId: number | null
    productId: number | null
    quantity: number | null
  }

  export type CartItemMaxAggregateOutputType = {
    id: number | null
    cartId: number | null
    productId: number | null
    quantity: number | null
  }

  export type CartItemCountAggregateOutputType = {
    id: number
    cartId: number
    productId: number
    quantity: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    id?: true | $Types.Skip
    cartId?: true | $Types.Skip
    productId?: true | $Types.Skip
    quantity?: true | $Types.Skip
  }

  export type CartItemSumAggregateInputType = {
    id?: true | $Types.Skip
    cartId?: true | $Types.Skip
    productId?: true | $Types.Skip
    quantity?: true | $Types.Skip
  }

  export type CartItemMinAggregateInputType = {
    id?: true | $Types.Skip
    cartId?: true | $Types.Skip
    productId?: true | $Types.Skip
    quantity?: true | $Types.Skip
  }

  export type CartItemMaxAggregateInputType = {
    id?: true | $Types.Skip
    cartId?: true | $Types.Skip
    productId?: true | $Types.Skip
    quantity?: true | $Types.Skip
  }

  export type CartItemCountAggregateInputType = {
    id?: true | $Types.Skip
    cartId?: true | $Types.Skip
    productId?: true | $Types.Skip
    quantity?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type CartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput | $Types.Skip
    orderBy?: CartItemOrderByWithAggregationInput | CartItemOrderByWithAggregationInput[] | $Types.Skip
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum
    having?: CartItemScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }

  export type CartItemGroupByOutputType = {
    id: number
    cartId: number
    productId: number
    quantity: number
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type CartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    cartId?: boolean | $Types.Skip
    productId?: boolean | $Types.Skip
    quantity?: boolean | $Types.Skip
    cart?: boolean | CartDefaultArgs<ExtArgs> | $Types.Skip
    product?: boolean | ProductDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    cartId?: boolean | $Types.Skip
    productId?: boolean | $Types.Skip
    quantity?: boolean | $Types.Skip
    cart?: boolean | CartDefaultArgs<ExtArgs> | $Types.Skip
    product?: boolean | ProductDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    cartId?: boolean | $Types.Skip
    productId?: boolean | $Types.Skip
    quantity?: boolean | $Types.Skip
    cart?: boolean | CartDefaultArgs<ExtArgs> | $Types.Skip
    product?: boolean | ProductDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectScalar = {
    id?: boolean | $Types.Skip
    cartId?: boolean | $Types.Skip
    productId?: boolean | $Types.Skip
    quantity?: boolean | $Types.Skip
  }

  export type CartItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cartId" | "productId" | "quantity", ExtArgs["result"]["cartItem"], $Types.Skip>
  export type CartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs> | $Types.Skip
    product?: boolean | ProductDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type CartItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs> | $Types.Skip
    product?: boolean | ProductDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type CartItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs> | $Types.Skip
    product?: boolean | ProductDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $CartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItem"
    objects: {
      cart: Prisma.$CartPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cartId: number
      productId: number
      quantity: number
    }, ExtArgs["result"]["cartItem"]>
    composites: {}
  }

  type CartItemGetPayload<S extends boolean | null | undefined | CartItemDefaultArgs> = $Result.GetResult<Prisma.$CartItemPayload, S>

  type CartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface CartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItem'], meta: { name: 'CartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemFindUniqueArgs>(args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemFindFirstArgs>(args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartItemFindManyArgs>(args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
     */
    create<T extends CartItemCreateArgs>(args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItems.
     * @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemCreateManyArgs>(args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CartItems and returns the data saved in the database.
     * @param {CartItemCreateManyAndReturnArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CartItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
     */
    delete<T extends CartItemDeleteArgs>(args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemUpdateArgs>(args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemDeleteManyArgs>(args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemUpdateManyArgs>(args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems and returns the data updated in the database.
     * @param {CartItemUpdateManyAndReturnArgs} args - Arguments to update many CartItems.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CartItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
     */
    upsert<T extends CartItemUpsertArgs>(args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItem model
   */
  readonly fields: CartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends CartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartDefaultArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CartItem model
   */
  interface CartItemFieldRefs {
    readonly id: FieldRef<"CartItem", 'Int'>
    readonly cartId: FieldRef<"CartItem", 'Int'>
    readonly productId: FieldRef<"CartItem", 'Int'>
    readonly quantity: FieldRef<"CartItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CartItem findUnique
   */
  export type CartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findFirst
   */
  export type CartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[] | $Types.Skip
  }

  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[] | $Types.Skip
  }

  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number | $Types.Skip
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[] | $Types.Skip
  }

  /**
   * CartItem create
   */
  export type CartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
  }

  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * CartItem createManyAndReturn
   */
  export type CartItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput | $Types.Skip
    /**
     * Limit how many CartItems to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * CartItem updateManyAndReturn
   */
  export type CartItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput | $Types.Skip
    /**
     * Limit how many CartItems to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
  }

  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput | $Types.Skip
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * CartItem without action
   */
  export type CartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    number: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    number: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    cep: string | null
    stateCode: string | null
    city: string | null
    neighborhood: string | null
    street: string | null
    number: number | null
    additionalDetails: string | null
    userCPF: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    cep: string | null
    stateCode: string | null
    city: string | null
    neighborhood: string | null
    street: string | null
    number: number | null
    additionalDetails: string | null
    userCPF: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    cep: number
    stateCode: number
    city: number
    neighborhood: number
    street: number
    number: number
    additionalDetails: number
    userCPF: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true | $Types.Skip
    number?: true | $Types.Skip
  }

  export type AddressSumAggregateInputType = {
    id?: true | $Types.Skip
    number?: true | $Types.Skip
  }

  export type AddressMinAggregateInputType = {
    id?: true | $Types.Skip
    cep?: true | $Types.Skip
    stateCode?: true | $Types.Skip
    city?: true | $Types.Skip
    neighborhood?: true | $Types.Skip
    street?: true | $Types.Skip
    number?: true | $Types.Skip
    additionalDetails?: true | $Types.Skip
    userCPF?: true | $Types.Skip
  }

  export type AddressMaxAggregateInputType = {
    id?: true | $Types.Skip
    cep?: true | $Types.Skip
    stateCode?: true | $Types.Skip
    city?: true | $Types.Skip
    neighborhood?: true | $Types.Skip
    street?: true | $Types.Skip
    number?: true | $Types.Skip
    additionalDetails?: true | $Types.Skip
    userCPF?: true | $Types.Skip
  }

  export type AddressCountAggregateInputType = {
    id?: true | $Types.Skip
    cep?: true | $Types.Skip
    stateCode?: true | $Types.Skip
    city?: true | $Types.Skip
    neighborhood?: true | $Types.Skip
    street?: true | $Types.Skip
    number?: true | $Types.Skip
    additionalDetails?: true | $Types.Skip
    userCPF?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput | $Types.Skip
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[] | $Types.Skip
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    cep: string
    stateCode: string
    city: string
    neighborhood: string
    street: string
    number: number
    additionalDetails: string | null
    userCPF: string
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    cep?: boolean | $Types.Skip
    stateCode?: boolean | $Types.Skip
    city?: boolean | $Types.Skip
    neighborhood?: boolean | $Types.Skip
    street?: boolean | $Types.Skip
    number?: boolean | $Types.Skip
    additionalDetails?: boolean | $Types.Skip
    userCPF?: boolean | $Types.Skip
    Order?: boolean | Address$OrderArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    cep?: boolean | $Types.Skip
    stateCode?: boolean | $Types.Skip
    city?: boolean | $Types.Skip
    neighborhood?: boolean | $Types.Skip
    street?: boolean | $Types.Skip
    number?: boolean | $Types.Skip
    additionalDetails?: boolean | $Types.Skip
    userCPF?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    cep?: boolean | $Types.Skip
    stateCode?: boolean | $Types.Skip
    city?: boolean | $Types.Skip
    neighborhood?: boolean | $Types.Skip
    street?: boolean | $Types.Skip
    number?: boolean | $Types.Skip
    additionalDetails?: boolean | $Types.Skip
    userCPF?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean | $Types.Skip
    cep?: boolean | $Types.Skip
    stateCode?: boolean | $Types.Skip
    city?: boolean | $Types.Skip
    neighborhood?: boolean | $Types.Skip
    street?: boolean | $Types.Skip
    number?: boolean | $Types.Skip
    additionalDetails?: boolean | $Types.Skip
    userCPF?: boolean | $Types.Skip
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cep" | "stateCode" | "city" | "neighborhood" | "street" | "number" | "additionalDetails" | "userCPF", ExtArgs["result"]["address"], $Types.Skip>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | Address$OrderArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cep: string
      stateCode: string
      city: string
      neighborhood: string
      street: string
      number: number
      additionalDetails: string | null
      userCPF: string
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends Address$OrderArgs<ExtArgs> = {}>(args?: Subset<T, Address$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly cep: FieldRef<"Address", 'String'>
    readonly stateCode: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly neighborhood: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
    readonly number: FieldRef<"Address", 'Int'>
    readonly additionalDetails: FieldRef<"Address", 'String'>
    readonly userCPF: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number | $Types.Skip
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput | $Types.Skip
    /**
     * Limit how many Addresses to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput | $Types.Skip
    /**
     * Limit how many Addresses to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput | $Types.Skip
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Address.Order
   */
  export type Address$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput | $Types.Skip
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[] | $Types.Skip
    cursor?: OrderWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    description: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    description: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    description: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type CategorySumAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type CategoryMinAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    slug?: true | $Types.Skip
    description?: true | $Types.Skip
  }

  export type CategoryMaxAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    slug?: true | $Types.Skip
    description?: true | $Types.Skip
  }

  export type CategoryCountAggregateInputType = {
    id?: true | $Types.Skip
    title?: true | $Types.Skip
    slug?: true | $Types.Skip
    description?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput | $Types.Skip
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[] | $Types.Skip
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    title: string
    slug: string
    description: string | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    slug?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    products?: boolean | Category$productsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    slug?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    slug?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    slug?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "description", ExtArgs["result"]["category"], $Types.Skip>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string
      description: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly title: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number | $Types.Skip
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput | $Types.Skip
    /**
     * Limit how many Categories to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput | $Types.Skip
    /**
     * Limit how many Categories to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput | $Types.Skip
    /**
     * Limit how many Categories to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput | $Types.Skip
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[] | $Types.Skip
    cursor?: ProductWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    paymentmethodId: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    paymentmethodId: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    status: $Enums.PaymentStatus | null
    paymentmethodId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userCPF: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    status: $Enums.PaymentStatus | null
    paymentmethodId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userCPF: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    status: number
    paymentmethodId: number
    createdAt: number
    updatedAt: number
    userCPF: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true | $Types.Skip
    paymentmethodId?: true | $Types.Skip
  }

  export type PaymentSumAggregateInputType = {
    id?: true | $Types.Skip
    paymentmethodId?: true | $Types.Skip
  }

  export type PaymentMinAggregateInputType = {
    id?: true | $Types.Skip
    status?: true | $Types.Skip
    paymentmethodId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    userCPF?: true | $Types.Skip
  }

  export type PaymentMaxAggregateInputType = {
    id?: true | $Types.Skip
    status?: true | $Types.Skip
    paymentmethodId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    userCPF?: true | $Types.Skip
  }

  export type PaymentCountAggregateInputType = {
    id?: true | $Types.Skip
    status?: true | $Types.Skip
    paymentmethodId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    userCPF?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput | $Types.Skip
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[] | $Types.Skip
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    status: $Enums.PaymentStatus
    paymentmethodId: number
    createdAt: Date
    updatedAt: Date
    userCPF: string
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    paymentmethodId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    userCPF?: boolean | $Types.Skip
    paymentMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    Order?: boolean | Payment$OrderArgs<ExtArgs> | $Types.Skip
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    paymentmethodId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    userCPF?: boolean | $Types.Skip
    paymentMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    paymentmethodId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    userCPF?: boolean | $Types.Skip
    paymentMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    paymentmethodId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    userCPF?: boolean | $Types.Skip
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "paymentmethodId" | "createdAt" | "updatedAt" | "userCPF", ExtArgs["result"]["payment"], $Types.Skip>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    Order?: boolean | Payment$OrderArgs<ExtArgs> | $Types.Skip
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentMethod?: boolean | PaymentMethodDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      paymentMethod: Prisma.$PaymentMethodPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      Order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.PaymentStatus
      paymentmethodId: number
      createdAt: Date
      updatedAt: Date
      userCPF: string
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paymentMethod<T extends PaymentMethodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethodDefaultArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Order<T extends Payment$OrderArgs<ExtArgs> = {}>(args?: Subset<T, Payment$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly paymentmethodId: FieldRef<"Payment", 'Int'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
    readonly userCPF: FieldRef<"Payment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number | $Types.Skip
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput | $Types.Skip
    /**
     * Limit how many Payments to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput | $Types.Skip
    /**
     * Limit how many Payments to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput | $Types.Skip
    /**
     * Limit how many Payments to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Payment.Order
   */
  export type Payment$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput | $Types.Skip
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[] | $Types.Skip
    cursor?: OrderWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model PaymentMethod
   */

  export type AggregatePaymentMethod = {
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  export type PaymentMethodAvgAggregateOutputType = {
    id: number | null
  }

  export type PaymentMethodSumAggregateOutputType = {
    id: number | null
  }

  export type PaymentMethodMinAggregateOutputType = {
    id: number | null
    methodName: string | null
  }

  export type PaymentMethodMaxAggregateOutputType = {
    id: number | null
    methodName: string | null
  }

  export type PaymentMethodCountAggregateOutputType = {
    id: number
    methodName: number
    _all: number
  }


  export type PaymentMethodAvgAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type PaymentMethodSumAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type PaymentMethodMinAggregateInputType = {
    id?: true | $Types.Skip
    methodName?: true | $Types.Skip
  }

  export type PaymentMethodMaxAggregateInputType = {
    id?: true | $Types.Skip
    methodName?: true | $Types.Skip
  }

  export type PaymentMethodCountAggregateInputType = {
    id?: true | $Types.Skip
    methodName?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type PaymentMethodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethod to aggregate.
     */
    where?: PaymentMethodWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentMethodWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentMethods
    **/
    _count?: true | PaymentMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentMethodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentMethodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type GetPaymentMethodAggregateType<T extends PaymentMethodAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentMethod[P]>
      : GetScalarType<T[P], AggregatePaymentMethod[P]>
  }




  export type PaymentMethodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentMethodWhereInput | $Types.Skip
    orderBy?: PaymentMethodOrderByWithAggregationInput | PaymentMethodOrderByWithAggregationInput[] | $Types.Skip
    by: PaymentMethodScalarFieldEnum[] | PaymentMethodScalarFieldEnum
    having?: PaymentMethodScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: PaymentMethodCountAggregateInputType | true
    _avg?: PaymentMethodAvgAggregateInputType
    _sum?: PaymentMethodSumAggregateInputType
    _min?: PaymentMethodMinAggregateInputType
    _max?: PaymentMethodMaxAggregateInputType
  }

  export type PaymentMethodGroupByOutputType = {
    id: number
    methodName: string
    _count: PaymentMethodCountAggregateOutputType | null
    _avg: PaymentMethodAvgAggregateOutputType | null
    _sum: PaymentMethodSumAggregateOutputType | null
    _min: PaymentMethodMinAggregateOutputType | null
    _max: PaymentMethodMaxAggregateOutputType | null
  }

  type GetPaymentMethodGroupByPayload<T extends PaymentMethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentMethodGroupByOutputType[P]>
        }
      >
    >


  export type PaymentMethodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    methodName?: boolean | $Types.Skip
    payment?: boolean | PaymentMethod$paymentArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    methodName?: boolean | $Types.Skip
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    methodName?: boolean | $Types.Skip
  }, ExtArgs["result"]["paymentMethod"]>

  export type PaymentMethodSelectScalar = {
    id?: boolean | $Types.Skip
    methodName?: boolean | $Types.Skip
  }

  export type PaymentMethodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "methodName", ExtArgs["result"]["paymentMethod"], $Types.Skip>
  export type PaymentMethodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentMethod$paymentArgs<ExtArgs> | $Types.Skip
  }
  export type PaymentMethodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PaymentMethodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PaymentMethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentMethod"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      methodName: string
    }, ExtArgs["result"]["paymentMethod"]>
    composites: {}
  }

  type PaymentMethodGetPayload<S extends boolean | null | undefined | PaymentMethodDefaultArgs> = $Result.GetResult<Prisma.$PaymentMethodPayload, S>

  type PaymentMethodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentMethodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentMethodCountAggregateInputType | true
    }

  export interface PaymentMethodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentMethod'], meta: { name: 'PaymentMethod' } }
    /**
     * Find zero or one PaymentMethod that matches the filter.
     * @param {PaymentMethodFindUniqueArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentMethodFindUniqueArgs>(args: SelectSubset<T, PaymentMethodFindUniqueArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentMethod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentMethodFindUniqueOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentMethodFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentMethodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentMethodFindFirstArgs>(args?: SelectSubset<T, PaymentMethodFindFirstArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentMethod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindFirstOrThrowArgs} args - Arguments to find a PaymentMethod
     * @example
     * // Get one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentMethodFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentMethodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany()
     * 
     * // Get first 10 PaymentMethods
     * const paymentMethods = await prisma.paymentMethod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentMethodFindManyArgs>(args?: SelectSubset<T, PaymentMethodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentMethod.
     * @param {PaymentMethodCreateArgs} args - Arguments to create a PaymentMethod.
     * @example
     * // Create one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.create({
     *   data: {
     *     // ... data to create a PaymentMethod
     *   }
     * })
     * 
     */
    create<T extends PaymentMethodCreateArgs>(args: SelectSubset<T, PaymentMethodCreateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentMethods.
     * @param {PaymentMethodCreateManyArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentMethodCreateManyArgs>(args?: SelectSubset<T, PaymentMethodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentMethods and returns the data saved in the database.
     * @param {PaymentMethodCreateManyAndReturnArgs} args - Arguments to create many PaymentMethods.
     * @example
     * // Create many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentMethods and only return the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentMethodCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentMethodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentMethod.
     * @param {PaymentMethodDeleteArgs} args - Arguments to delete one PaymentMethod.
     * @example
     * // Delete one PaymentMethod
     * const PaymentMethod = await prisma.paymentMethod.delete({
     *   where: {
     *     // ... filter to delete one PaymentMethod
     *   }
     * })
     * 
     */
    delete<T extends PaymentMethodDeleteArgs>(args: SelectSubset<T, PaymentMethodDeleteArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentMethod.
     * @param {PaymentMethodUpdateArgs} args - Arguments to update one PaymentMethod.
     * @example
     * // Update one PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentMethodUpdateArgs>(args: SelectSubset<T, PaymentMethodUpdateArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentMethods.
     * @param {PaymentMethodDeleteManyArgs} args - Arguments to filter PaymentMethods to delete.
     * @example
     * // Delete a few PaymentMethods
     * const { count } = await prisma.paymentMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentMethodDeleteManyArgs>(args?: SelectSubset<T, PaymentMethodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentMethodUpdateManyArgs>(args: SelectSubset<T, PaymentMethodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentMethods and returns the data updated in the database.
     * @param {PaymentMethodUpdateManyAndReturnArgs} args - Arguments to update many PaymentMethods.
     * @example
     * // Update many PaymentMethods
     * const paymentMethod = await prisma.paymentMethod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentMethods and only return the `id`
     * const paymentMethodWithIdOnly = await prisma.paymentMethod.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentMethodUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentMethodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentMethod.
     * @param {PaymentMethodUpsertArgs} args - Arguments to update or create a PaymentMethod.
     * @example
     * // Update or create a PaymentMethod
     * const paymentMethod = await prisma.paymentMethod.upsert({
     *   create: {
     *     // ... data to create a PaymentMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentMethod we want to update
     *   }
     * })
     */
    upsert<T extends PaymentMethodUpsertArgs>(args: SelectSubset<T, PaymentMethodUpsertArgs<ExtArgs>>): Prisma__PaymentMethodClient<$Result.GetResult<Prisma.$PaymentMethodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodCountArgs} args - Arguments to filter PaymentMethods to count.
     * @example
     * // Count the number of PaymentMethods
     * const count = await prisma.paymentMethod.count({
     *   where: {
     *     // ... the filter for the PaymentMethods we want to count
     *   }
     * })
    **/
    count<T extends PaymentMethodCountArgs>(
      args?: Subset<T, PaymentMethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentMethodAggregateArgs>(args: Subset<T, PaymentMethodAggregateArgs>): Prisma.PrismaPromise<GetPaymentMethodAggregateType<T>>

    /**
     * Group by PaymentMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentMethodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentMethodGroupByArgs['orderBy'] }
        : { orderBy?: PaymentMethodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentMethod model
   */
  readonly fields: PaymentMethodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentMethodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends PaymentMethod$paymentArgs<ExtArgs> = {}>(args?: Subset<T, PaymentMethod$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentMethod model
   */
  interface PaymentMethodFieldRefs {
    readonly id: FieldRef<"PaymentMethod", 'Int'>
    readonly methodName: FieldRef<"PaymentMethod", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PaymentMethod findUnique
   */
  export type PaymentMethodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findUniqueOrThrow
   */
  export type PaymentMethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod findFirst
   */
  export type PaymentMethodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[] | $Types.Skip
  }

  /**
   * PaymentMethod findFirstOrThrow
   */
  export type PaymentMethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethod to fetch.
     */
    where?: PaymentMethodWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentMethods.
     */
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[] | $Types.Skip
  }

  /**
   * PaymentMethod findMany
   */
  export type PaymentMethodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentMethods to fetch.
     */
    where?: PaymentMethodWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentMethods to fetch.
     */
    orderBy?: PaymentMethodOrderByWithRelationInput | PaymentMethodOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentMethods.
     */
    cursor?: PaymentMethodWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentMethods from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentMethods.
     */
    skip?: number | $Types.Skip
    distinct?: PaymentMethodScalarFieldEnum | PaymentMethodScalarFieldEnum[] | $Types.Skip
  }

  /**
   * PaymentMethod create
   */
  export type PaymentMethodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentMethod.
     */
    data: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
  }

  /**
   * PaymentMethod createMany
   */
  export type PaymentMethodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * PaymentMethod createManyAndReturn
   */
  export type PaymentMethodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentMethods.
     */
    data: PaymentMethodCreateManyInput | PaymentMethodCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * PaymentMethod update
   */
  export type PaymentMethodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentMethod.
     */
    data: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
    /**
     * Choose, which PaymentMethod to update.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod updateMany
   */
  export type PaymentMethodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput | $Types.Skip
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * PaymentMethod updateManyAndReturn
   */
  export type PaymentMethodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * The data used to update PaymentMethods.
     */
    data: XOR<PaymentMethodUpdateManyMutationInput, PaymentMethodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentMethods to update
     */
    where?: PaymentMethodWhereInput | $Types.Skip
    /**
     * Limit how many PaymentMethods to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * PaymentMethod upsert
   */
  export type PaymentMethodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentMethod to update in case it exists.
     */
    where: PaymentMethodWhereUniqueInput
    /**
     * In case the PaymentMethod found by the `where` argument doesn't exist, create a new PaymentMethod with this data.
     */
    create: XOR<PaymentMethodCreateInput, PaymentMethodUncheckedCreateInput>
    /**
     * In case the PaymentMethod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentMethodUpdateInput, PaymentMethodUncheckedUpdateInput>
  }

  /**
   * PaymentMethod delete
   */
  export type PaymentMethodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
    /**
     * Filter which PaymentMethod to delete.
     */
    where: PaymentMethodWhereUniqueInput
  }

  /**
   * PaymentMethod deleteMany
   */
  export type PaymentMethodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentMethods to delete
     */
    where?: PaymentMethodWhereInput | $Types.Skip
    /**
     * Limit how many PaymentMethods to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * PaymentMethod.payment
   */
  export type PaymentMethod$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput | $Types.Skip
  }

  /**
   * PaymentMethod without action
   */
  export type PaymentMethodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentMethod
     */
    select?: PaymentMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentMethod
     */
    omit?: PaymentMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentMethodInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    cpf: 'cpf',
    nome: 'nome',
    dataDeNascimento: 'dataDeNascimento',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    title: 'title',
    message: 'message',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userCPF: 'userCPF',
    productId: 'productId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    productName: 'productName',
    price: 'price',
    description: 'description',
    sku: 'sku',
    availableUnits: 'availableUnits',
    slug: 'slug',
    updatedAt: 'updatedAt',
    categoryId: 'categoryId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    path: 'path',
    productId: 'productId'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    total: 'total',
    shippingCost: 'shippingCost',
    shippingMethod: 'shippingMethod',
    paymentMethod: 'paymentMethod',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userCPF: 'userCPF',
    shippingAddressId: 'shippingAddressId',
    paymentId: 'paymentId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    userCPF: 'userCPF'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CartItemScalarFieldEnum: {
    id: 'id',
    cartId: 'cartId',
    productId: 'productId',
    quantity: 'quantity'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    cep: 'cep',
    stateCode: 'stateCode',
    city: 'city',
    neighborhood: 'neighborhood',
    street: 'street',
    number: 'number',
    additionalDetails: 'additionalDetails',
    userCPF: 'userCPF'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    status: 'status',
    paymentmethodId: 'paymentmethodId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userCPF: 'userCPF'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const PaymentMethodScalarFieldEnum: {
    id: 'id',
    methodName: 'methodName'
  };

  export type PaymentMethodScalarFieldEnum = (typeof PaymentMethodScalarFieldEnum)[keyof typeof PaymentMethodScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[] | $Types.Skip
    OR?: UserWhereInput[] | $Types.Skip
    NOT?: UserWhereInput | UserWhereInput[] | $Types.Skip
    cpf?: StringFilter<"User"> | string | $Types.Skip
    nome?: StringFilter<"User"> | string | $Types.Skip
    dataDeNascimento?: DateTimeFilter<"User"> | Date | string | $Types.Skip
    createdAt?: DateTimeFilter<"User"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"User"> | Date | string | $Types.Skip
    orders?: OrderListRelationFilter | $Types.Skip
    payments?: PaymentListRelationFilter | $Types.Skip
    reviews?: ReviewListRelationFilter | $Types.Skip
    addresses?: AddressListRelationFilter | $Types.Skip
    cart?: XOR<CartNullableScalarRelationFilter, CartWhereInput> | null | $Types.Skip
  }

  export type UserOrderByWithRelationInput = {
    cpf?: SortOrder | $Types.Skip
    nome?: SortOrder | $Types.Skip
    dataDeNascimento?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    orders?: OrderOrderByRelationAggregateInput | $Types.Skip
    payments?: PaymentOrderByRelationAggregateInput | $Types.Skip
    reviews?: ReviewOrderByRelationAggregateInput | $Types.Skip
    addresses?: AddressOrderByRelationAggregateInput | $Types.Skip
    cart?: CartOrderByWithRelationInput | $Types.Skip
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    cpf?: string | $Types.Skip
    AND?: UserWhereInput | UserWhereInput[] | $Types.Skip
    OR?: UserWhereInput[] | $Types.Skip
    NOT?: UserWhereInput | UserWhereInput[] | $Types.Skip
    nome?: StringFilter<"User"> | string | $Types.Skip
    dataDeNascimento?: DateTimeFilter<"User"> | Date | string | $Types.Skip
    createdAt?: DateTimeFilter<"User"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"User"> | Date | string | $Types.Skip
    orders?: OrderListRelationFilter | $Types.Skip
    payments?: PaymentListRelationFilter | $Types.Skip
    reviews?: ReviewListRelationFilter | $Types.Skip
    addresses?: AddressListRelationFilter | $Types.Skip
    cart?: XOR<CartNullableScalarRelationFilter, CartWhereInput> | null | $Types.Skip
  }, "cpf">

  export type UserOrderByWithAggregationInput = {
    cpf?: SortOrder | $Types.Skip
    nome?: SortOrder | $Types.Skip
    dataDeNascimento?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: UserCountOrderByAggregateInput | $Types.Skip
    _max?: UserMaxOrderByAggregateInput | $Types.Skip
    _min?: UserMinOrderByAggregateInput | $Types.Skip
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: UserScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[] | $Types.Skip
    cpf?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
    nome?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
    dataDeNascimento?: DateTimeWithAggregatesFilter<"User"> | Date | string | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string | $Types.Skip
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[] | $Types.Skip
    OR?: ReviewWhereInput[] | $Types.Skip
    NOT?: ReviewWhereInput | ReviewWhereInput[] | $Types.Skip
    id?: IntFilter<"Review"> | number | $Types.Skip
    title?: StringFilter<"Review"> | string | $Types.Skip
    message?: StringFilter<"Review"> | string | $Types.Skip
    rating?: IntFilter<"Review"> | number | $Types.Skip
    createdAt?: DateTimeFilter<"Review"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Review"> | Date | string | $Types.Skip
    userCPF?: StringFilter<"Review"> | string | $Types.Skip
    productId?: IntFilter<"Review"> | number | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput> | $Types.Skip
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    message?: SortOrder | $Types.Skip
    rating?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
    user?: UserOrderByWithRelationInput | $Types.Skip
    product?: ProductOrderByWithRelationInput | $Types.Skip
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: ReviewWhereInput | ReviewWhereInput[] | $Types.Skip
    OR?: ReviewWhereInput[] | $Types.Skip
    NOT?: ReviewWhereInput | ReviewWhereInput[] | $Types.Skip
    title?: StringFilter<"Review"> | string | $Types.Skip
    message?: StringFilter<"Review"> | string | $Types.Skip
    rating?: IntFilter<"Review"> | number | $Types.Skip
    createdAt?: DateTimeFilter<"Review"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Review"> | Date | string | $Types.Skip
    userCPF?: StringFilter<"Review"> | string | $Types.Skip
    productId?: IntFilter<"Review"> | number | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput> | $Types.Skip
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    message?: SortOrder | $Types.Skip
    rating?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
    _count?: ReviewCountOrderByAggregateInput | $Types.Skip
    _avg?: ReviewAvgOrderByAggregateInput | $Types.Skip
    _max?: ReviewMaxOrderByAggregateInput | $Types.Skip
    _min?: ReviewMinOrderByAggregateInput | $Types.Skip
    _sum?: ReviewSumOrderByAggregateInput | $Types.Skip
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: ReviewScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Review"> | number | $Types.Skip
    title?: StringWithAggregatesFilter<"Review"> | string | $Types.Skip
    message?: StringWithAggregatesFilter<"Review"> | string | $Types.Skip
    rating?: IntWithAggregatesFilter<"Review"> | number | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string | $Types.Skip
    userCPF?: StringWithAggregatesFilter<"Review"> | string | $Types.Skip
    productId?: IntWithAggregatesFilter<"Review"> | number | $Types.Skip
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[] | $Types.Skip
    OR?: ProductWhereInput[] | $Types.Skip
    NOT?: ProductWhereInput | ProductWhereInput[] | $Types.Skip
    id?: IntFilter<"Product"> | number | $Types.Skip
    productName?: StringFilter<"Product"> | string | $Types.Skip
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    description?: StringNullableFilter<"Product"> | string | null | $Types.Skip
    sku?: StringNullableFilter<"Product"> | string | null | $Types.Skip
    availableUnits?: IntFilter<"Product"> | number | $Types.Skip
    slug?: StringFilter<"Product"> | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Product"> | Date | string | $Types.Skip
    categoryId?: IntNullableFilter<"Product"> | number | null | $Types.Skip
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null | $Types.Skip
    review?: ReviewListRelationFilter | $Types.Skip
    orderItem?: OrderItemListRelationFilter | $Types.Skip
    cartItem?: CartItemListRelationFilter | $Types.Skip
    images?: FileListRelationFilter | $Types.Skip
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    productName?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    sku?: SortOrderInput | SortOrder | $Types.Skip
    availableUnits?: SortOrder | $Types.Skip
    slug?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    categoryId?: SortOrderInput | SortOrder | $Types.Skip
    category?: CategoryOrderByWithRelationInput | $Types.Skip
    review?: ReviewOrderByRelationAggregateInput | $Types.Skip
    orderItem?: OrderItemOrderByRelationAggregateInput | $Types.Skip
    cartItem?: CartItemOrderByRelationAggregateInput | $Types.Skip
    images?: FileOrderByRelationAggregateInput | $Types.Skip
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    slug?: string | $Types.Skip
    AND?: ProductWhereInput | ProductWhereInput[] | $Types.Skip
    OR?: ProductWhereInput[] | $Types.Skip
    NOT?: ProductWhereInput | ProductWhereInput[] | $Types.Skip
    productName?: StringFilter<"Product"> | string | $Types.Skip
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    description?: StringNullableFilter<"Product"> | string | null | $Types.Skip
    sku?: StringNullableFilter<"Product"> | string | null | $Types.Skip
    availableUnits?: IntFilter<"Product"> | number | $Types.Skip
    updatedAt?: DateTimeFilter<"Product"> | Date | string | $Types.Skip
    categoryId?: IntNullableFilter<"Product"> | number | null | $Types.Skip
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null | $Types.Skip
    review?: ReviewListRelationFilter | $Types.Skip
    orderItem?: OrderItemListRelationFilter | $Types.Skip
    cartItem?: CartItemListRelationFilter | $Types.Skip
    images?: FileListRelationFilter | $Types.Skip
  }, "id" | "slug">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    productName?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    sku?: SortOrderInput | SortOrder | $Types.Skip
    availableUnits?: SortOrder | $Types.Skip
    slug?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    categoryId?: SortOrderInput | SortOrder | $Types.Skip
    _count?: ProductCountOrderByAggregateInput | $Types.Skip
    _avg?: ProductAvgOrderByAggregateInput | $Types.Skip
    _max?: ProductMaxOrderByAggregateInput | $Types.Skip
    _min?: ProductMinOrderByAggregateInput | $Types.Skip
    _sum?: ProductSumOrderByAggregateInput | $Types.Skip
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: ProductScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Product"> | number | $Types.Skip
    productName?: StringWithAggregatesFilter<"Product"> | string | $Types.Skip
    price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null | $Types.Skip
    sku?: StringNullableWithAggregatesFilter<"Product"> | string | null | $Types.Skip
    availableUnits?: IntWithAggregatesFilter<"Product"> | number | $Types.Skip
    slug?: StringWithAggregatesFilter<"Product"> | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string | $Types.Skip
    categoryId?: IntNullableWithAggregatesFilter<"Product"> | number | null | $Types.Skip
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[] | $Types.Skip
    OR?: FileWhereInput[] | $Types.Skip
    NOT?: FileWhereInput | FileWhereInput[] | $Types.Skip
    id?: IntFilter<"File"> | number | $Types.Skip
    path?: StringFilter<"File"> | string | $Types.Skip
    productId?: IntNullableFilter<"File"> | number | null | $Types.Skip
    Product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null | $Types.Skip
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    path?: SortOrder | $Types.Skip
    productId?: SortOrderInput | SortOrder | $Types.Skip
    Product?: ProductOrderByWithRelationInput | $Types.Skip
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: FileWhereInput | FileWhereInput[] | $Types.Skip
    OR?: FileWhereInput[] | $Types.Skip
    NOT?: FileWhereInput | FileWhereInput[] | $Types.Skip
    path?: StringFilter<"File"> | string | $Types.Skip
    productId?: IntNullableFilter<"File"> | number | null | $Types.Skip
    Product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null | $Types.Skip
  }, "id">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    path?: SortOrder | $Types.Skip
    productId?: SortOrderInput | SortOrder | $Types.Skip
    _count?: FileCountOrderByAggregateInput | $Types.Skip
    _avg?: FileAvgOrderByAggregateInput | $Types.Skip
    _max?: FileMaxOrderByAggregateInput | $Types.Skip
    _min?: FileMinOrderByAggregateInput | $Types.Skip
    _sum?: FileSumOrderByAggregateInput | $Types.Skip
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: FileScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"File"> | number | $Types.Skip
    path?: StringWithAggregatesFilter<"File"> | string | $Types.Skip
    productId?: IntNullableWithAggregatesFilter<"File"> | number | null | $Types.Skip
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[] | $Types.Skip
    OR?: OrderWhereInput[] | $Types.Skip
    NOT?: OrderWhereInput | OrderWhereInput[] | $Types.Skip
    id?: IntFilter<"Order"> | number | $Types.Skip
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingCost?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingMethod?: StringFilter<"Order"> | string | $Types.Skip
    paymentMethod?: StringFilter<"Order"> | string | $Types.Skip
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus | $Types.Skip
    createdAt?: DateTimeFilter<"Order"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Order"> | Date | string | $Types.Skip
    userCPF?: StringFilter<"Order"> | string | $Types.Skip
    shippingAddressId?: IntFilter<"Order"> | number | $Types.Skip
    paymentId?: IntNullableFilter<"Order"> | number | null | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    shippingAddress?: XOR<AddressScalarRelationFilter, AddressWhereInput> | $Types.Skip
    orderItems?: OrderItemListRelationFilter | $Types.Skip
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null | $Types.Skip
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    total?: SortOrder | $Types.Skip
    shippingCost?: SortOrder | $Types.Skip
    shippingMethod?: SortOrder | $Types.Skip
    paymentMethod?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
    shippingAddressId?: SortOrder | $Types.Skip
    paymentId?: SortOrderInput | SortOrder | $Types.Skip
    user?: UserOrderByWithRelationInput | $Types.Skip
    shippingAddress?: AddressOrderByWithRelationInput | $Types.Skip
    orderItems?: OrderItemOrderByRelationAggregateInput | $Types.Skip
    payment?: PaymentOrderByWithRelationInput | $Types.Skip
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: OrderWhereInput | OrderWhereInput[] | $Types.Skip
    OR?: OrderWhereInput[] | $Types.Skip
    NOT?: OrderWhereInput | OrderWhereInput[] | $Types.Skip
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingCost?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingMethod?: StringFilter<"Order"> | string | $Types.Skip
    paymentMethod?: StringFilter<"Order"> | string | $Types.Skip
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus | $Types.Skip
    createdAt?: DateTimeFilter<"Order"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Order"> | Date | string | $Types.Skip
    userCPF?: StringFilter<"Order"> | string | $Types.Skip
    shippingAddressId?: IntFilter<"Order"> | number | $Types.Skip
    paymentId?: IntNullableFilter<"Order"> | number | null | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    shippingAddress?: XOR<AddressScalarRelationFilter, AddressWhereInput> | $Types.Skip
    orderItems?: OrderItemListRelationFilter | $Types.Skip
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null | $Types.Skip
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    total?: SortOrder | $Types.Skip
    shippingCost?: SortOrder | $Types.Skip
    shippingMethod?: SortOrder | $Types.Skip
    paymentMethod?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
    shippingAddressId?: SortOrder | $Types.Skip
    paymentId?: SortOrderInput | SortOrder | $Types.Skip
    _count?: OrderCountOrderByAggregateInput | $Types.Skip
    _avg?: OrderAvgOrderByAggregateInput | $Types.Skip
    _max?: OrderMaxOrderByAggregateInput | $Types.Skip
    _min?: OrderMinOrderByAggregateInput | $Types.Skip
    _sum?: OrderSumOrderByAggregateInput | $Types.Skip
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: OrderScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Order"> | number | $Types.Skip
    total?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingCost?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingMethod?: StringWithAggregatesFilter<"Order"> | string | $Types.Skip
    paymentMethod?: StringWithAggregatesFilter<"Order"> | string | $Types.Skip
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string | $Types.Skip
    userCPF?: StringWithAggregatesFilter<"Order"> | string | $Types.Skip
    shippingAddressId?: IntWithAggregatesFilter<"Order"> | number | $Types.Skip
    paymentId?: IntNullableWithAggregatesFilter<"Order"> | number | null | $Types.Skip
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[] | $Types.Skip
    OR?: OrderItemWhereInput[] | $Types.Skip
    NOT?: OrderItemWhereInput | OrderItemWhereInput[] | $Types.Skip
    id?: IntFilter<"OrderItem"> | number | $Types.Skip
    orderId?: IntFilter<"OrderItem"> | number | $Types.Skip
    productId?: IntFilter<"OrderItem"> | number | $Types.Skip
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput> | $Types.Skip
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput> | $Types.Skip
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    orderId?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
    order?: OrderOrderByWithRelationInput | $Types.Skip
    product?: ProductOrderByWithRelationInput | $Types.Skip
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: OrderItemWhereInput | OrderItemWhereInput[] | $Types.Skip
    OR?: OrderItemWhereInput[] | $Types.Skip
    NOT?: OrderItemWhereInput | OrderItemWhereInput[] | $Types.Skip
    orderId?: IntFilter<"OrderItem"> | number | $Types.Skip
    productId?: IntFilter<"OrderItem"> | number | $Types.Skip
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput> | $Types.Skip
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput> | $Types.Skip
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    orderId?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
    _count?: OrderItemCountOrderByAggregateInput | $Types.Skip
    _avg?: OrderItemAvgOrderByAggregateInput | $Types.Skip
    _max?: OrderItemMaxOrderByAggregateInput | $Types.Skip
    _min?: OrderItemMinOrderByAggregateInput | $Types.Skip
    _sum?: OrderItemSumOrderByAggregateInput | $Types.Skip
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: OrderItemScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"OrderItem"> | number | $Types.Skip
    orderId?: IntWithAggregatesFilter<"OrderItem"> | number | $Types.Skip
    productId?: IntWithAggregatesFilter<"OrderItem"> | number | $Types.Skip
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[] | $Types.Skip
    OR?: CartWhereInput[] | $Types.Skip
    NOT?: CartWhereInput | CartWhereInput[] | $Types.Skip
    id?: IntFilter<"Cart"> | number | $Types.Skip
    userCPF?: StringFilter<"Cart"> | string | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    cartItems?: CartItemListRelationFilter | $Types.Skip
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
    user?: UserOrderByWithRelationInput | $Types.Skip
    cartItems?: CartItemOrderByRelationAggregateInput | $Types.Skip
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    userCPF?: string | $Types.Skip
    AND?: CartWhereInput | CartWhereInput[] | $Types.Skip
    OR?: CartWhereInput[] | $Types.Skip
    NOT?: CartWhereInput | CartWhereInput[] | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    cartItems?: CartItemListRelationFilter | $Types.Skip
  }, "id" | "userCPF">

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
    _count?: CartCountOrderByAggregateInput | $Types.Skip
    _avg?: CartAvgOrderByAggregateInput | $Types.Skip
    _max?: CartMaxOrderByAggregateInput | $Types.Skip
    _min?: CartMinOrderByAggregateInput | $Types.Skip
    _sum?: CartSumOrderByAggregateInput | $Types.Skip
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: CartScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Cart"> | number | $Types.Skip
    userCPF?: StringWithAggregatesFilter<"Cart"> | string | $Types.Skip
  }

  export type CartItemWhereInput = {
    AND?: CartItemWhereInput | CartItemWhereInput[] | $Types.Skip
    OR?: CartItemWhereInput[] | $Types.Skip
    NOT?: CartItemWhereInput | CartItemWhereInput[] | $Types.Skip
    id?: IntFilter<"CartItem"> | number | $Types.Skip
    cartId?: IntFilter<"CartItem"> | number | $Types.Skip
    productId?: IntFilter<"CartItem"> | number | $Types.Skip
    quantity?: IntFilter<"CartItem"> | number | $Types.Skip
    cart?: XOR<CartScalarRelationFilter, CartWhereInput> | $Types.Skip
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput> | $Types.Skip
  }

  export type CartItemOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    cartId?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
    cart?: CartOrderByWithRelationInput | $Types.Skip
    product?: ProductOrderByWithRelationInput | $Types.Skip
  }

  export type CartItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: CartItemWhereInput | CartItemWhereInput[] | $Types.Skip
    OR?: CartItemWhereInput[] | $Types.Skip
    NOT?: CartItemWhereInput | CartItemWhereInput[] | $Types.Skip
    cartId?: IntFilter<"CartItem"> | number | $Types.Skip
    productId?: IntFilter<"CartItem"> | number | $Types.Skip
    quantity?: IntFilter<"CartItem"> | number | $Types.Skip
    cart?: XOR<CartScalarRelationFilter, CartWhereInput> | $Types.Skip
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput> | $Types.Skip
  }, "id">

  export type CartItemOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    cartId?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
    _count?: CartItemCountOrderByAggregateInput | $Types.Skip
    _avg?: CartItemAvgOrderByAggregateInput | $Types.Skip
    _max?: CartItemMaxOrderByAggregateInput | $Types.Skip
    _min?: CartItemMinOrderByAggregateInput | $Types.Skip
    _sum?: CartItemSumOrderByAggregateInput | $Types.Skip
  }

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: CartItemScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"CartItem"> | number | $Types.Skip
    cartId?: IntWithAggregatesFilter<"CartItem"> | number | $Types.Skip
    productId?: IntWithAggregatesFilter<"CartItem"> | number | $Types.Skip
    quantity?: IntWithAggregatesFilter<"CartItem"> | number | $Types.Skip
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[] | $Types.Skip
    OR?: AddressWhereInput[] | $Types.Skip
    NOT?: AddressWhereInput | AddressWhereInput[] | $Types.Skip
    id?: IntFilter<"Address"> | number | $Types.Skip
    cep?: StringFilter<"Address"> | string | $Types.Skip
    stateCode?: StringFilter<"Address"> | string | $Types.Skip
    city?: StringFilter<"Address"> | string | $Types.Skip
    neighborhood?: StringFilter<"Address"> | string | $Types.Skip
    street?: StringFilter<"Address"> | string | $Types.Skip
    number?: IntFilter<"Address"> | number | $Types.Skip
    additionalDetails?: StringNullableFilter<"Address"> | string | null | $Types.Skip
    userCPF?: StringFilter<"Address"> | string | $Types.Skip
    Order?: OrderListRelationFilter | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    cep?: SortOrder | $Types.Skip
    stateCode?: SortOrder | $Types.Skip
    city?: SortOrder | $Types.Skip
    neighborhood?: SortOrder | $Types.Skip
    street?: SortOrder | $Types.Skip
    number?: SortOrder | $Types.Skip
    additionalDetails?: SortOrderInput | SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
    Order?: OrderOrderByRelationAggregateInput | $Types.Skip
    user?: UserOrderByWithRelationInput | $Types.Skip
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: AddressWhereInput | AddressWhereInput[] | $Types.Skip
    OR?: AddressWhereInput[] | $Types.Skip
    NOT?: AddressWhereInput | AddressWhereInput[] | $Types.Skip
    cep?: StringFilter<"Address"> | string | $Types.Skip
    stateCode?: StringFilter<"Address"> | string | $Types.Skip
    city?: StringFilter<"Address"> | string | $Types.Skip
    neighborhood?: StringFilter<"Address"> | string | $Types.Skip
    street?: StringFilter<"Address"> | string | $Types.Skip
    number?: IntFilter<"Address"> | number | $Types.Skip
    additionalDetails?: StringNullableFilter<"Address"> | string | null | $Types.Skip
    userCPF?: StringFilter<"Address"> | string | $Types.Skip
    Order?: OrderListRelationFilter | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    cep?: SortOrder | $Types.Skip
    stateCode?: SortOrder | $Types.Skip
    city?: SortOrder | $Types.Skip
    neighborhood?: SortOrder | $Types.Skip
    street?: SortOrder | $Types.Skip
    number?: SortOrder | $Types.Skip
    additionalDetails?: SortOrderInput | SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
    _count?: AddressCountOrderByAggregateInput | $Types.Skip
    _avg?: AddressAvgOrderByAggregateInput | $Types.Skip
    _max?: AddressMaxOrderByAggregateInput | $Types.Skip
    _min?: AddressMinOrderByAggregateInput | $Types.Skip
    _sum?: AddressSumOrderByAggregateInput | $Types.Skip
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: AddressScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Address"> | number | $Types.Skip
    cep?: StringWithAggregatesFilter<"Address"> | string | $Types.Skip
    stateCode?: StringWithAggregatesFilter<"Address"> | string | $Types.Skip
    city?: StringWithAggregatesFilter<"Address"> | string | $Types.Skip
    neighborhood?: StringWithAggregatesFilter<"Address"> | string | $Types.Skip
    street?: StringWithAggregatesFilter<"Address"> | string | $Types.Skip
    number?: IntWithAggregatesFilter<"Address"> | number | $Types.Skip
    additionalDetails?: StringNullableWithAggregatesFilter<"Address"> | string | null | $Types.Skip
    userCPF?: StringWithAggregatesFilter<"Address"> | string | $Types.Skip
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[] | $Types.Skip
    OR?: CategoryWhereInput[] | $Types.Skip
    NOT?: CategoryWhereInput | CategoryWhereInput[] | $Types.Skip
    id?: IntFilter<"Category"> | number | $Types.Skip
    title?: StringFilter<"Category"> | string | $Types.Skip
    slug?: StringFilter<"Category"> | string | $Types.Skip
    description?: StringNullableFilter<"Category"> | string | null | $Types.Skip
    products?: ProductListRelationFilter | $Types.Skip
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    slug?: SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    products?: ProductOrderByRelationAggregateInput | $Types.Skip
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    slug?: string | $Types.Skip
    AND?: CategoryWhereInput | CategoryWhereInput[] | $Types.Skip
    OR?: CategoryWhereInput[] | $Types.Skip
    NOT?: CategoryWhereInput | CategoryWhereInput[] | $Types.Skip
    title?: StringFilter<"Category"> | string | $Types.Skip
    description?: StringNullableFilter<"Category"> | string | null | $Types.Skip
    products?: ProductListRelationFilter | $Types.Skip
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    slug?: SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    _count?: CategoryCountOrderByAggregateInput | $Types.Skip
    _avg?: CategoryAvgOrderByAggregateInput | $Types.Skip
    _max?: CategoryMaxOrderByAggregateInput | $Types.Skip
    _min?: CategoryMinOrderByAggregateInput | $Types.Skip
    _sum?: CategorySumOrderByAggregateInput | $Types.Skip
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: CategoryScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Category"> | number | $Types.Skip
    title?: StringWithAggregatesFilter<"Category"> | string | $Types.Skip
    slug?: StringWithAggregatesFilter<"Category"> | string | $Types.Skip
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null | $Types.Skip
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[] | $Types.Skip
    OR?: PaymentWhereInput[] | $Types.Skip
    NOT?: PaymentWhereInput | PaymentWhereInput[] | $Types.Skip
    id?: IntFilter<"Payment"> | number | $Types.Skip
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus | $Types.Skip
    paymentmethodId?: IntFilter<"Payment"> | number | $Types.Skip
    createdAt?: DateTimeFilter<"Payment"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Payment"> | Date | string | $Types.Skip
    userCPF?: StringFilter<"Payment"> | string | $Types.Skip
    paymentMethod?: XOR<PaymentMethodScalarRelationFilter, PaymentMethodWhereInput> | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    Order?: OrderListRelationFilter | $Types.Skip
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    paymentmethodId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
    paymentMethod?: PaymentMethodOrderByWithRelationInput | $Types.Skip
    user?: UserOrderByWithRelationInput | $Types.Skip
    Order?: OrderOrderByRelationAggregateInput | $Types.Skip
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    paymentmethodId?: number | $Types.Skip
    AND?: PaymentWhereInput | PaymentWhereInput[] | $Types.Skip
    OR?: PaymentWhereInput[] | $Types.Skip
    NOT?: PaymentWhereInput | PaymentWhereInput[] | $Types.Skip
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus | $Types.Skip
    createdAt?: DateTimeFilter<"Payment"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Payment"> | Date | string | $Types.Skip
    userCPF?: StringFilter<"Payment"> | string | $Types.Skip
    paymentMethod?: XOR<PaymentMethodScalarRelationFilter, PaymentMethodWhereInput> | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    Order?: OrderListRelationFilter | $Types.Skip
  }, "id" | "paymentmethodId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    paymentmethodId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
    _count?: PaymentCountOrderByAggregateInput | $Types.Skip
    _avg?: PaymentAvgOrderByAggregateInput | $Types.Skip
    _max?: PaymentMaxOrderByAggregateInput | $Types.Skip
    _min?: PaymentMinOrderByAggregateInput | $Types.Skip
    _sum?: PaymentSumOrderByAggregateInput | $Types.Skip
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: PaymentScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Payment"> | number | $Types.Skip
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus | $Types.Skip
    paymentmethodId?: IntWithAggregatesFilter<"Payment"> | number | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string | $Types.Skip
    userCPF?: StringWithAggregatesFilter<"Payment"> | string | $Types.Skip
  }

  export type PaymentMethodWhereInput = {
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[] | $Types.Skip
    OR?: PaymentMethodWhereInput[] | $Types.Skip
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[] | $Types.Skip
    id?: IntFilter<"PaymentMethod"> | number | $Types.Skip
    methodName?: StringFilter<"PaymentMethod"> | string | $Types.Skip
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null | $Types.Skip
  }

  export type PaymentMethodOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    methodName?: SortOrder | $Types.Skip
    payment?: PaymentOrderByWithRelationInput | $Types.Skip
  }

  export type PaymentMethodWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: PaymentMethodWhereInput | PaymentMethodWhereInput[] | $Types.Skip
    OR?: PaymentMethodWhereInput[] | $Types.Skip
    NOT?: PaymentMethodWhereInput | PaymentMethodWhereInput[] | $Types.Skip
    methodName?: StringFilter<"PaymentMethod"> | string | $Types.Skip
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null | $Types.Skip
  }, "id">

  export type PaymentMethodOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    methodName?: SortOrder | $Types.Skip
    _count?: PaymentMethodCountOrderByAggregateInput | $Types.Skip
    _avg?: PaymentMethodAvgOrderByAggregateInput | $Types.Skip
    _max?: PaymentMethodMaxOrderByAggregateInput | $Types.Skip
    _min?: PaymentMethodMinOrderByAggregateInput | $Types.Skip
    _sum?: PaymentMethodSumOrderByAggregateInput | $Types.Skip
  }

  export type PaymentMethodScalarWhereWithAggregatesInput = {
    AND?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: PaymentMethodScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: PaymentMethodScalarWhereWithAggregatesInput | PaymentMethodScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"PaymentMethod"> | number | $Types.Skip
    methodName?: StringWithAggregatesFilter<"PaymentMethod"> | string | $Types.Skip
  }

  export type UserCreateInput = {
    cpf: string
    nome: string
    dataDeNascimento: Date | string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    orders?: OrderCreateNestedManyWithoutUserInput | $Types.Skip
    payments?: PaymentCreateNestedManyWithoutUserInput | $Types.Skip
    reviews?: ReviewCreateNestedManyWithoutUserInput | $Types.Skip
    addresses?: AddressCreateNestedManyWithoutUserInput | $Types.Skip
    cart?: CartCreateNestedOneWithoutUserInput | $Types.Skip
  }

  export type UserUncheckedCreateInput = {
    cpf: string
    nome: string
    dataDeNascimento: Date | string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    cart?: CartUncheckedCreateNestedOneWithoutUserInput | $Types.Skip
  }

  export type UserUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nome?: StringFieldUpdateOperationsInput | string | $Types.Skip
    dataDeNascimento?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orders?: OrderUpdateManyWithoutUserNestedInput | $Types.Skip
    payments?: PaymentUpdateManyWithoutUserNestedInput | $Types.Skip
    reviews?: ReviewUpdateManyWithoutUserNestedInput | $Types.Skip
    addresses?: AddressUpdateManyWithoutUserNestedInput | $Types.Skip
    cart?: CartUpdateOneWithoutUserNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nome?: StringFieldUpdateOperationsInput | string | $Types.Skip
    dataDeNascimento?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput | $Types.Skip
  }

  export type UserCreateManyInput = {
    cpf: string
    nome: string
    dataDeNascimento: Date | string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type UserUpdateManyMutationInput = {
    cpf?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nome?: StringFieldUpdateOperationsInput | string | $Types.Skip
    dataDeNascimento?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type UserUncheckedUpdateManyInput = {
    cpf?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nome?: StringFieldUpdateOperationsInput | string | $Types.Skip
    dataDeNascimento?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ReviewCreateInput = {
    title: string
    message: string
    rating: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    user: UserCreateNestedOneWithoutReviewsInput
    product: ProductCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number | $Types.Skip
    title: string
    message: string
    rating: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    userCPF: string
    productId: number
  }

  export type ReviewUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    rating?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput | $Types.Skip
    product?: ProductUpdateOneRequiredWithoutReviewNestedInput | $Types.Skip
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    rating?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
    productId?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type ReviewCreateManyInput = {
    id?: number | $Types.Skip
    title: string
    message: string
    rating: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    userCPF: string
    productId: number
  }

  export type ReviewUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    rating?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    rating?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
    productId?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type ProductCreateInput = {
    productName: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null | $Types.Skip
    sku?: string | null | $Types.Skip
    availableUnits: number
    slug: string
    updatedAt?: Date | string | $Types.Skip
    category?: CategoryCreateNestedOneWithoutProductsInput | $Types.Skip
    review?: ReviewCreateNestedManyWithoutProductInput | $Types.Skip
    orderItem?: OrderItemCreateNestedManyWithoutProductInput | $Types.Skip
    cartItem?: CartItemCreateNestedManyWithoutProductInput | $Types.Skip
    images?: FileCreateNestedManyWithoutProductInput | $Types.Skip
  }

  export type ProductUncheckedCreateInput = {
    id?: number | $Types.Skip
    productName: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null | $Types.Skip
    sku?: string | null | $Types.Skip
    availableUnits: number
    slug: string
    updatedAt?: Date | string | $Types.Skip
    categoryId?: number | null | $Types.Skip
    review?: ReviewUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
    orderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
    images?: FileUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
  }

  export type ProductUpdateInput = {
    productName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    sku?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    availableUnits?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    category?: CategoryUpdateOneWithoutProductsNestedInput | $Types.Skip
    review?: ReviewUpdateManyWithoutProductNestedInput | $Types.Skip
    orderItem?: OrderItemUpdateManyWithoutProductNestedInput | $Types.Skip
    cartItem?: CartItemUpdateManyWithoutProductNestedInput | $Types.Skip
    images?: FileUpdateManyWithoutProductNestedInput | $Types.Skip
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    productName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    sku?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    availableUnits?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    review?: ReviewUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
    orderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
    images?: FileUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
  }

  export type ProductCreateManyInput = {
    id?: number | $Types.Skip
    productName: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null | $Types.Skip
    sku?: string | null | $Types.Skip
    availableUnits: number
    slug: string
    updatedAt?: Date | string | $Types.Skip
    categoryId?: number | null | $Types.Skip
  }

  export type ProductUpdateManyMutationInput = {
    productName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    sku?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    availableUnits?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    productName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    sku?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    availableUnits?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
  }

  export type FileCreateInput = {
    path: string
    Product?: ProductCreateNestedOneWithoutImagesInput | $Types.Skip
  }

  export type FileUncheckedCreateInput = {
    id?: number | $Types.Skip
    path: string
    productId?: number | null | $Types.Skip
  }

  export type FileUpdateInput = {
    path?: StringFieldUpdateOperationsInput | string | $Types.Skip
    Product?: ProductUpdateOneWithoutImagesNestedInput | $Types.Skip
  }

  export type FileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    path?: StringFieldUpdateOperationsInput | string | $Types.Skip
    productId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
  }

  export type FileCreateManyInput = {
    id?: number | $Types.Skip
    path: string
    productId?: number | null | $Types.Skip
  }

  export type FileUpdateManyMutationInput = {
    path?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type FileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    path?: StringFieldUpdateOperationsInput | string | $Types.Skip
    productId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
  }

  export type OrderCreateInput = {
    total: Decimal | DecimalJsLike | number | string
    shippingCost: Decimal | DecimalJsLike | number | string
    shippingMethod: string
    paymentMethod: string
    status: $Enums.OrderStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    user: UserCreateNestedOneWithoutOrdersInput
    shippingAddress: AddressCreateNestedOneWithoutOrderInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput | $Types.Skip
    payment?: PaymentCreateNestedOneWithoutOrderInput | $Types.Skip
  }

  export type OrderUncheckedCreateInput = {
    id?: number | $Types.Skip
    total: Decimal | DecimalJsLike | number | string
    shippingCost: Decimal | DecimalJsLike | number | string
    shippingMethod: string
    paymentMethod: string
    status: $Enums.OrderStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    userCPF: string
    shippingAddressId: number
    paymentId?: number | null | $Types.Skip
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput | $Types.Skip
  }

  export type OrderUpdateInput = {
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput | $Types.Skip
    shippingAddress?: AddressUpdateOneRequiredWithoutOrderNestedInput | $Types.Skip
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput | $Types.Skip
    payment?: PaymentUpdateOneWithoutOrderNestedInput | $Types.Skip
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shippingAddressId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput | $Types.Skip
  }

  export type OrderCreateManyInput = {
    id?: number | $Types.Skip
    total: Decimal | DecimalJsLike | number | string
    shippingCost: Decimal | DecimalJsLike | number | string
    shippingMethod: string
    paymentMethod: string
    status: $Enums.OrderStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    userCPF: string
    shippingAddressId: number
    paymentId?: number | null | $Types.Skip
  }

  export type OrderUpdateManyMutationInput = {
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shippingAddressId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
  }

  export type OrderItemCreateInput = {
    order: OrderCreateNestedOneWithoutOrderItemsInput
    product: ProductCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: number | $Types.Skip
    orderId: number
    productId: number
  }

  export type OrderItemUpdateInput = {
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput | $Types.Skip
    product?: ProductUpdateOneRequiredWithoutOrderItemNestedInput | $Types.Skip
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    orderId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    productId?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type OrderItemCreateManyInput = {
    id?: number | $Types.Skip
    orderId: number
    productId: number
  }

  export type OrderItemUpdateManyMutationInput = {

  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    orderId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    productId?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type CartCreateInput = {
    user: UserCreateNestedOneWithoutCartInput
    cartItems?: CartItemCreateNestedManyWithoutCartInput | $Types.Skip
  }

  export type CartUncheckedCreateInput = {
    id?: number | $Types.Skip
    userCPF: string
    cartItems?: CartItemUncheckedCreateNestedManyWithoutCartInput | $Types.Skip
  }

  export type CartUpdateInput = {
    user?: UserUpdateOneRequiredWithoutCartNestedInput | $Types.Skip
    cartItems?: CartItemUpdateManyWithoutCartNestedInput | $Types.Skip
  }

  export type CartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
    cartItems?: CartItemUncheckedUpdateManyWithoutCartNestedInput | $Types.Skip
  }

  export type CartCreateManyInput = {
    id?: number | $Types.Skip
    userCPF: string
  }

  export type CartUpdateManyMutationInput = {

  }

  export type CartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type CartItemCreateInput = {
    quantity: number
    cart: CartCreateNestedOneWithoutCartItemsInput
    product: ProductCreateNestedOneWithoutCartItemInput
  }

  export type CartItemUncheckedCreateInput = {
    id?: number | $Types.Skip
    cartId: number
    productId: number
    quantity: number
  }

  export type CartItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    cart?: CartUpdateOneRequiredWithoutCartItemsNestedInput | $Types.Skip
    product?: ProductUpdateOneRequiredWithoutCartItemNestedInput | $Types.Skip
  }

  export type CartItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    cartId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    productId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type CartItemCreateManyInput = {
    id?: number | $Types.Skip
    cartId: number
    productId: number
    quantity: number
  }

  export type CartItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type CartItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    cartId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    productId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type AddressCreateInput = {
    cep: string
    stateCode: string
    city: string
    neighborhood: string
    street: string
    number: number
    additionalDetails?: string | null | $Types.Skip
    Order?: OrderCreateNestedManyWithoutShippingAddressInput | $Types.Skip
    user: UserCreateNestedOneWithoutAddressesInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number | $Types.Skip
    cep: string
    stateCode: string
    city: string
    neighborhood: string
    street: string
    number: number
    additionalDetails?: string | null | $Types.Skip
    userCPF: string
    Order?: OrderUncheckedCreateNestedManyWithoutShippingAddressInput | $Types.Skip
  }

  export type AddressUpdateInput = {
    cep?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stateCode?: StringFieldUpdateOperationsInput | string | $Types.Skip
    city?: StringFieldUpdateOperationsInput | string | $Types.Skip
    neighborhood?: StringFieldUpdateOperationsInput | string | $Types.Skip
    street?: StringFieldUpdateOperationsInput | string | $Types.Skip
    number?: IntFieldUpdateOperationsInput | number | $Types.Skip
    additionalDetails?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    Order?: OrderUpdateManyWithoutShippingAddressNestedInput | $Types.Skip
    user?: UserUpdateOneRequiredWithoutAddressesNestedInput | $Types.Skip
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    cep?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stateCode?: StringFieldUpdateOperationsInput | string | $Types.Skip
    city?: StringFieldUpdateOperationsInput | string | $Types.Skip
    neighborhood?: StringFieldUpdateOperationsInput | string | $Types.Skip
    street?: StringFieldUpdateOperationsInput | string | $Types.Skip
    number?: IntFieldUpdateOperationsInput | number | $Types.Skip
    additionalDetails?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
    Order?: OrderUncheckedUpdateManyWithoutShippingAddressNestedInput | $Types.Skip
  }

  export type AddressCreateManyInput = {
    id?: number | $Types.Skip
    cep: string
    stateCode: string
    city: string
    neighborhood: string
    street: string
    number: number
    additionalDetails?: string | null | $Types.Skip
    userCPF: string
  }

  export type AddressUpdateManyMutationInput = {
    cep?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stateCode?: StringFieldUpdateOperationsInput | string | $Types.Skip
    city?: StringFieldUpdateOperationsInput | string | $Types.Skip
    neighborhood?: StringFieldUpdateOperationsInput | string | $Types.Skip
    street?: StringFieldUpdateOperationsInput | string | $Types.Skip
    number?: IntFieldUpdateOperationsInput | number | $Types.Skip
    additionalDetails?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    cep?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stateCode?: StringFieldUpdateOperationsInput | string | $Types.Skip
    city?: StringFieldUpdateOperationsInput | string | $Types.Skip
    neighborhood?: StringFieldUpdateOperationsInput | string | $Types.Skip
    street?: StringFieldUpdateOperationsInput | string | $Types.Skip
    number?: IntFieldUpdateOperationsInput | number | $Types.Skip
    additionalDetails?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type CategoryCreateInput = {
    title: string
    slug: string
    description?: string | null | $Types.Skip
    products?: ProductCreateNestedManyWithoutCategoryInput | $Types.Skip
  }

  export type CategoryUncheckedCreateInput = {
    id?: number | $Types.Skip
    title: string
    slug: string
    description?: string | null | $Types.Skip
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput | $Types.Skip
  }

  export type CategoryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    products?: ProductUpdateManyWithoutCategoryNestedInput | $Types.Skip
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput | $Types.Skip
  }

  export type CategoryCreateManyInput = {
    id?: number | $Types.Skip
    title: string
    slug: string
    description?: string | null | $Types.Skip
  }

  export type CategoryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type PaymentCreateInput = {
    status: $Enums.PaymentStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    paymentMethod: PaymentMethodCreateNestedOneWithoutPaymentInput
    user: UserCreateNestedOneWithoutPaymentsInput
    Order?: OrderCreateNestedManyWithoutPaymentInput | $Types.Skip
  }

  export type PaymentUncheckedCreateInput = {
    id?: number | $Types.Skip
    status: $Enums.PaymentStatus
    paymentmethodId: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    userCPF: string
    Order?: OrderUncheckedCreateNestedManyWithoutPaymentInput | $Types.Skip
  }

  export type PaymentUpdateInput = {
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    paymentMethod?: PaymentMethodUpdateOneRequiredWithoutPaymentNestedInput | $Types.Skip
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput | $Types.Skip
    Order?: OrderUpdateManyWithoutPaymentNestedInput | $Types.Skip
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | $Types.Skip
    paymentmethodId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
    Order?: OrderUncheckedUpdateManyWithoutPaymentNestedInput | $Types.Skip
  }

  export type PaymentCreateManyInput = {
    id?: number | $Types.Skip
    status: $Enums.PaymentStatus
    paymentmethodId: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    userCPF: string
  }

  export type PaymentUpdateManyMutationInput = {
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | $Types.Skip
    paymentmethodId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type PaymentMethodCreateInput = {
    methodName: string
    payment?: PaymentCreateNestedOneWithoutPaymentMethodInput | $Types.Skip
  }

  export type PaymentMethodUncheckedCreateInput = {
    id?: number | $Types.Skip
    methodName: string
    payment?: PaymentUncheckedCreateNestedOneWithoutPaymentMethodInput | $Types.Skip
  }

  export type PaymentMethodUpdateInput = {
    methodName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    payment?: PaymentUpdateOneWithoutPaymentMethodNestedInput | $Types.Skip
  }

  export type PaymentMethodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    methodName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    payment?: PaymentUncheckedUpdateOneWithoutPaymentMethodNestedInput | $Types.Skip
  }

  export type PaymentMethodCreateManyInput = {
    id?: number | $Types.Skip
    methodName: string
  }

  export type PaymentMethodUpdateManyMutationInput = {
    methodName?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type PaymentMethodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    methodName?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringFilter<$PrismaModel> | string | $Types.Skip
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string | $Types.Skip
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput | $Types.Skip
    some?: OrderWhereInput | $Types.Skip
    none?: OrderWhereInput | $Types.Skip
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput | $Types.Skip
    some?: PaymentWhereInput | $Types.Skip
    none?: PaymentWhereInput | $Types.Skip
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput | $Types.Skip
    some?: ReviewWhereInput | $Types.Skip
    none?: ReviewWhereInput | $Types.Skip
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput | $Types.Skip
    some?: AddressWhereInput | $Types.Skip
    none?: AddressWhereInput | $Types.Skip
  }

  export type CartNullableScalarRelationFilter = {
    is?: CartWhereInput | null | $Types.Skip
    isNot?: CartWhereInput | null | $Types.Skip
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type UserCountOrderByAggregateInput = {
    cpf?: SortOrder | $Types.Skip
    nome?: SortOrder | $Types.Skip
    dataDeNascimento?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type UserMaxOrderByAggregateInput = {
    cpf?: SortOrder | $Types.Skip
    nome?: SortOrder | $Types.Skip
    dataDeNascimento?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type UserMinOrderByAggregateInput = {
    cpf?: SortOrder | $Types.Skip
    nome?: SortOrder | $Types.Skip
    dataDeNascimento?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringFilter<$PrismaModel> | $Types.Skip
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntFilter<$PrismaModel> | number | $Types.Skip
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput | $Types.Skip
    isNot?: UserWhereInput | $Types.Skip
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput | $Types.Skip
    isNot?: ProductWhereInput | $Types.Skip
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    message?: SortOrder | $Types.Skip
    rating?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    rating?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    message?: SortOrder | $Types.Skip
    rating?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    message?: SortOrder | $Types.Skip
    rating?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    rating?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntFilter<$PrismaModel> | $Types.Skip
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | $Types.Skip
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringNullableFilter<$PrismaModel> | string | null | $Types.Skip
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableFilter<$PrismaModel> | number | null | $Types.Skip
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null | $Types.Skip
    isNot?: CategoryWhereInput | null | $Types.Skip
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput | $Types.Skip
    some?: OrderItemWhereInput | $Types.Skip
    none?: OrderItemWhereInput | $Types.Skip
  }

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput | $Types.Skip
    some?: CartItemWhereInput | $Types.Skip
    none?: CartItemWhereInput | $Types.Skip
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput | $Types.Skip
    some?: FileWhereInput | $Types.Skip
    none?: FileWhereInput | $Types.Skip
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder | $Types.Skip
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    productName?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    sku?: SortOrder | $Types.Skip
    availableUnits?: SortOrder | $Types.Skip
    slug?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    categoryId?: SortOrder | $Types.Skip
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    availableUnits?: SortOrder | $Types.Skip
    categoryId?: SortOrder | $Types.Skip
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    productName?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    sku?: SortOrder | $Types.Skip
    availableUnits?: SortOrder | $Types.Skip
    slug?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    categoryId?: SortOrder | $Types.Skip
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    productName?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    sku?: SortOrder | $Types.Skip
    availableUnits?: SortOrder | $Types.Skip
    slug?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    categoryId?: SortOrder | $Types.Skip
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    availableUnits?: SortOrder | $Types.Skip
    categoryId?: SortOrder | $Types.Skip
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedDecimalFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedDecimalFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDecimalFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDecimalFilter<$PrismaModel> | $Types.Skip
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatNullableFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type ProductNullableScalarRelationFilter = {
    is?: ProductWhereInput | null | $Types.Skip
    isNot?: ProductWhereInput | null | $Types.Skip
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    path?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
  }

  export type FileAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    path?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    path?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
  }

  export type FileSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus | $Types.Skip
  }

  export type AddressScalarRelationFilter = {
    is?: AddressWhereInput | $Types.Skip
    isNot?: AddressWhereInput | $Types.Skip
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null | $Types.Skip
    isNot?: PaymentWhereInput | null | $Types.Skip
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    total?: SortOrder | $Types.Skip
    shippingCost?: SortOrder | $Types.Skip
    shippingMethod?: SortOrder | $Types.Skip
    paymentMethod?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
    shippingAddressId?: SortOrder | $Types.Skip
    paymentId?: SortOrder | $Types.Skip
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    total?: SortOrder | $Types.Skip
    shippingCost?: SortOrder | $Types.Skip
    shippingAddressId?: SortOrder | $Types.Skip
    paymentId?: SortOrder | $Types.Skip
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    total?: SortOrder | $Types.Skip
    shippingCost?: SortOrder | $Types.Skip
    shippingMethod?: SortOrder | $Types.Skip
    paymentMethod?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
    shippingAddressId?: SortOrder | $Types.Skip
    paymentId?: SortOrder | $Types.Skip
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    total?: SortOrder | $Types.Skip
    shippingCost?: SortOrder | $Types.Skip
    shippingMethod?: SortOrder | $Types.Skip
    paymentMethod?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
    shippingAddressId?: SortOrder | $Types.Skip
    paymentId?: SortOrder | $Types.Skip
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    total?: SortOrder | $Types.Skip
    shippingCost?: SortOrder | $Types.Skip
    shippingAddressId?: SortOrder | $Types.Skip
    paymentId?: SortOrder | $Types.Skip
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumOrderStatusFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumOrderStatusFilter<$PrismaModel> | $Types.Skip
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput | $Types.Skip
    isNot?: OrderWhereInput | $Types.Skip
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    orderId?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
  }

  export type OrderItemAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    orderId?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    orderId?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    orderId?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
  }

  export type OrderItemSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    orderId?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
  }

  export type CartAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
  }

  export type CartSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type CartScalarRelationFilter = {
    is?: CartWhereInput | $Types.Skip
    isNot?: CartWhereInput | $Types.Skip
  }

  export type CartItemCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    cartId?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
  }

  export type CartItemAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    cartId?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
  }

  export type CartItemMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    cartId?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
  }

  export type CartItemMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    cartId?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
  }

  export type CartItemSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    cartId?: SortOrder | $Types.Skip
    productId?: SortOrder | $Types.Skip
    quantity?: SortOrder | $Types.Skip
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    cep?: SortOrder | $Types.Skip
    stateCode?: SortOrder | $Types.Skip
    city?: SortOrder | $Types.Skip
    neighborhood?: SortOrder | $Types.Skip
    street?: SortOrder | $Types.Skip
    number?: SortOrder | $Types.Skip
    additionalDetails?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    number?: SortOrder | $Types.Skip
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    cep?: SortOrder | $Types.Skip
    stateCode?: SortOrder | $Types.Skip
    city?: SortOrder | $Types.Skip
    neighborhood?: SortOrder | $Types.Skip
    street?: SortOrder | $Types.Skip
    number?: SortOrder | $Types.Skip
    additionalDetails?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    cep?: SortOrder | $Types.Skip
    stateCode?: SortOrder | $Types.Skip
    city?: SortOrder | $Types.Skip
    neighborhood?: SortOrder | $Types.Skip
    street?: SortOrder | $Types.Skip
    number?: SortOrder | $Types.Skip
    additionalDetails?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    number?: SortOrder | $Types.Skip
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput | $Types.Skip
    some?: ProductWhereInput | $Types.Skip
    none?: ProductWhereInput | $Types.Skip
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    slug?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    slug?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    slug?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus | $Types.Skip
  }

  export type PaymentMethodScalarRelationFilter = {
    is?: PaymentMethodWhereInput | $Types.Skip
    isNot?: PaymentMethodWhereInput | $Types.Skip
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    paymentmethodId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    paymentmethodId?: SortOrder | $Types.Skip
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    paymentmethodId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    paymentmethodId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    userCPF?: SortOrder | $Types.Skip
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    paymentmethodId?: SortOrder | $Types.Skip
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Types.Skip
  }

  export type PaymentMethodCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    methodName?: SortOrder | $Types.Skip
  }

  export type PaymentMethodAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type PaymentMethodMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    methodName?: SortOrder | $Types.Skip
  }

  export type PaymentMethodMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    methodName?: SortOrder | $Types.Skip
  }

  export type PaymentMethodSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: OrderCreateManyUserInputEnvelope | $Types.Skip
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: PaymentCreateManyUserInputEnvelope | $Types.Skip
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[] | $Types.Skip
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: ReviewCreateManyUserInputEnvelope | $Types.Skip
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[] | $Types.Skip
  }

  export type AddressCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: AddressCreateManyUserInputEnvelope | $Types.Skip
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[] | $Types.Skip
  }

  export type CartCreateNestedOneWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | $Types.Skip
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | $Types.Skip
    connect?: CartWhereUniqueInput | $Types.Skip
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: OrderCreateManyUserInputEnvelope | $Types.Skip
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: PaymentCreateManyUserInputEnvelope | $Types.Skip
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[] | $Types.Skip
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: ReviewCreateManyUserInputEnvelope | $Types.Skip
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[] | $Types.Skip
  }

  export type AddressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: AddressCreateManyUserInputEnvelope | $Types.Skip
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[] | $Types.Skip
  }

  export type CartUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | $Types.Skip
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | $Types.Skip
    connect?: CartWhereUniqueInput | $Types.Skip
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string | $Types.Skip
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string | $Types.Skip
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: OrderCreateManyUserInputEnvelope | $Types.Skip
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[] | $Types.Skip
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: PaymentCreateManyUserInputEnvelope | $Types.Skip
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[] | $Types.Skip
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[] | $Types.Skip
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[] | $Types.Skip
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[] | $Types.Skip
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[] | $Types.Skip
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: ReviewCreateManyUserInputEnvelope | $Types.Skip
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[] | $Types.Skip
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[] | $Types.Skip
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[] | $Types.Skip
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[] | $Types.Skip
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[] | $Types.Skip
  }

  export type AddressUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: AddressCreateManyUserInputEnvelope | $Types.Skip
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[] | $Types.Skip
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[] | $Types.Skip
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[] | $Types.Skip
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[] | $Types.Skip
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[] | $Types.Skip
  }

  export type CartUpdateOneWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | $Types.Skip
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | $Types.Skip
    upsert?: CartUpsertWithoutUserInput | $Types.Skip
    disconnect?: CartWhereInput | boolean | $Types.Skip
    delete?: CartWhereInput | boolean | $Types.Skip
    connect?: CartWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutUserInput, CartUpdateWithoutUserInput>, CartUncheckedUpdateWithoutUserInput> | $Types.Skip
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: OrderCreateManyUserInputEnvelope | $Types.Skip
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[] | $Types.Skip
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: PaymentCreateManyUserInputEnvelope | $Types.Skip
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[] | $Types.Skip
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[] | $Types.Skip
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[] | $Types.Skip
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[] | $Types.Skip
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[] | $Types.Skip
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: ReviewCreateManyUserInputEnvelope | $Types.Skip
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[] | $Types.Skip
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[] | $Types.Skip
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[] | $Types.Skip
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[] | $Types.Skip
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[] | $Types.Skip
  }

  export type AddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: AddressCreateManyUserInputEnvelope | $Types.Skip
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[] | $Types.Skip
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[] | $Types.Skip
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[] | $Types.Skip
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[] | $Types.Skip
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[] | $Types.Skip
  }

  export type CartUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | $Types.Skip
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | $Types.Skip
    upsert?: CartUpsertWithoutUserInput | $Types.Skip
    disconnect?: CartWhereInput | boolean | $Types.Skip
    delete?: CartWhereInput | boolean | $Types.Skip
    connect?: CartWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutUserInput, CartUpdateWithoutUserInput>, CartUncheckedUpdateWithoutUserInput> | $Types.Skip
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type ProductCreateNestedOneWithoutReviewInput = {
    create?: XOR<ProductCreateWithoutReviewInput, ProductUncheckedCreateWithoutReviewInput> | $Types.Skip
    connectOrCreate?: ProductCreateOrConnectWithoutReviewInput | $Types.Skip
    connect?: ProductWhereUniqueInput | $Types.Skip
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number | $Types.Skip
    increment?: number | $Types.Skip
    decrement?: number | $Types.Skip
    multiply?: number | $Types.Skip
    divide?: number | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput | $Types.Skip
    upsert?: UserUpsertWithoutReviewsInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput> | $Types.Skip
  }

  export type ProductUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<ProductCreateWithoutReviewInput, ProductUncheckedCreateWithoutReviewInput> | $Types.Skip
    connectOrCreate?: ProductCreateOrConnectWithoutReviewInput | $Types.Skip
    upsert?: ProductUpsertWithoutReviewInput | $Types.Skip
    connect?: ProductWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutReviewInput, ProductUpdateWithoutReviewInput>, ProductUncheckedUpdateWithoutReviewInput> | $Types.Skip
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput> | $Types.Skip
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput | $Types.Skip
    connect?: CategoryWhereUniqueInput | $Types.Skip
  }

  export type ReviewCreateNestedManyWithoutProductInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[] | $Types.Skip
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[] | $Types.Skip
    createMany?: ReviewCreateManyProductInputEnvelope | $Types.Skip
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[] | $Types.Skip
  }

  export type OrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[] | $Types.Skip
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[] | $Types.Skip
    createMany?: OrderItemCreateManyProductInputEnvelope | $Types.Skip
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
  }

  export type CartItemCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[] | $Types.Skip
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[] | $Types.Skip
    createMany?: CartItemCreateManyProductInputEnvelope | $Types.Skip
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[] | $Types.Skip
  }

  export type FileCreateNestedManyWithoutProductInput = {
    create?: XOR<FileCreateWithoutProductInput, FileUncheckedCreateWithoutProductInput> | FileCreateWithoutProductInput[] | FileUncheckedCreateWithoutProductInput[] | $Types.Skip
    connectOrCreate?: FileCreateOrConnectWithoutProductInput | FileCreateOrConnectWithoutProductInput[] | $Types.Skip
    createMany?: FileCreateManyProductInputEnvelope | $Types.Skip
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[] | $Types.Skip
  }

  export type ReviewUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[] | $Types.Skip
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[] | $Types.Skip
    createMany?: ReviewCreateManyProductInputEnvelope | $Types.Skip
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[] | $Types.Skip
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[] | $Types.Skip
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[] | $Types.Skip
    createMany?: OrderItemCreateManyProductInputEnvelope | $Types.Skip
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
  }

  export type CartItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[] | $Types.Skip
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[] | $Types.Skip
    createMany?: CartItemCreateManyProductInputEnvelope | $Types.Skip
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[] | $Types.Skip
  }

  export type FileUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<FileCreateWithoutProductInput, FileUncheckedCreateWithoutProductInput> | FileCreateWithoutProductInput[] | FileUncheckedCreateWithoutProductInput[] | $Types.Skip
    connectOrCreate?: FileCreateOrConnectWithoutProductInput | FileCreateOrConnectWithoutProductInput[] | $Types.Skip
    createMany?: FileCreateManyProductInputEnvelope | $Types.Skip
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[] | $Types.Skip
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | $Types.Skip
    increment?: Decimal | DecimalJsLike | number | string | $Types.Skip
    decrement?: Decimal | DecimalJsLike | number | string | $Types.Skip
    multiply?: Decimal | DecimalJsLike | number | string | $Types.Skip
    divide?: Decimal | DecimalJsLike | number | string | $Types.Skip
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null | $Types.Skip
  }

  export type CategoryUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput> | $Types.Skip
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput | $Types.Skip
    upsert?: CategoryUpsertWithoutProductsInput | $Types.Skip
    disconnect?: CategoryWhereInput | boolean | $Types.Skip
    delete?: CategoryWhereInput | boolean | $Types.Skip
    connect?: CategoryWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput> | $Types.Skip
  }

  export type ReviewUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[] | $Types.Skip
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[] | $Types.Skip
    upsert?: ReviewUpsertWithWhereUniqueWithoutProductInput | ReviewUpsertWithWhereUniqueWithoutProductInput[] | $Types.Skip
    createMany?: ReviewCreateManyProductInputEnvelope | $Types.Skip
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[] | $Types.Skip
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[] | $Types.Skip
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[] | $Types.Skip
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[] | $Types.Skip
    update?: ReviewUpdateWithWhereUniqueWithoutProductInput | ReviewUpdateWithWhereUniqueWithoutProductInput[] | $Types.Skip
    updateMany?: ReviewUpdateManyWithWhereWithoutProductInput | ReviewUpdateManyWithWhereWithoutProductInput[] | $Types.Skip
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[] | $Types.Skip
  }

  export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[] | $Types.Skip
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[] | $Types.Skip
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[] | $Types.Skip
    createMany?: OrderItemCreateManyProductInputEnvelope | $Types.Skip
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[] | $Types.Skip
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[] | $Types.Skip
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[] | $Types.Skip
  }

  export type CartItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[] | $Types.Skip
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[] | $Types.Skip
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductInput | CartItemUpsertWithWhereUniqueWithoutProductInput[] | $Types.Skip
    createMany?: CartItemCreateManyProductInputEnvelope | $Types.Skip
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[] | $Types.Skip
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[] | $Types.Skip
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[] | $Types.Skip
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[] | $Types.Skip
    update?: CartItemUpdateWithWhereUniqueWithoutProductInput | CartItemUpdateWithWhereUniqueWithoutProductInput[] | $Types.Skip
    updateMany?: CartItemUpdateManyWithWhereWithoutProductInput | CartItemUpdateManyWithWhereWithoutProductInput[] | $Types.Skip
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[] | $Types.Skip
  }

  export type FileUpdateManyWithoutProductNestedInput = {
    create?: XOR<FileCreateWithoutProductInput, FileUncheckedCreateWithoutProductInput> | FileCreateWithoutProductInput[] | FileUncheckedCreateWithoutProductInput[] | $Types.Skip
    connectOrCreate?: FileCreateOrConnectWithoutProductInput | FileCreateOrConnectWithoutProductInput[] | $Types.Skip
    upsert?: FileUpsertWithWhereUniqueWithoutProductInput | FileUpsertWithWhereUniqueWithoutProductInput[] | $Types.Skip
    createMany?: FileCreateManyProductInputEnvelope | $Types.Skip
    set?: FileWhereUniqueInput | FileWhereUniqueInput[] | $Types.Skip
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[] | $Types.Skip
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[] | $Types.Skip
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[] | $Types.Skip
    update?: FileUpdateWithWhereUniqueWithoutProductInput | FileUpdateWithWhereUniqueWithoutProductInput[] | $Types.Skip
    updateMany?: FileUpdateManyWithWhereWithoutProductInput | FileUpdateManyWithWhereWithoutProductInput[] | $Types.Skip
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[] | $Types.Skip
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null | $Types.Skip
    increment?: number | $Types.Skip
    decrement?: number | $Types.Skip
    multiply?: number | $Types.Skip
    divide?: number | $Types.Skip
  }

  export type ReviewUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[] | $Types.Skip
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[] | $Types.Skip
    upsert?: ReviewUpsertWithWhereUniqueWithoutProductInput | ReviewUpsertWithWhereUniqueWithoutProductInput[] | $Types.Skip
    createMany?: ReviewCreateManyProductInputEnvelope | $Types.Skip
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[] | $Types.Skip
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[] | $Types.Skip
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[] | $Types.Skip
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[] | $Types.Skip
    update?: ReviewUpdateWithWhereUniqueWithoutProductInput | ReviewUpdateWithWhereUniqueWithoutProductInput[] | $Types.Skip
    updateMany?: ReviewUpdateManyWithWhereWithoutProductInput | ReviewUpdateManyWithWhereWithoutProductInput[] | $Types.Skip
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[] | $Types.Skip
  }

  export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[] | $Types.Skip
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[] | $Types.Skip
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[] | $Types.Skip
    createMany?: OrderItemCreateManyProductInputEnvelope | $Types.Skip
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[] | $Types.Skip
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[] | $Types.Skip
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[] | $Types.Skip
  }

  export type CartItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[] | $Types.Skip
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[] | $Types.Skip
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductInput | CartItemUpsertWithWhereUniqueWithoutProductInput[] | $Types.Skip
    createMany?: CartItemCreateManyProductInputEnvelope | $Types.Skip
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[] | $Types.Skip
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[] | $Types.Skip
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[] | $Types.Skip
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[] | $Types.Skip
    update?: CartItemUpdateWithWhereUniqueWithoutProductInput | CartItemUpdateWithWhereUniqueWithoutProductInput[] | $Types.Skip
    updateMany?: CartItemUpdateManyWithWhereWithoutProductInput | CartItemUpdateManyWithWhereWithoutProductInput[] | $Types.Skip
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[] | $Types.Skip
  }

  export type FileUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<FileCreateWithoutProductInput, FileUncheckedCreateWithoutProductInput> | FileCreateWithoutProductInput[] | FileUncheckedCreateWithoutProductInput[] | $Types.Skip
    connectOrCreate?: FileCreateOrConnectWithoutProductInput | FileCreateOrConnectWithoutProductInput[] | $Types.Skip
    upsert?: FileUpsertWithWhereUniqueWithoutProductInput | FileUpsertWithWhereUniqueWithoutProductInput[] | $Types.Skip
    createMany?: FileCreateManyProductInputEnvelope | $Types.Skip
    set?: FileWhereUniqueInput | FileWhereUniqueInput[] | $Types.Skip
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[] | $Types.Skip
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[] | $Types.Skip
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[] | $Types.Skip
    update?: FileUpdateWithWhereUniqueWithoutProductInput | FileUpdateWithWhereUniqueWithoutProductInput[] | $Types.Skip
    updateMany?: FileUpdateManyWithWhereWithoutProductInput | FileUpdateManyWithWhereWithoutProductInput[] | $Types.Skip
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[] | $Types.Skip
  }

  export type ProductCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput> | $Types.Skip
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput | $Types.Skip
    connect?: ProductWhereUniqueInput | $Types.Skip
  }

  export type ProductUpdateOneWithoutImagesNestedInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput> | $Types.Skip
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput | $Types.Skip
    upsert?: ProductUpsertWithoutImagesInput | $Types.Skip
    disconnect?: ProductWhereInput | boolean | $Types.Skip
    delete?: ProductWhereInput | boolean | $Types.Skip
    connect?: ProductWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutImagesInput, ProductUpdateWithoutImagesInput>, ProductUncheckedUpdateWithoutImagesInput> | $Types.Skip
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type AddressCreateNestedOneWithoutOrderInput = {
    create?: XOR<AddressCreateWithoutOrderInput, AddressUncheckedCreateWithoutOrderInput> | $Types.Skip
    connectOrCreate?: AddressCreateOrConnectWithoutOrderInput | $Types.Skip
    connect?: AddressWhereUniqueInput | $Types.Skip
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[] | $Types.Skip
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[] | $Types.Skip
    createMany?: OrderItemCreateManyOrderInputEnvelope | $Types.Skip
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
  }

  export type PaymentCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | $Types.Skip
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | $Types.Skip
    connect?: PaymentWhereUniqueInput | $Types.Skip
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[] | $Types.Skip
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[] | $Types.Skip
    createMany?: OrderItemCreateManyOrderInputEnvelope | $Types.Skip
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput | $Types.Skip
    upsert?: UserUpsertWithoutOrdersInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput> | $Types.Skip
  }

  export type AddressUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<AddressCreateWithoutOrderInput, AddressUncheckedCreateWithoutOrderInput> | $Types.Skip
    connectOrCreate?: AddressCreateOrConnectWithoutOrderInput | $Types.Skip
    upsert?: AddressUpsertWithoutOrderInput | $Types.Skip
    connect?: AddressWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutOrderInput, AddressUpdateWithoutOrderInput>, AddressUncheckedUpdateWithoutOrderInput> | $Types.Skip
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[] | $Types.Skip
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[] | $Types.Skip
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[] | $Types.Skip
    createMany?: OrderItemCreateManyOrderInputEnvelope | $Types.Skip
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[] | $Types.Skip
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[] | $Types.Skip
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[] | $Types.Skip
  }

  export type PaymentUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | $Types.Skip
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | $Types.Skip
    upsert?: PaymentUpsertWithoutOrderInput | $Types.Skip
    disconnect?: PaymentWhereInput | boolean | $Types.Skip
    delete?: PaymentWhereInput | boolean | $Types.Skip
    connect?: PaymentWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutOrderInput, PaymentUpdateWithoutOrderInput>, PaymentUncheckedUpdateWithoutOrderInput> | $Types.Skip
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[] | $Types.Skip
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[] | $Types.Skip
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[] | $Types.Skip
    createMany?: OrderItemCreateManyOrderInputEnvelope | $Types.Skip
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[] | $Types.Skip
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[] | $Types.Skip
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[] | $Types.Skip
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[] | $Types.Skip
  }

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput> | $Types.Skip
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput | $Types.Skip
    connect?: OrderWhereUniqueInput | $Types.Skip
  }

  export type ProductCreateNestedOneWithoutOrderItemInput = {
    create?: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput> | $Types.Skip
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemInput | $Types.Skip
    connect?: ProductWhereUniqueInput | $Types.Skip
  }

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput> | $Types.Skip
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput | $Types.Skip
    upsert?: OrderUpsertWithoutOrderItemsInput | $Types.Skip
    connect?: OrderWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderItemsInput, OrderUpdateWithoutOrderItemsInput>, OrderUncheckedUpdateWithoutOrderItemsInput> | $Types.Skip
  }

  export type ProductUpdateOneRequiredWithoutOrderItemNestedInput = {
    create?: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput> | $Types.Skip
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemInput | $Types.Skip
    upsert?: ProductUpsertWithoutOrderItemInput | $Types.Skip
    connect?: ProductWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderItemInput, ProductUpdateWithoutOrderItemInput>, ProductUncheckedUpdateWithoutOrderItemInput> | $Types.Skip
  }

  export type UserCreateNestedOneWithoutCartInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutCartInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type CartItemCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[] | $Types.Skip
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[] | $Types.Skip
    createMany?: CartItemCreateManyCartInputEnvelope | $Types.Skip
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[] | $Types.Skip
  }

  export type CartItemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[] | $Types.Skip
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[] | $Types.Skip
    createMany?: CartItemCreateManyCartInputEnvelope | $Types.Skip
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[] | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutCartInput | $Types.Skip
    upsert?: UserUpsertWithoutCartInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartInput, UserUpdateWithoutCartInput>, UserUncheckedUpdateWithoutCartInput> | $Types.Skip
  }

  export type CartItemUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[] | $Types.Skip
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[] | $Types.Skip
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[] | $Types.Skip
    createMany?: CartItemCreateManyCartInputEnvelope | $Types.Skip
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[] | $Types.Skip
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[] | $Types.Skip
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[] | $Types.Skip
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[] | $Types.Skip
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[] | $Types.Skip
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[] | $Types.Skip
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[] | $Types.Skip
  }

  export type CartItemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[] | $Types.Skip
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[] | $Types.Skip
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[] | $Types.Skip
    createMany?: CartItemCreateManyCartInputEnvelope | $Types.Skip
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[] | $Types.Skip
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[] | $Types.Skip
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[] | $Types.Skip
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[] | $Types.Skip
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[] | $Types.Skip
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[] | $Types.Skip
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[] | $Types.Skip
  }

  export type CartCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<CartCreateWithoutCartItemsInput, CartUncheckedCreateWithoutCartItemsInput> | $Types.Skip
    connectOrCreate?: CartCreateOrConnectWithoutCartItemsInput | $Types.Skip
    connect?: CartWhereUniqueInput | $Types.Skip
  }

  export type ProductCreateNestedOneWithoutCartItemInput = {
    create?: XOR<ProductCreateWithoutCartItemInput, ProductUncheckedCreateWithoutCartItemInput> | $Types.Skip
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemInput | $Types.Skip
    connect?: ProductWhereUniqueInput | $Types.Skip
  }

  export type CartUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: XOR<CartCreateWithoutCartItemsInput, CartUncheckedCreateWithoutCartItemsInput> | $Types.Skip
    connectOrCreate?: CartCreateOrConnectWithoutCartItemsInput | $Types.Skip
    upsert?: CartUpsertWithoutCartItemsInput | $Types.Skip
    connect?: CartWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutCartItemsInput, CartUpdateWithoutCartItemsInput>, CartUncheckedUpdateWithoutCartItemsInput> | $Types.Skip
  }

  export type ProductUpdateOneRequiredWithoutCartItemNestedInput = {
    create?: XOR<ProductCreateWithoutCartItemInput, ProductUncheckedCreateWithoutCartItemInput> | $Types.Skip
    connectOrCreate?: ProductCreateOrConnectWithoutCartItemInput | $Types.Skip
    upsert?: ProductUpsertWithoutCartItemInput | $Types.Skip
    connect?: ProductWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCartItemInput, ProductUpdateWithoutCartItemInput>, ProductUncheckedUpdateWithoutCartItemInput> | $Types.Skip
  }

  export type OrderCreateNestedManyWithoutShippingAddressInput = {
    create?: XOR<OrderCreateWithoutShippingAddressInput, OrderUncheckedCreateWithoutShippingAddressInput> | OrderCreateWithoutShippingAddressInput[] | OrderUncheckedCreateWithoutShippingAddressInput[] | $Types.Skip
    connectOrCreate?: OrderCreateOrConnectWithoutShippingAddressInput | OrderCreateOrConnectWithoutShippingAddressInput[] | $Types.Skip
    createMany?: OrderCreateManyShippingAddressInputEnvelope | $Types.Skip
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
  }

  export type UserCreateNestedOneWithoutAddressesInput = {
    create?: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type OrderUncheckedCreateNestedManyWithoutShippingAddressInput = {
    create?: XOR<OrderCreateWithoutShippingAddressInput, OrderUncheckedCreateWithoutShippingAddressInput> | OrderCreateWithoutShippingAddressInput[] | OrderUncheckedCreateWithoutShippingAddressInput[] | $Types.Skip
    connectOrCreate?: OrderCreateOrConnectWithoutShippingAddressInput | OrderCreateOrConnectWithoutShippingAddressInput[] | $Types.Skip
    createMany?: OrderCreateManyShippingAddressInputEnvelope | $Types.Skip
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
  }

  export type OrderUpdateManyWithoutShippingAddressNestedInput = {
    create?: XOR<OrderCreateWithoutShippingAddressInput, OrderUncheckedCreateWithoutShippingAddressInput> | OrderCreateWithoutShippingAddressInput[] | OrderUncheckedCreateWithoutShippingAddressInput[] | $Types.Skip
    connectOrCreate?: OrderCreateOrConnectWithoutShippingAddressInput | OrderCreateOrConnectWithoutShippingAddressInput[] | $Types.Skip
    upsert?: OrderUpsertWithWhereUniqueWithoutShippingAddressInput | OrderUpsertWithWhereUniqueWithoutShippingAddressInput[] | $Types.Skip
    createMany?: OrderCreateManyShippingAddressInputEnvelope | $Types.Skip
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    update?: OrderUpdateWithWhereUniqueWithoutShippingAddressInput | OrderUpdateWithWhereUniqueWithoutShippingAddressInput[] | $Types.Skip
    updateMany?: OrderUpdateManyWithWhereWithoutShippingAddressInput | OrderUpdateManyWithWhereWithoutShippingAddressInput[] | $Types.Skip
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[] | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput | $Types.Skip
    upsert?: UserUpsertWithoutAddressesInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressesInput, UserUpdateWithoutAddressesInput>, UserUncheckedUpdateWithoutAddressesInput> | $Types.Skip
  }

  export type OrderUncheckedUpdateManyWithoutShippingAddressNestedInput = {
    create?: XOR<OrderCreateWithoutShippingAddressInput, OrderUncheckedCreateWithoutShippingAddressInput> | OrderCreateWithoutShippingAddressInput[] | OrderUncheckedCreateWithoutShippingAddressInput[] | $Types.Skip
    connectOrCreate?: OrderCreateOrConnectWithoutShippingAddressInput | OrderCreateOrConnectWithoutShippingAddressInput[] | $Types.Skip
    upsert?: OrderUpsertWithWhereUniqueWithoutShippingAddressInput | OrderUpsertWithWhereUniqueWithoutShippingAddressInput[] | $Types.Skip
    createMany?: OrderCreateManyShippingAddressInputEnvelope | $Types.Skip
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    update?: OrderUpdateWithWhereUniqueWithoutShippingAddressInput | OrderUpdateWithWhereUniqueWithoutShippingAddressInput[] | $Types.Skip
    updateMany?: OrderUpdateManyWithWhereWithoutShippingAddressInput | OrderUpdateManyWithWhereWithoutShippingAddressInput[] | $Types.Skip
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[] | $Types.Skip
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[] | $Types.Skip
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[] | $Types.Skip
    createMany?: ProductCreateManyCategoryInputEnvelope | $Types.Skip
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[] | $Types.Skip
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[] | $Types.Skip
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[] | $Types.Skip
    createMany?: ProductCreateManyCategoryInputEnvelope | $Types.Skip
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[] | $Types.Skip
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[] | $Types.Skip
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[] | $Types.Skip
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[] | $Types.Skip
    createMany?: ProductCreateManyCategoryInputEnvelope | $Types.Skip
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[] | $Types.Skip
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[] | $Types.Skip
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[] | $Types.Skip
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[] | $Types.Skip
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[] | $Types.Skip
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[] | $Types.Skip
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[] | $Types.Skip
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[] | $Types.Skip
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[] | $Types.Skip
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[] | $Types.Skip
    createMany?: ProductCreateManyCategoryInputEnvelope | $Types.Skip
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[] | $Types.Skip
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[] | $Types.Skip
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[] | $Types.Skip
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[] | $Types.Skip
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[] | $Types.Skip
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[] | $Types.Skip
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[] | $Types.Skip
  }

  export type PaymentMethodCreateNestedOneWithoutPaymentInput = {
    create?: XOR<PaymentMethodCreateWithoutPaymentInput, PaymentMethodUncheckedCreateWithoutPaymentInput> | $Types.Skip
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutPaymentInput | $Types.Skip
    connect?: PaymentMethodWhereUniqueInput | $Types.Skip
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type OrderCreateNestedManyWithoutPaymentInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput> | OrderCreateWithoutPaymentInput[] | OrderUncheckedCreateWithoutPaymentInput[] | $Types.Skip
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput | OrderCreateOrConnectWithoutPaymentInput[] | $Types.Skip
    createMany?: OrderCreateManyPaymentInputEnvelope | $Types.Skip
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
  }

  export type OrderUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput> | OrderCreateWithoutPaymentInput[] | OrderUncheckedCreateWithoutPaymentInput[] | $Types.Skip
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput | OrderCreateOrConnectWithoutPaymentInput[] | $Types.Skip
    createMany?: OrderCreateManyPaymentInputEnvelope | $Types.Skip
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus | $Types.Skip
  }

  export type PaymentMethodUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<PaymentMethodCreateWithoutPaymentInput, PaymentMethodUncheckedCreateWithoutPaymentInput> | $Types.Skip
    connectOrCreate?: PaymentMethodCreateOrConnectWithoutPaymentInput | $Types.Skip
    upsert?: PaymentMethodUpsertWithoutPaymentInput | $Types.Skip
    connect?: PaymentMethodWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<PaymentMethodUpdateToOneWithWhereWithoutPaymentInput, PaymentMethodUpdateWithoutPaymentInput>, PaymentMethodUncheckedUpdateWithoutPaymentInput> | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput | $Types.Skip
    upsert?: UserUpsertWithoutPaymentsInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput> | $Types.Skip
  }

  export type OrderUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput> | OrderCreateWithoutPaymentInput[] | OrderUncheckedCreateWithoutPaymentInput[] | $Types.Skip
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput | OrderCreateOrConnectWithoutPaymentInput[] | $Types.Skip
    upsert?: OrderUpsertWithWhereUniqueWithoutPaymentInput | OrderUpsertWithWhereUniqueWithoutPaymentInput[] | $Types.Skip
    createMany?: OrderCreateManyPaymentInputEnvelope | $Types.Skip
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    update?: OrderUpdateWithWhereUniqueWithoutPaymentInput | OrderUpdateWithWhereUniqueWithoutPaymentInput[] | $Types.Skip
    updateMany?: OrderUpdateManyWithWhereWithoutPaymentInput | OrderUpdateManyWithWhereWithoutPaymentInput[] | $Types.Skip
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[] | $Types.Skip
  }

  export type OrderUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput> | OrderCreateWithoutPaymentInput[] | OrderUncheckedCreateWithoutPaymentInput[] | $Types.Skip
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput | OrderCreateOrConnectWithoutPaymentInput[] | $Types.Skip
    upsert?: OrderUpsertWithWhereUniqueWithoutPaymentInput | OrderUpsertWithWhereUniqueWithoutPaymentInput[] | $Types.Skip
    createMany?: OrderCreateManyPaymentInputEnvelope | $Types.Skip
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[] | $Types.Skip
    update?: OrderUpdateWithWhereUniqueWithoutPaymentInput | OrderUpdateWithWhereUniqueWithoutPaymentInput[] | $Types.Skip
    updateMany?: OrderUpdateManyWithWhereWithoutPaymentInput | OrderUpdateManyWithWhereWithoutPaymentInput[] | $Types.Skip
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[] | $Types.Skip
  }

  export type PaymentCreateNestedOneWithoutPaymentMethodInput = {
    create?: XOR<PaymentCreateWithoutPaymentMethodInput, PaymentUncheckedCreateWithoutPaymentMethodInput> | $Types.Skip
    connectOrCreate?: PaymentCreateOrConnectWithoutPaymentMethodInput | $Types.Skip
    connect?: PaymentWhereUniqueInput | $Types.Skip
  }

  export type PaymentUncheckedCreateNestedOneWithoutPaymentMethodInput = {
    create?: XOR<PaymentCreateWithoutPaymentMethodInput, PaymentUncheckedCreateWithoutPaymentMethodInput> | $Types.Skip
    connectOrCreate?: PaymentCreateOrConnectWithoutPaymentMethodInput | $Types.Skip
    connect?: PaymentWhereUniqueInput | $Types.Skip
  }

  export type PaymentUpdateOneWithoutPaymentMethodNestedInput = {
    create?: XOR<PaymentCreateWithoutPaymentMethodInput, PaymentUncheckedCreateWithoutPaymentMethodInput> | $Types.Skip
    connectOrCreate?: PaymentCreateOrConnectWithoutPaymentMethodInput | $Types.Skip
    upsert?: PaymentUpsertWithoutPaymentMethodInput | $Types.Skip
    disconnect?: PaymentWhereInput | boolean | $Types.Skip
    delete?: PaymentWhereInput | boolean | $Types.Skip
    connect?: PaymentWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutPaymentMethodInput, PaymentUpdateWithoutPaymentMethodInput>, PaymentUncheckedUpdateWithoutPaymentMethodInput> | $Types.Skip
  }

  export type PaymentUncheckedUpdateOneWithoutPaymentMethodNestedInput = {
    create?: XOR<PaymentCreateWithoutPaymentMethodInput, PaymentUncheckedCreateWithoutPaymentMethodInput> | $Types.Skip
    connectOrCreate?: PaymentCreateOrConnectWithoutPaymentMethodInput | $Types.Skip
    upsert?: PaymentUpsertWithoutPaymentMethodInput | $Types.Skip
    disconnect?: PaymentWhereInput | boolean | $Types.Skip
    delete?: PaymentWhereInput | boolean | $Types.Skip
    connect?: PaymentWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutPaymentMethodInput, PaymentUpdateWithoutPaymentMethodInput>, PaymentUncheckedUpdateWithoutPaymentMethodInput> | $Types.Skip
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringFilter<$PrismaModel> | string | $Types.Skip
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string | $Types.Skip
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntFilter<$PrismaModel> | number | $Types.Skip
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedFloatFilter<$PrismaModel> | number | $Types.Skip
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | $Types.Skip
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringNullableFilter<$PrismaModel> | string | null | $Types.Skip
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableFilter<$PrismaModel> | number | null | $Types.Skip
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedDecimalFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedDecimalFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDecimalFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDecimalFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatNullableFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null | $Types.Skip
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus | $Types.Skip
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumOrderStatusFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumOrderStatusFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus | $Types.Skip
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Types.Skip
  }

  export type OrderCreateWithoutUserInput = {
    total: Decimal | DecimalJsLike | number | string
    shippingCost: Decimal | DecimalJsLike | number | string
    shippingMethod: string
    paymentMethod: string
    status: $Enums.OrderStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    shippingAddress: AddressCreateNestedOneWithoutOrderInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput | $Types.Skip
    payment?: PaymentCreateNestedOneWithoutOrderInput | $Types.Skip
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number | $Types.Skip
    total: Decimal | DecimalJsLike | number | string
    shippingCost: Decimal | DecimalJsLike | number | string
    shippingMethod: string
    paymentMethod: string
    status: $Enums.OrderStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    shippingAddressId: number
    paymentId?: number | null | $Types.Skip
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput | $Types.Skip
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type PaymentCreateWithoutUserInput = {
    status: $Enums.PaymentStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    paymentMethod: PaymentMethodCreateNestedOneWithoutPaymentInput
    Order?: OrderCreateNestedManyWithoutPaymentInput | $Types.Skip
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: number | $Types.Skip
    status: $Enums.PaymentStatus
    paymentmethodId: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    Order?: OrderUncheckedCreateNestedManyWithoutPaymentInput | $Types.Skip
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type ReviewCreateWithoutUserInput = {
    title: string
    message: string
    rating: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    product: ProductCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number | $Types.Skip
    title: string
    message: string
    rating: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    productId: number
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type AddressCreateWithoutUserInput = {
    cep: string
    stateCode: string
    city: string
    neighborhood: string
    street: string
    number: number
    additionalDetails?: string | null | $Types.Skip
    Order?: OrderCreateNestedManyWithoutShippingAddressInput | $Types.Skip
  }

  export type AddressUncheckedCreateWithoutUserInput = {
    id?: number | $Types.Skip
    cep: string
    stateCode: string
    city: string
    neighborhood: string
    street: string
    number: number
    additionalDetails?: string | null | $Types.Skip
    Order?: OrderUncheckedCreateNestedManyWithoutShippingAddressInput | $Types.Skip
  }

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressCreateManyUserInputEnvelope = {
    data: AddressCreateManyUserInput | AddressCreateManyUserInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type CartCreateWithoutUserInput = {
    cartItems?: CartItemCreateNestedManyWithoutCartInput | $Types.Skip
  }

  export type CartUncheckedCreateWithoutUserInput = {
    id?: number | $Types.Skip
    cartItems?: CartItemUncheckedCreateNestedManyWithoutCartInput | $Types.Skip
  }

  export type CartCreateOrConnectWithoutUserInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[] | $Types.Skip
    OR?: OrderScalarWhereInput[] | $Types.Skip
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"Order"> | number | $Types.Skip
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingCost?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingMethod?: StringFilter<"Order"> | string | $Types.Skip
    paymentMethod?: StringFilter<"Order"> | string | $Types.Skip
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus | $Types.Skip
    createdAt?: DateTimeFilter<"Order"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Order"> | Date | string | $Types.Skip
    userCPF?: StringFilter<"Order"> | string | $Types.Skip
    shippingAddressId?: IntFilter<"Order"> | number | $Types.Skip
    paymentId?: IntNullableFilter<"Order"> | number | null | $Types.Skip
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[] | $Types.Skip
    OR?: PaymentScalarWhereInput[] | $Types.Skip
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"Payment"> | number | $Types.Skip
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus | $Types.Skip
    paymentmethodId?: IntFilter<"Payment"> | number | $Types.Skip
    createdAt?: DateTimeFilter<"Payment"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Payment"> | Date | string | $Types.Skip
    userCPF?: StringFilter<"Payment"> | string | $Types.Skip
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[] | $Types.Skip
    OR?: ReviewScalarWhereInput[] | $Types.Skip
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"Review"> | number | $Types.Skip
    title?: StringFilter<"Review"> | string | $Types.Skip
    message?: StringFilter<"Review"> | string | $Types.Skip
    rating?: IntFilter<"Review"> | number | $Types.Skip
    createdAt?: DateTimeFilter<"Review"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Review"> | Date | string | $Types.Skip
    userCPF?: StringFilter<"Review"> | string | $Types.Skip
    productId?: IntFilter<"Review"> | number | $Types.Skip
  }

  export type AddressUpsertWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateManyWithWhereWithoutUserInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutUserInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[] | $Types.Skip
    OR?: AddressScalarWhereInput[] | $Types.Skip
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"Address"> | number | $Types.Skip
    cep?: StringFilter<"Address"> | string | $Types.Skip
    stateCode?: StringFilter<"Address"> | string | $Types.Skip
    city?: StringFilter<"Address"> | string | $Types.Skip
    neighborhood?: StringFilter<"Address"> | string | $Types.Skip
    street?: StringFilter<"Address"> | string | $Types.Skip
    number?: IntFilter<"Address"> | number | $Types.Skip
    additionalDetails?: StringNullableFilter<"Address"> | string | null | $Types.Skip
    userCPF?: StringFilter<"Address"> | string | $Types.Skip
  }

  export type CartUpsertWithoutUserInput = {
    update: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    where?: CartWhereInput | $Types.Skip
  }

  export type CartUpdateToOneWithWhereWithoutUserInput = {
    where?: CartWhereInput | $Types.Skip
    data: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
  }

  export type CartUpdateWithoutUserInput = {
    cartItems?: CartItemUpdateManyWithoutCartNestedInput | $Types.Skip
  }

  export type CartUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    cartItems?: CartItemUncheckedUpdateManyWithoutCartNestedInput | $Types.Skip
  }

  export type UserCreateWithoutReviewsInput = {
    cpf: string
    nome: string
    dataDeNascimento: Date | string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    orders?: OrderCreateNestedManyWithoutUserInput | $Types.Skip
    payments?: PaymentCreateNestedManyWithoutUserInput | $Types.Skip
    addresses?: AddressCreateNestedManyWithoutUserInput | $Types.Skip
    cart?: CartCreateNestedOneWithoutUserInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    cpf: string
    nome: string
    dataDeNascimento: Date | string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    cart?: CartUncheckedCreateNestedOneWithoutUserInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type ProductCreateWithoutReviewInput = {
    productName: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null | $Types.Skip
    sku?: string | null | $Types.Skip
    availableUnits: number
    slug: string
    updatedAt?: Date | string | $Types.Skip
    category?: CategoryCreateNestedOneWithoutProductsInput | $Types.Skip
    orderItem?: OrderItemCreateNestedManyWithoutProductInput | $Types.Skip
    cartItem?: CartItemCreateNestedManyWithoutProductInput | $Types.Skip
    images?: FileCreateNestedManyWithoutProductInput | $Types.Skip
  }

  export type ProductUncheckedCreateWithoutReviewInput = {
    id?: number | $Types.Skip
    productName: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null | $Types.Skip
    sku?: string | null | $Types.Skip
    availableUnits: number
    slug: string
    updatedAt?: Date | string | $Types.Skip
    categoryId?: number | null | $Types.Skip
    orderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
    images?: FileUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
  }

  export type ProductCreateOrConnectWithoutReviewInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutReviewInput, ProductUncheckedCreateWithoutReviewInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    cpf?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nome?: StringFieldUpdateOperationsInput | string | $Types.Skip
    dataDeNascimento?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orders?: OrderUpdateManyWithoutUserNestedInput | $Types.Skip
    payments?: PaymentUpdateManyWithoutUserNestedInput | $Types.Skip
    addresses?: AddressUpdateManyWithoutUserNestedInput | $Types.Skip
    cart?: CartUpdateOneWithoutUserNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    cpf?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nome?: StringFieldUpdateOperationsInput | string | $Types.Skip
    dataDeNascimento?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput | $Types.Skip
  }

  export type ProductUpsertWithoutReviewInput = {
    update: XOR<ProductUpdateWithoutReviewInput, ProductUncheckedUpdateWithoutReviewInput>
    create: XOR<ProductCreateWithoutReviewInput, ProductUncheckedCreateWithoutReviewInput>
    where?: ProductWhereInput | $Types.Skip
  }

  export type ProductUpdateToOneWithWhereWithoutReviewInput = {
    where?: ProductWhereInput | $Types.Skip
    data: XOR<ProductUpdateWithoutReviewInput, ProductUncheckedUpdateWithoutReviewInput>
  }

  export type ProductUpdateWithoutReviewInput = {
    productName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    sku?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    availableUnits?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    category?: CategoryUpdateOneWithoutProductsNestedInput | $Types.Skip
    orderItem?: OrderItemUpdateManyWithoutProductNestedInput | $Types.Skip
    cartItem?: CartItemUpdateManyWithoutProductNestedInput | $Types.Skip
    images?: FileUpdateManyWithoutProductNestedInput | $Types.Skip
  }

  export type ProductUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    productName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    sku?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    availableUnits?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    orderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
    images?: FileUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
  }

  export type CategoryCreateWithoutProductsInput = {
    title: string
    slug: string
    description?: string | null | $Types.Skip
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number | $Types.Skip
    title: string
    slug: string
    description?: string | null | $Types.Skip
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ReviewCreateWithoutProductInput = {
    title: string
    message: string
    rating: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutProductInput = {
    id?: number | $Types.Skip
    title: string
    message: string
    rating: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    userCPF: string
  }

  export type ReviewCreateOrConnectWithoutProductInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput>
  }

  export type ReviewCreateManyProductInputEnvelope = {
    data: ReviewCreateManyProductInput | ReviewCreateManyProductInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type OrderItemCreateWithoutProductInput = {
    order: OrderCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutProductInput = {
    id?: number | $Types.Skip
    orderId: number
  }

  export type OrderItemCreateOrConnectWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemCreateManyProductInputEnvelope = {
    data: OrderItemCreateManyProductInput | OrderItemCreateManyProductInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type CartItemCreateWithoutProductInput = {
    quantity: number
    cart: CartCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateWithoutProductInput = {
    id?: number | $Types.Skip
    cartId: number
    quantity: number
  }

  export type CartItemCreateOrConnectWithoutProductInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemCreateManyProductInputEnvelope = {
    data: CartItemCreateManyProductInput | CartItemCreateManyProductInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type FileCreateWithoutProductInput = {
    path: string
  }

  export type FileUncheckedCreateWithoutProductInput = {
    id?: number | $Types.Skip
    path: string
  }

  export type FileCreateOrConnectWithoutProductInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutProductInput, FileUncheckedCreateWithoutProductInput>
  }

  export type FileCreateManyProductInputEnvelope = {
    data: FileCreateManyProductInput | FileCreateManyProductInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput | $Types.Skip
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput | $Types.Skip
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type ReviewUpsertWithWhereUniqueWithoutProductInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutProductInput, ReviewUncheckedUpdateWithoutProductInput>
    create: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutProductInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutProductInput, ReviewUncheckedUpdateWithoutProductInput>
  }

  export type ReviewUpdateManyWithWhereWithoutProductInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[] | $Types.Skip
    OR?: OrderItemScalarWhereInput[] | $Types.Skip
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"OrderItem"> | number | $Types.Skip
    orderId?: IntFilter<"OrderItem"> | number | $Types.Skip
    productId?: IntFilter<"OrderItem"> | number | $Types.Skip
  }

  export type CartItemUpsertWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
  }

  export type CartItemUpdateManyWithWhereWithoutProductInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutProductInput>
  }

  export type CartItemScalarWhereInput = {
    AND?: CartItemScalarWhereInput | CartItemScalarWhereInput[] | $Types.Skip
    OR?: CartItemScalarWhereInput[] | $Types.Skip
    NOT?: CartItemScalarWhereInput | CartItemScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"CartItem"> | number | $Types.Skip
    cartId?: IntFilter<"CartItem"> | number | $Types.Skip
    productId?: IntFilter<"CartItem"> | number | $Types.Skip
    quantity?: IntFilter<"CartItem"> | number | $Types.Skip
  }

  export type FileUpsertWithWhereUniqueWithoutProductInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutProductInput, FileUncheckedUpdateWithoutProductInput>
    create: XOR<FileCreateWithoutProductInput, FileUncheckedCreateWithoutProductInput>
  }

  export type FileUpdateWithWhereUniqueWithoutProductInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutProductInput, FileUncheckedUpdateWithoutProductInput>
  }

  export type FileUpdateManyWithWhereWithoutProductInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutProductInput>
  }

  export type FileScalarWhereInput = {
    AND?: FileScalarWhereInput | FileScalarWhereInput[] | $Types.Skip
    OR?: FileScalarWhereInput[] | $Types.Skip
    NOT?: FileScalarWhereInput | FileScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"File"> | number | $Types.Skip
    path?: StringFilter<"File"> | string | $Types.Skip
    productId?: IntNullableFilter<"File"> | number | null | $Types.Skip
  }

  export type ProductCreateWithoutImagesInput = {
    productName: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null | $Types.Skip
    sku?: string | null | $Types.Skip
    availableUnits: number
    slug: string
    updatedAt?: Date | string | $Types.Skip
    category?: CategoryCreateNestedOneWithoutProductsInput | $Types.Skip
    review?: ReviewCreateNestedManyWithoutProductInput | $Types.Skip
    orderItem?: OrderItemCreateNestedManyWithoutProductInput | $Types.Skip
    cartItem?: CartItemCreateNestedManyWithoutProductInput | $Types.Skip
  }

  export type ProductUncheckedCreateWithoutImagesInput = {
    id?: number | $Types.Skip
    productName: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null | $Types.Skip
    sku?: string | null | $Types.Skip
    availableUnits: number
    slug: string
    updatedAt?: Date | string | $Types.Skip
    categoryId?: number | null | $Types.Skip
    review?: ReviewUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
    orderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
  }

  export type ProductCreateOrConnectWithoutImagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
  }

  export type ProductUpsertWithoutImagesInput = {
    update: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    where?: ProductWhereInput | $Types.Skip
  }

  export type ProductUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductWhereInput | $Types.Skip
    data: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ProductUpdateWithoutImagesInput = {
    productName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    sku?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    availableUnits?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    category?: CategoryUpdateOneWithoutProductsNestedInput | $Types.Skip
    review?: ReviewUpdateManyWithoutProductNestedInput | $Types.Skip
    orderItem?: OrderItemUpdateManyWithoutProductNestedInput | $Types.Skip
    cartItem?: CartItemUpdateManyWithoutProductNestedInput | $Types.Skip
  }

  export type ProductUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    productName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    sku?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    availableUnits?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    review?: ReviewUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
    orderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
  }

  export type UserCreateWithoutOrdersInput = {
    cpf: string
    nome: string
    dataDeNascimento: Date | string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    payments?: PaymentCreateNestedManyWithoutUserInput | $Types.Skip
    reviews?: ReviewCreateNestedManyWithoutUserInput | $Types.Skip
    addresses?: AddressCreateNestedManyWithoutUserInput | $Types.Skip
    cart?: CartCreateNestedOneWithoutUserInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    cpf: string
    nome: string
    dataDeNascimento: Date | string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    cart?: CartUncheckedCreateNestedOneWithoutUserInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type AddressCreateWithoutOrderInput = {
    cep: string
    stateCode: string
    city: string
    neighborhood: string
    street: string
    number: number
    additionalDetails?: string | null | $Types.Skip
    user: UserCreateNestedOneWithoutAddressesInput
  }

  export type AddressUncheckedCreateWithoutOrderInput = {
    id?: number | $Types.Skip
    cep: string
    stateCode: string
    city: string
    neighborhood: string
    street: string
    number: number
    additionalDetails?: string | null | $Types.Skip
    userCPF: string
  }

  export type AddressCreateOrConnectWithoutOrderInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutOrderInput, AddressUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    product: ProductCreateNestedOneWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: number | $Types.Skip
    productId: number
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type PaymentCreateWithoutOrderInput = {
    status: $Enums.PaymentStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    paymentMethod: PaymentMethodCreateNestedOneWithoutPaymentInput
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutOrderInput = {
    id?: number | $Types.Skip
    status: $Enums.PaymentStatus
    paymentmethodId: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    userCPF: string
  }

  export type PaymentCreateOrConnectWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    cpf?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nome?: StringFieldUpdateOperationsInput | string | $Types.Skip
    dataDeNascimento?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    payments?: PaymentUpdateManyWithoutUserNestedInput | $Types.Skip
    reviews?: ReviewUpdateManyWithoutUserNestedInput | $Types.Skip
    addresses?: AddressUpdateManyWithoutUserNestedInput | $Types.Skip
    cart?: CartUpdateOneWithoutUserNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    cpf?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nome?: StringFieldUpdateOperationsInput | string | $Types.Skip
    dataDeNascimento?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput | $Types.Skip
  }

  export type AddressUpsertWithoutOrderInput = {
    update: XOR<AddressUpdateWithoutOrderInput, AddressUncheckedUpdateWithoutOrderInput>
    create: XOR<AddressCreateWithoutOrderInput, AddressUncheckedCreateWithoutOrderInput>
    where?: AddressWhereInput | $Types.Skip
  }

  export type AddressUpdateToOneWithWhereWithoutOrderInput = {
    where?: AddressWhereInput | $Types.Skip
    data: XOR<AddressUpdateWithoutOrderInput, AddressUncheckedUpdateWithoutOrderInput>
  }

  export type AddressUpdateWithoutOrderInput = {
    cep?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stateCode?: StringFieldUpdateOperationsInput | string | $Types.Skip
    city?: StringFieldUpdateOperationsInput | string | $Types.Skip
    neighborhood?: StringFieldUpdateOperationsInput | string | $Types.Skip
    street?: StringFieldUpdateOperationsInput | string | $Types.Skip
    number?: IntFieldUpdateOperationsInput | number | $Types.Skip
    additionalDetails?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    user?: UserUpdateOneRequiredWithoutAddressesNestedInput | $Types.Skip
  }

  export type AddressUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    cep?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stateCode?: StringFieldUpdateOperationsInput | string | $Types.Skip
    city?: StringFieldUpdateOperationsInput | string | $Types.Skip
    neighborhood?: StringFieldUpdateOperationsInput | string | $Types.Skip
    street?: StringFieldUpdateOperationsInput | string | $Types.Skip
    number?: IntFieldUpdateOperationsInput | number | $Types.Skip
    additionalDetails?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentUpsertWithoutOrderInput = {
    update: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    where?: PaymentWhereInput | $Types.Skip
  }

  export type PaymentUpdateToOneWithWhereWithoutOrderInput = {
    where?: PaymentWhereInput | $Types.Skip
    data: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUpdateWithoutOrderInput = {
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    paymentMethod?: PaymentMethodUpdateOneRequiredWithoutPaymentNestedInput | $Types.Skip
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput | $Types.Skip
  }

  export type PaymentUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | $Types.Skip
    paymentmethodId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type OrderCreateWithoutOrderItemsInput = {
    total: Decimal | DecimalJsLike | number | string
    shippingCost: Decimal | DecimalJsLike | number | string
    shippingMethod: string
    paymentMethod: string
    status: $Enums.OrderStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    user: UserCreateNestedOneWithoutOrdersInput
    shippingAddress: AddressCreateNestedOneWithoutOrderInput
    payment?: PaymentCreateNestedOneWithoutOrderInput | $Types.Skip
  }

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    id?: number | $Types.Skip
    total: Decimal | DecimalJsLike | number | string
    shippingCost: Decimal | DecimalJsLike | number | string
    shippingMethod: string
    paymentMethod: string
    status: $Enums.OrderStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    userCPF: string
    shippingAddressId: number
    paymentId?: number | null | $Types.Skip
  }

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type ProductCreateWithoutOrderItemInput = {
    productName: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null | $Types.Skip
    sku?: string | null | $Types.Skip
    availableUnits: number
    slug: string
    updatedAt?: Date | string | $Types.Skip
    category?: CategoryCreateNestedOneWithoutProductsInput | $Types.Skip
    review?: ReviewCreateNestedManyWithoutProductInput | $Types.Skip
    cartItem?: CartItemCreateNestedManyWithoutProductInput | $Types.Skip
    images?: FileCreateNestedManyWithoutProductInput | $Types.Skip
  }

  export type ProductUncheckedCreateWithoutOrderItemInput = {
    id?: number | $Types.Skip
    productName: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null | $Types.Skip
    sku?: string | null | $Types.Skip
    availableUnits: number
    slug: string
    updatedAt?: Date | string | $Types.Skip
    categoryId?: number | null | $Types.Skip
    review?: ReviewUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
    images?: FileUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
  }

  export type ProductCreateOrConnectWithoutOrderItemInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    where?: OrderWhereInput | $Types.Skip
  }

  export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrderWhereInput | $Types.Skip
    data: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderUpdateWithoutOrderItemsInput = {
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput | $Types.Skip
    shippingAddress?: AddressUpdateOneRequiredWithoutOrderNestedInput | $Types.Skip
    payment?: PaymentUpdateOneWithoutOrderNestedInput | $Types.Skip
  }

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shippingAddressId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
  }

  export type ProductUpsertWithoutOrderItemInput = {
    update: XOR<ProductUpdateWithoutOrderItemInput, ProductUncheckedUpdateWithoutOrderItemInput>
    create: XOR<ProductCreateWithoutOrderItemInput, ProductUncheckedCreateWithoutOrderItemInput>
    where?: ProductWhereInput | $Types.Skip
  }

  export type ProductUpdateToOneWithWhereWithoutOrderItemInput = {
    where?: ProductWhereInput | $Types.Skip
    data: XOR<ProductUpdateWithoutOrderItemInput, ProductUncheckedUpdateWithoutOrderItemInput>
  }

  export type ProductUpdateWithoutOrderItemInput = {
    productName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    sku?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    availableUnits?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    category?: CategoryUpdateOneWithoutProductsNestedInput | $Types.Skip
    review?: ReviewUpdateManyWithoutProductNestedInput | $Types.Skip
    cartItem?: CartItemUpdateManyWithoutProductNestedInput | $Types.Skip
    images?: FileUpdateManyWithoutProductNestedInput | $Types.Skip
  }

  export type ProductUncheckedUpdateWithoutOrderItemInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    productName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    sku?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    availableUnits?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    review?: ReviewUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
    images?: FileUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
  }

  export type UserCreateWithoutCartInput = {
    cpf: string
    nome: string
    dataDeNascimento: Date | string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    orders?: OrderCreateNestedManyWithoutUserInput | $Types.Skip
    payments?: PaymentCreateNestedManyWithoutUserInput | $Types.Skip
    reviews?: ReviewCreateNestedManyWithoutUserInput | $Types.Skip
    addresses?: AddressCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutCartInput = {
    cpf: string
    nome: string
    dataDeNascimento: Date | string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutCartInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateWithoutCartInput = {
    quantity: number
    product: ProductCreateNestedOneWithoutCartItemInput
  }

  export type CartItemUncheckedCreateWithoutCartInput = {
    id?: number | $Types.Skip
    productId: number
    quantity: number
  }

  export type CartItemCreateOrConnectWithoutCartInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateManyCartInputEnvelope = {
    data: CartItemCreateManyCartInput | CartItemCreateManyCartInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type UserUpsertWithoutCartInput = {
    update: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutCartInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
  }

  export type UserUpdateWithoutCartInput = {
    cpf?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nome?: StringFieldUpdateOperationsInput | string | $Types.Skip
    dataDeNascimento?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orders?: OrderUpdateManyWithoutUserNestedInput | $Types.Skip
    payments?: PaymentUpdateManyWithoutUserNestedInput | $Types.Skip
    reviews?: ReviewUpdateManyWithoutUserNestedInput | $Types.Skip
    addresses?: AddressUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutCartInput = {
    cpf?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nome?: StringFieldUpdateOperationsInput | string | $Types.Skip
    dataDeNascimento?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type CartItemUpsertWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithWhereWithoutCartInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutCartInput>
  }

  export type CartCreateWithoutCartItemsInput = {
    user: UserCreateNestedOneWithoutCartInput
  }

  export type CartUncheckedCreateWithoutCartItemsInput = {
    id?: number | $Types.Skip
    userCPF: string
  }

  export type CartCreateOrConnectWithoutCartItemsInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutCartItemsInput, CartUncheckedCreateWithoutCartItemsInput>
  }

  export type ProductCreateWithoutCartItemInput = {
    productName: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null | $Types.Skip
    sku?: string | null | $Types.Skip
    availableUnits: number
    slug: string
    updatedAt?: Date | string | $Types.Skip
    category?: CategoryCreateNestedOneWithoutProductsInput | $Types.Skip
    review?: ReviewCreateNestedManyWithoutProductInput | $Types.Skip
    orderItem?: OrderItemCreateNestedManyWithoutProductInput | $Types.Skip
    images?: FileCreateNestedManyWithoutProductInput | $Types.Skip
  }

  export type ProductUncheckedCreateWithoutCartItemInput = {
    id?: number | $Types.Skip
    productName: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null | $Types.Skip
    sku?: string | null | $Types.Skip
    availableUnits: number
    slug: string
    updatedAt?: Date | string | $Types.Skip
    categoryId?: number | null | $Types.Skip
    review?: ReviewUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
    orderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
    images?: FileUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
  }

  export type ProductCreateOrConnectWithoutCartItemInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCartItemInput, ProductUncheckedCreateWithoutCartItemInput>
  }

  export type CartUpsertWithoutCartItemsInput = {
    update: XOR<CartUpdateWithoutCartItemsInput, CartUncheckedUpdateWithoutCartItemsInput>
    create: XOR<CartCreateWithoutCartItemsInput, CartUncheckedCreateWithoutCartItemsInput>
    where?: CartWhereInput | $Types.Skip
  }

  export type CartUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: CartWhereInput | $Types.Skip
    data: XOR<CartUpdateWithoutCartItemsInput, CartUncheckedUpdateWithoutCartItemsInput>
  }

  export type CartUpdateWithoutCartItemsInput = {
    user?: UserUpdateOneRequiredWithoutCartNestedInput | $Types.Skip
  }

  export type CartUncheckedUpdateWithoutCartItemsInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type ProductUpsertWithoutCartItemInput = {
    update: XOR<ProductUpdateWithoutCartItemInput, ProductUncheckedUpdateWithoutCartItemInput>
    create: XOR<ProductCreateWithoutCartItemInput, ProductUncheckedCreateWithoutCartItemInput>
    where?: ProductWhereInput | $Types.Skip
  }

  export type ProductUpdateToOneWithWhereWithoutCartItemInput = {
    where?: ProductWhereInput | $Types.Skip
    data: XOR<ProductUpdateWithoutCartItemInput, ProductUncheckedUpdateWithoutCartItemInput>
  }

  export type ProductUpdateWithoutCartItemInput = {
    productName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    sku?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    availableUnits?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    category?: CategoryUpdateOneWithoutProductsNestedInput | $Types.Skip
    review?: ReviewUpdateManyWithoutProductNestedInput | $Types.Skip
    orderItem?: OrderItemUpdateManyWithoutProductNestedInput | $Types.Skip
    images?: FileUpdateManyWithoutProductNestedInput | $Types.Skip
  }

  export type ProductUncheckedUpdateWithoutCartItemInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    productName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    sku?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    availableUnits?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    review?: ReviewUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
    orderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
    images?: FileUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
  }

  export type OrderCreateWithoutShippingAddressInput = {
    total: Decimal | DecimalJsLike | number | string
    shippingCost: Decimal | DecimalJsLike | number | string
    shippingMethod: string
    paymentMethod: string
    status: $Enums.OrderStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    user: UserCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput | $Types.Skip
    payment?: PaymentCreateNestedOneWithoutOrderInput | $Types.Skip
  }

  export type OrderUncheckedCreateWithoutShippingAddressInput = {
    id?: number | $Types.Skip
    total: Decimal | DecimalJsLike | number | string
    shippingCost: Decimal | DecimalJsLike | number | string
    shippingMethod: string
    paymentMethod: string
    status: $Enums.OrderStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    userCPF: string
    paymentId?: number | null | $Types.Skip
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput | $Types.Skip
  }

  export type OrderCreateOrConnectWithoutShippingAddressInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutShippingAddressInput, OrderUncheckedCreateWithoutShippingAddressInput>
  }

  export type OrderCreateManyShippingAddressInputEnvelope = {
    data: OrderCreateManyShippingAddressInput | OrderCreateManyShippingAddressInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type UserCreateWithoutAddressesInput = {
    cpf: string
    nome: string
    dataDeNascimento: Date | string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    orders?: OrderCreateNestedManyWithoutUserInput | $Types.Skip
    payments?: PaymentCreateNestedManyWithoutUserInput | $Types.Skip
    reviews?: ReviewCreateNestedManyWithoutUserInput | $Types.Skip
    cart?: CartCreateNestedOneWithoutUserInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutAddressesInput = {
    cpf: string
    nome: string
    dataDeNascimento: Date | string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    cart?: CartUncheckedCreateNestedOneWithoutUserInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutAddressesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutShippingAddressInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutShippingAddressInput, OrderUncheckedUpdateWithoutShippingAddressInput>
    create: XOR<OrderCreateWithoutShippingAddressInput, OrderUncheckedCreateWithoutShippingAddressInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutShippingAddressInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutShippingAddressInput, OrderUncheckedUpdateWithoutShippingAddressInput>
  }

  export type OrderUpdateManyWithWhereWithoutShippingAddressInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutShippingAddressInput>
  }

  export type UserUpsertWithoutAddressesInput = {
    update: XOR<UserUpdateWithoutAddressesInput, UserUncheckedUpdateWithoutAddressesInput>
    create: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutAddressesInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutAddressesInput, UserUncheckedUpdateWithoutAddressesInput>
  }

  export type UserUpdateWithoutAddressesInput = {
    cpf?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nome?: StringFieldUpdateOperationsInput | string | $Types.Skip
    dataDeNascimento?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orders?: OrderUpdateManyWithoutUserNestedInput | $Types.Skip
    payments?: PaymentUpdateManyWithoutUserNestedInput | $Types.Skip
    reviews?: ReviewUpdateManyWithoutUserNestedInput | $Types.Skip
    cart?: CartUpdateOneWithoutUserNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutAddressesInput = {
    cpf?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nome?: StringFieldUpdateOperationsInput | string | $Types.Skip
    dataDeNascimento?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput | $Types.Skip
  }

  export type ProductCreateWithoutCategoryInput = {
    productName: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null | $Types.Skip
    sku?: string | null | $Types.Skip
    availableUnits: number
    slug: string
    updatedAt?: Date | string | $Types.Skip
    review?: ReviewCreateNestedManyWithoutProductInput | $Types.Skip
    orderItem?: OrderItemCreateNestedManyWithoutProductInput | $Types.Skip
    cartItem?: CartItemCreateNestedManyWithoutProductInput | $Types.Skip
    images?: FileCreateNestedManyWithoutProductInput | $Types.Skip
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number | $Types.Skip
    productName: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null | $Types.Skip
    sku?: string | null | $Types.Skip
    availableUnits: number
    slug: string
    updatedAt?: Date | string | $Types.Skip
    review?: ReviewUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
    orderItem?: OrderItemUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
    cartItem?: CartItemUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
    images?: FileUncheckedCreateNestedManyWithoutProductInput | $Types.Skip
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[] | $Types.Skip
    OR?: ProductScalarWhereInput[] | $Types.Skip
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"Product"> | number | $Types.Skip
    productName?: StringFilter<"Product"> | string | $Types.Skip
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string | $Types.Skip
    description?: StringNullableFilter<"Product"> | string | null | $Types.Skip
    sku?: StringNullableFilter<"Product"> | string | null | $Types.Skip
    availableUnits?: IntFilter<"Product"> | number | $Types.Skip
    slug?: StringFilter<"Product"> | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Product"> | Date | string | $Types.Skip
    categoryId?: IntNullableFilter<"Product"> | number | null | $Types.Skip
  }

  export type PaymentMethodCreateWithoutPaymentInput = {
    methodName: string
  }

  export type PaymentMethodUncheckedCreateWithoutPaymentInput = {
    id?: number | $Types.Skip
    methodName: string
  }

  export type PaymentMethodCreateOrConnectWithoutPaymentInput = {
    where: PaymentMethodWhereUniqueInput
    create: XOR<PaymentMethodCreateWithoutPaymentInput, PaymentMethodUncheckedCreateWithoutPaymentInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    cpf: string
    nome: string
    dataDeNascimento: Date | string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    orders?: OrderCreateNestedManyWithoutUserInput | $Types.Skip
    reviews?: ReviewCreateNestedManyWithoutUserInput | $Types.Skip
    addresses?: AddressCreateNestedManyWithoutUserInput | $Types.Skip
    cart?: CartCreateNestedOneWithoutUserInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    cpf: string
    nome: string
    dataDeNascimento: Date | string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    cart?: CartUncheckedCreateNestedOneWithoutUserInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type OrderCreateWithoutPaymentInput = {
    total: Decimal | DecimalJsLike | number | string
    shippingCost: Decimal | DecimalJsLike | number | string
    shippingMethod: string
    paymentMethod: string
    status: $Enums.OrderStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    user: UserCreateNestedOneWithoutOrdersInput
    shippingAddress: AddressCreateNestedOneWithoutOrderInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput | $Types.Skip
  }

  export type OrderUncheckedCreateWithoutPaymentInput = {
    id?: number | $Types.Skip
    total: Decimal | DecimalJsLike | number | string
    shippingCost: Decimal | DecimalJsLike | number | string
    shippingMethod: string
    paymentMethod: string
    status: $Enums.OrderStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    userCPF: string
    shippingAddressId: number
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput | $Types.Skip
  }

  export type OrderCreateOrConnectWithoutPaymentInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
  }

  export type OrderCreateManyPaymentInputEnvelope = {
    data: OrderCreateManyPaymentInput | OrderCreateManyPaymentInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type PaymentMethodUpsertWithoutPaymentInput = {
    update: XOR<PaymentMethodUpdateWithoutPaymentInput, PaymentMethodUncheckedUpdateWithoutPaymentInput>
    create: XOR<PaymentMethodCreateWithoutPaymentInput, PaymentMethodUncheckedCreateWithoutPaymentInput>
    where?: PaymentMethodWhereInput | $Types.Skip
  }

  export type PaymentMethodUpdateToOneWithWhereWithoutPaymentInput = {
    where?: PaymentMethodWhereInput | $Types.Skip
    data: XOR<PaymentMethodUpdateWithoutPaymentInput, PaymentMethodUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentMethodUpdateWithoutPaymentInput = {
    methodName?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type PaymentMethodUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    methodName?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    cpf?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nome?: StringFieldUpdateOperationsInput | string | $Types.Skip
    dataDeNascimento?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orders?: OrderUpdateManyWithoutUserNestedInput | $Types.Skip
    reviews?: ReviewUpdateManyWithoutUserNestedInput | $Types.Skip
    addresses?: AddressUpdateManyWithoutUserNestedInput | $Types.Skip
    cart?: CartUpdateOneWithoutUserNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    cpf?: StringFieldUpdateOperationsInput | string | $Types.Skip
    nome?: StringFieldUpdateOperationsInput | string | $Types.Skip
    dataDeNascimento?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput | $Types.Skip
  }

  export type OrderUpsertWithWhereUniqueWithoutPaymentInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutPaymentInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
  }

  export type OrderUpdateManyWithWhereWithoutPaymentInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutPaymentInput>
  }

  export type PaymentCreateWithoutPaymentMethodInput = {
    status: $Enums.PaymentStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    user: UserCreateNestedOneWithoutPaymentsInput
    Order?: OrderCreateNestedManyWithoutPaymentInput | $Types.Skip
  }

  export type PaymentUncheckedCreateWithoutPaymentMethodInput = {
    id?: number | $Types.Skip
    status: $Enums.PaymentStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    userCPF: string
    Order?: OrderUncheckedCreateNestedManyWithoutPaymentInput | $Types.Skip
  }

  export type PaymentCreateOrConnectWithoutPaymentMethodInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPaymentMethodInput, PaymentUncheckedCreateWithoutPaymentMethodInput>
  }

  export type PaymentUpsertWithoutPaymentMethodInput = {
    update: XOR<PaymentUpdateWithoutPaymentMethodInput, PaymentUncheckedUpdateWithoutPaymentMethodInput>
    create: XOR<PaymentCreateWithoutPaymentMethodInput, PaymentUncheckedCreateWithoutPaymentMethodInput>
    where?: PaymentWhereInput | $Types.Skip
  }

  export type PaymentUpdateToOneWithWhereWithoutPaymentMethodInput = {
    where?: PaymentWhereInput | $Types.Skip
    data: XOR<PaymentUpdateWithoutPaymentMethodInput, PaymentUncheckedUpdateWithoutPaymentMethodInput>
  }

  export type PaymentUpdateWithoutPaymentMethodInput = {
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput | $Types.Skip
    Order?: OrderUpdateManyWithoutPaymentNestedInput | $Types.Skip
  }

  export type PaymentUncheckedUpdateWithoutPaymentMethodInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
    Order?: OrderUncheckedUpdateManyWithoutPaymentNestedInput | $Types.Skip
  }

  export type OrderCreateManyUserInput = {
    id?: number | $Types.Skip
    total: Decimal | DecimalJsLike | number | string
    shippingCost: Decimal | DecimalJsLike | number | string
    shippingMethod: string
    paymentMethod: string
    status: $Enums.OrderStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    shippingAddressId: number
    paymentId?: number | null | $Types.Skip
  }

  export type PaymentCreateManyUserInput = {
    id?: number | $Types.Skip
    status: $Enums.PaymentStatus
    paymentmethodId: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ReviewCreateManyUserInput = {
    id?: number | $Types.Skip
    title: string
    message: string
    rating: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    productId: number
  }

  export type AddressCreateManyUserInput = {
    id?: number | $Types.Skip
    cep: string
    stateCode: string
    city: string
    neighborhood: string
    street: string
    number: number
    additionalDetails?: string | null | $Types.Skip
  }

  export type OrderUpdateWithoutUserInput = {
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    shippingAddress?: AddressUpdateOneRequiredWithoutOrderNestedInput | $Types.Skip
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput | $Types.Skip
    payment?: PaymentUpdateOneWithoutOrderNestedInput | $Types.Skip
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    shippingAddressId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput | $Types.Skip
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    shippingAddressId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
  }

  export type PaymentUpdateWithoutUserInput = {
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    paymentMethod?: PaymentMethodUpdateOneRequiredWithoutPaymentNestedInput | $Types.Skip
    Order?: OrderUpdateManyWithoutPaymentNestedInput | $Types.Skip
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | $Types.Skip
    paymentmethodId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    Order?: OrderUncheckedUpdateManyWithoutPaymentNestedInput | $Types.Skip
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus | $Types.Skip
    paymentmethodId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ReviewUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    rating?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    product?: ProductUpdateOneRequiredWithoutReviewNestedInput | $Types.Skip
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    rating?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    productId?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    rating?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    productId?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type AddressUpdateWithoutUserInput = {
    cep?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stateCode?: StringFieldUpdateOperationsInput | string | $Types.Skip
    city?: StringFieldUpdateOperationsInput | string | $Types.Skip
    neighborhood?: StringFieldUpdateOperationsInput | string | $Types.Skip
    street?: StringFieldUpdateOperationsInput | string | $Types.Skip
    number?: IntFieldUpdateOperationsInput | number | $Types.Skip
    additionalDetails?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    Order?: OrderUpdateManyWithoutShippingAddressNestedInput | $Types.Skip
  }

  export type AddressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    cep?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stateCode?: StringFieldUpdateOperationsInput | string | $Types.Skip
    city?: StringFieldUpdateOperationsInput | string | $Types.Skip
    neighborhood?: StringFieldUpdateOperationsInput | string | $Types.Skip
    street?: StringFieldUpdateOperationsInput | string | $Types.Skip
    number?: IntFieldUpdateOperationsInput | number | $Types.Skip
    additionalDetails?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    Order?: OrderUncheckedUpdateManyWithoutShippingAddressNestedInput | $Types.Skip
  }

  export type AddressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    cep?: StringFieldUpdateOperationsInput | string | $Types.Skip
    stateCode?: StringFieldUpdateOperationsInput | string | $Types.Skip
    city?: StringFieldUpdateOperationsInput | string | $Types.Skip
    neighborhood?: StringFieldUpdateOperationsInput | string | $Types.Skip
    street?: StringFieldUpdateOperationsInput | string | $Types.Skip
    number?: IntFieldUpdateOperationsInput | number | $Types.Skip
    additionalDetails?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type ReviewCreateManyProductInput = {
    id?: number | $Types.Skip
    title: string
    message: string
    rating: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    userCPF: string
  }

  export type OrderItemCreateManyProductInput = {
    id?: number | $Types.Skip
    orderId: number
  }

  export type CartItemCreateManyProductInput = {
    id?: number | $Types.Skip
    cartId: number
    quantity: number
  }

  export type FileCreateManyProductInput = {
    id?: number | $Types.Skip
    path: string
  }

  export type ReviewUpdateWithoutProductInput = {
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    rating?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput | $Types.Skip
  }

  export type ReviewUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    rating?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type ReviewUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    title?: StringFieldUpdateOperationsInput | string | $Types.Skip
    message?: StringFieldUpdateOperationsInput | string | $Types.Skip
    rating?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type OrderItemUpdateWithoutProductInput = {
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput | $Types.Skip
  }

  export type OrderItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    orderId?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type OrderItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    orderId?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type CartItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    cart?: CartUpdateOneRequiredWithoutCartItemsNestedInput | $Types.Skip
  }

  export type CartItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    cartId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type CartItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    cartId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type FileUpdateWithoutProductInput = {
    path?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type FileUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    path?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type FileUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    path?: StringFieldUpdateOperationsInput | string | $Types.Skip
  }

  export type OrderItemCreateManyOrderInput = {
    id?: number | $Types.Skip
    productId: number
  }

  export type OrderItemUpdateWithoutOrderInput = {
    product?: ProductUpdateOneRequiredWithoutOrderItemNestedInput | $Types.Skip
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    productId?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    productId?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type CartItemCreateManyCartInput = {
    id?: number | $Types.Skip
    productId: number
    quantity: number
  }

  export type CartItemUpdateWithoutCartInput = {
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
    product?: ProductUpdateOneRequiredWithoutCartItemNestedInput | $Types.Skip
  }

  export type CartItemUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    productId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type CartItemUncheckedUpdateManyWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    productId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    quantity?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }

  export type OrderCreateManyShippingAddressInput = {
    id?: number | $Types.Skip
    total: Decimal | DecimalJsLike | number | string
    shippingCost: Decimal | DecimalJsLike | number | string
    shippingMethod: string
    paymentMethod: string
    status: $Enums.OrderStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    userCPF: string
    paymentId?: number | null | $Types.Skip
  }

  export type OrderUpdateWithoutShippingAddressInput = {
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput | $Types.Skip
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput | $Types.Skip
    payment?: PaymentUpdateOneWithoutOrderNestedInput | $Types.Skip
  }

  export type OrderUncheckedUpdateWithoutShippingAddressInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput | $Types.Skip
  }

  export type OrderUncheckedUpdateManyWithoutShippingAddressInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
  }

  export type ProductCreateManyCategoryInput = {
    id?: number | $Types.Skip
    productName: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null | $Types.Skip
    sku?: string | null | $Types.Skip
    availableUnits: number
    slug: string
    updatedAt?: Date | string | $Types.Skip
  }

  export type ProductUpdateWithoutCategoryInput = {
    productName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    sku?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    availableUnits?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    review?: ReviewUpdateManyWithoutProductNestedInput | $Types.Skip
    orderItem?: OrderItemUpdateManyWithoutProductNestedInput | $Types.Skip
    cartItem?: CartItemUpdateManyWithoutProductNestedInput | $Types.Skip
    images?: FileUpdateManyWithoutProductNestedInput | $Types.Skip
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    productName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    sku?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    availableUnits?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    review?: ReviewUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
    orderItem?: OrderItemUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
    cartItem?: CartItemUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
    images?: FileUncheckedUpdateManyWithoutProductNestedInput | $Types.Skip
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    productName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    sku?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    availableUnits?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type OrderCreateManyPaymentInput = {
    id?: number | $Types.Skip
    total: Decimal | DecimalJsLike | number | string
    shippingCost: Decimal | DecimalJsLike | number | string
    shippingMethod: string
    paymentMethod: string
    status: $Enums.OrderStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    userCPF: string
    shippingAddressId: number
  }

  export type OrderUpdateWithoutPaymentInput = {
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput | $Types.Skip
    shippingAddress?: AddressUpdateOneRequiredWithoutOrderNestedInput | $Types.Skip
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput | $Types.Skip
  }

  export type OrderUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shippingAddressId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput | $Types.Skip
  }

  export type OrderUncheckedUpdateManyWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingCost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | $Types.Skip
    shippingMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    paymentMethod?: StringFieldUpdateOperationsInput | string | $Types.Skip
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    userCPF?: StringFieldUpdateOperationsInput | string | $Types.Skip
    shippingAddressId?: IntFieldUpdateOperationsInput | number | $Types.Skip
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}