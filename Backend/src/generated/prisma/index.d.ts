
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model MUser
 * 
 */
export type MUser = $Result.DefaultSelection<Prisma.$MUserPayload>
/**
 * Model MAtlet
 * 
 */
export type MAtlet = $Result.DefaultSelection<Prisma.$MAtletPayload>
/**
 * Model MPelatih
 * 
 */
export type MPelatih = $Result.DefaultSelection<Prisma.$MPelatihPayload>
/**
 * Model MProvinsi
 * 
 */
export type MProvinsi = $Result.DefaultSelection<Prisma.$MProvinsiPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleUser: {
  Admin: 'Admin',
  Manajemen: 'Manajemen',
  pelatih_teknik: 'pelatih_teknik',
  Atlet: 'Atlet',
  pelatih_fisik: 'pelatih_fisik'
};

export type RoleUser = (typeof RoleUser)[keyof typeof RoleUser]


export const JenisKelamin: {
  Laki_Laki: 'Laki_Laki',
  Perempuan: 'Perempuan'
};

export type JenisKelamin = (typeof JenisKelamin)[keyof typeof JenisKelamin]


export const PeganganRaket: {
  Kanan: 'Kanan',
  Kiri: 'Kiri'
};

export type PeganganRaket = (typeof PeganganRaket)[keyof typeof PeganganRaket]


export const StatusAtlet: {
  Aktif: 'Aktif',
  Non_Aktif: 'Non_Aktif'
};

export type StatusAtlet = (typeof StatusAtlet)[keyof typeof StatusAtlet]

}

export type RoleUser = $Enums.RoleUser

export const RoleUser: typeof $Enums.RoleUser

export type JenisKelamin = $Enums.JenisKelamin

export const JenisKelamin: typeof $Enums.JenisKelamin

export type PeganganRaket = $Enums.PeganganRaket

export const PeganganRaket: typeof $Enums.PeganganRaket

export type StatusAtlet = $Enums.StatusAtlet

export const StatusAtlet: typeof $Enums.StatusAtlet

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more MUsers
 * const mUsers = await prisma.mUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more MUsers
   * const mUsers = await prisma.mUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.mUser`: Exposes CRUD operations for the **MUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MUsers
    * const mUsers = await prisma.mUser.findMany()
    * ```
    */
  get mUser(): Prisma.MUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mAtlet`: Exposes CRUD operations for the **MAtlet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MAtlets
    * const mAtlets = await prisma.mAtlet.findMany()
    * ```
    */
  get mAtlet(): Prisma.MAtletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mPelatih`: Exposes CRUD operations for the **MPelatih** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MPelatihs
    * const mPelatihs = await prisma.mPelatih.findMany()
    * ```
    */
  get mPelatih(): Prisma.MPelatihDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mProvinsi`: Exposes CRUD operations for the **MProvinsi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MProvinsis
    * const mProvinsis = await prisma.mProvinsi.findMany()
    * ```
    */
  get mProvinsi(): Prisma.MProvinsiDelegate<ExtArgs, ClientOptions>;
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
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

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
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    MUser: 'MUser',
    MAtlet: 'MAtlet',
    MPelatih: 'MPelatih',
    MProvinsi: 'MProvinsi'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "mUser" | "mAtlet" | "mPelatih" | "mProvinsi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MUser: {
        payload: Prisma.$MUserPayload<ExtArgs>
        fields: Prisma.MUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MUserPayload>
          }
          findFirst: {
            args: Prisma.MUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MUserPayload>
          }
          findMany: {
            args: Prisma.MUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MUserPayload>[]
          }
          create: {
            args: Prisma.MUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MUserPayload>
          }
          createMany: {
            args: Prisma.MUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MUserPayload>[]
          }
          delete: {
            args: Prisma.MUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MUserPayload>
          }
          update: {
            args: Prisma.MUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MUserPayload>
          }
          deleteMany: {
            args: Prisma.MUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MUserPayload>[]
          }
          upsert: {
            args: Prisma.MUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MUserPayload>
          }
          aggregate: {
            args: Prisma.MUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMUser>
          }
          groupBy: {
            args: Prisma.MUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<MUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.MUserCountArgs<ExtArgs>
            result: $Utils.Optional<MUserCountAggregateOutputType> | number
          }
        }
      }
      MAtlet: {
        payload: Prisma.$MAtletPayload<ExtArgs>
        fields: Prisma.MAtletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MAtletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MAtletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MAtletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MAtletPayload>
          }
          findFirst: {
            args: Prisma.MAtletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MAtletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MAtletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MAtletPayload>
          }
          findMany: {
            args: Prisma.MAtletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MAtletPayload>[]
          }
          create: {
            args: Prisma.MAtletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MAtletPayload>
          }
          createMany: {
            args: Prisma.MAtletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MAtletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MAtletPayload>[]
          }
          delete: {
            args: Prisma.MAtletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MAtletPayload>
          }
          update: {
            args: Prisma.MAtletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MAtletPayload>
          }
          deleteMany: {
            args: Prisma.MAtletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MAtletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MAtletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MAtletPayload>[]
          }
          upsert: {
            args: Prisma.MAtletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MAtletPayload>
          }
          aggregate: {
            args: Prisma.MAtletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMAtlet>
          }
          groupBy: {
            args: Prisma.MAtletGroupByArgs<ExtArgs>
            result: $Utils.Optional<MAtletGroupByOutputType>[]
          }
          count: {
            args: Prisma.MAtletCountArgs<ExtArgs>
            result: $Utils.Optional<MAtletCountAggregateOutputType> | number
          }
        }
      }
      MPelatih: {
        payload: Prisma.$MPelatihPayload<ExtArgs>
        fields: Prisma.MPelatihFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MPelatihFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MPelatihPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MPelatihFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MPelatihPayload>
          }
          findFirst: {
            args: Prisma.MPelatihFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MPelatihPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MPelatihFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MPelatihPayload>
          }
          findMany: {
            args: Prisma.MPelatihFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MPelatihPayload>[]
          }
          create: {
            args: Prisma.MPelatihCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MPelatihPayload>
          }
          createMany: {
            args: Prisma.MPelatihCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MPelatihCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MPelatihPayload>[]
          }
          delete: {
            args: Prisma.MPelatihDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MPelatihPayload>
          }
          update: {
            args: Prisma.MPelatihUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MPelatihPayload>
          }
          deleteMany: {
            args: Prisma.MPelatihDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MPelatihUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MPelatihUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MPelatihPayload>[]
          }
          upsert: {
            args: Prisma.MPelatihUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MPelatihPayload>
          }
          aggregate: {
            args: Prisma.MPelatihAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMPelatih>
          }
          groupBy: {
            args: Prisma.MPelatihGroupByArgs<ExtArgs>
            result: $Utils.Optional<MPelatihGroupByOutputType>[]
          }
          count: {
            args: Prisma.MPelatihCountArgs<ExtArgs>
            result: $Utils.Optional<MPelatihCountAggregateOutputType> | number
          }
        }
      }
      MProvinsi: {
        payload: Prisma.$MProvinsiPayload<ExtArgs>
        fields: Prisma.MProvinsiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MProvinsiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MProvinsiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MProvinsiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MProvinsiPayload>
          }
          findFirst: {
            args: Prisma.MProvinsiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MProvinsiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MProvinsiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MProvinsiPayload>
          }
          findMany: {
            args: Prisma.MProvinsiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MProvinsiPayload>[]
          }
          create: {
            args: Prisma.MProvinsiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MProvinsiPayload>
          }
          createMany: {
            args: Prisma.MProvinsiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MProvinsiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MProvinsiPayload>[]
          }
          delete: {
            args: Prisma.MProvinsiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MProvinsiPayload>
          }
          update: {
            args: Prisma.MProvinsiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MProvinsiPayload>
          }
          deleteMany: {
            args: Prisma.MProvinsiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MProvinsiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MProvinsiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MProvinsiPayload>[]
          }
          upsert: {
            args: Prisma.MProvinsiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MProvinsiPayload>
          }
          aggregate: {
            args: Prisma.MProvinsiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMProvinsi>
          }
          groupBy: {
            args: Prisma.MProvinsiGroupByArgs<ExtArgs>
            result: $Utils.Optional<MProvinsiGroupByOutputType>[]
          }
          count: {
            args: Prisma.MProvinsiCountArgs<ExtArgs>
            result: $Utils.Optional<MProvinsiCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    mUser?: MUserOmit
    mAtlet?: MAtletOmit
    mPelatih?: MPelatihOmit
    mProvinsi?: MProvinsiOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type MUserCountOutputType
   */

  export type MUserCountOutputType = {
    created_users: number
    updated_users: number
    deleted_users: number
    created_atlets: number
    updated_atlets: number
    deleted_atlets: number
    created_pelatihhs: number
    updated_pelatihhs: number
    deleted_pelatihhs: number
    created_provinsis: number
    updated_provinsis: number
    deleted_provinsis: number
  }

  export type MUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_users?: boolean | MUserCountOutputTypeCountCreated_usersArgs
    updated_users?: boolean | MUserCountOutputTypeCountUpdated_usersArgs
    deleted_users?: boolean | MUserCountOutputTypeCountDeleted_usersArgs
    created_atlets?: boolean | MUserCountOutputTypeCountCreated_atletsArgs
    updated_atlets?: boolean | MUserCountOutputTypeCountUpdated_atletsArgs
    deleted_atlets?: boolean | MUserCountOutputTypeCountDeleted_atletsArgs
    created_pelatihhs?: boolean | MUserCountOutputTypeCountCreated_pelatihhsArgs
    updated_pelatihhs?: boolean | MUserCountOutputTypeCountUpdated_pelatihhsArgs
    deleted_pelatihhs?: boolean | MUserCountOutputTypeCountDeleted_pelatihhsArgs
    created_provinsis?: boolean | MUserCountOutputTypeCountCreated_provinsisArgs
    updated_provinsis?: boolean | MUserCountOutputTypeCountUpdated_provinsisArgs
    deleted_provinsis?: boolean | MUserCountOutputTypeCountDeleted_provinsisArgs
  }

  // Custom InputTypes
  /**
   * MUserCountOutputType without action
   */
  export type MUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUserCountOutputType
     */
    select?: MUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MUserCountOutputType without action
   */
  export type MUserCountOutputTypeCountCreated_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MUserWhereInput
  }

  /**
   * MUserCountOutputType without action
   */
  export type MUserCountOutputTypeCountUpdated_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MUserWhereInput
  }

  /**
   * MUserCountOutputType without action
   */
  export type MUserCountOutputTypeCountDeleted_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MUserWhereInput
  }

  /**
   * MUserCountOutputType without action
   */
  export type MUserCountOutputTypeCountCreated_atletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MAtletWhereInput
  }

  /**
   * MUserCountOutputType without action
   */
  export type MUserCountOutputTypeCountUpdated_atletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MAtletWhereInput
  }

  /**
   * MUserCountOutputType without action
   */
  export type MUserCountOutputTypeCountDeleted_atletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MAtletWhereInput
  }

  /**
   * MUserCountOutputType without action
   */
  export type MUserCountOutputTypeCountCreated_pelatihhsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MPelatihWhereInput
  }

  /**
   * MUserCountOutputType without action
   */
  export type MUserCountOutputTypeCountUpdated_pelatihhsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MPelatihWhereInput
  }

  /**
   * MUserCountOutputType without action
   */
  export type MUserCountOutputTypeCountDeleted_pelatihhsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MPelatihWhereInput
  }

  /**
   * MUserCountOutputType without action
   */
  export type MUserCountOutputTypeCountCreated_provinsisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MProvinsiWhereInput
  }

  /**
   * MUserCountOutputType without action
   */
  export type MUserCountOutputTypeCountUpdated_provinsisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MProvinsiWhereInput
  }

  /**
   * MUserCountOutputType without action
   */
  export type MUserCountOutputTypeCountDeleted_provinsisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MProvinsiWhereInput
  }


  /**
   * Count Type MProvinsiCountOutputType
   */

  export type MProvinsiCountOutputType = {
    atlets: number
    coachs: number
  }

  export type MProvinsiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atlets?: boolean | MProvinsiCountOutputTypeCountAtletsArgs
    coachs?: boolean | MProvinsiCountOutputTypeCountCoachsArgs
  }

  // Custom InputTypes
  /**
   * MProvinsiCountOutputType without action
   */
  export type MProvinsiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MProvinsiCountOutputType
     */
    select?: MProvinsiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MProvinsiCountOutputType without action
   */
  export type MProvinsiCountOutputTypeCountAtletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MAtletWhereInput
  }

  /**
   * MProvinsiCountOutputType without action
   */
  export type MProvinsiCountOutputTypeCountCoachsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MPelatihWhereInput
  }


  /**
   * Models
   */

  /**
   * Model MUser
   */

  export type AggregateMUser = {
    _count: MUserCountAggregateOutputType | null
    _min: MUserMinAggregateOutputType | null
    _max: MUserMaxAggregateOutputType | null
  }

  export type MUserMinAggregateOutputType = {
    uid_user: string | null
    username: string | null
    password: string | null
    role: $Enums.RoleUser | null
    uid_atlet: string | null
    uid_pelatih: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    created_by_uid: string | null
    updated_by_uid: string | null
    deleted_by_uid: string | null
  }

  export type MUserMaxAggregateOutputType = {
    uid_user: string | null
    username: string | null
    password: string | null
    role: $Enums.RoleUser | null
    uid_atlet: string | null
    uid_pelatih: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    created_by_uid: string | null
    updated_by_uid: string | null
    deleted_by_uid: string | null
  }

  export type MUserCountAggregateOutputType = {
    uid_user: number
    username: number
    password: number
    role: number
    uid_atlet: number
    uid_pelatih: number
    created_at: number
    updated_at: number
    deleted_at: number
    created_by_uid: number
    updated_by_uid: number
    deleted_by_uid: number
    _all: number
  }


  export type MUserMinAggregateInputType = {
    uid_user?: true
    username?: true
    password?: true
    role?: true
    uid_atlet?: true
    uid_pelatih?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    created_by_uid?: true
    updated_by_uid?: true
    deleted_by_uid?: true
  }

  export type MUserMaxAggregateInputType = {
    uid_user?: true
    username?: true
    password?: true
    role?: true
    uid_atlet?: true
    uid_pelatih?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    created_by_uid?: true
    updated_by_uid?: true
    deleted_by_uid?: true
  }

  export type MUserCountAggregateInputType = {
    uid_user?: true
    username?: true
    password?: true
    role?: true
    uid_atlet?: true
    uid_pelatih?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    created_by_uid?: true
    updated_by_uid?: true
    deleted_by_uid?: true
    _all?: true
  }

  export type MUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MUser to aggregate.
     */
    where?: MUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MUsers to fetch.
     */
    orderBy?: MUserOrderByWithRelationInput | MUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MUsers
    **/
    _count?: true | MUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MUserMaxAggregateInputType
  }

  export type GetMUserAggregateType<T extends MUserAggregateArgs> = {
        [P in keyof T & keyof AggregateMUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMUser[P]>
      : GetScalarType<T[P], AggregateMUser[P]>
  }




  export type MUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MUserWhereInput
    orderBy?: MUserOrderByWithAggregationInput | MUserOrderByWithAggregationInput[]
    by: MUserScalarFieldEnum[] | MUserScalarFieldEnum
    having?: MUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MUserCountAggregateInputType | true
    _min?: MUserMinAggregateInputType
    _max?: MUserMaxAggregateInputType
  }

  export type MUserGroupByOutputType = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet: string | null
    uid_pelatih: string | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    created_by_uid: string | null
    updated_by_uid: string | null
    deleted_by_uid: string | null
    _count: MUserCountAggregateOutputType | null
    _min: MUserMinAggregateOutputType | null
    _max: MUserMaxAggregateOutputType | null
  }

  type GetMUserGroupByPayload<T extends MUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MUserGroupByOutputType[P]>
            : GetScalarType<T[P], MUserGroupByOutputType[P]>
        }
      >
    >


  export type MUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid_user?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    uid_atlet?: boolean
    uid_pelatih?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by_uid?: boolean
    updated_by_uid?: boolean
    deleted_by_uid?: boolean
    atlet_profile?: boolean | MUser$atlet_profileArgs<ExtArgs>
    pelatih_profile?: boolean | MUser$pelatih_profileArgs<ExtArgs>
    creator?: boolean | MUser$creatorArgs<ExtArgs>
    updater?: boolean | MUser$updaterArgs<ExtArgs>
    deleter?: boolean | MUser$deleterArgs<ExtArgs>
    created_users?: boolean | MUser$created_usersArgs<ExtArgs>
    updated_users?: boolean | MUser$updated_usersArgs<ExtArgs>
    deleted_users?: boolean | MUser$deleted_usersArgs<ExtArgs>
    created_atlets?: boolean | MUser$created_atletsArgs<ExtArgs>
    updated_atlets?: boolean | MUser$updated_atletsArgs<ExtArgs>
    deleted_atlets?: boolean | MUser$deleted_atletsArgs<ExtArgs>
    created_pelatihhs?: boolean | MUser$created_pelatihhsArgs<ExtArgs>
    updated_pelatihhs?: boolean | MUser$updated_pelatihhsArgs<ExtArgs>
    deleted_pelatihhs?: boolean | MUser$deleted_pelatihhsArgs<ExtArgs>
    created_provinsis?: boolean | MUser$created_provinsisArgs<ExtArgs>
    updated_provinsis?: boolean | MUser$updated_provinsisArgs<ExtArgs>
    deleted_provinsis?: boolean | MUser$deleted_provinsisArgs<ExtArgs>
    _count?: boolean | MUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mUser"]>

  export type MUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid_user?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    uid_atlet?: boolean
    uid_pelatih?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by_uid?: boolean
    updated_by_uid?: boolean
    deleted_by_uid?: boolean
    atlet_profile?: boolean | MUser$atlet_profileArgs<ExtArgs>
    pelatih_profile?: boolean | MUser$pelatih_profileArgs<ExtArgs>
    creator?: boolean | MUser$creatorArgs<ExtArgs>
    updater?: boolean | MUser$updaterArgs<ExtArgs>
    deleter?: boolean | MUser$deleterArgs<ExtArgs>
  }, ExtArgs["result"]["mUser"]>

  export type MUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid_user?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    uid_atlet?: boolean
    uid_pelatih?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by_uid?: boolean
    updated_by_uid?: boolean
    deleted_by_uid?: boolean
    atlet_profile?: boolean | MUser$atlet_profileArgs<ExtArgs>
    pelatih_profile?: boolean | MUser$pelatih_profileArgs<ExtArgs>
    creator?: boolean | MUser$creatorArgs<ExtArgs>
    updater?: boolean | MUser$updaterArgs<ExtArgs>
    deleter?: boolean | MUser$deleterArgs<ExtArgs>
  }, ExtArgs["result"]["mUser"]>

  export type MUserSelectScalar = {
    uid_user?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    uid_atlet?: boolean
    uid_pelatih?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by_uid?: boolean
    updated_by_uid?: boolean
    deleted_by_uid?: boolean
  }

  export type MUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid_user" | "username" | "password" | "role" | "uid_atlet" | "uid_pelatih" | "created_at" | "updated_at" | "deleted_at" | "created_by_uid" | "updated_by_uid" | "deleted_by_uid", ExtArgs["result"]["mUser"]>
  export type MUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atlet_profile?: boolean | MUser$atlet_profileArgs<ExtArgs>
    pelatih_profile?: boolean | MUser$pelatih_profileArgs<ExtArgs>
    creator?: boolean | MUser$creatorArgs<ExtArgs>
    updater?: boolean | MUser$updaterArgs<ExtArgs>
    deleter?: boolean | MUser$deleterArgs<ExtArgs>
    created_users?: boolean | MUser$created_usersArgs<ExtArgs>
    updated_users?: boolean | MUser$updated_usersArgs<ExtArgs>
    deleted_users?: boolean | MUser$deleted_usersArgs<ExtArgs>
    created_atlets?: boolean | MUser$created_atletsArgs<ExtArgs>
    updated_atlets?: boolean | MUser$updated_atletsArgs<ExtArgs>
    deleted_atlets?: boolean | MUser$deleted_atletsArgs<ExtArgs>
    created_pelatihhs?: boolean | MUser$created_pelatihhsArgs<ExtArgs>
    updated_pelatihhs?: boolean | MUser$updated_pelatihhsArgs<ExtArgs>
    deleted_pelatihhs?: boolean | MUser$deleted_pelatihhsArgs<ExtArgs>
    created_provinsis?: boolean | MUser$created_provinsisArgs<ExtArgs>
    updated_provinsis?: boolean | MUser$updated_provinsisArgs<ExtArgs>
    deleted_provinsis?: boolean | MUser$deleted_provinsisArgs<ExtArgs>
    _count?: boolean | MUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atlet_profile?: boolean | MUser$atlet_profileArgs<ExtArgs>
    pelatih_profile?: boolean | MUser$pelatih_profileArgs<ExtArgs>
    creator?: boolean | MUser$creatorArgs<ExtArgs>
    updater?: boolean | MUser$updaterArgs<ExtArgs>
    deleter?: boolean | MUser$deleterArgs<ExtArgs>
  }
  export type MUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atlet_profile?: boolean | MUser$atlet_profileArgs<ExtArgs>
    pelatih_profile?: boolean | MUser$pelatih_profileArgs<ExtArgs>
    creator?: boolean | MUser$creatorArgs<ExtArgs>
    updater?: boolean | MUser$updaterArgs<ExtArgs>
    deleter?: boolean | MUser$deleterArgs<ExtArgs>
  }

  export type $MUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MUser"
    objects: {
      atlet_profile: Prisma.$MAtletPayload<ExtArgs> | null
      pelatih_profile: Prisma.$MPelatihPayload<ExtArgs> | null
      creator: Prisma.$MUserPayload<ExtArgs> | null
      updater: Prisma.$MUserPayload<ExtArgs> | null
      deleter: Prisma.$MUserPayload<ExtArgs> | null
      created_users: Prisma.$MUserPayload<ExtArgs>[]
      updated_users: Prisma.$MUserPayload<ExtArgs>[]
      deleted_users: Prisma.$MUserPayload<ExtArgs>[]
      created_atlets: Prisma.$MAtletPayload<ExtArgs>[]
      updated_atlets: Prisma.$MAtletPayload<ExtArgs>[]
      deleted_atlets: Prisma.$MAtletPayload<ExtArgs>[]
      created_pelatihhs: Prisma.$MPelatihPayload<ExtArgs>[]
      updated_pelatihhs: Prisma.$MPelatihPayload<ExtArgs>[]
      deleted_pelatihhs: Prisma.$MPelatihPayload<ExtArgs>[]
      created_provinsis: Prisma.$MProvinsiPayload<ExtArgs>[]
      updated_provinsis: Prisma.$MProvinsiPayload<ExtArgs>[]
      deleted_provinsis: Prisma.$MProvinsiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uid_user: string
      username: string
      password: string
      role: $Enums.RoleUser
      uid_atlet: string | null
      uid_pelatih: string | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      created_by_uid: string | null
      updated_by_uid: string | null
      deleted_by_uid: string | null
    }, ExtArgs["result"]["mUser"]>
    composites: {}
  }

  type MUserGetPayload<S extends boolean | null | undefined | MUserDefaultArgs> = $Result.GetResult<Prisma.$MUserPayload, S>

  type MUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MUserCountAggregateInputType | true
    }

  export interface MUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MUser'], meta: { name: 'MUser' } }
    /**
     * Find zero or one MUser that matches the filter.
     * @param {MUserFindUniqueArgs} args - Arguments to find a MUser
     * @example
     * // Get one MUser
     * const mUser = await prisma.mUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MUserFindUniqueArgs>(args: SelectSubset<T, MUserFindUniqueArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MUserFindUniqueOrThrowArgs} args - Arguments to find a MUser
     * @example
     * // Get one MUser
     * const mUser = await prisma.mUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MUserFindUniqueOrThrowArgs>(args: SelectSubset<T, MUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MUserFindFirstArgs} args - Arguments to find a MUser
     * @example
     * // Get one MUser
     * const mUser = await prisma.mUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MUserFindFirstArgs>(args?: SelectSubset<T, MUserFindFirstArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MUserFindFirstOrThrowArgs} args - Arguments to find a MUser
     * @example
     * // Get one MUser
     * const mUser = await prisma.mUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MUserFindFirstOrThrowArgs>(args?: SelectSubset<T, MUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MUsers
     * const mUsers = await prisma.mUser.findMany()
     * 
     * // Get first 10 MUsers
     * const mUsers = await prisma.mUser.findMany({ take: 10 })
     * 
     * // Only select the `uid_user`
     * const mUserWithUid_userOnly = await prisma.mUser.findMany({ select: { uid_user: true } })
     * 
     */
    findMany<T extends MUserFindManyArgs>(args?: SelectSubset<T, MUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MUser.
     * @param {MUserCreateArgs} args - Arguments to create a MUser.
     * @example
     * // Create one MUser
     * const MUser = await prisma.mUser.create({
     *   data: {
     *     // ... data to create a MUser
     *   }
     * })
     * 
     */
    create<T extends MUserCreateArgs>(args: SelectSubset<T, MUserCreateArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MUsers.
     * @param {MUserCreateManyArgs} args - Arguments to create many MUsers.
     * @example
     * // Create many MUsers
     * const mUser = await prisma.mUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MUserCreateManyArgs>(args?: SelectSubset<T, MUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MUsers and returns the data saved in the database.
     * @param {MUserCreateManyAndReturnArgs} args - Arguments to create many MUsers.
     * @example
     * // Create many MUsers
     * const mUser = await prisma.mUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MUsers and only return the `uid_user`
     * const mUserWithUid_userOnly = await prisma.mUser.createManyAndReturn({
     *   select: { uid_user: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MUserCreateManyAndReturnArgs>(args?: SelectSubset<T, MUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MUser.
     * @param {MUserDeleteArgs} args - Arguments to delete one MUser.
     * @example
     * // Delete one MUser
     * const MUser = await prisma.mUser.delete({
     *   where: {
     *     // ... filter to delete one MUser
     *   }
     * })
     * 
     */
    delete<T extends MUserDeleteArgs>(args: SelectSubset<T, MUserDeleteArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MUser.
     * @param {MUserUpdateArgs} args - Arguments to update one MUser.
     * @example
     * // Update one MUser
     * const mUser = await prisma.mUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MUserUpdateArgs>(args: SelectSubset<T, MUserUpdateArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MUsers.
     * @param {MUserDeleteManyArgs} args - Arguments to filter MUsers to delete.
     * @example
     * // Delete a few MUsers
     * const { count } = await prisma.mUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MUserDeleteManyArgs>(args?: SelectSubset<T, MUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MUsers
     * const mUser = await prisma.mUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MUserUpdateManyArgs>(args: SelectSubset<T, MUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MUsers and returns the data updated in the database.
     * @param {MUserUpdateManyAndReturnArgs} args - Arguments to update many MUsers.
     * @example
     * // Update many MUsers
     * const mUser = await prisma.mUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MUsers and only return the `uid_user`
     * const mUserWithUid_userOnly = await prisma.mUser.updateManyAndReturn({
     *   select: { uid_user: true },
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
    updateManyAndReturn<T extends MUserUpdateManyAndReturnArgs>(args: SelectSubset<T, MUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MUser.
     * @param {MUserUpsertArgs} args - Arguments to update or create a MUser.
     * @example
     * // Update or create a MUser
     * const mUser = await prisma.mUser.upsert({
     *   create: {
     *     // ... data to create a MUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MUser we want to update
     *   }
     * })
     */
    upsert<T extends MUserUpsertArgs>(args: SelectSubset<T, MUserUpsertArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MUserCountArgs} args - Arguments to filter MUsers to count.
     * @example
     * // Count the number of MUsers
     * const count = await prisma.mUser.count({
     *   where: {
     *     // ... the filter for the MUsers we want to count
     *   }
     * })
    **/
    count<T extends MUserCountArgs>(
      args?: Subset<T, MUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MUserAggregateArgs>(args: Subset<T, MUserAggregateArgs>): Prisma.PrismaPromise<GetMUserAggregateType<T>>

    /**
     * Group by MUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MUserGroupByArgs} args - Group by arguments.
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
      T extends MUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MUserGroupByArgs['orderBy'] }
        : { orderBy?: MUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MUser model
   */
  readonly fields: MUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atlet_profile<T extends MUser$atlet_profileArgs<ExtArgs> = {}>(args?: Subset<T, MUser$atlet_profileArgs<ExtArgs>>): Prisma__MAtletClient<$Result.GetResult<Prisma.$MAtletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pelatih_profile<T extends MUser$pelatih_profileArgs<ExtArgs> = {}>(args?: Subset<T, MUser$pelatih_profileArgs<ExtArgs>>): Prisma__MPelatihClient<$Result.GetResult<Prisma.$MPelatihPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    creator<T extends MUser$creatorArgs<ExtArgs> = {}>(args?: Subset<T, MUser$creatorArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    updater<T extends MUser$updaterArgs<ExtArgs> = {}>(args?: Subset<T, MUser$updaterArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deleter<T extends MUser$deleterArgs<ExtArgs> = {}>(args?: Subset<T, MUser$deleterArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    created_users<T extends MUser$created_usersArgs<ExtArgs> = {}>(args?: Subset<T, MUser$created_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updated_users<T extends MUser$updated_usersArgs<ExtArgs> = {}>(args?: Subset<T, MUser$updated_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deleted_users<T extends MUser$deleted_usersArgs<ExtArgs> = {}>(args?: Subset<T, MUser$deleted_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_atlets<T extends MUser$created_atletsArgs<ExtArgs> = {}>(args?: Subset<T, MUser$created_atletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MAtletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updated_atlets<T extends MUser$updated_atletsArgs<ExtArgs> = {}>(args?: Subset<T, MUser$updated_atletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MAtletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deleted_atlets<T extends MUser$deleted_atletsArgs<ExtArgs> = {}>(args?: Subset<T, MUser$deleted_atletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MAtletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_pelatihhs<T extends MUser$created_pelatihhsArgs<ExtArgs> = {}>(args?: Subset<T, MUser$created_pelatihhsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MPelatihPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updated_pelatihhs<T extends MUser$updated_pelatihhsArgs<ExtArgs> = {}>(args?: Subset<T, MUser$updated_pelatihhsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MPelatihPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deleted_pelatihhs<T extends MUser$deleted_pelatihhsArgs<ExtArgs> = {}>(args?: Subset<T, MUser$deleted_pelatihhsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MPelatihPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    created_provinsis<T extends MUser$created_provinsisArgs<ExtArgs> = {}>(args?: Subset<T, MUser$created_provinsisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MProvinsiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updated_provinsis<T extends MUser$updated_provinsisArgs<ExtArgs> = {}>(args?: Subset<T, MUser$updated_provinsisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MProvinsiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deleted_provinsis<T extends MUser$deleted_provinsisArgs<ExtArgs> = {}>(args?: Subset<T, MUser$deleted_provinsisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MProvinsiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MUser model
   */
  interface MUserFieldRefs {
    readonly uid_user: FieldRef<"MUser", 'String'>
    readonly username: FieldRef<"MUser", 'String'>
    readonly password: FieldRef<"MUser", 'String'>
    readonly role: FieldRef<"MUser", 'RoleUser'>
    readonly uid_atlet: FieldRef<"MUser", 'String'>
    readonly uid_pelatih: FieldRef<"MUser", 'String'>
    readonly created_at: FieldRef<"MUser", 'DateTime'>
    readonly updated_at: FieldRef<"MUser", 'DateTime'>
    readonly deleted_at: FieldRef<"MUser", 'DateTime'>
    readonly created_by_uid: FieldRef<"MUser", 'String'>
    readonly updated_by_uid: FieldRef<"MUser", 'String'>
    readonly deleted_by_uid: FieldRef<"MUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MUser findUnique
   */
  export type MUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
    /**
     * Filter, which MUser to fetch.
     */
    where: MUserWhereUniqueInput
  }

  /**
   * MUser findUniqueOrThrow
   */
  export type MUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
    /**
     * Filter, which MUser to fetch.
     */
    where: MUserWhereUniqueInput
  }

  /**
   * MUser findFirst
   */
  export type MUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
    /**
     * Filter, which MUser to fetch.
     */
    where?: MUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MUsers to fetch.
     */
    orderBy?: MUserOrderByWithRelationInput | MUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MUsers.
     */
    cursor?: MUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MUsers.
     */
    distinct?: MUserScalarFieldEnum | MUserScalarFieldEnum[]
  }

  /**
   * MUser findFirstOrThrow
   */
  export type MUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
    /**
     * Filter, which MUser to fetch.
     */
    where?: MUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MUsers to fetch.
     */
    orderBy?: MUserOrderByWithRelationInput | MUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MUsers.
     */
    cursor?: MUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MUsers.
     */
    distinct?: MUserScalarFieldEnum | MUserScalarFieldEnum[]
  }

  /**
   * MUser findMany
   */
  export type MUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
    /**
     * Filter, which MUsers to fetch.
     */
    where?: MUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MUsers to fetch.
     */
    orderBy?: MUserOrderByWithRelationInput | MUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MUsers.
     */
    cursor?: MUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MUsers.
     */
    distinct?: MUserScalarFieldEnum | MUserScalarFieldEnum[]
  }

  /**
   * MUser create
   */
  export type MUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
    /**
     * The data needed to create a MUser.
     */
    data: XOR<MUserCreateInput, MUserUncheckedCreateInput>
  }

  /**
   * MUser createMany
   */
  export type MUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MUsers.
     */
    data: MUserCreateManyInput | MUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MUser createManyAndReturn
   */
  export type MUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * The data used to create many MUsers.
     */
    data: MUserCreateManyInput | MUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MUser update
   */
  export type MUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
    /**
     * The data needed to update a MUser.
     */
    data: XOR<MUserUpdateInput, MUserUncheckedUpdateInput>
    /**
     * Choose, which MUser to update.
     */
    where: MUserWhereUniqueInput
  }

  /**
   * MUser updateMany
   */
  export type MUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MUsers.
     */
    data: XOR<MUserUpdateManyMutationInput, MUserUncheckedUpdateManyInput>
    /**
     * Filter which MUsers to update
     */
    where?: MUserWhereInput
    /**
     * Limit how many MUsers to update.
     */
    limit?: number
  }

  /**
   * MUser updateManyAndReturn
   */
  export type MUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * The data used to update MUsers.
     */
    data: XOR<MUserUpdateManyMutationInput, MUserUncheckedUpdateManyInput>
    /**
     * Filter which MUsers to update
     */
    where?: MUserWhereInput
    /**
     * Limit how many MUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MUser upsert
   */
  export type MUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
    /**
     * The filter to search for the MUser to update in case it exists.
     */
    where: MUserWhereUniqueInput
    /**
     * In case the MUser found by the `where` argument doesn't exist, create a new MUser with this data.
     */
    create: XOR<MUserCreateInput, MUserUncheckedCreateInput>
    /**
     * In case the MUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MUserUpdateInput, MUserUncheckedUpdateInput>
  }

  /**
   * MUser delete
   */
  export type MUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
    /**
     * Filter which MUser to delete.
     */
    where: MUserWhereUniqueInput
  }

  /**
   * MUser deleteMany
   */
  export type MUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MUsers to delete
     */
    where?: MUserWhereInput
    /**
     * Limit how many MUsers to delete.
     */
    limit?: number
  }

  /**
   * MUser.atlet_profile
   */
  export type MUser$atlet_profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MAtlet
     */
    select?: MAtletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MAtlet
     */
    omit?: MAtletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MAtletInclude<ExtArgs> | null
    where?: MAtletWhereInput
  }

  /**
   * MUser.pelatih_profile
   */
  export type MUser$pelatih_profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MPelatih
     */
    select?: MPelatihSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MPelatih
     */
    omit?: MPelatihOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MPelatihInclude<ExtArgs> | null
    where?: MPelatihWhereInput
  }

  /**
   * MUser.creator
   */
  export type MUser$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
    where?: MUserWhereInput
  }

  /**
   * MUser.updater
   */
  export type MUser$updaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
    where?: MUserWhereInput
  }

  /**
   * MUser.deleter
   */
  export type MUser$deleterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
    where?: MUserWhereInput
  }

  /**
   * MUser.created_users
   */
  export type MUser$created_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
    where?: MUserWhereInput
    orderBy?: MUserOrderByWithRelationInput | MUserOrderByWithRelationInput[]
    cursor?: MUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MUserScalarFieldEnum | MUserScalarFieldEnum[]
  }

  /**
   * MUser.updated_users
   */
  export type MUser$updated_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
    where?: MUserWhereInput
    orderBy?: MUserOrderByWithRelationInput | MUserOrderByWithRelationInput[]
    cursor?: MUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MUserScalarFieldEnum | MUserScalarFieldEnum[]
  }

  /**
   * MUser.deleted_users
   */
  export type MUser$deleted_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
    where?: MUserWhereInput
    orderBy?: MUserOrderByWithRelationInput | MUserOrderByWithRelationInput[]
    cursor?: MUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MUserScalarFieldEnum | MUserScalarFieldEnum[]
  }

  /**
   * MUser.created_atlets
   */
  export type MUser$created_atletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MAtlet
     */
    select?: MAtletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MAtlet
     */
    omit?: MAtletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MAtletInclude<ExtArgs> | null
    where?: MAtletWhereInput
    orderBy?: MAtletOrderByWithRelationInput | MAtletOrderByWithRelationInput[]
    cursor?: MAtletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MAtletScalarFieldEnum | MAtletScalarFieldEnum[]
  }

  /**
   * MUser.updated_atlets
   */
  export type MUser$updated_atletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MAtlet
     */
    select?: MAtletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MAtlet
     */
    omit?: MAtletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MAtletInclude<ExtArgs> | null
    where?: MAtletWhereInput
    orderBy?: MAtletOrderByWithRelationInput | MAtletOrderByWithRelationInput[]
    cursor?: MAtletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MAtletScalarFieldEnum | MAtletScalarFieldEnum[]
  }

  /**
   * MUser.deleted_atlets
   */
  export type MUser$deleted_atletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MAtlet
     */
    select?: MAtletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MAtlet
     */
    omit?: MAtletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MAtletInclude<ExtArgs> | null
    where?: MAtletWhereInput
    orderBy?: MAtletOrderByWithRelationInput | MAtletOrderByWithRelationInput[]
    cursor?: MAtletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MAtletScalarFieldEnum | MAtletScalarFieldEnum[]
  }

  /**
   * MUser.created_pelatihhs
   */
  export type MUser$created_pelatihhsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MPelatih
     */
    select?: MPelatihSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MPelatih
     */
    omit?: MPelatihOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MPelatihInclude<ExtArgs> | null
    where?: MPelatihWhereInput
    orderBy?: MPelatihOrderByWithRelationInput | MPelatihOrderByWithRelationInput[]
    cursor?: MPelatihWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MPelatihScalarFieldEnum | MPelatihScalarFieldEnum[]
  }

  /**
   * MUser.updated_pelatihhs
   */
  export type MUser$updated_pelatihhsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MPelatih
     */
    select?: MPelatihSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MPelatih
     */
    omit?: MPelatihOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MPelatihInclude<ExtArgs> | null
    where?: MPelatihWhereInput
    orderBy?: MPelatihOrderByWithRelationInput | MPelatihOrderByWithRelationInput[]
    cursor?: MPelatihWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MPelatihScalarFieldEnum | MPelatihScalarFieldEnum[]
  }

  /**
   * MUser.deleted_pelatihhs
   */
  export type MUser$deleted_pelatihhsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MPelatih
     */
    select?: MPelatihSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MPelatih
     */
    omit?: MPelatihOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MPelatihInclude<ExtArgs> | null
    where?: MPelatihWhereInput
    orderBy?: MPelatihOrderByWithRelationInput | MPelatihOrderByWithRelationInput[]
    cursor?: MPelatihWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MPelatihScalarFieldEnum | MPelatihScalarFieldEnum[]
  }

  /**
   * MUser.created_provinsis
   */
  export type MUser$created_provinsisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MProvinsi
     */
    select?: MProvinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MProvinsi
     */
    omit?: MProvinsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MProvinsiInclude<ExtArgs> | null
    where?: MProvinsiWhereInput
    orderBy?: MProvinsiOrderByWithRelationInput | MProvinsiOrderByWithRelationInput[]
    cursor?: MProvinsiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MProvinsiScalarFieldEnum | MProvinsiScalarFieldEnum[]
  }

  /**
   * MUser.updated_provinsis
   */
  export type MUser$updated_provinsisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MProvinsi
     */
    select?: MProvinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MProvinsi
     */
    omit?: MProvinsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MProvinsiInclude<ExtArgs> | null
    where?: MProvinsiWhereInput
    orderBy?: MProvinsiOrderByWithRelationInput | MProvinsiOrderByWithRelationInput[]
    cursor?: MProvinsiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MProvinsiScalarFieldEnum | MProvinsiScalarFieldEnum[]
  }

  /**
   * MUser.deleted_provinsis
   */
  export type MUser$deleted_provinsisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MProvinsi
     */
    select?: MProvinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MProvinsi
     */
    omit?: MProvinsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MProvinsiInclude<ExtArgs> | null
    where?: MProvinsiWhereInput
    orderBy?: MProvinsiOrderByWithRelationInput | MProvinsiOrderByWithRelationInput[]
    cursor?: MProvinsiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MProvinsiScalarFieldEnum | MProvinsiScalarFieldEnum[]
  }

  /**
   * MUser without action
   */
  export type MUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
  }


  /**
   * Model MAtlet
   */

  export type AggregateMAtlet = {
    _count: MAtletCountAggregateOutputType | null
    _avg: MAtletAvgAggregateOutputType | null
    _sum: MAtletSumAggregateOutputType | null
    _min: MAtletMinAggregateOutputType | null
    _max: MAtletMaxAggregateOutputType | null
  }

  export type MAtletAvgAggregateOutputType = {
    tinggi_badan: number | null
    berat_badan: number | null
  }

  export type MAtletSumAggregateOutputType = {
    tinggi_badan: number | null
    berat_badan: number | null
  }

  export type MAtletMinAggregateOutputType = {
    uid_atlet: string | null
    nik: string | null
    id_pbsi: string | null
    nama_lengkap: string | null
    nama_ayah: string | null
    nama_ibu: string | null
    tempat_lahir: string | null
    tanggal_lahir: Date | null
    alamat: string | null
    jenis_kelamin: $Enums.JenisKelamin | null
    pegangan_raket: $Enums.PeganganRaket | null
    tinggi_badan: number | null
    berat_badan: number | null
    status_atlet: $Enums.StatusAtlet | null
    foto: string | null
    uid_provinsi: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    created_by_uid: string | null
    updated_by_uid: string | null
    deleted_by_uid: string | null
  }

  export type MAtletMaxAggregateOutputType = {
    uid_atlet: string | null
    nik: string | null
    id_pbsi: string | null
    nama_lengkap: string | null
    nama_ayah: string | null
    nama_ibu: string | null
    tempat_lahir: string | null
    tanggal_lahir: Date | null
    alamat: string | null
    jenis_kelamin: $Enums.JenisKelamin | null
    pegangan_raket: $Enums.PeganganRaket | null
    tinggi_badan: number | null
    berat_badan: number | null
    status_atlet: $Enums.StatusAtlet | null
    foto: string | null
    uid_provinsi: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    created_by_uid: string | null
    updated_by_uid: string | null
    deleted_by_uid: string | null
  }

  export type MAtletCountAggregateOutputType = {
    uid_atlet: number
    nik: number
    id_pbsi: number
    nama_lengkap: number
    nama_ayah: number
    nama_ibu: number
    tempat_lahir: number
    tanggal_lahir: number
    alamat: number
    jenis_kelamin: number
    pegangan_raket: number
    tinggi_badan: number
    berat_badan: number
    status_atlet: number
    foto: number
    uid_provinsi: number
    created_at: number
    updated_at: number
    deleted_at: number
    created_by_uid: number
    updated_by_uid: number
    deleted_by_uid: number
    _all: number
  }


  export type MAtletAvgAggregateInputType = {
    tinggi_badan?: true
    berat_badan?: true
  }

  export type MAtletSumAggregateInputType = {
    tinggi_badan?: true
    berat_badan?: true
  }

  export type MAtletMinAggregateInputType = {
    uid_atlet?: true
    nik?: true
    id_pbsi?: true
    nama_lengkap?: true
    nama_ayah?: true
    nama_ibu?: true
    tempat_lahir?: true
    tanggal_lahir?: true
    alamat?: true
    jenis_kelamin?: true
    pegangan_raket?: true
    tinggi_badan?: true
    berat_badan?: true
    status_atlet?: true
    foto?: true
    uid_provinsi?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    created_by_uid?: true
    updated_by_uid?: true
    deleted_by_uid?: true
  }

  export type MAtletMaxAggregateInputType = {
    uid_atlet?: true
    nik?: true
    id_pbsi?: true
    nama_lengkap?: true
    nama_ayah?: true
    nama_ibu?: true
    tempat_lahir?: true
    tanggal_lahir?: true
    alamat?: true
    jenis_kelamin?: true
    pegangan_raket?: true
    tinggi_badan?: true
    berat_badan?: true
    status_atlet?: true
    foto?: true
    uid_provinsi?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    created_by_uid?: true
    updated_by_uid?: true
    deleted_by_uid?: true
  }

  export type MAtletCountAggregateInputType = {
    uid_atlet?: true
    nik?: true
    id_pbsi?: true
    nama_lengkap?: true
    nama_ayah?: true
    nama_ibu?: true
    tempat_lahir?: true
    tanggal_lahir?: true
    alamat?: true
    jenis_kelamin?: true
    pegangan_raket?: true
    tinggi_badan?: true
    berat_badan?: true
    status_atlet?: true
    foto?: true
    uid_provinsi?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    created_by_uid?: true
    updated_by_uid?: true
    deleted_by_uid?: true
    _all?: true
  }

  export type MAtletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MAtlet to aggregate.
     */
    where?: MAtletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MAtlets to fetch.
     */
    orderBy?: MAtletOrderByWithRelationInput | MAtletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MAtletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MAtlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MAtlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MAtlets
    **/
    _count?: true | MAtletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MAtletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MAtletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MAtletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MAtletMaxAggregateInputType
  }

  export type GetMAtletAggregateType<T extends MAtletAggregateArgs> = {
        [P in keyof T & keyof AggregateMAtlet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMAtlet[P]>
      : GetScalarType<T[P], AggregateMAtlet[P]>
  }




  export type MAtletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MAtletWhereInput
    orderBy?: MAtletOrderByWithAggregationInput | MAtletOrderByWithAggregationInput[]
    by: MAtletScalarFieldEnum[] | MAtletScalarFieldEnum
    having?: MAtletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MAtletCountAggregateInputType | true
    _avg?: MAtletAvgAggregateInputType
    _sum?: MAtletSumAggregateInputType
    _min?: MAtletMinAggregateInputType
    _max?: MAtletMaxAggregateInputType
  }

  export type MAtletGroupByOutputType = {
    uid_atlet: string
    nik: string
    id_pbsi: string
    nama_lengkap: string
    nama_ayah: string
    nama_ibu: string
    tempat_lahir: string
    tanggal_lahir: Date
    alamat: string
    jenis_kelamin: $Enums.JenisKelamin
    pegangan_raket: $Enums.PeganganRaket
    tinggi_badan: number
    berat_badan: number
    status_atlet: $Enums.StatusAtlet
    foto: string
    uid_provinsi: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    created_by_uid: string
    updated_by_uid: string
    deleted_by_uid: string | null
    _count: MAtletCountAggregateOutputType | null
    _avg: MAtletAvgAggregateOutputType | null
    _sum: MAtletSumAggregateOutputType | null
    _min: MAtletMinAggregateOutputType | null
    _max: MAtletMaxAggregateOutputType | null
  }

  type GetMAtletGroupByPayload<T extends MAtletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MAtletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MAtletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MAtletGroupByOutputType[P]>
            : GetScalarType<T[P], MAtletGroupByOutputType[P]>
        }
      >
    >


  export type MAtletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid_atlet?: boolean
    nik?: boolean
    id_pbsi?: boolean
    nama_lengkap?: boolean
    nama_ayah?: boolean
    nama_ibu?: boolean
    tempat_lahir?: boolean
    tanggal_lahir?: boolean
    alamat?: boolean
    jenis_kelamin?: boolean
    pegangan_raket?: boolean
    tinggi_badan?: boolean
    berat_badan?: boolean
    status_atlet?: boolean
    foto?: boolean
    uid_provinsi?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by_uid?: boolean
    updated_by_uid?: boolean
    deleted_by_uid?: boolean
    user_akun?: boolean | MAtlet$user_akunArgs<ExtArgs>
    provinsi?: boolean | MProvinsiDefaultArgs<ExtArgs>
    creator?: boolean | MUserDefaultArgs<ExtArgs>
    updater?: boolean | MUserDefaultArgs<ExtArgs>
    deleter?: boolean | MAtlet$deleterArgs<ExtArgs>
  }, ExtArgs["result"]["mAtlet"]>

  export type MAtletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid_atlet?: boolean
    nik?: boolean
    id_pbsi?: boolean
    nama_lengkap?: boolean
    nama_ayah?: boolean
    nama_ibu?: boolean
    tempat_lahir?: boolean
    tanggal_lahir?: boolean
    alamat?: boolean
    jenis_kelamin?: boolean
    pegangan_raket?: boolean
    tinggi_badan?: boolean
    berat_badan?: boolean
    status_atlet?: boolean
    foto?: boolean
    uid_provinsi?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by_uid?: boolean
    updated_by_uid?: boolean
    deleted_by_uid?: boolean
    provinsi?: boolean | MProvinsiDefaultArgs<ExtArgs>
    creator?: boolean | MUserDefaultArgs<ExtArgs>
    updater?: boolean | MUserDefaultArgs<ExtArgs>
    deleter?: boolean | MAtlet$deleterArgs<ExtArgs>
  }, ExtArgs["result"]["mAtlet"]>

  export type MAtletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid_atlet?: boolean
    nik?: boolean
    id_pbsi?: boolean
    nama_lengkap?: boolean
    nama_ayah?: boolean
    nama_ibu?: boolean
    tempat_lahir?: boolean
    tanggal_lahir?: boolean
    alamat?: boolean
    jenis_kelamin?: boolean
    pegangan_raket?: boolean
    tinggi_badan?: boolean
    berat_badan?: boolean
    status_atlet?: boolean
    foto?: boolean
    uid_provinsi?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by_uid?: boolean
    updated_by_uid?: boolean
    deleted_by_uid?: boolean
    provinsi?: boolean | MProvinsiDefaultArgs<ExtArgs>
    creator?: boolean | MUserDefaultArgs<ExtArgs>
    updater?: boolean | MUserDefaultArgs<ExtArgs>
    deleter?: boolean | MAtlet$deleterArgs<ExtArgs>
  }, ExtArgs["result"]["mAtlet"]>

  export type MAtletSelectScalar = {
    uid_atlet?: boolean
    nik?: boolean
    id_pbsi?: boolean
    nama_lengkap?: boolean
    nama_ayah?: boolean
    nama_ibu?: boolean
    tempat_lahir?: boolean
    tanggal_lahir?: boolean
    alamat?: boolean
    jenis_kelamin?: boolean
    pegangan_raket?: boolean
    tinggi_badan?: boolean
    berat_badan?: boolean
    status_atlet?: boolean
    foto?: boolean
    uid_provinsi?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by_uid?: boolean
    updated_by_uid?: boolean
    deleted_by_uid?: boolean
  }

  export type MAtletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid_atlet" | "nik" | "id_pbsi" | "nama_lengkap" | "nama_ayah" | "nama_ibu" | "tempat_lahir" | "tanggal_lahir" | "alamat" | "jenis_kelamin" | "pegangan_raket" | "tinggi_badan" | "berat_badan" | "status_atlet" | "foto" | "uid_provinsi" | "created_at" | "updated_at" | "deleted_at" | "created_by_uid" | "updated_by_uid" | "deleted_by_uid", ExtArgs["result"]["mAtlet"]>
  export type MAtletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_akun?: boolean | MAtlet$user_akunArgs<ExtArgs>
    provinsi?: boolean | MProvinsiDefaultArgs<ExtArgs>
    creator?: boolean | MUserDefaultArgs<ExtArgs>
    updater?: boolean | MUserDefaultArgs<ExtArgs>
    deleter?: boolean | MAtlet$deleterArgs<ExtArgs>
  }
  export type MAtletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provinsi?: boolean | MProvinsiDefaultArgs<ExtArgs>
    creator?: boolean | MUserDefaultArgs<ExtArgs>
    updater?: boolean | MUserDefaultArgs<ExtArgs>
    deleter?: boolean | MAtlet$deleterArgs<ExtArgs>
  }
  export type MAtletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provinsi?: boolean | MProvinsiDefaultArgs<ExtArgs>
    creator?: boolean | MUserDefaultArgs<ExtArgs>
    updater?: boolean | MUserDefaultArgs<ExtArgs>
    deleter?: boolean | MAtlet$deleterArgs<ExtArgs>
  }

  export type $MAtletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MAtlet"
    objects: {
      user_akun: Prisma.$MUserPayload<ExtArgs> | null
      provinsi: Prisma.$MProvinsiPayload<ExtArgs>
      creator: Prisma.$MUserPayload<ExtArgs>
      updater: Prisma.$MUserPayload<ExtArgs>
      deleter: Prisma.$MUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      uid_atlet: string
      nik: string
      id_pbsi: string
      nama_lengkap: string
      nama_ayah: string
      nama_ibu: string
      tempat_lahir: string
      tanggal_lahir: Date
      alamat: string
      jenis_kelamin: $Enums.JenisKelamin
      pegangan_raket: $Enums.PeganganRaket
      tinggi_badan: number
      berat_badan: number
      status_atlet: $Enums.StatusAtlet
      foto: string
      uid_provinsi: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      created_by_uid: string
      updated_by_uid: string
      deleted_by_uid: string | null
    }, ExtArgs["result"]["mAtlet"]>
    composites: {}
  }

  type MAtletGetPayload<S extends boolean | null | undefined | MAtletDefaultArgs> = $Result.GetResult<Prisma.$MAtletPayload, S>

  type MAtletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MAtletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MAtletCountAggregateInputType | true
    }

  export interface MAtletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MAtlet'], meta: { name: 'MAtlet' } }
    /**
     * Find zero or one MAtlet that matches the filter.
     * @param {MAtletFindUniqueArgs} args - Arguments to find a MAtlet
     * @example
     * // Get one MAtlet
     * const mAtlet = await prisma.mAtlet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MAtletFindUniqueArgs>(args: SelectSubset<T, MAtletFindUniqueArgs<ExtArgs>>): Prisma__MAtletClient<$Result.GetResult<Prisma.$MAtletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MAtlet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MAtletFindUniqueOrThrowArgs} args - Arguments to find a MAtlet
     * @example
     * // Get one MAtlet
     * const mAtlet = await prisma.mAtlet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MAtletFindUniqueOrThrowArgs>(args: SelectSubset<T, MAtletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MAtletClient<$Result.GetResult<Prisma.$MAtletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MAtlet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MAtletFindFirstArgs} args - Arguments to find a MAtlet
     * @example
     * // Get one MAtlet
     * const mAtlet = await prisma.mAtlet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MAtletFindFirstArgs>(args?: SelectSubset<T, MAtletFindFirstArgs<ExtArgs>>): Prisma__MAtletClient<$Result.GetResult<Prisma.$MAtletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MAtlet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MAtletFindFirstOrThrowArgs} args - Arguments to find a MAtlet
     * @example
     * // Get one MAtlet
     * const mAtlet = await prisma.mAtlet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MAtletFindFirstOrThrowArgs>(args?: SelectSubset<T, MAtletFindFirstOrThrowArgs<ExtArgs>>): Prisma__MAtletClient<$Result.GetResult<Prisma.$MAtletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MAtlets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MAtletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MAtlets
     * const mAtlets = await prisma.mAtlet.findMany()
     * 
     * // Get first 10 MAtlets
     * const mAtlets = await prisma.mAtlet.findMany({ take: 10 })
     * 
     * // Only select the `uid_atlet`
     * const mAtletWithUid_atletOnly = await prisma.mAtlet.findMany({ select: { uid_atlet: true } })
     * 
     */
    findMany<T extends MAtletFindManyArgs>(args?: SelectSubset<T, MAtletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MAtletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MAtlet.
     * @param {MAtletCreateArgs} args - Arguments to create a MAtlet.
     * @example
     * // Create one MAtlet
     * const MAtlet = await prisma.mAtlet.create({
     *   data: {
     *     // ... data to create a MAtlet
     *   }
     * })
     * 
     */
    create<T extends MAtletCreateArgs>(args: SelectSubset<T, MAtletCreateArgs<ExtArgs>>): Prisma__MAtletClient<$Result.GetResult<Prisma.$MAtletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MAtlets.
     * @param {MAtletCreateManyArgs} args - Arguments to create many MAtlets.
     * @example
     * // Create many MAtlets
     * const mAtlet = await prisma.mAtlet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MAtletCreateManyArgs>(args?: SelectSubset<T, MAtletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MAtlets and returns the data saved in the database.
     * @param {MAtletCreateManyAndReturnArgs} args - Arguments to create many MAtlets.
     * @example
     * // Create many MAtlets
     * const mAtlet = await prisma.mAtlet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MAtlets and only return the `uid_atlet`
     * const mAtletWithUid_atletOnly = await prisma.mAtlet.createManyAndReturn({
     *   select: { uid_atlet: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MAtletCreateManyAndReturnArgs>(args?: SelectSubset<T, MAtletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MAtletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MAtlet.
     * @param {MAtletDeleteArgs} args - Arguments to delete one MAtlet.
     * @example
     * // Delete one MAtlet
     * const MAtlet = await prisma.mAtlet.delete({
     *   where: {
     *     // ... filter to delete one MAtlet
     *   }
     * })
     * 
     */
    delete<T extends MAtletDeleteArgs>(args: SelectSubset<T, MAtletDeleteArgs<ExtArgs>>): Prisma__MAtletClient<$Result.GetResult<Prisma.$MAtletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MAtlet.
     * @param {MAtletUpdateArgs} args - Arguments to update one MAtlet.
     * @example
     * // Update one MAtlet
     * const mAtlet = await prisma.mAtlet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MAtletUpdateArgs>(args: SelectSubset<T, MAtletUpdateArgs<ExtArgs>>): Prisma__MAtletClient<$Result.GetResult<Prisma.$MAtletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MAtlets.
     * @param {MAtletDeleteManyArgs} args - Arguments to filter MAtlets to delete.
     * @example
     * // Delete a few MAtlets
     * const { count } = await prisma.mAtlet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MAtletDeleteManyArgs>(args?: SelectSubset<T, MAtletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MAtlets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MAtletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MAtlets
     * const mAtlet = await prisma.mAtlet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MAtletUpdateManyArgs>(args: SelectSubset<T, MAtletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MAtlets and returns the data updated in the database.
     * @param {MAtletUpdateManyAndReturnArgs} args - Arguments to update many MAtlets.
     * @example
     * // Update many MAtlets
     * const mAtlet = await prisma.mAtlet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MAtlets and only return the `uid_atlet`
     * const mAtletWithUid_atletOnly = await prisma.mAtlet.updateManyAndReturn({
     *   select: { uid_atlet: true },
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
    updateManyAndReturn<T extends MAtletUpdateManyAndReturnArgs>(args: SelectSubset<T, MAtletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MAtletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MAtlet.
     * @param {MAtletUpsertArgs} args - Arguments to update or create a MAtlet.
     * @example
     * // Update or create a MAtlet
     * const mAtlet = await prisma.mAtlet.upsert({
     *   create: {
     *     // ... data to create a MAtlet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MAtlet we want to update
     *   }
     * })
     */
    upsert<T extends MAtletUpsertArgs>(args: SelectSubset<T, MAtletUpsertArgs<ExtArgs>>): Prisma__MAtletClient<$Result.GetResult<Prisma.$MAtletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MAtlets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MAtletCountArgs} args - Arguments to filter MAtlets to count.
     * @example
     * // Count the number of MAtlets
     * const count = await prisma.mAtlet.count({
     *   where: {
     *     // ... the filter for the MAtlets we want to count
     *   }
     * })
    **/
    count<T extends MAtletCountArgs>(
      args?: Subset<T, MAtletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MAtletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MAtlet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MAtletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MAtletAggregateArgs>(args: Subset<T, MAtletAggregateArgs>): Prisma.PrismaPromise<GetMAtletAggregateType<T>>

    /**
     * Group by MAtlet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MAtletGroupByArgs} args - Group by arguments.
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
      T extends MAtletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MAtletGroupByArgs['orderBy'] }
        : { orderBy?: MAtletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MAtletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMAtletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MAtlet model
   */
  readonly fields: MAtletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MAtlet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MAtletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_akun<T extends MAtlet$user_akunArgs<ExtArgs> = {}>(args?: Subset<T, MAtlet$user_akunArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    provinsi<T extends MProvinsiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MProvinsiDefaultArgs<ExtArgs>>): Prisma__MProvinsiClient<$Result.GetResult<Prisma.$MProvinsiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends MUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MUserDefaultArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updater<T extends MUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MUserDefaultArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deleter<T extends MAtlet$deleterArgs<ExtArgs> = {}>(args?: Subset<T, MAtlet$deleterArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MAtlet model
   */
  interface MAtletFieldRefs {
    readonly uid_atlet: FieldRef<"MAtlet", 'String'>
    readonly nik: FieldRef<"MAtlet", 'String'>
    readonly id_pbsi: FieldRef<"MAtlet", 'String'>
    readonly nama_lengkap: FieldRef<"MAtlet", 'String'>
    readonly nama_ayah: FieldRef<"MAtlet", 'String'>
    readonly nama_ibu: FieldRef<"MAtlet", 'String'>
    readonly tempat_lahir: FieldRef<"MAtlet", 'String'>
    readonly tanggal_lahir: FieldRef<"MAtlet", 'DateTime'>
    readonly alamat: FieldRef<"MAtlet", 'String'>
    readonly jenis_kelamin: FieldRef<"MAtlet", 'JenisKelamin'>
    readonly pegangan_raket: FieldRef<"MAtlet", 'PeganganRaket'>
    readonly tinggi_badan: FieldRef<"MAtlet", 'Int'>
    readonly berat_badan: FieldRef<"MAtlet", 'Int'>
    readonly status_atlet: FieldRef<"MAtlet", 'StatusAtlet'>
    readonly foto: FieldRef<"MAtlet", 'String'>
    readonly uid_provinsi: FieldRef<"MAtlet", 'String'>
    readonly created_at: FieldRef<"MAtlet", 'DateTime'>
    readonly updated_at: FieldRef<"MAtlet", 'DateTime'>
    readonly deleted_at: FieldRef<"MAtlet", 'DateTime'>
    readonly created_by_uid: FieldRef<"MAtlet", 'String'>
    readonly updated_by_uid: FieldRef<"MAtlet", 'String'>
    readonly deleted_by_uid: FieldRef<"MAtlet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MAtlet findUnique
   */
  export type MAtletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MAtlet
     */
    select?: MAtletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MAtlet
     */
    omit?: MAtletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MAtletInclude<ExtArgs> | null
    /**
     * Filter, which MAtlet to fetch.
     */
    where: MAtletWhereUniqueInput
  }

  /**
   * MAtlet findUniqueOrThrow
   */
  export type MAtletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MAtlet
     */
    select?: MAtletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MAtlet
     */
    omit?: MAtletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MAtletInclude<ExtArgs> | null
    /**
     * Filter, which MAtlet to fetch.
     */
    where: MAtletWhereUniqueInput
  }

  /**
   * MAtlet findFirst
   */
  export type MAtletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MAtlet
     */
    select?: MAtletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MAtlet
     */
    omit?: MAtletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MAtletInclude<ExtArgs> | null
    /**
     * Filter, which MAtlet to fetch.
     */
    where?: MAtletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MAtlets to fetch.
     */
    orderBy?: MAtletOrderByWithRelationInput | MAtletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MAtlets.
     */
    cursor?: MAtletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MAtlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MAtlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MAtlets.
     */
    distinct?: MAtletScalarFieldEnum | MAtletScalarFieldEnum[]
  }

  /**
   * MAtlet findFirstOrThrow
   */
  export type MAtletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MAtlet
     */
    select?: MAtletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MAtlet
     */
    omit?: MAtletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MAtletInclude<ExtArgs> | null
    /**
     * Filter, which MAtlet to fetch.
     */
    where?: MAtletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MAtlets to fetch.
     */
    orderBy?: MAtletOrderByWithRelationInput | MAtletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MAtlets.
     */
    cursor?: MAtletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MAtlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MAtlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MAtlets.
     */
    distinct?: MAtletScalarFieldEnum | MAtletScalarFieldEnum[]
  }

  /**
   * MAtlet findMany
   */
  export type MAtletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MAtlet
     */
    select?: MAtletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MAtlet
     */
    omit?: MAtletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MAtletInclude<ExtArgs> | null
    /**
     * Filter, which MAtlets to fetch.
     */
    where?: MAtletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MAtlets to fetch.
     */
    orderBy?: MAtletOrderByWithRelationInput | MAtletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MAtlets.
     */
    cursor?: MAtletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MAtlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MAtlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MAtlets.
     */
    distinct?: MAtletScalarFieldEnum | MAtletScalarFieldEnum[]
  }

  /**
   * MAtlet create
   */
  export type MAtletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MAtlet
     */
    select?: MAtletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MAtlet
     */
    omit?: MAtletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MAtletInclude<ExtArgs> | null
    /**
     * The data needed to create a MAtlet.
     */
    data: XOR<MAtletCreateInput, MAtletUncheckedCreateInput>
  }

  /**
   * MAtlet createMany
   */
  export type MAtletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MAtlets.
     */
    data: MAtletCreateManyInput | MAtletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MAtlet createManyAndReturn
   */
  export type MAtletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MAtlet
     */
    select?: MAtletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MAtlet
     */
    omit?: MAtletOmit<ExtArgs> | null
    /**
     * The data used to create many MAtlets.
     */
    data: MAtletCreateManyInput | MAtletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MAtletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MAtlet update
   */
  export type MAtletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MAtlet
     */
    select?: MAtletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MAtlet
     */
    omit?: MAtletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MAtletInclude<ExtArgs> | null
    /**
     * The data needed to update a MAtlet.
     */
    data: XOR<MAtletUpdateInput, MAtletUncheckedUpdateInput>
    /**
     * Choose, which MAtlet to update.
     */
    where: MAtletWhereUniqueInput
  }

  /**
   * MAtlet updateMany
   */
  export type MAtletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MAtlets.
     */
    data: XOR<MAtletUpdateManyMutationInput, MAtletUncheckedUpdateManyInput>
    /**
     * Filter which MAtlets to update
     */
    where?: MAtletWhereInput
    /**
     * Limit how many MAtlets to update.
     */
    limit?: number
  }

  /**
   * MAtlet updateManyAndReturn
   */
  export type MAtletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MAtlet
     */
    select?: MAtletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MAtlet
     */
    omit?: MAtletOmit<ExtArgs> | null
    /**
     * The data used to update MAtlets.
     */
    data: XOR<MAtletUpdateManyMutationInput, MAtletUncheckedUpdateManyInput>
    /**
     * Filter which MAtlets to update
     */
    where?: MAtletWhereInput
    /**
     * Limit how many MAtlets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MAtletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MAtlet upsert
   */
  export type MAtletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MAtlet
     */
    select?: MAtletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MAtlet
     */
    omit?: MAtletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MAtletInclude<ExtArgs> | null
    /**
     * The filter to search for the MAtlet to update in case it exists.
     */
    where: MAtletWhereUniqueInput
    /**
     * In case the MAtlet found by the `where` argument doesn't exist, create a new MAtlet with this data.
     */
    create: XOR<MAtletCreateInput, MAtletUncheckedCreateInput>
    /**
     * In case the MAtlet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MAtletUpdateInput, MAtletUncheckedUpdateInput>
  }

  /**
   * MAtlet delete
   */
  export type MAtletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MAtlet
     */
    select?: MAtletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MAtlet
     */
    omit?: MAtletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MAtletInclude<ExtArgs> | null
    /**
     * Filter which MAtlet to delete.
     */
    where: MAtletWhereUniqueInput
  }

  /**
   * MAtlet deleteMany
   */
  export type MAtletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MAtlets to delete
     */
    where?: MAtletWhereInput
    /**
     * Limit how many MAtlets to delete.
     */
    limit?: number
  }

  /**
   * MAtlet.user_akun
   */
  export type MAtlet$user_akunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
    where?: MUserWhereInput
  }

  /**
   * MAtlet.deleter
   */
  export type MAtlet$deleterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
    where?: MUserWhereInput
  }

  /**
   * MAtlet without action
   */
  export type MAtletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MAtlet
     */
    select?: MAtletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MAtlet
     */
    omit?: MAtletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MAtletInclude<ExtArgs> | null
  }


  /**
   * Model MPelatih
   */

  export type AggregateMPelatih = {
    _count: MPelatihCountAggregateOutputType | null
    _avg: MPelatihAvgAggregateOutputType | null
    _sum: MPelatihSumAggregateOutputType | null
    _min: MPelatihMinAggregateOutputType | null
    _max: MPelatihMaxAggregateOutputType | null
  }

  export type MPelatihAvgAggregateOutputType = {
    tahun_bergabung: number | null
    tahun_pelatnas: number | null
  }

  export type MPelatihSumAggregateOutputType = {
    tahun_bergabung: number | null
    tahun_pelatnas: number | null
  }

  export type MPelatihMinAggregateOutputType = {
    uid_pelatih: string | null
    nik: string | null
    nama_lengkap: string | null
    jenis_kelamin: $Enums.JenisKelamin | null
    tanggal_lahir: Date | null
    tahun_bergabung: number | null
    pernah_melatih_sebelumnya: boolean | null
    klub_negara_sebelumnya: string | null
    mantan_atlet_nasional: boolean | null
    asal_klub_nasional: string | null
    mantan_pelatnas: boolean | null
    tahun_pelatnas: number | null
    foto: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    uid_provinsi: string | null
    created_by_uid: string | null
    updated_by_uid: string | null
    deleted_by_uid: string | null
  }

  export type MPelatihMaxAggregateOutputType = {
    uid_pelatih: string | null
    nik: string | null
    nama_lengkap: string | null
    jenis_kelamin: $Enums.JenisKelamin | null
    tanggal_lahir: Date | null
    tahun_bergabung: number | null
    pernah_melatih_sebelumnya: boolean | null
    klub_negara_sebelumnya: string | null
    mantan_atlet_nasional: boolean | null
    asal_klub_nasional: string | null
    mantan_pelatnas: boolean | null
    tahun_pelatnas: number | null
    foto: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    uid_provinsi: string | null
    created_by_uid: string | null
    updated_by_uid: string | null
    deleted_by_uid: string | null
  }

  export type MPelatihCountAggregateOutputType = {
    uid_pelatih: number
    nik: number
    nama_lengkap: number
    jenis_kelamin: number
    tanggal_lahir: number
    tahun_bergabung: number
    pernah_melatih_sebelumnya: number
    klub_negara_sebelumnya: number
    mantan_atlet_nasional: number
    asal_klub_nasional: number
    mantan_pelatnas: number
    tahun_pelatnas: number
    foto: number
    created_at: number
    updated_at: number
    deleted_at: number
    uid_provinsi: number
    created_by_uid: number
    updated_by_uid: number
    deleted_by_uid: number
    _all: number
  }


  export type MPelatihAvgAggregateInputType = {
    tahun_bergabung?: true
    tahun_pelatnas?: true
  }

  export type MPelatihSumAggregateInputType = {
    tahun_bergabung?: true
    tahun_pelatnas?: true
  }

  export type MPelatihMinAggregateInputType = {
    uid_pelatih?: true
    nik?: true
    nama_lengkap?: true
    jenis_kelamin?: true
    tanggal_lahir?: true
    tahun_bergabung?: true
    pernah_melatih_sebelumnya?: true
    klub_negara_sebelumnya?: true
    mantan_atlet_nasional?: true
    asal_klub_nasional?: true
    mantan_pelatnas?: true
    tahun_pelatnas?: true
    foto?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    uid_provinsi?: true
    created_by_uid?: true
    updated_by_uid?: true
    deleted_by_uid?: true
  }

  export type MPelatihMaxAggregateInputType = {
    uid_pelatih?: true
    nik?: true
    nama_lengkap?: true
    jenis_kelamin?: true
    tanggal_lahir?: true
    tahun_bergabung?: true
    pernah_melatih_sebelumnya?: true
    klub_negara_sebelumnya?: true
    mantan_atlet_nasional?: true
    asal_klub_nasional?: true
    mantan_pelatnas?: true
    tahun_pelatnas?: true
    foto?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    uid_provinsi?: true
    created_by_uid?: true
    updated_by_uid?: true
    deleted_by_uid?: true
  }

  export type MPelatihCountAggregateInputType = {
    uid_pelatih?: true
    nik?: true
    nama_lengkap?: true
    jenis_kelamin?: true
    tanggal_lahir?: true
    tahun_bergabung?: true
    pernah_melatih_sebelumnya?: true
    klub_negara_sebelumnya?: true
    mantan_atlet_nasional?: true
    asal_klub_nasional?: true
    mantan_pelatnas?: true
    tahun_pelatnas?: true
    foto?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    uid_provinsi?: true
    created_by_uid?: true
    updated_by_uid?: true
    deleted_by_uid?: true
    _all?: true
  }

  export type MPelatihAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MPelatih to aggregate.
     */
    where?: MPelatihWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MPelatihs to fetch.
     */
    orderBy?: MPelatihOrderByWithRelationInput | MPelatihOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MPelatihWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MPelatihs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MPelatihs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MPelatihs
    **/
    _count?: true | MPelatihCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MPelatihAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MPelatihSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MPelatihMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MPelatihMaxAggregateInputType
  }

  export type GetMPelatihAggregateType<T extends MPelatihAggregateArgs> = {
        [P in keyof T & keyof AggregateMPelatih]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMPelatih[P]>
      : GetScalarType<T[P], AggregateMPelatih[P]>
  }




  export type MPelatihGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MPelatihWhereInput
    orderBy?: MPelatihOrderByWithAggregationInput | MPelatihOrderByWithAggregationInput[]
    by: MPelatihScalarFieldEnum[] | MPelatihScalarFieldEnum
    having?: MPelatihScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MPelatihCountAggregateInputType | true
    _avg?: MPelatihAvgAggregateInputType
    _sum?: MPelatihSumAggregateInputType
    _min?: MPelatihMinAggregateInputType
    _max?: MPelatihMaxAggregateInputType
  }

  export type MPelatihGroupByOutputType = {
    uid_pelatih: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date
    tahun_bergabung: number
    pernah_melatih_sebelumnya: boolean
    klub_negara_sebelumnya: string
    mantan_atlet_nasional: boolean
    asal_klub_nasional: string
    mantan_pelatnas: boolean
    tahun_pelatnas: number
    foto: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    uid_provinsi: string
    created_by_uid: string
    updated_by_uid: string
    deleted_by_uid: string | null
    _count: MPelatihCountAggregateOutputType | null
    _avg: MPelatihAvgAggregateOutputType | null
    _sum: MPelatihSumAggregateOutputType | null
    _min: MPelatihMinAggregateOutputType | null
    _max: MPelatihMaxAggregateOutputType | null
  }

  type GetMPelatihGroupByPayload<T extends MPelatihGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MPelatihGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MPelatihGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MPelatihGroupByOutputType[P]>
            : GetScalarType<T[P], MPelatihGroupByOutputType[P]>
        }
      >
    >


  export type MPelatihSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid_pelatih?: boolean
    nik?: boolean
    nama_lengkap?: boolean
    jenis_kelamin?: boolean
    tanggal_lahir?: boolean
    tahun_bergabung?: boolean
    pernah_melatih_sebelumnya?: boolean
    klub_negara_sebelumnya?: boolean
    mantan_atlet_nasional?: boolean
    asal_klub_nasional?: boolean
    mantan_pelatnas?: boolean
    tahun_pelatnas?: boolean
    foto?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    uid_provinsi?: boolean
    created_by_uid?: boolean
    updated_by_uid?: boolean
    deleted_by_uid?: boolean
    user_akun?: boolean | MPelatih$user_akunArgs<ExtArgs>
    provinsi?: boolean | MProvinsiDefaultArgs<ExtArgs>
    creator?: boolean | MUserDefaultArgs<ExtArgs>
    updater?: boolean | MUserDefaultArgs<ExtArgs>
    deleter?: boolean | MPelatih$deleterArgs<ExtArgs>
  }, ExtArgs["result"]["mPelatih"]>

  export type MPelatihSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid_pelatih?: boolean
    nik?: boolean
    nama_lengkap?: boolean
    jenis_kelamin?: boolean
    tanggal_lahir?: boolean
    tahun_bergabung?: boolean
    pernah_melatih_sebelumnya?: boolean
    klub_negara_sebelumnya?: boolean
    mantan_atlet_nasional?: boolean
    asal_klub_nasional?: boolean
    mantan_pelatnas?: boolean
    tahun_pelatnas?: boolean
    foto?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    uid_provinsi?: boolean
    created_by_uid?: boolean
    updated_by_uid?: boolean
    deleted_by_uid?: boolean
    provinsi?: boolean | MProvinsiDefaultArgs<ExtArgs>
    creator?: boolean | MUserDefaultArgs<ExtArgs>
    updater?: boolean | MUserDefaultArgs<ExtArgs>
    deleter?: boolean | MPelatih$deleterArgs<ExtArgs>
  }, ExtArgs["result"]["mPelatih"]>

  export type MPelatihSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid_pelatih?: boolean
    nik?: boolean
    nama_lengkap?: boolean
    jenis_kelamin?: boolean
    tanggal_lahir?: boolean
    tahun_bergabung?: boolean
    pernah_melatih_sebelumnya?: boolean
    klub_negara_sebelumnya?: boolean
    mantan_atlet_nasional?: boolean
    asal_klub_nasional?: boolean
    mantan_pelatnas?: boolean
    tahun_pelatnas?: boolean
    foto?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    uid_provinsi?: boolean
    created_by_uid?: boolean
    updated_by_uid?: boolean
    deleted_by_uid?: boolean
    provinsi?: boolean | MProvinsiDefaultArgs<ExtArgs>
    creator?: boolean | MUserDefaultArgs<ExtArgs>
    updater?: boolean | MUserDefaultArgs<ExtArgs>
    deleter?: boolean | MPelatih$deleterArgs<ExtArgs>
  }, ExtArgs["result"]["mPelatih"]>

  export type MPelatihSelectScalar = {
    uid_pelatih?: boolean
    nik?: boolean
    nama_lengkap?: boolean
    jenis_kelamin?: boolean
    tanggal_lahir?: boolean
    tahun_bergabung?: boolean
    pernah_melatih_sebelumnya?: boolean
    klub_negara_sebelumnya?: boolean
    mantan_atlet_nasional?: boolean
    asal_klub_nasional?: boolean
    mantan_pelatnas?: boolean
    tahun_pelatnas?: boolean
    foto?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    uid_provinsi?: boolean
    created_by_uid?: boolean
    updated_by_uid?: boolean
    deleted_by_uid?: boolean
  }

  export type MPelatihOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid_pelatih" | "nik" | "nama_lengkap" | "jenis_kelamin" | "tanggal_lahir" | "tahun_bergabung" | "pernah_melatih_sebelumnya" | "klub_negara_sebelumnya" | "mantan_atlet_nasional" | "asal_klub_nasional" | "mantan_pelatnas" | "tahun_pelatnas" | "foto" | "created_at" | "updated_at" | "deleted_at" | "uid_provinsi" | "created_by_uid" | "updated_by_uid" | "deleted_by_uid", ExtArgs["result"]["mPelatih"]>
  export type MPelatihInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_akun?: boolean | MPelatih$user_akunArgs<ExtArgs>
    provinsi?: boolean | MProvinsiDefaultArgs<ExtArgs>
    creator?: boolean | MUserDefaultArgs<ExtArgs>
    updater?: boolean | MUserDefaultArgs<ExtArgs>
    deleter?: boolean | MPelatih$deleterArgs<ExtArgs>
  }
  export type MPelatihIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provinsi?: boolean | MProvinsiDefaultArgs<ExtArgs>
    creator?: boolean | MUserDefaultArgs<ExtArgs>
    updater?: boolean | MUserDefaultArgs<ExtArgs>
    deleter?: boolean | MPelatih$deleterArgs<ExtArgs>
  }
  export type MPelatihIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provinsi?: boolean | MProvinsiDefaultArgs<ExtArgs>
    creator?: boolean | MUserDefaultArgs<ExtArgs>
    updater?: boolean | MUserDefaultArgs<ExtArgs>
    deleter?: boolean | MPelatih$deleterArgs<ExtArgs>
  }

  export type $MPelatihPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MPelatih"
    objects: {
      user_akun: Prisma.$MUserPayload<ExtArgs> | null
      provinsi: Prisma.$MProvinsiPayload<ExtArgs>
      creator: Prisma.$MUserPayload<ExtArgs>
      updater: Prisma.$MUserPayload<ExtArgs>
      deleter: Prisma.$MUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      uid_pelatih: string
      nik: string
      nama_lengkap: string
      jenis_kelamin: $Enums.JenisKelamin
      tanggal_lahir: Date
      tahun_bergabung: number
      pernah_melatih_sebelumnya: boolean
      klub_negara_sebelumnya: string
      mantan_atlet_nasional: boolean
      asal_klub_nasional: string
      mantan_pelatnas: boolean
      tahun_pelatnas: number
      foto: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      uid_provinsi: string
      created_by_uid: string
      updated_by_uid: string
      deleted_by_uid: string | null
    }, ExtArgs["result"]["mPelatih"]>
    composites: {}
  }

  type MPelatihGetPayload<S extends boolean | null | undefined | MPelatihDefaultArgs> = $Result.GetResult<Prisma.$MPelatihPayload, S>

  type MPelatihCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MPelatihFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MPelatihCountAggregateInputType | true
    }

  export interface MPelatihDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MPelatih'], meta: { name: 'MPelatih' } }
    /**
     * Find zero or one MPelatih that matches the filter.
     * @param {MPelatihFindUniqueArgs} args - Arguments to find a MPelatih
     * @example
     * // Get one MPelatih
     * const mPelatih = await prisma.mPelatih.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MPelatihFindUniqueArgs>(args: SelectSubset<T, MPelatihFindUniqueArgs<ExtArgs>>): Prisma__MPelatihClient<$Result.GetResult<Prisma.$MPelatihPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MPelatih that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MPelatihFindUniqueOrThrowArgs} args - Arguments to find a MPelatih
     * @example
     * // Get one MPelatih
     * const mPelatih = await prisma.mPelatih.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MPelatihFindUniqueOrThrowArgs>(args: SelectSubset<T, MPelatihFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MPelatihClient<$Result.GetResult<Prisma.$MPelatihPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MPelatih that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MPelatihFindFirstArgs} args - Arguments to find a MPelatih
     * @example
     * // Get one MPelatih
     * const mPelatih = await prisma.mPelatih.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MPelatihFindFirstArgs>(args?: SelectSubset<T, MPelatihFindFirstArgs<ExtArgs>>): Prisma__MPelatihClient<$Result.GetResult<Prisma.$MPelatihPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MPelatih that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MPelatihFindFirstOrThrowArgs} args - Arguments to find a MPelatih
     * @example
     * // Get one MPelatih
     * const mPelatih = await prisma.mPelatih.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MPelatihFindFirstOrThrowArgs>(args?: SelectSubset<T, MPelatihFindFirstOrThrowArgs<ExtArgs>>): Prisma__MPelatihClient<$Result.GetResult<Prisma.$MPelatihPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MPelatihs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MPelatihFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MPelatihs
     * const mPelatihs = await prisma.mPelatih.findMany()
     * 
     * // Get first 10 MPelatihs
     * const mPelatihs = await prisma.mPelatih.findMany({ take: 10 })
     * 
     * // Only select the `uid_pelatih`
     * const mPelatihWithUid_pelatihOnly = await prisma.mPelatih.findMany({ select: { uid_pelatih: true } })
     * 
     */
    findMany<T extends MPelatihFindManyArgs>(args?: SelectSubset<T, MPelatihFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MPelatihPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MPelatih.
     * @param {MPelatihCreateArgs} args - Arguments to create a MPelatih.
     * @example
     * // Create one MPelatih
     * const MPelatih = await prisma.mPelatih.create({
     *   data: {
     *     // ... data to create a MPelatih
     *   }
     * })
     * 
     */
    create<T extends MPelatihCreateArgs>(args: SelectSubset<T, MPelatihCreateArgs<ExtArgs>>): Prisma__MPelatihClient<$Result.GetResult<Prisma.$MPelatihPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MPelatihs.
     * @param {MPelatihCreateManyArgs} args - Arguments to create many MPelatihs.
     * @example
     * // Create many MPelatihs
     * const mPelatih = await prisma.mPelatih.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MPelatihCreateManyArgs>(args?: SelectSubset<T, MPelatihCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MPelatihs and returns the data saved in the database.
     * @param {MPelatihCreateManyAndReturnArgs} args - Arguments to create many MPelatihs.
     * @example
     * // Create many MPelatihs
     * const mPelatih = await prisma.mPelatih.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MPelatihs and only return the `uid_pelatih`
     * const mPelatihWithUid_pelatihOnly = await prisma.mPelatih.createManyAndReturn({
     *   select: { uid_pelatih: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MPelatihCreateManyAndReturnArgs>(args?: SelectSubset<T, MPelatihCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MPelatihPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MPelatih.
     * @param {MPelatihDeleteArgs} args - Arguments to delete one MPelatih.
     * @example
     * // Delete one MPelatih
     * const MPelatih = await prisma.mPelatih.delete({
     *   where: {
     *     // ... filter to delete one MPelatih
     *   }
     * })
     * 
     */
    delete<T extends MPelatihDeleteArgs>(args: SelectSubset<T, MPelatihDeleteArgs<ExtArgs>>): Prisma__MPelatihClient<$Result.GetResult<Prisma.$MPelatihPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MPelatih.
     * @param {MPelatihUpdateArgs} args - Arguments to update one MPelatih.
     * @example
     * // Update one MPelatih
     * const mPelatih = await prisma.mPelatih.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MPelatihUpdateArgs>(args: SelectSubset<T, MPelatihUpdateArgs<ExtArgs>>): Prisma__MPelatihClient<$Result.GetResult<Prisma.$MPelatihPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MPelatihs.
     * @param {MPelatihDeleteManyArgs} args - Arguments to filter MPelatihs to delete.
     * @example
     * // Delete a few MPelatihs
     * const { count } = await prisma.mPelatih.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MPelatihDeleteManyArgs>(args?: SelectSubset<T, MPelatihDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MPelatihs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MPelatihUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MPelatihs
     * const mPelatih = await prisma.mPelatih.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MPelatihUpdateManyArgs>(args: SelectSubset<T, MPelatihUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MPelatihs and returns the data updated in the database.
     * @param {MPelatihUpdateManyAndReturnArgs} args - Arguments to update many MPelatihs.
     * @example
     * // Update many MPelatihs
     * const mPelatih = await prisma.mPelatih.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MPelatihs and only return the `uid_pelatih`
     * const mPelatihWithUid_pelatihOnly = await prisma.mPelatih.updateManyAndReturn({
     *   select: { uid_pelatih: true },
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
    updateManyAndReturn<T extends MPelatihUpdateManyAndReturnArgs>(args: SelectSubset<T, MPelatihUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MPelatihPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MPelatih.
     * @param {MPelatihUpsertArgs} args - Arguments to update or create a MPelatih.
     * @example
     * // Update or create a MPelatih
     * const mPelatih = await prisma.mPelatih.upsert({
     *   create: {
     *     // ... data to create a MPelatih
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MPelatih we want to update
     *   }
     * })
     */
    upsert<T extends MPelatihUpsertArgs>(args: SelectSubset<T, MPelatihUpsertArgs<ExtArgs>>): Prisma__MPelatihClient<$Result.GetResult<Prisma.$MPelatihPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MPelatihs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MPelatihCountArgs} args - Arguments to filter MPelatihs to count.
     * @example
     * // Count the number of MPelatihs
     * const count = await prisma.mPelatih.count({
     *   where: {
     *     // ... the filter for the MPelatihs we want to count
     *   }
     * })
    **/
    count<T extends MPelatihCountArgs>(
      args?: Subset<T, MPelatihCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MPelatihCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MPelatih.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MPelatihAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MPelatihAggregateArgs>(args: Subset<T, MPelatihAggregateArgs>): Prisma.PrismaPromise<GetMPelatihAggregateType<T>>

    /**
     * Group by MPelatih.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MPelatihGroupByArgs} args - Group by arguments.
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
      T extends MPelatihGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MPelatihGroupByArgs['orderBy'] }
        : { orderBy?: MPelatihGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MPelatihGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMPelatihGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MPelatih model
   */
  readonly fields: MPelatihFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MPelatih.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MPelatihClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_akun<T extends MPelatih$user_akunArgs<ExtArgs> = {}>(args?: Subset<T, MPelatih$user_akunArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    provinsi<T extends MProvinsiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MProvinsiDefaultArgs<ExtArgs>>): Prisma__MProvinsiClient<$Result.GetResult<Prisma.$MProvinsiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends MUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MUserDefaultArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updater<T extends MUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MUserDefaultArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deleter<T extends MPelatih$deleterArgs<ExtArgs> = {}>(args?: Subset<T, MPelatih$deleterArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MPelatih model
   */
  interface MPelatihFieldRefs {
    readonly uid_pelatih: FieldRef<"MPelatih", 'String'>
    readonly nik: FieldRef<"MPelatih", 'String'>
    readonly nama_lengkap: FieldRef<"MPelatih", 'String'>
    readonly jenis_kelamin: FieldRef<"MPelatih", 'JenisKelamin'>
    readonly tanggal_lahir: FieldRef<"MPelatih", 'DateTime'>
    readonly tahun_bergabung: FieldRef<"MPelatih", 'Int'>
    readonly pernah_melatih_sebelumnya: FieldRef<"MPelatih", 'Boolean'>
    readonly klub_negara_sebelumnya: FieldRef<"MPelatih", 'String'>
    readonly mantan_atlet_nasional: FieldRef<"MPelatih", 'Boolean'>
    readonly asal_klub_nasional: FieldRef<"MPelatih", 'String'>
    readonly mantan_pelatnas: FieldRef<"MPelatih", 'Boolean'>
    readonly tahun_pelatnas: FieldRef<"MPelatih", 'Int'>
    readonly foto: FieldRef<"MPelatih", 'String'>
    readonly created_at: FieldRef<"MPelatih", 'DateTime'>
    readonly updated_at: FieldRef<"MPelatih", 'DateTime'>
    readonly deleted_at: FieldRef<"MPelatih", 'DateTime'>
    readonly uid_provinsi: FieldRef<"MPelatih", 'String'>
    readonly created_by_uid: FieldRef<"MPelatih", 'String'>
    readonly updated_by_uid: FieldRef<"MPelatih", 'String'>
    readonly deleted_by_uid: FieldRef<"MPelatih", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MPelatih findUnique
   */
  export type MPelatihFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MPelatih
     */
    select?: MPelatihSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MPelatih
     */
    omit?: MPelatihOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MPelatihInclude<ExtArgs> | null
    /**
     * Filter, which MPelatih to fetch.
     */
    where: MPelatihWhereUniqueInput
  }

  /**
   * MPelatih findUniqueOrThrow
   */
  export type MPelatihFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MPelatih
     */
    select?: MPelatihSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MPelatih
     */
    omit?: MPelatihOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MPelatihInclude<ExtArgs> | null
    /**
     * Filter, which MPelatih to fetch.
     */
    where: MPelatihWhereUniqueInput
  }

  /**
   * MPelatih findFirst
   */
  export type MPelatihFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MPelatih
     */
    select?: MPelatihSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MPelatih
     */
    omit?: MPelatihOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MPelatihInclude<ExtArgs> | null
    /**
     * Filter, which MPelatih to fetch.
     */
    where?: MPelatihWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MPelatihs to fetch.
     */
    orderBy?: MPelatihOrderByWithRelationInput | MPelatihOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MPelatihs.
     */
    cursor?: MPelatihWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MPelatihs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MPelatihs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MPelatihs.
     */
    distinct?: MPelatihScalarFieldEnum | MPelatihScalarFieldEnum[]
  }

  /**
   * MPelatih findFirstOrThrow
   */
  export type MPelatihFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MPelatih
     */
    select?: MPelatihSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MPelatih
     */
    omit?: MPelatihOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MPelatihInclude<ExtArgs> | null
    /**
     * Filter, which MPelatih to fetch.
     */
    where?: MPelatihWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MPelatihs to fetch.
     */
    orderBy?: MPelatihOrderByWithRelationInput | MPelatihOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MPelatihs.
     */
    cursor?: MPelatihWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MPelatihs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MPelatihs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MPelatihs.
     */
    distinct?: MPelatihScalarFieldEnum | MPelatihScalarFieldEnum[]
  }

  /**
   * MPelatih findMany
   */
  export type MPelatihFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MPelatih
     */
    select?: MPelatihSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MPelatih
     */
    omit?: MPelatihOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MPelatihInclude<ExtArgs> | null
    /**
     * Filter, which MPelatihs to fetch.
     */
    where?: MPelatihWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MPelatihs to fetch.
     */
    orderBy?: MPelatihOrderByWithRelationInput | MPelatihOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MPelatihs.
     */
    cursor?: MPelatihWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MPelatihs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MPelatihs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MPelatihs.
     */
    distinct?: MPelatihScalarFieldEnum | MPelatihScalarFieldEnum[]
  }

  /**
   * MPelatih create
   */
  export type MPelatihCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MPelatih
     */
    select?: MPelatihSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MPelatih
     */
    omit?: MPelatihOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MPelatihInclude<ExtArgs> | null
    /**
     * The data needed to create a MPelatih.
     */
    data: XOR<MPelatihCreateInput, MPelatihUncheckedCreateInput>
  }

  /**
   * MPelatih createMany
   */
  export type MPelatihCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MPelatihs.
     */
    data: MPelatihCreateManyInput | MPelatihCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MPelatih createManyAndReturn
   */
  export type MPelatihCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MPelatih
     */
    select?: MPelatihSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MPelatih
     */
    omit?: MPelatihOmit<ExtArgs> | null
    /**
     * The data used to create many MPelatihs.
     */
    data: MPelatihCreateManyInput | MPelatihCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MPelatihIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MPelatih update
   */
  export type MPelatihUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MPelatih
     */
    select?: MPelatihSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MPelatih
     */
    omit?: MPelatihOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MPelatihInclude<ExtArgs> | null
    /**
     * The data needed to update a MPelatih.
     */
    data: XOR<MPelatihUpdateInput, MPelatihUncheckedUpdateInput>
    /**
     * Choose, which MPelatih to update.
     */
    where: MPelatihWhereUniqueInput
  }

  /**
   * MPelatih updateMany
   */
  export type MPelatihUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MPelatihs.
     */
    data: XOR<MPelatihUpdateManyMutationInput, MPelatihUncheckedUpdateManyInput>
    /**
     * Filter which MPelatihs to update
     */
    where?: MPelatihWhereInput
    /**
     * Limit how many MPelatihs to update.
     */
    limit?: number
  }

  /**
   * MPelatih updateManyAndReturn
   */
  export type MPelatihUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MPelatih
     */
    select?: MPelatihSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MPelatih
     */
    omit?: MPelatihOmit<ExtArgs> | null
    /**
     * The data used to update MPelatihs.
     */
    data: XOR<MPelatihUpdateManyMutationInput, MPelatihUncheckedUpdateManyInput>
    /**
     * Filter which MPelatihs to update
     */
    where?: MPelatihWhereInput
    /**
     * Limit how many MPelatihs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MPelatihIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MPelatih upsert
   */
  export type MPelatihUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MPelatih
     */
    select?: MPelatihSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MPelatih
     */
    omit?: MPelatihOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MPelatihInclude<ExtArgs> | null
    /**
     * The filter to search for the MPelatih to update in case it exists.
     */
    where: MPelatihWhereUniqueInput
    /**
     * In case the MPelatih found by the `where` argument doesn't exist, create a new MPelatih with this data.
     */
    create: XOR<MPelatihCreateInput, MPelatihUncheckedCreateInput>
    /**
     * In case the MPelatih was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MPelatihUpdateInput, MPelatihUncheckedUpdateInput>
  }

  /**
   * MPelatih delete
   */
  export type MPelatihDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MPelatih
     */
    select?: MPelatihSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MPelatih
     */
    omit?: MPelatihOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MPelatihInclude<ExtArgs> | null
    /**
     * Filter which MPelatih to delete.
     */
    where: MPelatihWhereUniqueInput
  }

  /**
   * MPelatih deleteMany
   */
  export type MPelatihDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MPelatihs to delete
     */
    where?: MPelatihWhereInput
    /**
     * Limit how many MPelatihs to delete.
     */
    limit?: number
  }

  /**
   * MPelatih.user_akun
   */
  export type MPelatih$user_akunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
    where?: MUserWhereInput
  }

  /**
   * MPelatih.deleter
   */
  export type MPelatih$deleterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
    where?: MUserWhereInput
  }

  /**
   * MPelatih without action
   */
  export type MPelatihDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MPelatih
     */
    select?: MPelatihSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MPelatih
     */
    omit?: MPelatihOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MPelatihInclude<ExtArgs> | null
  }


  /**
   * Model MProvinsi
   */

  export type AggregateMProvinsi = {
    _count: MProvinsiCountAggregateOutputType | null
    _min: MProvinsiMinAggregateOutputType | null
    _max: MProvinsiMaxAggregateOutputType | null
  }

  export type MProvinsiMinAggregateOutputType = {
    uid_provinsi: string | null
    nama_provinsi: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    created_by_uid: string | null
    updated_by_uid: string | null
    deleted_by_uid: string | null
  }

  export type MProvinsiMaxAggregateOutputType = {
    uid_provinsi: string | null
    nama_provinsi: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    created_by_uid: string | null
    updated_by_uid: string | null
    deleted_by_uid: string | null
  }

  export type MProvinsiCountAggregateOutputType = {
    uid_provinsi: number
    nama_provinsi: number
    created_at: number
    updated_at: number
    deleted_at: number
    created_by_uid: number
    updated_by_uid: number
    deleted_by_uid: number
    _all: number
  }


  export type MProvinsiMinAggregateInputType = {
    uid_provinsi?: true
    nama_provinsi?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    created_by_uid?: true
    updated_by_uid?: true
    deleted_by_uid?: true
  }

  export type MProvinsiMaxAggregateInputType = {
    uid_provinsi?: true
    nama_provinsi?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    created_by_uid?: true
    updated_by_uid?: true
    deleted_by_uid?: true
  }

  export type MProvinsiCountAggregateInputType = {
    uid_provinsi?: true
    nama_provinsi?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    created_by_uid?: true
    updated_by_uid?: true
    deleted_by_uid?: true
    _all?: true
  }

  export type MProvinsiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MProvinsi to aggregate.
     */
    where?: MProvinsiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MProvinsis to fetch.
     */
    orderBy?: MProvinsiOrderByWithRelationInput | MProvinsiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MProvinsiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MProvinsis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MProvinsis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MProvinsis
    **/
    _count?: true | MProvinsiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MProvinsiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MProvinsiMaxAggregateInputType
  }

  export type GetMProvinsiAggregateType<T extends MProvinsiAggregateArgs> = {
        [P in keyof T & keyof AggregateMProvinsi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMProvinsi[P]>
      : GetScalarType<T[P], AggregateMProvinsi[P]>
  }




  export type MProvinsiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MProvinsiWhereInput
    orderBy?: MProvinsiOrderByWithAggregationInput | MProvinsiOrderByWithAggregationInput[]
    by: MProvinsiScalarFieldEnum[] | MProvinsiScalarFieldEnum
    having?: MProvinsiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MProvinsiCountAggregateInputType | true
    _min?: MProvinsiMinAggregateInputType
    _max?: MProvinsiMaxAggregateInputType
  }

  export type MProvinsiGroupByOutputType = {
    uid_provinsi: string
    nama_provinsi: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    created_by_uid: string
    updated_by_uid: string
    deleted_by_uid: string | null
    _count: MProvinsiCountAggregateOutputType | null
    _min: MProvinsiMinAggregateOutputType | null
    _max: MProvinsiMaxAggregateOutputType | null
  }

  type GetMProvinsiGroupByPayload<T extends MProvinsiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MProvinsiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MProvinsiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MProvinsiGroupByOutputType[P]>
            : GetScalarType<T[P], MProvinsiGroupByOutputType[P]>
        }
      >
    >


  export type MProvinsiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid_provinsi?: boolean
    nama_provinsi?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by_uid?: boolean
    updated_by_uid?: boolean
    deleted_by_uid?: boolean
    creator?: boolean | MUserDefaultArgs<ExtArgs>
    updater?: boolean | MUserDefaultArgs<ExtArgs>
    deleter?: boolean | MProvinsi$deleterArgs<ExtArgs>
    atlets?: boolean | MProvinsi$atletsArgs<ExtArgs>
    coachs?: boolean | MProvinsi$coachsArgs<ExtArgs>
    _count?: boolean | MProvinsiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mProvinsi"]>

  export type MProvinsiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid_provinsi?: boolean
    nama_provinsi?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by_uid?: boolean
    updated_by_uid?: boolean
    deleted_by_uid?: boolean
    creator?: boolean | MUserDefaultArgs<ExtArgs>
    updater?: boolean | MUserDefaultArgs<ExtArgs>
    deleter?: boolean | MProvinsi$deleterArgs<ExtArgs>
  }, ExtArgs["result"]["mProvinsi"]>

  export type MProvinsiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uid_provinsi?: boolean
    nama_provinsi?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by_uid?: boolean
    updated_by_uid?: boolean
    deleted_by_uid?: boolean
    creator?: boolean | MUserDefaultArgs<ExtArgs>
    updater?: boolean | MUserDefaultArgs<ExtArgs>
    deleter?: boolean | MProvinsi$deleterArgs<ExtArgs>
  }, ExtArgs["result"]["mProvinsi"]>

  export type MProvinsiSelectScalar = {
    uid_provinsi?: boolean
    nama_provinsi?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    created_by_uid?: boolean
    updated_by_uid?: boolean
    deleted_by_uid?: boolean
  }

  export type MProvinsiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uid_provinsi" | "nama_provinsi" | "created_at" | "updated_at" | "deleted_at" | "created_by_uid" | "updated_by_uid" | "deleted_by_uid", ExtArgs["result"]["mProvinsi"]>
  export type MProvinsiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | MUserDefaultArgs<ExtArgs>
    updater?: boolean | MUserDefaultArgs<ExtArgs>
    deleter?: boolean | MProvinsi$deleterArgs<ExtArgs>
    atlets?: boolean | MProvinsi$atletsArgs<ExtArgs>
    coachs?: boolean | MProvinsi$coachsArgs<ExtArgs>
    _count?: boolean | MProvinsiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MProvinsiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | MUserDefaultArgs<ExtArgs>
    updater?: boolean | MUserDefaultArgs<ExtArgs>
    deleter?: boolean | MProvinsi$deleterArgs<ExtArgs>
  }
  export type MProvinsiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | MUserDefaultArgs<ExtArgs>
    updater?: boolean | MUserDefaultArgs<ExtArgs>
    deleter?: boolean | MProvinsi$deleterArgs<ExtArgs>
  }

  export type $MProvinsiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MProvinsi"
    objects: {
      creator: Prisma.$MUserPayload<ExtArgs>
      updater: Prisma.$MUserPayload<ExtArgs>
      deleter: Prisma.$MUserPayload<ExtArgs> | null
      atlets: Prisma.$MAtletPayload<ExtArgs>[]
      coachs: Prisma.$MPelatihPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uid_provinsi: string
      nama_provinsi: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      created_by_uid: string
      updated_by_uid: string
      deleted_by_uid: string | null
    }, ExtArgs["result"]["mProvinsi"]>
    composites: {}
  }

  type MProvinsiGetPayload<S extends boolean | null | undefined | MProvinsiDefaultArgs> = $Result.GetResult<Prisma.$MProvinsiPayload, S>

  type MProvinsiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MProvinsiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MProvinsiCountAggregateInputType | true
    }

  export interface MProvinsiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MProvinsi'], meta: { name: 'MProvinsi' } }
    /**
     * Find zero or one MProvinsi that matches the filter.
     * @param {MProvinsiFindUniqueArgs} args - Arguments to find a MProvinsi
     * @example
     * // Get one MProvinsi
     * const mProvinsi = await prisma.mProvinsi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MProvinsiFindUniqueArgs>(args: SelectSubset<T, MProvinsiFindUniqueArgs<ExtArgs>>): Prisma__MProvinsiClient<$Result.GetResult<Prisma.$MProvinsiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MProvinsi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MProvinsiFindUniqueOrThrowArgs} args - Arguments to find a MProvinsi
     * @example
     * // Get one MProvinsi
     * const mProvinsi = await prisma.mProvinsi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MProvinsiFindUniqueOrThrowArgs>(args: SelectSubset<T, MProvinsiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MProvinsiClient<$Result.GetResult<Prisma.$MProvinsiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MProvinsi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MProvinsiFindFirstArgs} args - Arguments to find a MProvinsi
     * @example
     * // Get one MProvinsi
     * const mProvinsi = await prisma.mProvinsi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MProvinsiFindFirstArgs>(args?: SelectSubset<T, MProvinsiFindFirstArgs<ExtArgs>>): Prisma__MProvinsiClient<$Result.GetResult<Prisma.$MProvinsiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MProvinsi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MProvinsiFindFirstOrThrowArgs} args - Arguments to find a MProvinsi
     * @example
     * // Get one MProvinsi
     * const mProvinsi = await prisma.mProvinsi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MProvinsiFindFirstOrThrowArgs>(args?: SelectSubset<T, MProvinsiFindFirstOrThrowArgs<ExtArgs>>): Prisma__MProvinsiClient<$Result.GetResult<Prisma.$MProvinsiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MProvinsis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MProvinsiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MProvinsis
     * const mProvinsis = await prisma.mProvinsi.findMany()
     * 
     * // Get first 10 MProvinsis
     * const mProvinsis = await prisma.mProvinsi.findMany({ take: 10 })
     * 
     * // Only select the `uid_provinsi`
     * const mProvinsiWithUid_provinsiOnly = await prisma.mProvinsi.findMany({ select: { uid_provinsi: true } })
     * 
     */
    findMany<T extends MProvinsiFindManyArgs>(args?: SelectSubset<T, MProvinsiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MProvinsiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MProvinsi.
     * @param {MProvinsiCreateArgs} args - Arguments to create a MProvinsi.
     * @example
     * // Create one MProvinsi
     * const MProvinsi = await prisma.mProvinsi.create({
     *   data: {
     *     // ... data to create a MProvinsi
     *   }
     * })
     * 
     */
    create<T extends MProvinsiCreateArgs>(args: SelectSubset<T, MProvinsiCreateArgs<ExtArgs>>): Prisma__MProvinsiClient<$Result.GetResult<Prisma.$MProvinsiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MProvinsis.
     * @param {MProvinsiCreateManyArgs} args - Arguments to create many MProvinsis.
     * @example
     * // Create many MProvinsis
     * const mProvinsi = await prisma.mProvinsi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MProvinsiCreateManyArgs>(args?: SelectSubset<T, MProvinsiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MProvinsis and returns the data saved in the database.
     * @param {MProvinsiCreateManyAndReturnArgs} args - Arguments to create many MProvinsis.
     * @example
     * // Create many MProvinsis
     * const mProvinsi = await prisma.mProvinsi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MProvinsis and only return the `uid_provinsi`
     * const mProvinsiWithUid_provinsiOnly = await prisma.mProvinsi.createManyAndReturn({
     *   select: { uid_provinsi: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MProvinsiCreateManyAndReturnArgs>(args?: SelectSubset<T, MProvinsiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MProvinsiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MProvinsi.
     * @param {MProvinsiDeleteArgs} args - Arguments to delete one MProvinsi.
     * @example
     * // Delete one MProvinsi
     * const MProvinsi = await prisma.mProvinsi.delete({
     *   where: {
     *     // ... filter to delete one MProvinsi
     *   }
     * })
     * 
     */
    delete<T extends MProvinsiDeleteArgs>(args: SelectSubset<T, MProvinsiDeleteArgs<ExtArgs>>): Prisma__MProvinsiClient<$Result.GetResult<Prisma.$MProvinsiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MProvinsi.
     * @param {MProvinsiUpdateArgs} args - Arguments to update one MProvinsi.
     * @example
     * // Update one MProvinsi
     * const mProvinsi = await prisma.mProvinsi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MProvinsiUpdateArgs>(args: SelectSubset<T, MProvinsiUpdateArgs<ExtArgs>>): Prisma__MProvinsiClient<$Result.GetResult<Prisma.$MProvinsiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MProvinsis.
     * @param {MProvinsiDeleteManyArgs} args - Arguments to filter MProvinsis to delete.
     * @example
     * // Delete a few MProvinsis
     * const { count } = await prisma.mProvinsi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MProvinsiDeleteManyArgs>(args?: SelectSubset<T, MProvinsiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MProvinsis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MProvinsiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MProvinsis
     * const mProvinsi = await prisma.mProvinsi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MProvinsiUpdateManyArgs>(args: SelectSubset<T, MProvinsiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MProvinsis and returns the data updated in the database.
     * @param {MProvinsiUpdateManyAndReturnArgs} args - Arguments to update many MProvinsis.
     * @example
     * // Update many MProvinsis
     * const mProvinsi = await prisma.mProvinsi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MProvinsis and only return the `uid_provinsi`
     * const mProvinsiWithUid_provinsiOnly = await prisma.mProvinsi.updateManyAndReturn({
     *   select: { uid_provinsi: true },
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
    updateManyAndReturn<T extends MProvinsiUpdateManyAndReturnArgs>(args: SelectSubset<T, MProvinsiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MProvinsiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MProvinsi.
     * @param {MProvinsiUpsertArgs} args - Arguments to update or create a MProvinsi.
     * @example
     * // Update or create a MProvinsi
     * const mProvinsi = await prisma.mProvinsi.upsert({
     *   create: {
     *     // ... data to create a MProvinsi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MProvinsi we want to update
     *   }
     * })
     */
    upsert<T extends MProvinsiUpsertArgs>(args: SelectSubset<T, MProvinsiUpsertArgs<ExtArgs>>): Prisma__MProvinsiClient<$Result.GetResult<Prisma.$MProvinsiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MProvinsis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MProvinsiCountArgs} args - Arguments to filter MProvinsis to count.
     * @example
     * // Count the number of MProvinsis
     * const count = await prisma.mProvinsi.count({
     *   where: {
     *     // ... the filter for the MProvinsis we want to count
     *   }
     * })
    **/
    count<T extends MProvinsiCountArgs>(
      args?: Subset<T, MProvinsiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MProvinsiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MProvinsi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MProvinsiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MProvinsiAggregateArgs>(args: Subset<T, MProvinsiAggregateArgs>): Prisma.PrismaPromise<GetMProvinsiAggregateType<T>>

    /**
     * Group by MProvinsi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MProvinsiGroupByArgs} args - Group by arguments.
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
      T extends MProvinsiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MProvinsiGroupByArgs['orderBy'] }
        : { orderBy?: MProvinsiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MProvinsiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMProvinsiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MProvinsi model
   */
  readonly fields: MProvinsiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MProvinsi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MProvinsiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends MUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MUserDefaultArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updater<T extends MUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MUserDefaultArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deleter<T extends MProvinsi$deleterArgs<ExtArgs> = {}>(args?: Subset<T, MProvinsi$deleterArgs<ExtArgs>>): Prisma__MUserClient<$Result.GetResult<Prisma.$MUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    atlets<T extends MProvinsi$atletsArgs<ExtArgs> = {}>(args?: Subset<T, MProvinsi$atletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MAtletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coachs<T extends MProvinsi$coachsArgs<ExtArgs> = {}>(args?: Subset<T, MProvinsi$coachsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MPelatihPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MProvinsi model
   */
  interface MProvinsiFieldRefs {
    readonly uid_provinsi: FieldRef<"MProvinsi", 'String'>
    readonly nama_provinsi: FieldRef<"MProvinsi", 'String'>
    readonly created_at: FieldRef<"MProvinsi", 'DateTime'>
    readonly updated_at: FieldRef<"MProvinsi", 'DateTime'>
    readonly deleted_at: FieldRef<"MProvinsi", 'DateTime'>
    readonly created_by_uid: FieldRef<"MProvinsi", 'String'>
    readonly updated_by_uid: FieldRef<"MProvinsi", 'String'>
    readonly deleted_by_uid: FieldRef<"MProvinsi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MProvinsi findUnique
   */
  export type MProvinsiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MProvinsi
     */
    select?: MProvinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MProvinsi
     */
    omit?: MProvinsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MProvinsiInclude<ExtArgs> | null
    /**
     * Filter, which MProvinsi to fetch.
     */
    where: MProvinsiWhereUniqueInput
  }

  /**
   * MProvinsi findUniqueOrThrow
   */
  export type MProvinsiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MProvinsi
     */
    select?: MProvinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MProvinsi
     */
    omit?: MProvinsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MProvinsiInclude<ExtArgs> | null
    /**
     * Filter, which MProvinsi to fetch.
     */
    where: MProvinsiWhereUniqueInput
  }

  /**
   * MProvinsi findFirst
   */
  export type MProvinsiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MProvinsi
     */
    select?: MProvinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MProvinsi
     */
    omit?: MProvinsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MProvinsiInclude<ExtArgs> | null
    /**
     * Filter, which MProvinsi to fetch.
     */
    where?: MProvinsiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MProvinsis to fetch.
     */
    orderBy?: MProvinsiOrderByWithRelationInput | MProvinsiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MProvinsis.
     */
    cursor?: MProvinsiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MProvinsis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MProvinsis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MProvinsis.
     */
    distinct?: MProvinsiScalarFieldEnum | MProvinsiScalarFieldEnum[]
  }

  /**
   * MProvinsi findFirstOrThrow
   */
  export type MProvinsiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MProvinsi
     */
    select?: MProvinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MProvinsi
     */
    omit?: MProvinsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MProvinsiInclude<ExtArgs> | null
    /**
     * Filter, which MProvinsi to fetch.
     */
    where?: MProvinsiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MProvinsis to fetch.
     */
    orderBy?: MProvinsiOrderByWithRelationInput | MProvinsiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MProvinsis.
     */
    cursor?: MProvinsiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MProvinsis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MProvinsis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MProvinsis.
     */
    distinct?: MProvinsiScalarFieldEnum | MProvinsiScalarFieldEnum[]
  }

  /**
   * MProvinsi findMany
   */
  export type MProvinsiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MProvinsi
     */
    select?: MProvinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MProvinsi
     */
    omit?: MProvinsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MProvinsiInclude<ExtArgs> | null
    /**
     * Filter, which MProvinsis to fetch.
     */
    where?: MProvinsiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MProvinsis to fetch.
     */
    orderBy?: MProvinsiOrderByWithRelationInput | MProvinsiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MProvinsis.
     */
    cursor?: MProvinsiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MProvinsis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MProvinsis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MProvinsis.
     */
    distinct?: MProvinsiScalarFieldEnum | MProvinsiScalarFieldEnum[]
  }

  /**
   * MProvinsi create
   */
  export type MProvinsiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MProvinsi
     */
    select?: MProvinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MProvinsi
     */
    omit?: MProvinsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MProvinsiInclude<ExtArgs> | null
    /**
     * The data needed to create a MProvinsi.
     */
    data: XOR<MProvinsiCreateInput, MProvinsiUncheckedCreateInput>
  }

  /**
   * MProvinsi createMany
   */
  export type MProvinsiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MProvinsis.
     */
    data: MProvinsiCreateManyInput | MProvinsiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MProvinsi createManyAndReturn
   */
  export type MProvinsiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MProvinsi
     */
    select?: MProvinsiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MProvinsi
     */
    omit?: MProvinsiOmit<ExtArgs> | null
    /**
     * The data used to create many MProvinsis.
     */
    data: MProvinsiCreateManyInput | MProvinsiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MProvinsiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MProvinsi update
   */
  export type MProvinsiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MProvinsi
     */
    select?: MProvinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MProvinsi
     */
    omit?: MProvinsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MProvinsiInclude<ExtArgs> | null
    /**
     * The data needed to update a MProvinsi.
     */
    data: XOR<MProvinsiUpdateInput, MProvinsiUncheckedUpdateInput>
    /**
     * Choose, which MProvinsi to update.
     */
    where: MProvinsiWhereUniqueInput
  }

  /**
   * MProvinsi updateMany
   */
  export type MProvinsiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MProvinsis.
     */
    data: XOR<MProvinsiUpdateManyMutationInput, MProvinsiUncheckedUpdateManyInput>
    /**
     * Filter which MProvinsis to update
     */
    where?: MProvinsiWhereInput
    /**
     * Limit how many MProvinsis to update.
     */
    limit?: number
  }

  /**
   * MProvinsi updateManyAndReturn
   */
  export type MProvinsiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MProvinsi
     */
    select?: MProvinsiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MProvinsi
     */
    omit?: MProvinsiOmit<ExtArgs> | null
    /**
     * The data used to update MProvinsis.
     */
    data: XOR<MProvinsiUpdateManyMutationInput, MProvinsiUncheckedUpdateManyInput>
    /**
     * Filter which MProvinsis to update
     */
    where?: MProvinsiWhereInput
    /**
     * Limit how many MProvinsis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MProvinsiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MProvinsi upsert
   */
  export type MProvinsiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MProvinsi
     */
    select?: MProvinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MProvinsi
     */
    omit?: MProvinsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MProvinsiInclude<ExtArgs> | null
    /**
     * The filter to search for the MProvinsi to update in case it exists.
     */
    where: MProvinsiWhereUniqueInput
    /**
     * In case the MProvinsi found by the `where` argument doesn't exist, create a new MProvinsi with this data.
     */
    create: XOR<MProvinsiCreateInput, MProvinsiUncheckedCreateInput>
    /**
     * In case the MProvinsi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MProvinsiUpdateInput, MProvinsiUncheckedUpdateInput>
  }

  /**
   * MProvinsi delete
   */
  export type MProvinsiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MProvinsi
     */
    select?: MProvinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MProvinsi
     */
    omit?: MProvinsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MProvinsiInclude<ExtArgs> | null
    /**
     * Filter which MProvinsi to delete.
     */
    where: MProvinsiWhereUniqueInput
  }

  /**
   * MProvinsi deleteMany
   */
  export type MProvinsiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MProvinsis to delete
     */
    where?: MProvinsiWhereInput
    /**
     * Limit how many MProvinsis to delete.
     */
    limit?: number
  }

  /**
   * MProvinsi.deleter
   */
  export type MProvinsi$deleterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUser
     */
    select?: MUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MUser
     */
    omit?: MUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MUserInclude<ExtArgs> | null
    where?: MUserWhereInput
  }

  /**
   * MProvinsi.atlets
   */
  export type MProvinsi$atletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MAtlet
     */
    select?: MAtletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MAtlet
     */
    omit?: MAtletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MAtletInclude<ExtArgs> | null
    where?: MAtletWhereInput
    orderBy?: MAtletOrderByWithRelationInput | MAtletOrderByWithRelationInput[]
    cursor?: MAtletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MAtletScalarFieldEnum | MAtletScalarFieldEnum[]
  }

  /**
   * MProvinsi.coachs
   */
  export type MProvinsi$coachsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MPelatih
     */
    select?: MPelatihSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MPelatih
     */
    omit?: MPelatihOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MPelatihInclude<ExtArgs> | null
    where?: MPelatihWhereInput
    orderBy?: MPelatihOrderByWithRelationInput | MPelatihOrderByWithRelationInput[]
    cursor?: MPelatihWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MPelatihScalarFieldEnum | MPelatihScalarFieldEnum[]
  }

  /**
   * MProvinsi without action
   */
  export type MProvinsiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MProvinsi
     */
    select?: MProvinsiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MProvinsi
     */
    omit?: MProvinsiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MProvinsiInclude<ExtArgs> | null
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


  export const MUserScalarFieldEnum: {
    uid_user: 'uid_user',
    username: 'username',
    password: 'password',
    role: 'role',
    uid_atlet: 'uid_atlet',
    uid_pelatih: 'uid_pelatih',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    created_by_uid: 'created_by_uid',
    updated_by_uid: 'updated_by_uid',
    deleted_by_uid: 'deleted_by_uid'
  };

  export type MUserScalarFieldEnum = (typeof MUserScalarFieldEnum)[keyof typeof MUserScalarFieldEnum]


  export const MAtletScalarFieldEnum: {
    uid_atlet: 'uid_atlet',
    nik: 'nik',
    id_pbsi: 'id_pbsi',
    nama_lengkap: 'nama_lengkap',
    nama_ayah: 'nama_ayah',
    nama_ibu: 'nama_ibu',
    tempat_lahir: 'tempat_lahir',
    tanggal_lahir: 'tanggal_lahir',
    alamat: 'alamat',
    jenis_kelamin: 'jenis_kelamin',
    pegangan_raket: 'pegangan_raket',
    tinggi_badan: 'tinggi_badan',
    berat_badan: 'berat_badan',
    status_atlet: 'status_atlet',
    foto: 'foto',
    uid_provinsi: 'uid_provinsi',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    created_by_uid: 'created_by_uid',
    updated_by_uid: 'updated_by_uid',
    deleted_by_uid: 'deleted_by_uid'
  };

  export type MAtletScalarFieldEnum = (typeof MAtletScalarFieldEnum)[keyof typeof MAtletScalarFieldEnum]


  export const MPelatihScalarFieldEnum: {
    uid_pelatih: 'uid_pelatih',
    nik: 'nik',
    nama_lengkap: 'nama_lengkap',
    jenis_kelamin: 'jenis_kelamin',
    tanggal_lahir: 'tanggal_lahir',
    tahun_bergabung: 'tahun_bergabung',
    pernah_melatih_sebelumnya: 'pernah_melatih_sebelumnya',
    klub_negara_sebelumnya: 'klub_negara_sebelumnya',
    mantan_atlet_nasional: 'mantan_atlet_nasional',
    asal_klub_nasional: 'asal_klub_nasional',
    mantan_pelatnas: 'mantan_pelatnas',
    tahun_pelatnas: 'tahun_pelatnas',
    foto: 'foto',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    uid_provinsi: 'uid_provinsi',
    created_by_uid: 'created_by_uid',
    updated_by_uid: 'updated_by_uid',
    deleted_by_uid: 'deleted_by_uid'
  };

  export type MPelatihScalarFieldEnum = (typeof MPelatihScalarFieldEnum)[keyof typeof MPelatihScalarFieldEnum]


  export const MProvinsiScalarFieldEnum: {
    uid_provinsi: 'uid_provinsi',
    nama_provinsi: 'nama_provinsi',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    created_by_uid: 'created_by_uid',
    updated_by_uid: 'updated_by_uid',
    deleted_by_uid: 'deleted_by_uid'
  };

  export type MProvinsiScalarFieldEnum = (typeof MProvinsiScalarFieldEnum)[keyof typeof MProvinsiScalarFieldEnum]


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
   * Reference to a field of type 'RoleUser'
   */
  export type EnumRoleUserFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleUser'>
    


  /**
   * Reference to a field of type 'RoleUser[]'
   */
  export type ListEnumRoleUserFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleUser[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'JenisKelamin'
   */
  export type EnumJenisKelaminFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisKelamin'>
    


  /**
   * Reference to a field of type 'JenisKelamin[]'
   */
  export type ListEnumJenisKelaminFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisKelamin[]'>
    


  /**
   * Reference to a field of type 'PeganganRaket'
   */
  export type EnumPeganganRaketFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PeganganRaket'>
    


  /**
   * Reference to a field of type 'PeganganRaket[]'
   */
  export type ListEnumPeganganRaketFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PeganganRaket[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'StatusAtlet'
   */
  export type EnumStatusAtletFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAtlet'>
    


  /**
   * Reference to a field of type 'StatusAtlet[]'
   */
  export type ListEnumStatusAtletFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAtlet[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type MUserWhereInput = {
    AND?: MUserWhereInput | MUserWhereInput[]
    OR?: MUserWhereInput[]
    NOT?: MUserWhereInput | MUserWhereInput[]
    uid_user?: StringFilter<"MUser"> | string
    username?: StringFilter<"MUser"> | string
    password?: StringFilter<"MUser"> | string
    role?: EnumRoleUserFilter<"MUser"> | $Enums.RoleUser
    uid_atlet?: StringNullableFilter<"MUser"> | string | null
    uid_pelatih?: StringNullableFilter<"MUser"> | string | null
    created_at?: DateTimeFilter<"MUser"> | Date | string
    updated_at?: DateTimeFilter<"MUser"> | Date | string
    deleted_at?: DateTimeNullableFilter<"MUser"> | Date | string | null
    created_by_uid?: StringNullableFilter<"MUser"> | string | null
    updated_by_uid?: StringNullableFilter<"MUser"> | string | null
    deleted_by_uid?: StringNullableFilter<"MUser"> | string | null
    atlet_profile?: XOR<MAtletNullableScalarRelationFilter, MAtletWhereInput> | null
    pelatih_profile?: XOR<MPelatihNullableScalarRelationFilter, MPelatihWhereInput> | null
    creator?: XOR<MUserNullableScalarRelationFilter, MUserWhereInput> | null
    updater?: XOR<MUserNullableScalarRelationFilter, MUserWhereInput> | null
    deleter?: XOR<MUserNullableScalarRelationFilter, MUserWhereInput> | null
    created_users?: MUserListRelationFilter
    updated_users?: MUserListRelationFilter
    deleted_users?: MUserListRelationFilter
    created_atlets?: MAtletListRelationFilter
    updated_atlets?: MAtletListRelationFilter
    deleted_atlets?: MAtletListRelationFilter
    created_pelatihhs?: MPelatihListRelationFilter
    updated_pelatihhs?: MPelatihListRelationFilter
    deleted_pelatihhs?: MPelatihListRelationFilter
    created_provinsis?: MProvinsiListRelationFilter
    updated_provinsis?: MProvinsiListRelationFilter
    deleted_provinsis?: MProvinsiListRelationFilter
  }

  export type MUserOrderByWithRelationInput = {
    uid_user?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    uid_atlet?: SortOrderInput | SortOrder
    uid_pelatih?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_by_uid?: SortOrderInput | SortOrder
    updated_by_uid?: SortOrderInput | SortOrder
    deleted_by_uid?: SortOrderInput | SortOrder
    atlet_profile?: MAtletOrderByWithRelationInput
    pelatih_profile?: MPelatihOrderByWithRelationInput
    creator?: MUserOrderByWithRelationInput
    updater?: MUserOrderByWithRelationInput
    deleter?: MUserOrderByWithRelationInput
    created_users?: MUserOrderByRelationAggregateInput
    updated_users?: MUserOrderByRelationAggregateInput
    deleted_users?: MUserOrderByRelationAggregateInput
    created_atlets?: MAtletOrderByRelationAggregateInput
    updated_atlets?: MAtletOrderByRelationAggregateInput
    deleted_atlets?: MAtletOrderByRelationAggregateInput
    created_pelatihhs?: MPelatihOrderByRelationAggregateInput
    updated_pelatihhs?: MPelatihOrderByRelationAggregateInput
    deleted_pelatihhs?: MPelatihOrderByRelationAggregateInput
    created_provinsis?: MProvinsiOrderByRelationAggregateInput
    updated_provinsis?: MProvinsiOrderByRelationAggregateInput
    deleted_provinsis?: MProvinsiOrderByRelationAggregateInput
  }

  export type MUserWhereUniqueInput = Prisma.AtLeast<{
    uid_user?: string
    uid_atlet?: string
    uid_pelatih?: string
    AND?: MUserWhereInput | MUserWhereInput[]
    OR?: MUserWhereInput[]
    NOT?: MUserWhereInput | MUserWhereInput[]
    username?: StringFilter<"MUser"> | string
    password?: StringFilter<"MUser"> | string
    role?: EnumRoleUserFilter<"MUser"> | $Enums.RoleUser
    created_at?: DateTimeFilter<"MUser"> | Date | string
    updated_at?: DateTimeFilter<"MUser"> | Date | string
    deleted_at?: DateTimeNullableFilter<"MUser"> | Date | string | null
    created_by_uid?: StringNullableFilter<"MUser"> | string | null
    updated_by_uid?: StringNullableFilter<"MUser"> | string | null
    deleted_by_uid?: StringNullableFilter<"MUser"> | string | null
    atlet_profile?: XOR<MAtletNullableScalarRelationFilter, MAtletWhereInput> | null
    pelatih_profile?: XOR<MPelatihNullableScalarRelationFilter, MPelatihWhereInput> | null
    creator?: XOR<MUserNullableScalarRelationFilter, MUserWhereInput> | null
    updater?: XOR<MUserNullableScalarRelationFilter, MUserWhereInput> | null
    deleter?: XOR<MUserNullableScalarRelationFilter, MUserWhereInput> | null
    created_users?: MUserListRelationFilter
    updated_users?: MUserListRelationFilter
    deleted_users?: MUserListRelationFilter
    created_atlets?: MAtletListRelationFilter
    updated_atlets?: MAtletListRelationFilter
    deleted_atlets?: MAtletListRelationFilter
    created_pelatihhs?: MPelatihListRelationFilter
    updated_pelatihhs?: MPelatihListRelationFilter
    deleted_pelatihhs?: MPelatihListRelationFilter
    created_provinsis?: MProvinsiListRelationFilter
    updated_provinsis?: MProvinsiListRelationFilter
    deleted_provinsis?: MProvinsiListRelationFilter
  }, "uid_user" | "uid_atlet" | "uid_pelatih">

  export type MUserOrderByWithAggregationInput = {
    uid_user?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    uid_atlet?: SortOrderInput | SortOrder
    uid_pelatih?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_by_uid?: SortOrderInput | SortOrder
    updated_by_uid?: SortOrderInput | SortOrder
    deleted_by_uid?: SortOrderInput | SortOrder
    _count?: MUserCountOrderByAggregateInput
    _max?: MUserMaxOrderByAggregateInput
    _min?: MUserMinOrderByAggregateInput
  }

  export type MUserScalarWhereWithAggregatesInput = {
    AND?: MUserScalarWhereWithAggregatesInput | MUserScalarWhereWithAggregatesInput[]
    OR?: MUserScalarWhereWithAggregatesInput[]
    NOT?: MUserScalarWhereWithAggregatesInput | MUserScalarWhereWithAggregatesInput[]
    uid_user?: StringWithAggregatesFilter<"MUser"> | string
    username?: StringWithAggregatesFilter<"MUser"> | string
    password?: StringWithAggregatesFilter<"MUser"> | string
    role?: EnumRoleUserWithAggregatesFilter<"MUser"> | $Enums.RoleUser
    uid_atlet?: StringNullableWithAggregatesFilter<"MUser"> | string | null
    uid_pelatih?: StringNullableWithAggregatesFilter<"MUser"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"MUser"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"MUser"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"MUser"> | Date | string | null
    created_by_uid?: StringNullableWithAggregatesFilter<"MUser"> | string | null
    updated_by_uid?: StringNullableWithAggregatesFilter<"MUser"> | string | null
    deleted_by_uid?: StringNullableWithAggregatesFilter<"MUser"> | string | null
  }

  export type MAtletWhereInput = {
    AND?: MAtletWhereInput | MAtletWhereInput[]
    OR?: MAtletWhereInput[]
    NOT?: MAtletWhereInput | MAtletWhereInput[]
    uid_atlet?: StringFilter<"MAtlet"> | string
    nik?: StringFilter<"MAtlet"> | string
    id_pbsi?: StringFilter<"MAtlet"> | string
    nama_lengkap?: StringFilter<"MAtlet"> | string
    nama_ayah?: StringFilter<"MAtlet"> | string
    nama_ibu?: StringFilter<"MAtlet"> | string
    tempat_lahir?: StringFilter<"MAtlet"> | string
    tanggal_lahir?: DateTimeFilter<"MAtlet"> | Date | string
    alamat?: StringFilter<"MAtlet"> | string
    jenis_kelamin?: EnumJenisKelaminFilter<"MAtlet"> | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFilter<"MAtlet"> | $Enums.PeganganRaket
    tinggi_badan?: IntFilter<"MAtlet"> | number
    berat_badan?: IntFilter<"MAtlet"> | number
    status_atlet?: EnumStatusAtletFilter<"MAtlet"> | $Enums.StatusAtlet
    foto?: StringFilter<"MAtlet"> | string
    uid_provinsi?: StringFilter<"MAtlet"> | string
    created_at?: DateTimeFilter<"MAtlet"> | Date | string
    updated_at?: DateTimeFilter<"MAtlet"> | Date | string
    deleted_at?: DateTimeNullableFilter<"MAtlet"> | Date | string | null
    created_by_uid?: StringFilter<"MAtlet"> | string
    updated_by_uid?: StringFilter<"MAtlet"> | string
    deleted_by_uid?: StringNullableFilter<"MAtlet"> | string | null
    user_akun?: XOR<MUserNullableScalarRelationFilter, MUserWhereInput> | null
    provinsi?: XOR<MProvinsiScalarRelationFilter, MProvinsiWhereInput>
    creator?: XOR<MUserScalarRelationFilter, MUserWhereInput>
    updater?: XOR<MUserScalarRelationFilter, MUserWhereInput>
    deleter?: XOR<MUserNullableScalarRelationFilter, MUserWhereInput> | null
  }

  export type MAtletOrderByWithRelationInput = {
    uid_atlet?: SortOrder
    nik?: SortOrder
    id_pbsi?: SortOrder
    nama_lengkap?: SortOrder
    nama_ayah?: SortOrder
    nama_ibu?: SortOrder
    tempat_lahir?: SortOrder
    tanggal_lahir?: SortOrder
    alamat?: SortOrder
    jenis_kelamin?: SortOrder
    pegangan_raket?: SortOrder
    tinggi_badan?: SortOrder
    berat_badan?: SortOrder
    status_atlet?: SortOrder
    foto?: SortOrder
    uid_provinsi?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_by_uid?: SortOrder
    updated_by_uid?: SortOrder
    deleted_by_uid?: SortOrderInput | SortOrder
    user_akun?: MUserOrderByWithRelationInput
    provinsi?: MProvinsiOrderByWithRelationInput
    creator?: MUserOrderByWithRelationInput
    updater?: MUserOrderByWithRelationInput
    deleter?: MUserOrderByWithRelationInput
  }

  export type MAtletWhereUniqueInput = Prisma.AtLeast<{
    uid_atlet?: string
    AND?: MAtletWhereInput | MAtletWhereInput[]
    OR?: MAtletWhereInput[]
    NOT?: MAtletWhereInput | MAtletWhereInput[]
    nik?: StringFilter<"MAtlet"> | string
    id_pbsi?: StringFilter<"MAtlet"> | string
    nama_lengkap?: StringFilter<"MAtlet"> | string
    nama_ayah?: StringFilter<"MAtlet"> | string
    nama_ibu?: StringFilter<"MAtlet"> | string
    tempat_lahir?: StringFilter<"MAtlet"> | string
    tanggal_lahir?: DateTimeFilter<"MAtlet"> | Date | string
    alamat?: StringFilter<"MAtlet"> | string
    jenis_kelamin?: EnumJenisKelaminFilter<"MAtlet"> | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFilter<"MAtlet"> | $Enums.PeganganRaket
    tinggi_badan?: IntFilter<"MAtlet"> | number
    berat_badan?: IntFilter<"MAtlet"> | number
    status_atlet?: EnumStatusAtletFilter<"MAtlet"> | $Enums.StatusAtlet
    foto?: StringFilter<"MAtlet"> | string
    uid_provinsi?: StringFilter<"MAtlet"> | string
    created_at?: DateTimeFilter<"MAtlet"> | Date | string
    updated_at?: DateTimeFilter<"MAtlet"> | Date | string
    deleted_at?: DateTimeNullableFilter<"MAtlet"> | Date | string | null
    created_by_uid?: StringFilter<"MAtlet"> | string
    updated_by_uid?: StringFilter<"MAtlet"> | string
    deleted_by_uid?: StringNullableFilter<"MAtlet"> | string | null
    user_akun?: XOR<MUserNullableScalarRelationFilter, MUserWhereInput> | null
    provinsi?: XOR<MProvinsiScalarRelationFilter, MProvinsiWhereInput>
    creator?: XOR<MUserScalarRelationFilter, MUserWhereInput>
    updater?: XOR<MUserScalarRelationFilter, MUserWhereInput>
    deleter?: XOR<MUserNullableScalarRelationFilter, MUserWhereInput> | null
  }, "uid_atlet">

  export type MAtletOrderByWithAggregationInput = {
    uid_atlet?: SortOrder
    nik?: SortOrder
    id_pbsi?: SortOrder
    nama_lengkap?: SortOrder
    nama_ayah?: SortOrder
    nama_ibu?: SortOrder
    tempat_lahir?: SortOrder
    tanggal_lahir?: SortOrder
    alamat?: SortOrder
    jenis_kelamin?: SortOrder
    pegangan_raket?: SortOrder
    tinggi_badan?: SortOrder
    berat_badan?: SortOrder
    status_atlet?: SortOrder
    foto?: SortOrder
    uid_provinsi?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_by_uid?: SortOrder
    updated_by_uid?: SortOrder
    deleted_by_uid?: SortOrderInput | SortOrder
    _count?: MAtletCountOrderByAggregateInput
    _avg?: MAtletAvgOrderByAggregateInput
    _max?: MAtletMaxOrderByAggregateInput
    _min?: MAtletMinOrderByAggregateInput
    _sum?: MAtletSumOrderByAggregateInput
  }

  export type MAtletScalarWhereWithAggregatesInput = {
    AND?: MAtletScalarWhereWithAggregatesInput | MAtletScalarWhereWithAggregatesInput[]
    OR?: MAtletScalarWhereWithAggregatesInput[]
    NOT?: MAtletScalarWhereWithAggregatesInput | MAtletScalarWhereWithAggregatesInput[]
    uid_atlet?: StringWithAggregatesFilter<"MAtlet"> | string
    nik?: StringWithAggregatesFilter<"MAtlet"> | string
    id_pbsi?: StringWithAggregatesFilter<"MAtlet"> | string
    nama_lengkap?: StringWithAggregatesFilter<"MAtlet"> | string
    nama_ayah?: StringWithAggregatesFilter<"MAtlet"> | string
    nama_ibu?: StringWithAggregatesFilter<"MAtlet"> | string
    tempat_lahir?: StringWithAggregatesFilter<"MAtlet"> | string
    tanggal_lahir?: DateTimeWithAggregatesFilter<"MAtlet"> | Date | string
    alamat?: StringWithAggregatesFilter<"MAtlet"> | string
    jenis_kelamin?: EnumJenisKelaminWithAggregatesFilter<"MAtlet"> | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketWithAggregatesFilter<"MAtlet"> | $Enums.PeganganRaket
    tinggi_badan?: IntWithAggregatesFilter<"MAtlet"> | number
    berat_badan?: IntWithAggregatesFilter<"MAtlet"> | number
    status_atlet?: EnumStatusAtletWithAggregatesFilter<"MAtlet"> | $Enums.StatusAtlet
    foto?: StringWithAggregatesFilter<"MAtlet"> | string
    uid_provinsi?: StringWithAggregatesFilter<"MAtlet"> | string
    created_at?: DateTimeWithAggregatesFilter<"MAtlet"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"MAtlet"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"MAtlet"> | Date | string | null
    created_by_uid?: StringWithAggregatesFilter<"MAtlet"> | string
    updated_by_uid?: StringWithAggregatesFilter<"MAtlet"> | string
    deleted_by_uid?: StringNullableWithAggregatesFilter<"MAtlet"> | string | null
  }

  export type MPelatihWhereInput = {
    AND?: MPelatihWhereInput | MPelatihWhereInput[]
    OR?: MPelatihWhereInput[]
    NOT?: MPelatihWhereInput | MPelatihWhereInput[]
    uid_pelatih?: StringFilter<"MPelatih"> | string
    nik?: StringFilter<"MPelatih"> | string
    nama_lengkap?: StringFilter<"MPelatih"> | string
    jenis_kelamin?: EnumJenisKelaminFilter<"MPelatih"> | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFilter<"MPelatih"> | Date | string
    tahun_bergabung?: IntFilter<"MPelatih"> | number
    pernah_melatih_sebelumnya?: BoolFilter<"MPelatih"> | boolean
    klub_negara_sebelumnya?: StringFilter<"MPelatih"> | string
    mantan_atlet_nasional?: BoolFilter<"MPelatih"> | boolean
    asal_klub_nasional?: StringFilter<"MPelatih"> | string
    mantan_pelatnas?: BoolFilter<"MPelatih"> | boolean
    tahun_pelatnas?: IntFilter<"MPelatih"> | number
    foto?: StringFilter<"MPelatih"> | string
    created_at?: DateTimeFilter<"MPelatih"> | Date | string
    updated_at?: DateTimeFilter<"MPelatih"> | Date | string
    deleted_at?: DateTimeNullableFilter<"MPelatih"> | Date | string | null
    uid_provinsi?: StringFilter<"MPelatih"> | string
    created_by_uid?: StringFilter<"MPelatih"> | string
    updated_by_uid?: StringFilter<"MPelatih"> | string
    deleted_by_uid?: StringNullableFilter<"MPelatih"> | string | null
    user_akun?: XOR<MUserNullableScalarRelationFilter, MUserWhereInput> | null
    provinsi?: XOR<MProvinsiScalarRelationFilter, MProvinsiWhereInput>
    creator?: XOR<MUserScalarRelationFilter, MUserWhereInput>
    updater?: XOR<MUserScalarRelationFilter, MUserWhereInput>
    deleter?: XOR<MUserNullableScalarRelationFilter, MUserWhereInput> | null
  }

  export type MPelatihOrderByWithRelationInput = {
    uid_pelatih?: SortOrder
    nik?: SortOrder
    nama_lengkap?: SortOrder
    jenis_kelamin?: SortOrder
    tanggal_lahir?: SortOrder
    tahun_bergabung?: SortOrder
    pernah_melatih_sebelumnya?: SortOrder
    klub_negara_sebelumnya?: SortOrder
    mantan_atlet_nasional?: SortOrder
    asal_klub_nasional?: SortOrder
    mantan_pelatnas?: SortOrder
    tahun_pelatnas?: SortOrder
    foto?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    uid_provinsi?: SortOrder
    created_by_uid?: SortOrder
    updated_by_uid?: SortOrder
    deleted_by_uid?: SortOrderInput | SortOrder
    user_akun?: MUserOrderByWithRelationInput
    provinsi?: MProvinsiOrderByWithRelationInput
    creator?: MUserOrderByWithRelationInput
    updater?: MUserOrderByWithRelationInput
    deleter?: MUserOrderByWithRelationInput
  }

  export type MPelatihWhereUniqueInput = Prisma.AtLeast<{
    uid_pelatih?: string
    AND?: MPelatihWhereInput | MPelatihWhereInput[]
    OR?: MPelatihWhereInput[]
    NOT?: MPelatihWhereInput | MPelatihWhereInput[]
    nik?: StringFilter<"MPelatih"> | string
    nama_lengkap?: StringFilter<"MPelatih"> | string
    jenis_kelamin?: EnumJenisKelaminFilter<"MPelatih"> | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFilter<"MPelatih"> | Date | string
    tahun_bergabung?: IntFilter<"MPelatih"> | number
    pernah_melatih_sebelumnya?: BoolFilter<"MPelatih"> | boolean
    klub_negara_sebelumnya?: StringFilter<"MPelatih"> | string
    mantan_atlet_nasional?: BoolFilter<"MPelatih"> | boolean
    asal_klub_nasional?: StringFilter<"MPelatih"> | string
    mantan_pelatnas?: BoolFilter<"MPelatih"> | boolean
    tahun_pelatnas?: IntFilter<"MPelatih"> | number
    foto?: StringFilter<"MPelatih"> | string
    created_at?: DateTimeFilter<"MPelatih"> | Date | string
    updated_at?: DateTimeFilter<"MPelatih"> | Date | string
    deleted_at?: DateTimeNullableFilter<"MPelatih"> | Date | string | null
    uid_provinsi?: StringFilter<"MPelatih"> | string
    created_by_uid?: StringFilter<"MPelatih"> | string
    updated_by_uid?: StringFilter<"MPelatih"> | string
    deleted_by_uid?: StringNullableFilter<"MPelatih"> | string | null
    user_akun?: XOR<MUserNullableScalarRelationFilter, MUserWhereInput> | null
    provinsi?: XOR<MProvinsiScalarRelationFilter, MProvinsiWhereInput>
    creator?: XOR<MUserScalarRelationFilter, MUserWhereInput>
    updater?: XOR<MUserScalarRelationFilter, MUserWhereInput>
    deleter?: XOR<MUserNullableScalarRelationFilter, MUserWhereInput> | null
  }, "uid_pelatih">

  export type MPelatihOrderByWithAggregationInput = {
    uid_pelatih?: SortOrder
    nik?: SortOrder
    nama_lengkap?: SortOrder
    jenis_kelamin?: SortOrder
    tanggal_lahir?: SortOrder
    tahun_bergabung?: SortOrder
    pernah_melatih_sebelumnya?: SortOrder
    klub_negara_sebelumnya?: SortOrder
    mantan_atlet_nasional?: SortOrder
    asal_klub_nasional?: SortOrder
    mantan_pelatnas?: SortOrder
    tahun_pelatnas?: SortOrder
    foto?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    uid_provinsi?: SortOrder
    created_by_uid?: SortOrder
    updated_by_uid?: SortOrder
    deleted_by_uid?: SortOrderInput | SortOrder
    _count?: MPelatihCountOrderByAggregateInput
    _avg?: MPelatihAvgOrderByAggregateInput
    _max?: MPelatihMaxOrderByAggregateInput
    _min?: MPelatihMinOrderByAggregateInput
    _sum?: MPelatihSumOrderByAggregateInput
  }

  export type MPelatihScalarWhereWithAggregatesInput = {
    AND?: MPelatihScalarWhereWithAggregatesInput | MPelatihScalarWhereWithAggregatesInput[]
    OR?: MPelatihScalarWhereWithAggregatesInput[]
    NOT?: MPelatihScalarWhereWithAggregatesInput | MPelatihScalarWhereWithAggregatesInput[]
    uid_pelatih?: StringWithAggregatesFilter<"MPelatih"> | string
    nik?: StringWithAggregatesFilter<"MPelatih"> | string
    nama_lengkap?: StringWithAggregatesFilter<"MPelatih"> | string
    jenis_kelamin?: EnumJenisKelaminWithAggregatesFilter<"MPelatih"> | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeWithAggregatesFilter<"MPelatih"> | Date | string
    tahun_bergabung?: IntWithAggregatesFilter<"MPelatih"> | number
    pernah_melatih_sebelumnya?: BoolWithAggregatesFilter<"MPelatih"> | boolean
    klub_negara_sebelumnya?: StringWithAggregatesFilter<"MPelatih"> | string
    mantan_atlet_nasional?: BoolWithAggregatesFilter<"MPelatih"> | boolean
    asal_klub_nasional?: StringWithAggregatesFilter<"MPelatih"> | string
    mantan_pelatnas?: BoolWithAggregatesFilter<"MPelatih"> | boolean
    tahun_pelatnas?: IntWithAggregatesFilter<"MPelatih"> | number
    foto?: StringWithAggregatesFilter<"MPelatih"> | string
    created_at?: DateTimeWithAggregatesFilter<"MPelatih"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"MPelatih"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"MPelatih"> | Date | string | null
    uid_provinsi?: StringWithAggregatesFilter<"MPelatih"> | string
    created_by_uid?: StringWithAggregatesFilter<"MPelatih"> | string
    updated_by_uid?: StringWithAggregatesFilter<"MPelatih"> | string
    deleted_by_uid?: StringNullableWithAggregatesFilter<"MPelatih"> | string | null
  }

  export type MProvinsiWhereInput = {
    AND?: MProvinsiWhereInput | MProvinsiWhereInput[]
    OR?: MProvinsiWhereInput[]
    NOT?: MProvinsiWhereInput | MProvinsiWhereInput[]
    uid_provinsi?: StringFilter<"MProvinsi"> | string
    nama_provinsi?: StringFilter<"MProvinsi"> | string
    created_at?: DateTimeFilter<"MProvinsi"> | Date | string
    updated_at?: DateTimeFilter<"MProvinsi"> | Date | string
    deleted_at?: DateTimeNullableFilter<"MProvinsi"> | Date | string | null
    created_by_uid?: StringFilter<"MProvinsi"> | string
    updated_by_uid?: StringFilter<"MProvinsi"> | string
    deleted_by_uid?: StringNullableFilter<"MProvinsi"> | string | null
    creator?: XOR<MUserScalarRelationFilter, MUserWhereInput>
    updater?: XOR<MUserScalarRelationFilter, MUserWhereInput>
    deleter?: XOR<MUserNullableScalarRelationFilter, MUserWhereInput> | null
    atlets?: MAtletListRelationFilter
    coachs?: MPelatihListRelationFilter
  }

  export type MProvinsiOrderByWithRelationInput = {
    uid_provinsi?: SortOrder
    nama_provinsi?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_by_uid?: SortOrder
    updated_by_uid?: SortOrder
    deleted_by_uid?: SortOrderInput | SortOrder
    creator?: MUserOrderByWithRelationInput
    updater?: MUserOrderByWithRelationInput
    deleter?: MUserOrderByWithRelationInput
    atlets?: MAtletOrderByRelationAggregateInput
    coachs?: MPelatihOrderByRelationAggregateInput
  }

  export type MProvinsiWhereUniqueInput = Prisma.AtLeast<{
    uid_provinsi?: string
    AND?: MProvinsiWhereInput | MProvinsiWhereInput[]
    OR?: MProvinsiWhereInput[]
    NOT?: MProvinsiWhereInput | MProvinsiWhereInput[]
    nama_provinsi?: StringFilter<"MProvinsi"> | string
    created_at?: DateTimeFilter<"MProvinsi"> | Date | string
    updated_at?: DateTimeFilter<"MProvinsi"> | Date | string
    deleted_at?: DateTimeNullableFilter<"MProvinsi"> | Date | string | null
    created_by_uid?: StringFilter<"MProvinsi"> | string
    updated_by_uid?: StringFilter<"MProvinsi"> | string
    deleted_by_uid?: StringNullableFilter<"MProvinsi"> | string | null
    creator?: XOR<MUserScalarRelationFilter, MUserWhereInput>
    updater?: XOR<MUserScalarRelationFilter, MUserWhereInput>
    deleter?: XOR<MUserNullableScalarRelationFilter, MUserWhereInput> | null
    atlets?: MAtletListRelationFilter
    coachs?: MPelatihListRelationFilter
  }, "uid_provinsi">

  export type MProvinsiOrderByWithAggregationInput = {
    uid_provinsi?: SortOrder
    nama_provinsi?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    created_by_uid?: SortOrder
    updated_by_uid?: SortOrder
    deleted_by_uid?: SortOrderInput | SortOrder
    _count?: MProvinsiCountOrderByAggregateInput
    _max?: MProvinsiMaxOrderByAggregateInput
    _min?: MProvinsiMinOrderByAggregateInput
  }

  export type MProvinsiScalarWhereWithAggregatesInput = {
    AND?: MProvinsiScalarWhereWithAggregatesInput | MProvinsiScalarWhereWithAggregatesInput[]
    OR?: MProvinsiScalarWhereWithAggregatesInput[]
    NOT?: MProvinsiScalarWhereWithAggregatesInput | MProvinsiScalarWhereWithAggregatesInput[]
    uid_provinsi?: StringWithAggregatesFilter<"MProvinsi"> | string
    nama_provinsi?: StringWithAggregatesFilter<"MProvinsi"> | string
    created_at?: DateTimeWithAggregatesFilter<"MProvinsi"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"MProvinsi"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"MProvinsi"> | Date | string | null
    created_by_uid?: StringWithAggregatesFilter<"MProvinsi"> | string
    updated_by_uid?: StringWithAggregatesFilter<"MProvinsi"> | string
    deleted_by_uid?: StringNullableWithAggregatesFilter<"MProvinsi"> | string | null
  }

  export type MUserCreateInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atlet_profile?: MAtletCreateNestedOneWithoutUser_akunInput
    pelatih_profile?: MPelatihCreateNestedOneWithoutUser_akunInput
    creator?: MUserCreateNestedOneWithoutCreated_usersInput
    updater?: MUserCreateNestedOneWithoutUpdated_usersInput
    deleter?: MUserCreateNestedOneWithoutDeleted_usersInput
    created_users?: MUserCreateNestedManyWithoutCreatorInput
    updated_users?: MUserCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiCreateNestedManyWithoutDeleterInput
  }

  export type MUserUncheckedCreateInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid?: string | null
    updated_by_uid?: string | null
    deleted_by_uid?: string | null
    created_users?: MUserUncheckedCreateNestedManyWithoutCreatorInput
    updated_users?: MUserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserUncheckedCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletUncheckedCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletUncheckedCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutDeleterInput
  }

  export type MUserUpdateInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atlet_profile?: MAtletUpdateOneWithoutUser_akunNestedInput
    pelatih_profile?: MPelatihUpdateOneWithoutUser_akunNestedInput
    creator?: MUserUpdateOneWithoutCreated_usersNestedInput
    updater?: MUserUpdateOneWithoutUpdated_usersNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_usersNestedInput
    created_users?: MUserUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUncheckedUpdateInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    created_users?: MUserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUncheckedUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUncheckedUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUncheckedUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUncheckedUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUncheckedUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUncheckedUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUncheckedUpdateManyWithoutDeleterNestedInput
  }

  export type MUserCreateManyInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid?: string | null
    updated_by_uid?: string | null
    deleted_by_uid?: string | null
  }

  export type MUserUpdateManyMutationInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MUserUncheckedUpdateManyInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MAtletCreateInput = {
    uid_atlet: string
    nik: string
    id_pbsi: string
    nama_lengkap: string
    nama_ayah: string
    nama_ibu: string
    tempat_lahir: string
    tanggal_lahir: Date | string
    alamat: string
    jenis_kelamin: $Enums.JenisKelamin
    pegangan_raket: $Enums.PeganganRaket
    tinggi_badan: number
    berat_badan: number
    status_atlet: $Enums.StatusAtlet
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user_akun?: MUserCreateNestedOneWithoutAtlet_profileInput
    provinsi: MProvinsiCreateNestedOneWithoutAtletsInput
    creator: MUserCreateNestedOneWithoutCreated_atletsInput
    updater: MUserCreateNestedOneWithoutUpdated_atletsInput
    deleter?: MUserCreateNestedOneWithoutDeleted_atletsInput
  }

  export type MAtletUncheckedCreateInput = {
    uid_atlet: string
    nik: string
    id_pbsi: string
    nama_lengkap: string
    nama_ayah: string
    nama_ibu: string
    tempat_lahir: string
    tanggal_lahir: Date | string
    alamat: string
    jenis_kelamin: $Enums.JenisKelamin
    pegangan_raket: $Enums.PeganganRaket
    tinggi_badan: number
    berat_badan: number
    status_atlet: $Enums.StatusAtlet
    foto: string
    uid_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid: string
    updated_by_uid: string
    deleted_by_uid?: string | null
    user_akun?: MUserUncheckedCreateNestedOneWithoutAtlet_profileInput
  }

  export type MAtletUpdateInput = {
    uid_atlet?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    id_pbsi?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    nama_ayah?: StringFieldUpdateOperationsInput | string
    nama_ibu?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFieldUpdateOperationsInput | $Enums.PeganganRaket
    tinggi_badan?: IntFieldUpdateOperationsInput | number
    berat_badan?: IntFieldUpdateOperationsInput | number
    status_atlet?: EnumStatusAtletFieldUpdateOperationsInput | $Enums.StatusAtlet
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_akun?: MUserUpdateOneWithoutAtlet_profileNestedInput
    provinsi?: MProvinsiUpdateOneRequiredWithoutAtletsNestedInput
    creator?: MUserUpdateOneRequiredWithoutCreated_atletsNestedInput
    updater?: MUserUpdateOneRequiredWithoutUpdated_atletsNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_atletsNestedInput
  }

  export type MAtletUncheckedUpdateInput = {
    uid_atlet?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    id_pbsi?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    nama_ayah?: StringFieldUpdateOperationsInput | string
    nama_ibu?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFieldUpdateOperationsInput | $Enums.PeganganRaket
    tinggi_badan?: IntFieldUpdateOperationsInput | number
    berat_badan?: IntFieldUpdateOperationsInput | number
    status_atlet?: EnumStatusAtletFieldUpdateOperationsInput | $Enums.StatusAtlet
    foto?: StringFieldUpdateOperationsInput | string
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    user_akun?: MUserUncheckedUpdateOneWithoutAtlet_profileNestedInput
  }

  export type MAtletCreateManyInput = {
    uid_atlet: string
    nik: string
    id_pbsi: string
    nama_lengkap: string
    nama_ayah: string
    nama_ibu: string
    tempat_lahir: string
    tanggal_lahir: Date | string
    alamat: string
    jenis_kelamin: $Enums.JenisKelamin
    pegangan_raket: $Enums.PeganganRaket
    tinggi_badan: number
    berat_badan: number
    status_atlet: $Enums.StatusAtlet
    foto: string
    uid_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid: string
    updated_by_uid: string
    deleted_by_uid?: string | null
  }

  export type MAtletUpdateManyMutationInput = {
    uid_atlet?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    id_pbsi?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    nama_ayah?: StringFieldUpdateOperationsInput | string
    nama_ibu?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFieldUpdateOperationsInput | $Enums.PeganganRaket
    tinggi_badan?: IntFieldUpdateOperationsInput | number
    berat_badan?: IntFieldUpdateOperationsInput | number
    status_atlet?: EnumStatusAtletFieldUpdateOperationsInput | $Enums.StatusAtlet
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MAtletUncheckedUpdateManyInput = {
    uid_atlet?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    id_pbsi?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    nama_ayah?: StringFieldUpdateOperationsInput | string
    nama_ibu?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFieldUpdateOperationsInput | $Enums.PeganganRaket
    tinggi_badan?: IntFieldUpdateOperationsInput | number
    berat_badan?: IntFieldUpdateOperationsInput | number
    status_atlet?: EnumStatusAtletFieldUpdateOperationsInput | $Enums.StatusAtlet
    foto?: StringFieldUpdateOperationsInput | string
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MPelatihCreateInput = {
    uid_pelatih: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    tahun_bergabung: number
    pernah_melatih_sebelumnya: boolean
    klub_negara_sebelumnya: string
    mantan_atlet_nasional: boolean
    asal_klub_nasional: string
    mantan_pelatnas: boolean
    tahun_pelatnas: number
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user_akun?: MUserCreateNestedOneWithoutPelatih_profileInput
    provinsi: MProvinsiCreateNestedOneWithoutCoachsInput
    creator: MUserCreateNestedOneWithoutCreated_pelatihhsInput
    updater: MUserCreateNestedOneWithoutUpdated_pelatihhsInput
    deleter?: MUserCreateNestedOneWithoutDeleted_pelatihhsInput
  }

  export type MPelatihUncheckedCreateInput = {
    uid_pelatih: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    tahun_bergabung: number
    pernah_melatih_sebelumnya: boolean
    klub_negara_sebelumnya: string
    mantan_atlet_nasional: boolean
    asal_klub_nasional: string
    mantan_pelatnas: boolean
    tahun_pelatnas: number
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    uid_provinsi: string
    created_by_uid: string
    updated_by_uid: string
    deleted_by_uid?: string | null
    user_akun?: MUserUncheckedCreateNestedOneWithoutPelatih_profileInput
  }

  export type MPelatihUpdateInput = {
    uid_pelatih?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun_bergabung?: IntFieldUpdateOperationsInput | number
    pernah_melatih_sebelumnya?: BoolFieldUpdateOperationsInput | boolean
    klub_negara_sebelumnya?: StringFieldUpdateOperationsInput | string
    mantan_atlet_nasional?: BoolFieldUpdateOperationsInput | boolean
    asal_klub_nasional?: StringFieldUpdateOperationsInput | string
    mantan_pelatnas?: BoolFieldUpdateOperationsInput | boolean
    tahun_pelatnas?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_akun?: MUserUpdateOneWithoutPelatih_profileNestedInput
    provinsi?: MProvinsiUpdateOneRequiredWithoutCoachsNestedInput
    creator?: MUserUpdateOneRequiredWithoutCreated_pelatihhsNestedInput
    updater?: MUserUpdateOneRequiredWithoutUpdated_pelatihhsNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_pelatihhsNestedInput
  }

  export type MPelatihUncheckedUpdateInput = {
    uid_pelatih?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun_bergabung?: IntFieldUpdateOperationsInput | number
    pernah_melatih_sebelumnya?: BoolFieldUpdateOperationsInput | boolean
    klub_negara_sebelumnya?: StringFieldUpdateOperationsInput | string
    mantan_atlet_nasional?: BoolFieldUpdateOperationsInput | boolean
    asal_klub_nasional?: StringFieldUpdateOperationsInput | string
    mantan_pelatnas?: BoolFieldUpdateOperationsInput | boolean
    tahun_pelatnas?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    created_by_uid?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    user_akun?: MUserUncheckedUpdateOneWithoutPelatih_profileNestedInput
  }

  export type MPelatihCreateManyInput = {
    uid_pelatih: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    tahun_bergabung: number
    pernah_melatih_sebelumnya: boolean
    klub_negara_sebelumnya: string
    mantan_atlet_nasional: boolean
    asal_klub_nasional: string
    mantan_pelatnas: boolean
    tahun_pelatnas: number
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    uid_provinsi: string
    created_by_uid: string
    updated_by_uid: string
    deleted_by_uid?: string | null
  }

  export type MPelatihUpdateManyMutationInput = {
    uid_pelatih?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun_bergabung?: IntFieldUpdateOperationsInput | number
    pernah_melatih_sebelumnya?: BoolFieldUpdateOperationsInput | boolean
    klub_negara_sebelumnya?: StringFieldUpdateOperationsInput | string
    mantan_atlet_nasional?: BoolFieldUpdateOperationsInput | boolean
    asal_klub_nasional?: StringFieldUpdateOperationsInput | string
    mantan_pelatnas?: BoolFieldUpdateOperationsInput | boolean
    tahun_pelatnas?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MPelatihUncheckedUpdateManyInput = {
    uid_pelatih?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun_bergabung?: IntFieldUpdateOperationsInput | number
    pernah_melatih_sebelumnya?: BoolFieldUpdateOperationsInput | boolean
    klub_negara_sebelumnya?: StringFieldUpdateOperationsInput | string
    mantan_atlet_nasional?: BoolFieldUpdateOperationsInput | boolean
    asal_klub_nasional?: StringFieldUpdateOperationsInput | string
    mantan_pelatnas?: BoolFieldUpdateOperationsInput | boolean
    tahun_pelatnas?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    created_by_uid?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MProvinsiCreateInput = {
    uid_provinsi: string
    nama_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    creator: MUserCreateNestedOneWithoutCreated_provinsisInput
    updater: MUserCreateNestedOneWithoutUpdated_provinsisInput
    deleter?: MUserCreateNestedOneWithoutDeleted_provinsisInput
    atlets?: MAtletCreateNestedManyWithoutProvinsiInput
    coachs?: MPelatihCreateNestedManyWithoutProvinsiInput
  }

  export type MProvinsiUncheckedCreateInput = {
    uid_provinsi: string
    nama_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid: string
    updated_by_uid: string
    deleted_by_uid?: string | null
    atlets?: MAtletUncheckedCreateNestedManyWithoutProvinsiInput
    coachs?: MPelatihUncheckedCreateNestedManyWithoutProvinsiInput
  }

  export type MProvinsiUpdateInput = {
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    nama_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: MUserUpdateOneRequiredWithoutCreated_provinsisNestedInput
    updater?: MUserUpdateOneRequiredWithoutUpdated_provinsisNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_provinsisNestedInput
    atlets?: MAtletUpdateManyWithoutProvinsiNestedInput
    coachs?: MPelatihUpdateManyWithoutProvinsiNestedInput
  }

  export type MProvinsiUncheckedUpdateInput = {
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    nama_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    atlets?: MAtletUncheckedUpdateManyWithoutProvinsiNestedInput
    coachs?: MPelatihUncheckedUpdateManyWithoutProvinsiNestedInput
  }

  export type MProvinsiCreateManyInput = {
    uid_provinsi: string
    nama_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid: string
    updated_by_uid: string
    deleted_by_uid?: string | null
  }

  export type MProvinsiUpdateManyMutationInput = {
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    nama_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MProvinsiUncheckedUpdateManyInput = {
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    nama_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleUserFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUser | EnumRoleUserFieldRefInput<$PrismaModel>
    in?: $Enums.RoleUser[] | ListEnumRoleUserFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleUser[] | ListEnumRoleUserFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleUserFilter<$PrismaModel> | $Enums.RoleUser
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MAtletNullableScalarRelationFilter = {
    is?: MAtletWhereInput | null
    isNot?: MAtletWhereInput | null
  }

  export type MPelatihNullableScalarRelationFilter = {
    is?: MPelatihWhereInput | null
    isNot?: MPelatihWhereInput | null
  }

  export type MUserNullableScalarRelationFilter = {
    is?: MUserWhereInput | null
    isNot?: MUserWhereInput | null
  }

  export type MUserListRelationFilter = {
    every?: MUserWhereInput
    some?: MUserWhereInput
    none?: MUserWhereInput
  }

  export type MAtletListRelationFilter = {
    every?: MAtletWhereInput
    some?: MAtletWhereInput
    none?: MAtletWhereInput
  }

  export type MPelatihListRelationFilter = {
    every?: MPelatihWhereInput
    some?: MPelatihWhereInput
    none?: MPelatihWhereInput
  }

  export type MProvinsiListRelationFilter = {
    every?: MProvinsiWhereInput
    some?: MProvinsiWhereInput
    none?: MProvinsiWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MAtletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MPelatihOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MProvinsiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MUserCountOrderByAggregateInput = {
    uid_user?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    uid_atlet?: SortOrder
    uid_pelatih?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    created_by_uid?: SortOrder
    updated_by_uid?: SortOrder
    deleted_by_uid?: SortOrder
  }

  export type MUserMaxOrderByAggregateInput = {
    uid_user?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    uid_atlet?: SortOrder
    uid_pelatih?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    created_by_uid?: SortOrder
    updated_by_uid?: SortOrder
    deleted_by_uid?: SortOrder
  }

  export type MUserMinOrderByAggregateInput = {
    uid_user?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    uid_atlet?: SortOrder
    uid_pelatih?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    created_by_uid?: SortOrder
    updated_by_uid?: SortOrder
    deleted_by_uid?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleUserWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUser | EnumRoleUserFieldRefInput<$PrismaModel>
    in?: $Enums.RoleUser[] | ListEnumRoleUserFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleUser[] | ListEnumRoleUserFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleUserWithAggregatesFilter<$PrismaModel> | $Enums.RoleUser
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleUserFilter<$PrismaModel>
    _max?: NestedEnumRoleUserFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumJenisKelaminFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisKelaminFilter<$PrismaModel> | $Enums.JenisKelamin
  }

  export type EnumPeganganRaketFilter<$PrismaModel = never> = {
    equals?: $Enums.PeganganRaket | EnumPeganganRaketFieldRefInput<$PrismaModel>
    in?: $Enums.PeganganRaket[] | ListEnumPeganganRaketFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeganganRaket[] | ListEnumPeganganRaketFieldRefInput<$PrismaModel>
    not?: NestedEnumPeganganRaketFilter<$PrismaModel> | $Enums.PeganganRaket
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumStatusAtletFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAtlet | EnumStatusAtletFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAtlet[] | ListEnumStatusAtletFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAtlet[] | ListEnumStatusAtletFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtletFilter<$PrismaModel> | $Enums.StatusAtlet
  }

  export type MProvinsiScalarRelationFilter = {
    is?: MProvinsiWhereInput
    isNot?: MProvinsiWhereInput
  }

  export type MUserScalarRelationFilter = {
    is?: MUserWhereInput
    isNot?: MUserWhereInput
  }

  export type MAtletCountOrderByAggregateInput = {
    uid_atlet?: SortOrder
    nik?: SortOrder
    id_pbsi?: SortOrder
    nama_lengkap?: SortOrder
    nama_ayah?: SortOrder
    nama_ibu?: SortOrder
    tempat_lahir?: SortOrder
    tanggal_lahir?: SortOrder
    alamat?: SortOrder
    jenis_kelamin?: SortOrder
    pegangan_raket?: SortOrder
    tinggi_badan?: SortOrder
    berat_badan?: SortOrder
    status_atlet?: SortOrder
    foto?: SortOrder
    uid_provinsi?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    created_by_uid?: SortOrder
    updated_by_uid?: SortOrder
    deleted_by_uid?: SortOrder
  }

  export type MAtletAvgOrderByAggregateInput = {
    tinggi_badan?: SortOrder
    berat_badan?: SortOrder
  }

  export type MAtletMaxOrderByAggregateInput = {
    uid_atlet?: SortOrder
    nik?: SortOrder
    id_pbsi?: SortOrder
    nama_lengkap?: SortOrder
    nama_ayah?: SortOrder
    nama_ibu?: SortOrder
    tempat_lahir?: SortOrder
    tanggal_lahir?: SortOrder
    alamat?: SortOrder
    jenis_kelamin?: SortOrder
    pegangan_raket?: SortOrder
    tinggi_badan?: SortOrder
    berat_badan?: SortOrder
    status_atlet?: SortOrder
    foto?: SortOrder
    uid_provinsi?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    created_by_uid?: SortOrder
    updated_by_uid?: SortOrder
    deleted_by_uid?: SortOrder
  }

  export type MAtletMinOrderByAggregateInput = {
    uid_atlet?: SortOrder
    nik?: SortOrder
    id_pbsi?: SortOrder
    nama_lengkap?: SortOrder
    nama_ayah?: SortOrder
    nama_ibu?: SortOrder
    tempat_lahir?: SortOrder
    tanggal_lahir?: SortOrder
    alamat?: SortOrder
    jenis_kelamin?: SortOrder
    pegangan_raket?: SortOrder
    tinggi_badan?: SortOrder
    berat_badan?: SortOrder
    status_atlet?: SortOrder
    foto?: SortOrder
    uid_provinsi?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    created_by_uid?: SortOrder
    updated_by_uid?: SortOrder
    deleted_by_uid?: SortOrder
  }

  export type MAtletSumOrderByAggregateInput = {
    tinggi_badan?: SortOrder
    berat_badan?: SortOrder
  }

  export type EnumJenisKelaminWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel> | $Enums.JenisKelamin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisKelaminFilter<$PrismaModel>
    _max?: NestedEnumJenisKelaminFilter<$PrismaModel>
  }

  export type EnumPeganganRaketWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PeganganRaket | EnumPeganganRaketFieldRefInput<$PrismaModel>
    in?: $Enums.PeganganRaket[] | ListEnumPeganganRaketFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeganganRaket[] | ListEnumPeganganRaketFieldRefInput<$PrismaModel>
    not?: NestedEnumPeganganRaketWithAggregatesFilter<$PrismaModel> | $Enums.PeganganRaket
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeganganRaketFilter<$PrismaModel>
    _max?: NestedEnumPeganganRaketFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumStatusAtletWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAtlet | EnumStatusAtletFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAtlet[] | ListEnumStatusAtletFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAtlet[] | ListEnumStatusAtletFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtletWithAggregatesFilter<$PrismaModel> | $Enums.StatusAtlet
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAtletFilter<$PrismaModel>
    _max?: NestedEnumStatusAtletFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MPelatihCountOrderByAggregateInput = {
    uid_pelatih?: SortOrder
    nik?: SortOrder
    nama_lengkap?: SortOrder
    jenis_kelamin?: SortOrder
    tanggal_lahir?: SortOrder
    tahun_bergabung?: SortOrder
    pernah_melatih_sebelumnya?: SortOrder
    klub_negara_sebelumnya?: SortOrder
    mantan_atlet_nasional?: SortOrder
    asal_klub_nasional?: SortOrder
    mantan_pelatnas?: SortOrder
    tahun_pelatnas?: SortOrder
    foto?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    uid_provinsi?: SortOrder
    created_by_uid?: SortOrder
    updated_by_uid?: SortOrder
    deleted_by_uid?: SortOrder
  }

  export type MPelatihAvgOrderByAggregateInput = {
    tahun_bergabung?: SortOrder
    tahun_pelatnas?: SortOrder
  }

  export type MPelatihMaxOrderByAggregateInput = {
    uid_pelatih?: SortOrder
    nik?: SortOrder
    nama_lengkap?: SortOrder
    jenis_kelamin?: SortOrder
    tanggal_lahir?: SortOrder
    tahun_bergabung?: SortOrder
    pernah_melatih_sebelumnya?: SortOrder
    klub_negara_sebelumnya?: SortOrder
    mantan_atlet_nasional?: SortOrder
    asal_klub_nasional?: SortOrder
    mantan_pelatnas?: SortOrder
    tahun_pelatnas?: SortOrder
    foto?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    uid_provinsi?: SortOrder
    created_by_uid?: SortOrder
    updated_by_uid?: SortOrder
    deleted_by_uid?: SortOrder
  }

  export type MPelatihMinOrderByAggregateInput = {
    uid_pelatih?: SortOrder
    nik?: SortOrder
    nama_lengkap?: SortOrder
    jenis_kelamin?: SortOrder
    tanggal_lahir?: SortOrder
    tahun_bergabung?: SortOrder
    pernah_melatih_sebelumnya?: SortOrder
    klub_negara_sebelumnya?: SortOrder
    mantan_atlet_nasional?: SortOrder
    asal_klub_nasional?: SortOrder
    mantan_pelatnas?: SortOrder
    tahun_pelatnas?: SortOrder
    foto?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    uid_provinsi?: SortOrder
    created_by_uid?: SortOrder
    updated_by_uid?: SortOrder
    deleted_by_uid?: SortOrder
  }

  export type MPelatihSumOrderByAggregateInput = {
    tahun_bergabung?: SortOrder
    tahun_pelatnas?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MProvinsiCountOrderByAggregateInput = {
    uid_provinsi?: SortOrder
    nama_provinsi?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    created_by_uid?: SortOrder
    updated_by_uid?: SortOrder
    deleted_by_uid?: SortOrder
  }

  export type MProvinsiMaxOrderByAggregateInput = {
    uid_provinsi?: SortOrder
    nama_provinsi?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    created_by_uid?: SortOrder
    updated_by_uid?: SortOrder
    deleted_by_uid?: SortOrder
  }

  export type MProvinsiMinOrderByAggregateInput = {
    uid_provinsi?: SortOrder
    nama_provinsi?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    created_by_uid?: SortOrder
    updated_by_uid?: SortOrder
    deleted_by_uid?: SortOrder
  }

  export type MAtletCreateNestedOneWithoutUser_akunInput = {
    create?: XOR<MAtletCreateWithoutUser_akunInput, MAtletUncheckedCreateWithoutUser_akunInput>
    connectOrCreate?: MAtletCreateOrConnectWithoutUser_akunInput
    connect?: MAtletWhereUniqueInput
  }

  export type MPelatihCreateNestedOneWithoutUser_akunInput = {
    create?: XOR<MPelatihCreateWithoutUser_akunInput, MPelatihUncheckedCreateWithoutUser_akunInput>
    connectOrCreate?: MPelatihCreateOrConnectWithoutUser_akunInput
    connect?: MPelatihWhereUniqueInput
  }

  export type MUserCreateNestedOneWithoutCreated_usersInput = {
    create?: XOR<MUserCreateWithoutCreated_usersInput, MUserUncheckedCreateWithoutCreated_usersInput>
    connectOrCreate?: MUserCreateOrConnectWithoutCreated_usersInput
    connect?: MUserWhereUniqueInput
  }

  export type MUserCreateNestedOneWithoutUpdated_usersInput = {
    create?: XOR<MUserCreateWithoutUpdated_usersInput, MUserUncheckedCreateWithoutUpdated_usersInput>
    connectOrCreate?: MUserCreateOrConnectWithoutUpdated_usersInput
    connect?: MUserWhereUniqueInput
  }

  export type MUserCreateNestedOneWithoutDeleted_usersInput = {
    create?: XOR<MUserCreateWithoutDeleted_usersInput, MUserUncheckedCreateWithoutDeleted_usersInput>
    connectOrCreate?: MUserCreateOrConnectWithoutDeleted_usersInput
    connect?: MUserWhereUniqueInput
  }

  export type MUserCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MUserCreateWithoutCreatorInput, MUserUncheckedCreateWithoutCreatorInput> | MUserCreateWithoutCreatorInput[] | MUserUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MUserCreateOrConnectWithoutCreatorInput | MUserCreateOrConnectWithoutCreatorInput[]
    createMany?: MUserCreateManyCreatorInputEnvelope
    connect?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
  }

  export type MUserCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<MUserCreateWithoutUpdaterInput, MUserUncheckedCreateWithoutUpdaterInput> | MUserCreateWithoutUpdaterInput[] | MUserUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: MUserCreateOrConnectWithoutUpdaterInput | MUserCreateOrConnectWithoutUpdaterInput[]
    createMany?: MUserCreateManyUpdaterInputEnvelope
    connect?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
  }

  export type MUserCreateNestedManyWithoutDeleterInput = {
    create?: XOR<MUserCreateWithoutDeleterInput, MUserUncheckedCreateWithoutDeleterInput> | MUserCreateWithoutDeleterInput[] | MUserUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: MUserCreateOrConnectWithoutDeleterInput | MUserCreateOrConnectWithoutDeleterInput[]
    createMany?: MUserCreateManyDeleterInputEnvelope
    connect?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
  }

  export type MAtletCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MAtletCreateWithoutCreatorInput, MAtletUncheckedCreateWithoutCreatorInput> | MAtletCreateWithoutCreatorInput[] | MAtletUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MAtletCreateOrConnectWithoutCreatorInput | MAtletCreateOrConnectWithoutCreatorInput[]
    createMany?: MAtletCreateManyCreatorInputEnvelope
    connect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
  }

  export type MAtletCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<MAtletCreateWithoutUpdaterInput, MAtletUncheckedCreateWithoutUpdaterInput> | MAtletCreateWithoutUpdaterInput[] | MAtletUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: MAtletCreateOrConnectWithoutUpdaterInput | MAtletCreateOrConnectWithoutUpdaterInput[]
    createMany?: MAtletCreateManyUpdaterInputEnvelope
    connect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
  }

  export type MAtletCreateNestedManyWithoutDeleterInput = {
    create?: XOR<MAtletCreateWithoutDeleterInput, MAtletUncheckedCreateWithoutDeleterInput> | MAtletCreateWithoutDeleterInput[] | MAtletUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: MAtletCreateOrConnectWithoutDeleterInput | MAtletCreateOrConnectWithoutDeleterInput[]
    createMany?: MAtletCreateManyDeleterInputEnvelope
    connect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
  }

  export type MPelatihCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MPelatihCreateWithoutCreatorInput, MPelatihUncheckedCreateWithoutCreatorInput> | MPelatihCreateWithoutCreatorInput[] | MPelatihUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MPelatihCreateOrConnectWithoutCreatorInput | MPelatihCreateOrConnectWithoutCreatorInput[]
    createMany?: MPelatihCreateManyCreatorInputEnvelope
    connect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
  }

  export type MPelatihCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<MPelatihCreateWithoutUpdaterInput, MPelatihUncheckedCreateWithoutUpdaterInput> | MPelatihCreateWithoutUpdaterInput[] | MPelatihUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: MPelatihCreateOrConnectWithoutUpdaterInput | MPelatihCreateOrConnectWithoutUpdaterInput[]
    createMany?: MPelatihCreateManyUpdaterInputEnvelope
    connect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
  }

  export type MPelatihCreateNestedManyWithoutDeleterInput = {
    create?: XOR<MPelatihCreateWithoutDeleterInput, MPelatihUncheckedCreateWithoutDeleterInput> | MPelatihCreateWithoutDeleterInput[] | MPelatihUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: MPelatihCreateOrConnectWithoutDeleterInput | MPelatihCreateOrConnectWithoutDeleterInput[]
    createMany?: MPelatihCreateManyDeleterInputEnvelope
    connect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
  }

  export type MProvinsiCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MProvinsiCreateWithoutCreatorInput, MProvinsiUncheckedCreateWithoutCreatorInput> | MProvinsiCreateWithoutCreatorInput[] | MProvinsiUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MProvinsiCreateOrConnectWithoutCreatorInput | MProvinsiCreateOrConnectWithoutCreatorInput[]
    createMany?: MProvinsiCreateManyCreatorInputEnvelope
    connect?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
  }

  export type MProvinsiCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<MProvinsiCreateWithoutUpdaterInput, MProvinsiUncheckedCreateWithoutUpdaterInput> | MProvinsiCreateWithoutUpdaterInput[] | MProvinsiUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: MProvinsiCreateOrConnectWithoutUpdaterInput | MProvinsiCreateOrConnectWithoutUpdaterInput[]
    createMany?: MProvinsiCreateManyUpdaterInputEnvelope
    connect?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
  }

  export type MProvinsiCreateNestedManyWithoutDeleterInput = {
    create?: XOR<MProvinsiCreateWithoutDeleterInput, MProvinsiUncheckedCreateWithoutDeleterInput> | MProvinsiCreateWithoutDeleterInput[] | MProvinsiUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: MProvinsiCreateOrConnectWithoutDeleterInput | MProvinsiCreateOrConnectWithoutDeleterInput[]
    createMany?: MProvinsiCreateManyDeleterInputEnvelope
    connect?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
  }

  export type MUserUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MUserCreateWithoutCreatorInput, MUserUncheckedCreateWithoutCreatorInput> | MUserCreateWithoutCreatorInput[] | MUserUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MUserCreateOrConnectWithoutCreatorInput | MUserCreateOrConnectWithoutCreatorInput[]
    createMany?: MUserCreateManyCreatorInputEnvelope
    connect?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
  }

  export type MUserUncheckedCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<MUserCreateWithoutUpdaterInput, MUserUncheckedCreateWithoutUpdaterInput> | MUserCreateWithoutUpdaterInput[] | MUserUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: MUserCreateOrConnectWithoutUpdaterInput | MUserCreateOrConnectWithoutUpdaterInput[]
    createMany?: MUserCreateManyUpdaterInputEnvelope
    connect?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
  }

  export type MUserUncheckedCreateNestedManyWithoutDeleterInput = {
    create?: XOR<MUserCreateWithoutDeleterInput, MUserUncheckedCreateWithoutDeleterInput> | MUserCreateWithoutDeleterInput[] | MUserUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: MUserCreateOrConnectWithoutDeleterInput | MUserCreateOrConnectWithoutDeleterInput[]
    createMany?: MUserCreateManyDeleterInputEnvelope
    connect?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
  }

  export type MAtletUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MAtletCreateWithoutCreatorInput, MAtletUncheckedCreateWithoutCreatorInput> | MAtletCreateWithoutCreatorInput[] | MAtletUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MAtletCreateOrConnectWithoutCreatorInput | MAtletCreateOrConnectWithoutCreatorInput[]
    createMany?: MAtletCreateManyCreatorInputEnvelope
    connect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
  }

  export type MAtletUncheckedCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<MAtletCreateWithoutUpdaterInput, MAtletUncheckedCreateWithoutUpdaterInput> | MAtletCreateWithoutUpdaterInput[] | MAtletUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: MAtletCreateOrConnectWithoutUpdaterInput | MAtletCreateOrConnectWithoutUpdaterInput[]
    createMany?: MAtletCreateManyUpdaterInputEnvelope
    connect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
  }

  export type MAtletUncheckedCreateNestedManyWithoutDeleterInput = {
    create?: XOR<MAtletCreateWithoutDeleterInput, MAtletUncheckedCreateWithoutDeleterInput> | MAtletCreateWithoutDeleterInput[] | MAtletUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: MAtletCreateOrConnectWithoutDeleterInput | MAtletCreateOrConnectWithoutDeleterInput[]
    createMany?: MAtletCreateManyDeleterInputEnvelope
    connect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
  }

  export type MPelatihUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MPelatihCreateWithoutCreatorInput, MPelatihUncheckedCreateWithoutCreatorInput> | MPelatihCreateWithoutCreatorInput[] | MPelatihUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MPelatihCreateOrConnectWithoutCreatorInput | MPelatihCreateOrConnectWithoutCreatorInput[]
    createMany?: MPelatihCreateManyCreatorInputEnvelope
    connect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
  }

  export type MPelatihUncheckedCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<MPelatihCreateWithoutUpdaterInput, MPelatihUncheckedCreateWithoutUpdaterInput> | MPelatihCreateWithoutUpdaterInput[] | MPelatihUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: MPelatihCreateOrConnectWithoutUpdaterInput | MPelatihCreateOrConnectWithoutUpdaterInput[]
    createMany?: MPelatihCreateManyUpdaterInputEnvelope
    connect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
  }

  export type MPelatihUncheckedCreateNestedManyWithoutDeleterInput = {
    create?: XOR<MPelatihCreateWithoutDeleterInput, MPelatihUncheckedCreateWithoutDeleterInput> | MPelatihCreateWithoutDeleterInput[] | MPelatihUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: MPelatihCreateOrConnectWithoutDeleterInput | MPelatihCreateOrConnectWithoutDeleterInput[]
    createMany?: MPelatihCreateManyDeleterInputEnvelope
    connect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
  }

  export type MProvinsiUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MProvinsiCreateWithoutCreatorInput, MProvinsiUncheckedCreateWithoutCreatorInput> | MProvinsiCreateWithoutCreatorInput[] | MProvinsiUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MProvinsiCreateOrConnectWithoutCreatorInput | MProvinsiCreateOrConnectWithoutCreatorInput[]
    createMany?: MProvinsiCreateManyCreatorInputEnvelope
    connect?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
  }

  export type MProvinsiUncheckedCreateNestedManyWithoutUpdaterInput = {
    create?: XOR<MProvinsiCreateWithoutUpdaterInput, MProvinsiUncheckedCreateWithoutUpdaterInput> | MProvinsiCreateWithoutUpdaterInput[] | MProvinsiUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: MProvinsiCreateOrConnectWithoutUpdaterInput | MProvinsiCreateOrConnectWithoutUpdaterInput[]
    createMany?: MProvinsiCreateManyUpdaterInputEnvelope
    connect?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
  }

  export type MProvinsiUncheckedCreateNestedManyWithoutDeleterInput = {
    create?: XOR<MProvinsiCreateWithoutDeleterInput, MProvinsiUncheckedCreateWithoutDeleterInput> | MProvinsiCreateWithoutDeleterInput[] | MProvinsiUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: MProvinsiCreateOrConnectWithoutDeleterInput | MProvinsiCreateOrConnectWithoutDeleterInput[]
    createMany?: MProvinsiCreateManyDeleterInputEnvelope
    connect?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleUserFieldUpdateOperationsInput = {
    set?: $Enums.RoleUser
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MAtletUpdateOneWithoutUser_akunNestedInput = {
    create?: XOR<MAtletCreateWithoutUser_akunInput, MAtletUncheckedCreateWithoutUser_akunInput>
    connectOrCreate?: MAtletCreateOrConnectWithoutUser_akunInput
    upsert?: MAtletUpsertWithoutUser_akunInput
    disconnect?: MAtletWhereInput | boolean
    delete?: MAtletWhereInput | boolean
    connect?: MAtletWhereUniqueInput
    update?: XOR<XOR<MAtletUpdateToOneWithWhereWithoutUser_akunInput, MAtletUpdateWithoutUser_akunInput>, MAtletUncheckedUpdateWithoutUser_akunInput>
  }

  export type MPelatihUpdateOneWithoutUser_akunNestedInput = {
    create?: XOR<MPelatihCreateWithoutUser_akunInput, MPelatihUncheckedCreateWithoutUser_akunInput>
    connectOrCreate?: MPelatihCreateOrConnectWithoutUser_akunInput
    upsert?: MPelatihUpsertWithoutUser_akunInput
    disconnect?: MPelatihWhereInput | boolean
    delete?: MPelatihWhereInput | boolean
    connect?: MPelatihWhereUniqueInput
    update?: XOR<XOR<MPelatihUpdateToOneWithWhereWithoutUser_akunInput, MPelatihUpdateWithoutUser_akunInput>, MPelatihUncheckedUpdateWithoutUser_akunInput>
  }

  export type MUserUpdateOneWithoutCreated_usersNestedInput = {
    create?: XOR<MUserCreateWithoutCreated_usersInput, MUserUncheckedCreateWithoutCreated_usersInput>
    connectOrCreate?: MUserCreateOrConnectWithoutCreated_usersInput
    upsert?: MUserUpsertWithoutCreated_usersInput
    disconnect?: MUserWhereInput | boolean
    delete?: MUserWhereInput | boolean
    connect?: MUserWhereUniqueInput
    update?: XOR<XOR<MUserUpdateToOneWithWhereWithoutCreated_usersInput, MUserUpdateWithoutCreated_usersInput>, MUserUncheckedUpdateWithoutCreated_usersInput>
  }

  export type MUserUpdateOneWithoutUpdated_usersNestedInput = {
    create?: XOR<MUserCreateWithoutUpdated_usersInput, MUserUncheckedCreateWithoutUpdated_usersInput>
    connectOrCreate?: MUserCreateOrConnectWithoutUpdated_usersInput
    upsert?: MUserUpsertWithoutUpdated_usersInput
    disconnect?: MUserWhereInput | boolean
    delete?: MUserWhereInput | boolean
    connect?: MUserWhereUniqueInput
    update?: XOR<XOR<MUserUpdateToOneWithWhereWithoutUpdated_usersInput, MUserUpdateWithoutUpdated_usersInput>, MUserUncheckedUpdateWithoutUpdated_usersInput>
  }

  export type MUserUpdateOneWithoutDeleted_usersNestedInput = {
    create?: XOR<MUserCreateWithoutDeleted_usersInput, MUserUncheckedCreateWithoutDeleted_usersInput>
    connectOrCreate?: MUserCreateOrConnectWithoutDeleted_usersInput
    upsert?: MUserUpsertWithoutDeleted_usersInput
    disconnect?: MUserWhereInput | boolean
    delete?: MUserWhereInput | boolean
    connect?: MUserWhereUniqueInput
    update?: XOR<XOR<MUserUpdateToOneWithWhereWithoutDeleted_usersInput, MUserUpdateWithoutDeleted_usersInput>, MUserUncheckedUpdateWithoutDeleted_usersInput>
  }

  export type MUserUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MUserCreateWithoutCreatorInput, MUserUncheckedCreateWithoutCreatorInput> | MUserCreateWithoutCreatorInput[] | MUserUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MUserCreateOrConnectWithoutCreatorInput | MUserCreateOrConnectWithoutCreatorInput[]
    upsert?: MUserUpsertWithWhereUniqueWithoutCreatorInput | MUserUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MUserCreateManyCreatorInputEnvelope
    set?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    disconnect?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    delete?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    connect?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    update?: MUserUpdateWithWhereUniqueWithoutCreatorInput | MUserUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MUserUpdateManyWithWhereWithoutCreatorInput | MUserUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MUserScalarWhereInput | MUserScalarWhereInput[]
  }

  export type MUserUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<MUserCreateWithoutUpdaterInput, MUserUncheckedCreateWithoutUpdaterInput> | MUserCreateWithoutUpdaterInput[] | MUserUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: MUserCreateOrConnectWithoutUpdaterInput | MUserCreateOrConnectWithoutUpdaterInput[]
    upsert?: MUserUpsertWithWhereUniqueWithoutUpdaterInput | MUserUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: MUserCreateManyUpdaterInputEnvelope
    set?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    disconnect?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    delete?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    connect?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    update?: MUserUpdateWithWhereUniqueWithoutUpdaterInput | MUserUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: MUserUpdateManyWithWhereWithoutUpdaterInput | MUserUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: MUserScalarWhereInput | MUserScalarWhereInput[]
  }

  export type MUserUpdateManyWithoutDeleterNestedInput = {
    create?: XOR<MUserCreateWithoutDeleterInput, MUserUncheckedCreateWithoutDeleterInput> | MUserCreateWithoutDeleterInput[] | MUserUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: MUserCreateOrConnectWithoutDeleterInput | MUserCreateOrConnectWithoutDeleterInput[]
    upsert?: MUserUpsertWithWhereUniqueWithoutDeleterInput | MUserUpsertWithWhereUniqueWithoutDeleterInput[]
    createMany?: MUserCreateManyDeleterInputEnvelope
    set?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    disconnect?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    delete?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    connect?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    update?: MUserUpdateWithWhereUniqueWithoutDeleterInput | MUserUpdateWithWhereUniqueWithoutDeleterInput[]
    updateMany?: MUserUpdateManyWithWhereWithoutDeleterInput | MUserUpdateManyWithWhereWithoutDeleterInput[]
    deleteMany?: MUserScalarWhereInput | MUserScalarWhereInput[]
  }

  export type MAtletUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MAtletCreateWithoutCreatorInput, MAtletUncheckedCreateWithoutCreatorInput> | MAtletCreateWithoutCreatorInput[] | MAtletUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MAtletCreateOrConnectWithoutCreatorInput | MAtletCreateOrConnectWithoutCreatorInput[]
    upsert?: MAtletUpsertWithWhereUniqueWithoutCreatorInput | MAtletUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MAtletCreateManyCreatorInputEnvelope
    set?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    disconnect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    delete?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    connect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    update?: MAtletUpdateWithWhereUniqueWithoutCreatorInput | MAtletUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MAtletUpdateManyWithWhereWithoutCreatorInput | MAtletUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MAtletScalarWhereInput | MAtletScalarWhereInput[]
  }

  export type MAtletUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<MAtletCreateWithoutUpdaterInput, MAtletUncheckedCreateWithoutUpdaterInput> | MAtletCreateWithoutUpdaterInput[] | MAtletUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: MAtletCreateOrConnectWithoutUpdaterInput | MAtletCreateOrConnectWithoutUpdaterInput[]
    upsert?: MAtletUpsertWithWhereUniqueWithoutUpdaterInput | MAtletUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: MAtletCreateManyUpdaterInputEnvelope
    set?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    disconnect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    delete?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    connect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    update?: MAtletUpdateWithWhereUniqueWithoutUpdaterInput | MAtletUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: MAtletUpdateManyWithWhereWithoutUpdaterInput | MAtletUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: MAtletScalarWhereInput | MAtletScalarWhereInput[]
  }

  export type MAtletUpdateManyWithoutDeleterNestedInput = {
    create?: XOR<MAtletCreateWithoutDeleterInput, MAtletUncheckedCreateWithoutDeleterInput> | MAtletCreateWithoutDeleterInput[] | MAtletUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: MAtletCreateOrConnectWithoutDeleterInput | MAtletCreateOrConnectWithoutDeleterInput[]
    upsert?: MAtletUpsertWithWhereUniqueWithoutDeleterInput | MAtletUpsertWithWhereUniqueWithoutDeleterInput[]
    createMany?: MAtletCreateManyDeleterInputEnvelope
    set?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    disconnect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    delete?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    connect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    update?: MAtletUpdateWithWhereUniqueWithoutDeleterInput | MAtletUpdateWithWhereUniqueWithoutDeleterInput[]
    updateMany?: MAtletUpdateManyWithWhereWithoutDeleterInput | MAtletUpdateManyWithWhereWithoutDeleterInput[]
    deleteMany?: MAtletScalarWhereInput | MAtletScalarWhereInput[]
  }

  export type MPelatihUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MPelatihCreateWithoutCreatorInput, MPelatihUncheckedCreateWithoutCreatorInput> | MPelatihCreateWithoutCreatorInput[] | MPelatihUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MPelatihCreateOrConnectWithoutCreatorInput | MPelatihCreateOrConnectWithoutCreatorInput[]
    upsert?: MPelatihUpsertWithWhereUniqueWithoutCreatorInput | MPelatihUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MPelatihCreateManyCreatorInputEnvelope
    set?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    disconnect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    delete?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    connect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    update?: MPelatihUpdateWithWhereUniqueWithoutCreatorInput | MPelatihUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MPelatihUpdateManyWithWhereWithoutCreatorInput | MPelatihUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MPelatihScalarWhereInput | MPelatihScalarWhereInput[]
  }

  export type MPelatihUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<MPelatihCreateWithoutUpdaterInput, MPelatihUncheckedCreateWithoutUpdaterInput> | MPelatihCreateWithoutUpdaterInput[] | MPelatihUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: MPelatihCreateOrConnectWithoutUpdaterInput | MPelatihCreateOrConnectWithoutUpdaterInput[]
    upsert?: MPelatihUpsertWithWhereUniqueWithoutUpdaterInput | MPelatihUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: MPelatihCreateManyUpdaterInputEnvelope
    set?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    disconnect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    delete?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    connect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    update?: MPelatihUpdateWithWhereUniqueWithoutUpdaterInput | MPelatihUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: MPelatihUpdateManyWithWhereWithoutUpdaterInput | MPelatihUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: MPelatihScalarWhereInput | MPelatihScalarWhereInput[]
  }

  export type MPelatihUpdateManyWithoutDeleterNestedInput = {
    create?: XOR<MPelatihCreateWithoutDeleterInput, MPelatihUncheckedCreateWithoutDeleterInput> | MPelatihCreateWithoutDeleterInput[] | MPelatihUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: MPelatihCreateOrConnectWithoutDeleterInput | MPelatihCreateOrConnectWithoutDeleterInput[]
    upsert?: MPelatihUpsertWithWhereUniqueWithoutDeleterInput | MPelatihUpsertWithWhereUniqueWithoutDeleterInput[]
    createMany?: MPelatihCreateManyDeleterInputEnvelope
    set?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    disconnect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    delete?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    connect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    update?: MPelatihUpdateWithWhereUniqueWithoutDeleterInput | MPelatihUpdateWithWhereUniqueWithoutDeleterInput[]
    updateMany?: MPelatihUpdateManyWithWhereWithoutDeleterInput | MPelatihUpdateManyWithWhereWithoutDeleterInput[]
    deleteMany?: MPelatihScalarWhereInput | MPelatihScalarWhereInput[]
  }

  export type MProvinsiUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MProvinsiCreateWithoutCreatorInput, MProvinsiUncheckedCreateWithoutCreatorInput> | MProvinsiCreateWithoutCreatorInput[] | MProvinsiUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MProvinsiCreateOrConnectWithoutCreatorInput | MProvinsiCreateOrConnectWithoutCreatorInput[]
    upsert?: MProvinsiUpsertWithWhereUniqueWithoutCreatorInput | MProvinsiUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MProvinsiCreateManyCreatorInputEnvelope
    set?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    disconnect?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    delete?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    connect?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    update?: MProvinsiUpdateWithWhereUniqueWithoutCreatorInput | MProvinsiUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MProvinsiUpdateManyWithWhereWithoutCreatorInput | MProvinsiUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MProvinsiScalarWhereInput | MProvinsiScalarWhereInput[]
  }

  export type MProvinsiUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<MProvinsiCreateWithoutUpdaterInput, MProvinsiUncheckedCreateWithoutUpdaterInput> | MProvinsiCreateWithoutUpdaterInput[] | MProvinsiUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: MProvinsiCreateOrConnectWithoutUpdaterInput | MProvinsiCreateOrConnectWithoutUpdaterInput[]
    upsert?: MProvinsiUpsertWithWhereUniqueWithoutUpdaterInput | MProvinsiUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: MProvinsiCreateManyUpdaterInputEnvelope
    set?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    disconnect?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    delete?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    connect?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    update?: MProvinsiUpdateWithWhereUniqueWithoutUpdaterInput | MProvinsiUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: MProvinsiUpdateManyWithWhereWithoutUpdaterInput | MProvinsiUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: MProvinsiScalarWhereInput | MProvinsiScalarWhereInput[]
  }

  export type MProvinsiUpdateManyWithoutDeleterNestedInput = {
    create?: XOR<MProvinsiCreateWithoutDeleterInput, MProvinsiUncheckedCreateWithoutDeleterInput> | MProvinsiCreateWithoutDeleterInput[] | MProvinsiUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: MProvinsiCreateOrConnectWithoutDeleterInput | MProvinsiCreateOrConnectWithoutDeleterInput[]
    upsert?: MProvinsiUpsertWithWhereUniqueWithoutDeleterInput | MProvinsiUpsertWithWhereUniqueWithoutDeleterInput[]
    createMany?: MProvinsiCreateManyDeleterInputEnvelope
    set?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    disconnect?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    delete?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    connect?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    update?: MProvinsiUpdateWithWhereUniqueWithoutDeleterInput | MProvinsiUpdateWithWhereUniqueWithoutDeleterInput[]
    updateMany?: MProvinsiUpdateManyWithWhereWithoutDeleterInput | MProvinsiUpdateManyWithWhereWithoutDeleterInput[]
    deleteMany?: MProvinsiScalarWhereInput | MProvinsiScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MUserUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MUserCreateWithoutCreatorInput, MUserUncheckedCreateWithoutCreatorInput> | MUserCreateWithoutCreatorInput[] | MUserUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MUserCreateOrConnectWithoutCreatorInput | MUserCreateOrConnectWithoutCreatorInput[]
    upsert?: MUserUpsertWithWhereUniqueWithoutCreatorInput | MUserUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MUserCreateManyCreatorInputEnvelope
    set?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    disconnect?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    delete?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    connect?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    update?: MUserUpdateWithWhereUniqueWithoutCreatorInput | MUserUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MUserUpdateManyWithWhereWithoutCreatorInput | MUserUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MUserScalarWhereInput | MUserScalarWhereInput[]
  }

  export type MUserUncheckedUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<MUserCreateWithoutUpdaterInput, MUserUncheckedCreateWithoutUpdaterInput> | MUserCreateWithoutUpdaterInput[] | MUserUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: MUserCreateOrConnectWithoutUpdaterInput | MUserCreateOrConnectWithoutUpdaterInput[]
    upsert?: MUserUpsertWithWhereUniqueWithoutUpdaterInput | MUserUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: MUserCreateManyUpdaterInputEnvelope
    set?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    disconnect?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    delete?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    connect?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    update?: MUserUpdateWithWhereUniqueWithoutUpdaterInput | MUserUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: MUserUpdateManyWithWhereWithoutUpdaterInput | MUserUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: MUserScalarWhereInput | MUserScalarWhereInput[]
  }

  export type MUserUncheckedUpdateManyWithoutDeleterNestedInput = {
    create?: XOR<MUserCreateWithoutDeleterInput, MUserUncheckedCreateWithoutDeleterInput> | MUserCreateWithoutDeleterInput[] | MUserUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: MUserCreateOrConnectWithoutDeleterInput | MUserCreateOrConnectWithoutDeleterInput[]
    upsert?: MUserUpsertWithWhereUniqueWithoutDeleterInput | MUserUpsertWithWhereUniqueWithoutDeleterInput[]
    createMany?: MUserCreateManyDeleterInputEnvelope
    set?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    disconnect?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    delete?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    connect?: MUserWhereUniqueInput | MUserWhereUniqueInput[]
    update?: MUserUpdateWithWhereUniqueWithoutDeleterInput | MUserUpdateWithWhereUniqueWithoutDeleterInput[]
    updateMany?: MUserUpdateManyWithWhereWithoutDeleterInput | MUserUpdateManyWithWhereWithoutDeleterInput[]
    deleteMany?: MUserScalarWhereInput | MUserScalarWhereInput[]
  }

  export type MAtletUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MAtletCreateWithoutCreatorInput, MAtletUncheckedCreateWithoutCreatorInput> | MAtletCreateWithoutCreatorInput[] | MAtletUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MAtletCreateOrConnectWithoutCreatorInput | MAtletCreateOrConnectWithoutCreatorInput[]
    upsert?: MAtletUpsertWithWhereUniqueWithoutCreatorInput | MAtletUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MAtletCreateManyCreatorInputEnvelope
    set?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    disconnect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    delete?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    connect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    update?: MAtletUpdateWithWhereUniqueWithoutCreatorInput | MAtletUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MAtletUpdateManyWithWhereWithoutCreatorInput | MAtletUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MAtletScalarWhereInput | MAtletScalarWhereInput[]
  }

  export type MAtletUncheckedUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<MAtletCreateWithoutUpdaterInput, MAtletUncheckedCreateWithoutUpdaterInput> | MAtletCreateWithoutUpdaterInput[] | MAtletUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: MAtletCreateOrConnectWithoutUpdaterInput | MAtletCreateOrConnectWithoutUpdaterInput[]
    upsert?: MAtletUpsertWithWhereUniqueWithoutUpdaterInput | MAtletUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: MAtletCreateManyUpdaterInputEnvelope
    set?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    disconnect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    delete?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    connect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    update?: MAtletUpdateWithWhereUniqueWithoutUpdaterInput | MAtletUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: MAtletUpdateManyWithWhereWithoutUpdaterInput | MAtletUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: MAtletScalarWhereInput | MAtletScalarWhereInput[]
  }

  export type MAtletUncheckedUpdateManyWithoutDeleterNestedInput = {
    create?: XOR<MAtletCreateWithoutDeleterInput, MAtletUncheckedCreateWithoutDeleterInput> | MAtletCreateWithoutDeleterInput[] | MAtletUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: MAtletCreateOrConnectWithoutDeleterInput | MAtletCreateOrConnectWithoutDeleterInput[]
    upsert?: MAtletUpsertWithWhereUniqueWithoutDeleterInput | MAtletUpsertWithWhereUniqueWithoutDeleterInput[]
    createMany?: MAtletCreateManyDeleterInputEnvelope
    set?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    disconnect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    delete?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    connect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    update?: MAtletUpdateWithWhereUniqueWithoutDeleterInput | MAtletUpdateWithWhereUniqueWithoutDeleterInput[]
    updateMany?: MAtletUpdateManyWithWhereWithoutDeleterInput | MAtletUpdateManyWithWhereWithoutDeleterInput[]
    deleteMany?: MAtletScalarWhereInput | MAtletScalarWhereInput[]
  }

  export type MPelatihUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MPelatihCreateWithoutCreatorInput, MPelatihUncheckedCreateWithoutCreatorInput> | MPelatihCreateWithoutCreatorInput[] | MPelatihUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MPelatihCreateOrConnectWithoutCreatorInput | MPelatihCreateOrConnectWithoutCreatorInput[]
    upsert?: MPelatihUpsertWithWhereUniqueWithoutCreatorInput | MPelatihUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MPelatihCreateManyCreatorInputEnvelope
    set?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    disconnect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    delete?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    connect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    update?: MPelatihUpdateWithWhereUniqueWithoutCreatorInput | MPelatihUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MPelatihUpdateManyWithWhereWithoutCreatorInput | MPelatihUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MPelatihScalarWhereInput | MPelatihScalarWhereInput[]
  }

  export type MPelatihUncheckedUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<MPelatihCreateWithoutUpdaterInput, MPelatihUncheckedCreateWithoutUpdaterInput> | MPelatihCreateWithoutUpdaterInput[] | MPelatihUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: MPelatihCreateOrConnectWithoutUpdaterInput | MPelatihCreateOrConnectWithoutUpdaterInput[]
    upsert?: MPelatihUpsertWithWhereUniqueWithoutUpdaterInput | MPelatihUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: MPelatihCreateManyUpdaterInputEnvelope
    set?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    disconnect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    delete?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    connect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    update?: MPelatihUpdateWithWhereUniqueWithoutUpdaterInput | MPelatihUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: MPelatihUpdateManyWithWhereWithoutUpdaterInput | MPelatihUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: MPelatihScalarWhereInput | MPelatihScalarWhereInput[]
  }

  export type MPelatihUncheckedUpdateManyWithoutDeleterNestedInput = {
    create?: XOR<MPelatihCreateWithoutDeleterInput, MPelatihUncheckedCreateWithoutDeleterInput> | MPelatihCreateWithoutDeleterInput[] | MPelatihUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: MPelatihCreateOrConnectWithoutDeleterInput | MPelatihCreateOrConnectWithoutDeleterInput[]
    upsert?: MPelatihUpsertWithWhereUniqueWithoutDeleterInput | MPelatihUpsertWithWhereUniqueWithoutDeleterInput[]
    createMany?: MPelatihCreateManyDeleterInputEnvelope
    set?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    disconnect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    delete?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    connect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    update?: MPelatihUpdateWithWhereUniqueWithoutDeleterInput | MPelatihUpdateWithWhereUniqueWithoutDeleterInput[]
    updateMany?: MPelatihUpdateManyWithWhereWithoutDeleterInput | MPelatihUpdateManyWithWhereWithoutDeleterInput[]
    deleteMany?: MPelatihScalarWhereInput | MPelatihScalarWhereInput[]
  }

  export type MProvinsiUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MProvinsiCreateWithoutCreatorInput, MProvinsiUncheckedCreateWithoutCreatorInput> | MProvinsiCreateWithoutCreatorInput[] | MProvinsiUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MProvinsiCreateOrConnectWithoutCreatorInput | MProvinsiCreateOrConnectWithoutCreatorInput[]
    upsert?: MProvinsiUpsertWithWhereUniqueWithoutCreatorInput | MProvinsiUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MProvinsiCreateManyCreatorInputEnvelope
    set?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    disconnect?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    delete?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    connect?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    update?: MProvinsiUpdateWithWhereUniqueWithoutCreatorInput | MProvinsiUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MProvinsiUpdateManyWithWhereWithoutCreatorInput | MProvinsiUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MProvinsiScalarWhereInput | MProvinsiScalarWhereInput[]
  }

  export type MProvinsiUncheckedUpdateManyWithoutUpdaterNestedInput = {
    create?: XOR<MProvinsiCreateWithoutUpdaterInput, MProvinsiUncheckedCreateWithoutUpdaterInput> | MProvinsiCreateWithoutUpdaterInput[] | MProvinsiUncheckedCreateWithoutUpdaterInput[]
    connectOrCreate?: MProvinsiCreateOrConnectWithoutUpdaterInput | MProvinsiCreateOrConnectWithoutUpdaterInput[]
    upsert?: MProvinsiUpsertWithWhereUniqueWithoutUpdaterInput | MProvinsiUpsertWithWhereUniqueWithoutUpdaterInput[]
    createMany?: MProvinsiCreateManyUpdaterInputEnvelope
    set?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    disconnect?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    delete?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    connect?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    update?: MProvinsiUpdateWithWhereUniqueWithoutUpdaterInput | MProvinsiUpdateWithWhereUniqueWithoutUpdaterInput[]
    updateMany?: MProvinsiUpdateManyWithWhereWithoutUpdaterInput | MProvinsiUpdateManyWithWhereWithoutUpdaterInput[]
    deleteMany?: MProvinsiScalarWhereInput | MProvinsiScalarWhereInput[]
  }

  export type MProvinsiUncheckedUpdateManyWithoutDeleterNestedInput = {
    create?: XOR<MProvinsiCreateWithoutDeleterInput, MProvinsiUncheckedCreateWithoutDeleterInput> | MProvinsiCreateWithoutDeleterInput[] | MProvinsiUncheckedCreateWithoutDeleterInput[]
    connectOrCreate?: MProvinsiCreateOrConnectWithoutDeleterInput | MProvinsiCreateOrConnectWithoutDeleterInput[]
    upsert?: MProvinsiUpsertWithWhereUniqueWithoutDeleterInput | MProvinsiUpsertWithWhereUniqueWithoutDeleterInput[]
    createMany?: MProvinsiCreateManyDeleterInputEnvelope
    set?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    disconnect?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    delete?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    connect?: MProvinsiWhereUniqueInput | MProvinsiWhereUniqueInput[]
    update?: MProvinsiUpdateWithWhereUniqueWithoutDeleterInput | MProvinsiUpdateWithWhereUniqueWithoutDeleterInput[]
    updateMany?: MProvinsiUpdateManyWithWhereWithoutDeleterInput | MProvinsiUpdateManyWithWhereWithoutDeleterInput[]
    deleteMany?: MProvinsiScalarWhereInput | MProvinsiScalarWhereInput[]
  }

  export type MUserCreateNestedOneWithoutAtlet_profileInput = {
    create?: XOR<MUserCreateWithoutAtlet_profileInput, MUserUncheckedCreateWithoutAtlet_profileInput>
    connectOrCreate?: MUserCreateOrConnectWithoutAtlet_profileInput
    connect?: MUserWhereUniqueInput
  }

  export type MProvinsiCreateNestedOneWithoutAtletsInput = {
    create?: XOR<MProvinsiCreateWithoutAtletsInput, MProvinsiUncheckedCreateWithoutAtletsInput>
    connectOrCreate?: MProvinsiCreateOrConnectWithoutAtletsInput
    connect?: MProvinsiWhereUniqueInput
  }

  export type MUserCreateNestedOneWithoutCreated_atletsInput = {
    create?: XOR<MUserCreateWithoutCreated_atletsInput, MUserUncheckedCreateWithoutCreated_atletsInput>
    connectOrCreate?: MUserCreateOrConnectWithoutCreated_atletsInput
    connect?: MUserWhereUniqueInput
  }

  export type MUserCreateNestedOneWithoutUpdated_atletsInput = {
    create?: XOR<MUserCreateWithoutUpdated_atletsInput, MUserUncheckedCreateWithoutUpdated_atletsInput>
    connectOrCreate?: MUserCreateOrConnectWithoutUpdated_atletsInput
    connect?: MUserWhereUniqueInput
  }

  export type MUserCreateNestedOneWithoutDeleted_atletsInput = {
    create?: XOR<MUserCreateWithoutDeleted_atletsInput, MUserUncheckedCreateWithoutDeleted_atletsInput>
    connectOrCreate?: MUserCreateOrConnectWithoutDeleted_atletsInput
    connect?: MUserWhereUniqueInput
  }

  export type MUserUncheckedCreateNestedOneWithoutAtlet_profileInput = {
    create?: XOR<MUserCreateWithoutAtlet_profileInput, MUserUncheckedCreateWithoutAtlet_profileInput>
    connectOrCreate?: MUserCreateOrConnectWithoutAtlet_profileInput
    connect?: MUserWhereUniqueInput
  }

  export type EnumJenisKelaminFieldUpdateOperationsInput = {
    set?: $Enums.JenisKelamin
  }

  export type EnumPeganganRaketFieldUpdateOperationsInput = {
    set?: $Enums.PeganganRaket
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatusAtletFieldUpdateOperationsInput = {
    set?: $Enums.StatusAtlet
  }

  export type MUserUpdateOneWithoutAtlet_profileNestedInput = {
    create?: XOR<MUserCreateWithoutAtlet_profileInput, MUserUncheckedCreateWithoutAtlet_profileInput>
    connectOrCreate?: MUserCreateOrConnectWithoutAtlet_profileInput
    upsert?: MUserUpsertWithoutAtlet_profileInput
    disconnect?: MUserWhereInput | boolean
    delete?: MUserWhereInput | boolean
    connect?: MUserWhereUniqueInput
    update?: XOR<XOR<MUserUpdateToOneWithWhereWithoutAtlet_profileInput, MUserUpdateWithoutAtlet_profileInput>, MUserUncheckedUpdateWithoutAtlet_profileInput>
  }

  export type MProvinsiUpdateOneRequiredWithoutAtletsNestedInput = {
    create?: XOR<MProvinsiCreateWithoutAtletsInput, MProvinsiUncheckedCreateWithoutAtletsInput>
    connectOrCreate?: MProvinsiCreateOrConnectWithoutAtletsInput
    upsert?: MProvinsiUpsertWithoutAtletsInput
    connect?: MProvinsiWhereUniqueInput
    update?: XOR<XOR<MProvinsiUpdateToOneWithWhereWithoutAtletsInput, MProvinsiUpdateWithoutAtletsInput>, MProvinsiUncheckedUpdateWithoutAtletsInput>
  }

  export type MUserUpdateOneRequiredWithoutCreated_atletsNestedInput = {
    create?: XOR<MUserCreateWithoutCreated_atletsInput, MUserUncheckedCreateWithoutCreated_atletsInput>
    connectOrCreate?: MUserCreateOrConnectWithoutCreated_atletsInput
    upsert?: MUserUpsertWithoutCreated_atletsInput
    connect?: MUserWhereUniqueInput
    update?: XOR<XOR<MUserUpdateToOneWithWhereWithoutCreated_atletsInput, MUserUpdateWithoutCreated_atletsInput>, MUserUncheckedUpdateWithoutCreated_atletsInput>
  }

  export type MUserUpdateOneRequiredWithoutUpdated_atletsNestedInput = {
    create?: XOR<MUserCreateWithoutUpdated_atletsInput, MUserUncheckedCreateWithoutUpdated_atletsInput>
    connectOrCreate?: MUserCreateOrConnectWithoutUpdated_atletsInput
    upsert?: MUserUpsertWithoutUpdated_atletsInput
    connect?: MUserWhereUniqueInput
    update?: XOR<XOR<MUserUpdateToOneWithWhereWithoutUpdated_atletsInput, MUserUpdateWithoutUpdated_atletsInput>, MUserUncheckedUpdateWithoutUpdated_atletsInput>
  }

  export type MUserUpdateOneWithoutDeleted_atletsNestedInput = {
    create?: XOR<MUserCreateWithoutDeleted_atletsInput, MUserUncheckedCreateWithoutDeleted_atletsInput>
    connectOrCreate?: MUserCreateOrConnectWithoutDeleted_atletsInput
    upsert?: MUserUpsertWithoutDeleted_atletsInput
    disconnect?: MUserWhereInput | boolean
    delete?: MUserWhereInput | boolean
    connect?: MUserWhereUniqueInput
    update?: XOR<XOR<MUserUpdateToOneWithWhereWithoutDeleted_atletsInput, MUserUpdateWithoutDeleted_atletsInput>, MUserUncheckedUpdateWithoutDeleted_atletsInput>
  }

  export type MUserUncheckedUpdateOneWithoutAtlet_profileNestedInput = {
    create?: XOR<MUserCreateWithoutAtlet_profileInput, MUserUncheckedCreateWithoutAtlet_profileInput>
    connectOrCreate?: MUserCreateOrConnectWithoutAtlet_profileInput
    upsert?: MUserUpsertWithoutAtlet_profileInput
    disconnect?: MUserWhereInput | boolean
    delete?: MUserWhereInput | boolean
    connect?: MUserWhereUniqueInput
    update?: XOR<XOR<MUserUpdateToOneWithWhereWithoutAtlet_profileInput, MUserUpdateWithoutAtlet_profileInput>, MUserUncheckedUpdateWithoutAtlet_profileInput>
  }

  export type MUserCreateNestedOneWithoutPelatih_profileInput = {
    create?: XOR<MUserCreateWithoutPelatih_profileInput, MUserUncheckedCreateWithoutPelatih_profileInput>
    connectOrCreate?: MUserCreateOrConnectWithoutPelatih_profileInput
    connect?: MUserWhereUniqueInput
  }

  export type MProvinsiCreateNestedOneWithoutCoachsInput = {
    create?: XOR<MProvinsiCreateWithoutCoachsInput, MProvinsiUncheckedCreateWithoutCoachsInput>
    connectOrCreate?: MProvinsiCreateOrConnectWithoutCoachsInput
    connect?: MProvinsiWhereUniqueInput
  }

  export type MUserCreateNestedOneWithoutCreated_pelatihhsInput = {
    create?: XOR<MUserCreateWithoutCreated_pelatihhsInput, MUserUncheckedCreateWithoutCreated_pelatihhsInput>
    connectOrCreate?: MUserCreateOrConnectWithoutCreated_pelatihhsInput
    connect?: MUserWhereUniqueInput
  }

  export type MUserCreateNestedOneWithoutUpdated_pelatihhsInput = {
    create?: XOR<MUserCreateWithoutUpdated_pelatihhsInput, MUserUncheckedCreateWithoutUpdated_pelatihhsInput>
    connectOrCreate?: MUserCreateOrConnectWithoutUpdated_pelatihhsInput
    connect?: MUserWhereUniqueInput
  }

  export type MUserCreateNestedOneWithoutDeleted_pelatihhsInput = {
    create?: XOR<MUserCreateWithoutDeleted_pelatihhsInput, MUserUncheckedCreateWithoutDeleted_pelatihhsInput>
    connectOrCreate?: MUserCreateOrConnectWithoutDeleted_pelatihhsInput
    connect?: MUserWhereUniqueInput
  }

  export type MUserUncheckedCreateNestedOneWithoutPelatih_profileInput = {
    create?: XOR<MUserCreateWithoutPelatih_profileInput, MUserUncheckedCreateWithoutPelatih_profileInput>
    connectOrCreate?: MUserCreateOrConnectWithoutPelatih_profileInput
    connect?: MUserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MUserUpdateOneWithoutPelatih_profileNestedInput = {
    create?: XOR<MUserCreateWithoutPelatih_profileInput, MUserUncheckedCreateWithoutPelatih_profileInput>
    connectOrCreate?: MUserCreateOrConnectWithoutPelatih_profileInput
    upsert?: MUserUpsertWithoutPelatih_profileInput
    disconnect?: MUserWhereInput | boolean
    delete?: MUserWhereInput | boolean
    connect?: MUserWhereUniqueInput
    update?: XOR<XOR<MUserUpdateToOneWithWhereWithoutPelatih_profileInput, MUserUpdateWithoutPelatih_profileInput>, MUserUncheckedUpdateWithoutPelatih_profileInput>
  }

  export type MProvinsiUpdateOneRequiredWithoutCoachsNestedInput = {
    create?: XOR<MProvinsiCreateWithoutCoachsInput, MProvinsiUncheckedCreateWithoutCoachsInput>
    connectOrCreate?: MProvinsiCreateOrConnectWithoutCoachsInput
    upsert?: MProvinsiUpsertWithoutCoachsInput
    connect?: MProvinsiWhereUniqueInput
    update?: XOR<XOR<MProvinsiUpdateToOneWithWhereWithoutCoachsInput, MProvinsiUpdateWithoutCoachsInput>, MProvinsiUncheckedUpdateWithoutCoachsInput>
  }

  export type MUserUpdateOneRequiredWithoutCreated_pelatihhsNestedInput = {
    create?: XOR<MUserCreateWithoutCreated_pelatihhsInput, MUserUncheckedCreateWithoutCreated_pelatihhsInput>
    connectOrCreate?: MUserCreateOrConnectWithoutCreated_pelatihhsInput
    upsert?: MUserUpsertWithoutCreated_pelatihhsInput
    connect?: MUserWhereUniqueInput
    update?: XOR<XOR<MUserUpdateToOneWithWhereWithoutCreated_pelatihhsInput, MUserUpdateWithoutCreated_pelatihhsInput>, MUserUncheckedUpdateWithoutCreated_pelatihhsInput>
  }

  export type MUserUpdateOneRequiredWithoutUpdated_pelatihhsNestedInput = {
    create?: XOR<MUserCreateWithoutUpdated_pelatihhsInput, MUserUncheckedCreateWithoutUpdated_pelatihhsInput>
    connectOrCreate?: MUserCreateOrConnectWithoutUpdated_pelatihhsInput
    upsert?: MUserUpsertWithoutUpdated_pelatihhsInput
    connect?: MUserWhereUniqueInput
    update?: XOR<XOR<MUserUpdateToOneWithWhereWithoutUpdated_pelatihhsInput, MUserUpdateWithoutUpdated_pelatihhsInput>, MUserUncheckedUpdateWithoutUpdated_pelatihhsInput>
  }

  export type MUserUpdateOneWithoutDeleted_pelatihhsNestedInput = {
    create?: XOR<MUserCreateWithoutDeleted_pelatihhsInput, MUserUncheckedCreateWithoutDeleted_pelatihhsInput>
    connectOrCreate?: MUserCreateOrConnectWithoutDeleted_pelatihhsInput
    upsert?: MUserUpsertWithoutDeleted_pelatihhsInput
    disconnect?: MUserWhereInput | boolean
    delete?: MUserWhereInput | boolean
    connect?: MUserWhereUniqueInput
    update?: XOR<XOR<MUserUpdateToOneWithWhereWithoutDeleted_pelatihhsInput, MUserUpdateWithoutDeleted_pelatihhsInput>, MUserUncheckedUpdateWithoutDeleted_pelatihhsInput>
  }

  export type MUserUncheckedUpdateOneWithoutPelatih_profileNestedInput = {
    create?: XOR<MUserCreateWithoutPelatih_profileInput, MUserUncheckedCreateWithoutPelatih_profileInput>
    connectOrCreate?: MUserCreateOrConnectWithoutPelatih_profileInput
    upsert?: MUserUpsertWithoutPelatih_profileInput
    disconnect?: MUserWhereInput | boolean
    delete?: MUserWhereInput | boolean
    connect?: MUserWhereUniqueInput
    update?: XOR<XOR<MUserUpdateToOneWithWhereWithoutPelatih_profileInput, MUserUpdateWithoutPelatih_profileInput>, MUserUncheckedUpdateWithoutPelatih_profileInput>
  }

  export type MUserCreateNestedOneWithoutCreated_provinsisInput = {
    create?: XOR<MUserCreateWithoutCreated_provinsisInput, MUserUncheckedCreateWithoutCreated_provinsisInput>
    connectOrCreate?: MUserCreateOrConnectWithoutCreated_provinsisInput
    connect?: MUserWhereUniqueInput
  }

  export type MUserCreateNestedOneWithoutUpdated_provinsisInput = {
    create?: XOR<MUserCreateWithoutUpdated_provinsisInput, MUserUncheckedCreateWithoutUpdated_provinsisInput>
    connectOrCreate?: MUserCreateOrConnectWithoutUpdated_provinsisInput
    connect?: MUserWhereUniqueInput
  }

  export type MUserCreateNestedOneWithoutDeleted_provinsisInput = {
    create?: XOR<MUserCreateWithoutDeleted_provinsisInput, MUserUncheckedCreateWithoutDeleted_provinsisInput>
    connectOrCreate?: MUserCreateOrConnectWithoutDeleted_provinsisInput
    connect?: MUserWhereUniqueInput
  }

  export type MAtletCreateNestedManyWithoutProvinsiInput = {
    create?: XOR<MAtletCreateWithoutProvinsiInput, MAtletUncheckedCreateWithoutProvinsiInput> | MAtletCreateWithoutProvinsiInput[] | MAtletUncheckedCreateWithoutProvinsiInput[]
    connectOrCreate?: MAtletCreateOrConnectWithoutProvinsiInput | MAtletCreateOrConnectWithoutProvinsiInput[]
    createMany?: MAtletCreateManyProvinsiInputEnvelope
    connect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
  }

  export type MPelatihCreateNestedManyWithoutProvinsiInput = {
    create?: XOR<MPelatihCreateWithoutProvinsiInput, MPelatihUncheckedCreateWithoutProvinsiInput> | MPelatihCreateWithoutProvinsiInput[] | MPelatihUncheckedCreateWithoutProvinsiInput[]
    connectOrCreate?: MPelatihCreateOrConnectWithoutProvinsiInput | MPelatihCreateOrConnectWithoutProvinsiInput[]
    createMany?: MPelatihCreateManyProvinsiInputEnvelope
    connect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
  }

  export type MAtletUncheckedCreateNestedManyWithoutProvinsiInput = {
    create?: XOR<MAtletCreateWithoutProvinsiInput, MAtletUncheckedCreateWithoutProvinsiInput> | MAtletCreateWithoutProvinsiInput[] | MAtletUncheckedCreateWithoutProvinsiInput[]
    connectOrCreate?: MAtletCreateOrConnectWithoutProvinsiInput | MAtletCreateOrConnectWithoutProvinsiInput[]
    createMany?: MAtletCreateManyProvinsiInputEnvelope
    connect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
  }

  export type MPelatihUncheckedCreateNestedManyWithoutProvinsiInput = {
    create?: XOR<MPelatihCreateWithoutProvinsiInput, MPelatihUncheckedCreateWithoutProvinsiInput> | MPelatihCreateWithoutProvinsiInput[] | MPelatihUncheckedCreateWithoutProvinsiInput[]
    connectOrCreate?: MPelatihCreateOrConnectWithoutProvinsiInput | MPelatihCreateOrConnectWithoutProvinsiInput[]
    createMany?: MPelatihCreateManyProvinsiInputEnvelope
    connect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
  }

  export type MUserUpdateOneRequiredWithoutCreated_provinsisNestedInput = {
    create?: XOR<MUserCreateWithoutCreated_provinsisInput, MUserUncheckedCreateWithoutCreated_provinsisInput>
    connectOrCreate?: MUserCreateOrConnectWithoutCreated_provinsisInput
    upsert?: MUserUpsertWithoutCreated_provinsisInput
    connect?: MUserWhereUniqueInput
    update?: XOR<XOR<MUserUpdateToOneWithWhereWithoutCreated_provinsisInput, MUserUpdateWithoutCreated_provinsisInput>, MUserUncheckedUpdateWithoutCreated_provinsisInput>
  }

  export type MUserUpdateOneRequiredWithoutUpdated_provinsisNestedInput = {
    create?: XOR<MUserCreateWithoutUpdated_provinsisInput, MUserUncheckedCreateWithoutUpdated_provinsisInput>
    connectOrCreate?: MUserCreateOrConnectWithoutUpdated_provinsisInput
    upsert?: MUserUpsertWithoutUpdated_provinsisInput
    connect?: MUserWhereUniqueInput
    update?: XOR<XOR<MUserUpdateToOneWithWhereWithoutUpdated_provinsisInput, MUserUpdateWithoutUpdated_provinsisInput>, MUserUncheckedUpdateWithoutUpdated_provinsisInput>
  }

  export type MUserUpdateOneWithoutDeleted_provinsisNestedInput = {
    create?: XOR<MUserCreateWithoutDeleted_provinsisInput, MUserUncheckedCreateWithoutDeleted_provinsisInput>
    connectOrCreate?: MUserCreateOrConnectWithoutDeleted_provinsisInput
    upsert?: MUserUpsertWithoutDeleted_provinsisInput
    disconnect?: MUserWhereInput | boolean
    delete?: MUserWhereInput | boolean
    connect?: MUserWhereUniqueInput
    update?: XOR<XOR<MUserUpdateToOneWithWhereWithoutDeleted_provinsisInput, MUserUpdateWithoutDeleted_provinsisInput>, MUserUncheckedUpdateWithoutDeleted_provinsisInput>
  }

  export type MAtletUpdateManyWithoutProvinsiNestedInput = {
    create?: XOR<MAtletCreateWithoutProvinsiInput, MAtletUncheckedCreateWithoutProvinsiInput> | MAtletCreateWithoutProvinsiInput[] | MAtletUncheckedCreateWithoutProvinsiInput[]
    connectOrCreate?: MAtletCreateOrConnectWithoutProvinsiInput | MAtletCreateOrConnectWithoutProvinsiInput[]
    upsert?: MAtletUpsertWithWhereUniqueWithoutProvinsiInput | MAtletUpsertWithWhereUniqueWithoutProvinsiInput[]
    createMany?: MAtletCreateManyProvinsiInputEnvelope
    set?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    disconnect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    delete?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    connect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    update?: MAtletUpdateWithWhereUniqueWithoutProvinsiInput | MAtletUpdateWithWhereUniqueWithoutProvinsiInput[]
    updateMany?: MAtletUpdateManyWithWhereWithoutProvinsiInput | MAtletUpdateManyWithWhereWithoutProvinsiInput[]
    deleteMany?: MAtletScalarWhereInput | MAtletScalarWhereInput[]
  }

  export type MPelatihUpdateManyWithoutProvinsiNestedInput = {
    create?: XOR<MPelatihCreateWithoutProvinsiInput, MPelatihUncheckedCreateWithoutProvinsiInput> | MPelatihCreateWithoutProvinsiInput[] | MPelatihUncheckedCreateWithoutProvinsiInput[]
    connectOrCreate?: MPelatihCreateOrConnectWithoutProvinsiInput | MPelatihCreateOrConnectWithoutProvinsiInput[]
    upsert?: MPelatihUpsertWithWhereUniqueWithoutProvinsiInput | MPelatihUpsertWithWhereUniqueWithoutProvinsiInput[]
    createMany?: MPelatihCreateManyProvinsiInputEnvelope
    set?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    disconnect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    delete?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    connect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    update?: MPelatihUpdateWithWhereUniqueWithoutProvinsiInput | MPelatihUpdateWithWhereUniqueWithoutProvinsiInput[]
    updateMany?: MPelatihUpdateManyWithWhereWithoutProvinsiInput | MPelatihUpdateManyWithWhereWithoutProvinsiInput[]
    deleteMany?: MPelatihScalarWhereInput | MPelatihScalarWhereInput[]
  }

  export type MAtletUncheckedUpdateManyWithoutProvinsiNestedInput = {
    create?: XOR<MAtletCreateWithoutProvinsiInput, MAtletUncheckedCreateWithoutProvinsiInput> | MAtletCreateWithoutProvinsiInput[] | MAtletUncheckedCreateWithoutProvinsiInput[]
    connectOrCreate?: MAtletCreateOrConnectWithoutProvinsiInput | MAtletCreateOrConnectWithoutProvinsiInput[]
    upsert?: MAtletUpsertWithWhereUniqueWithoutProvinsiInput | MAtletUpsertWithWhereUniqueWithoutProvinsiInput[]
    createMany?: MAtletCreateManyProvinsiInputEnvelope
    set?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    disconnect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    delete?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    connect?: MAtletWhereUniqueInput | MAtletWhereUniqueInput[]
    update?: MAtletUpdateWithWhereUniqueWithoutProvinsiInput | MAtletUpdateWithWhereUniqueWithoutProvinsiInput[]
    updateMany?: MAtletUpdateManyWithWhereWithoutProvinsiInput | MAtletUpdateManyWithWhereWithoutProvinsiInput[]
    deleteMany?: MAtletScalarWhereInput | MAtletScalarWhereInput[]
  }

  export type MPelatihUncheckedUpdateManyWithoutProvinsiNestedInput = {
    create?: XOR<MPelatihCreateWithoutProvinsiInput, MPelatihUncheckedCreateWithoutProvinsiInput> | MPelatihCreateWithoutProvinsiInput[] | MPelatihUncheckedCreateWithoutProvinsiInput[]
    connectOrCreate?: MPelatihCreateOrConnectWithoutProvinsiInput | MPelatihCreateOrConnectWithoutProvinsiInput[]
    upsert?: MPelatihUpsertWithWhereUniqueWithoutProvinsiInput | MPelatihUpsertWithWhereUniqueWithoutProvinsiInput[]
    createMany?: MPelatihCreateManyProvinsiInputEnvelope
    set?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    disconnect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    delete?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    connect?: MPelatihWhereUniqueInput | MPelatihWhereUniqueInput[]
    update?: MPelatihUpdateWithWhereUniqueWithoutProvinsiInput | MPelatihUpdateWithWhereUniqueWithoutProvinsiInput[]
    updateMany?: MPelatihUpdateManyWithWhereWithoutProvinsiInput | MPelatihUpdateManyWithWhereWithoutProvinsiInput[]
    deleteMany?: MPelatihScalarWhereInput | MPelatihScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleUserFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUser | EnumRoleUserFieldRefInput<$PrismaModel>
    in?: $Enums.RoleUser[] | ListEnumRoleUserFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleUser[] | ListEnumRoleUserFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleUserFilter<$PrismaModel> | $Enums.RoleUser
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleUserWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUser | EnumRoleUserFieldRefInput<$PrismaModel>
    in?: $Enums.RoleUser[] | ListEnumRoleUserFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleUser[] | ListEnumRoleUserFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleUserWithAggregatesFilter<$PrismaModel> | $Enums.RoleUser
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleUserFilter<$PrismaModel>
    _max?: NestedEnumRoleUserFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumJenisKelaminFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisKelaminFilter<$PrismaModel> | $Enums.JenisKelamin
  }

  export type NestedEnumPeganganRaketFilter<$PrismaModel = never> = {
    equals?: $Enums.PeganganRaket | EnumPeganganRaketFieldRefInput<$PrismaModel>
    in?: $Enums.PeganganRaket[] | ListEnumPeganganRaketFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeganganRaket[] | ListEnumPeganganRaketFieldRefInput<$PrismaModel>
    not?: NestedEnumPeganganRaketFilter<$PrismaModel> | $Enums.PeganganRaket
  }

  export type NestedEnumStatusAtletFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAtlet | EnumStatusAtletFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAtlet[] | ListEnumStatusAtletFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAtlet[] | ListEnumStatusAtletFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtletFilter<$PrismaModel> | $Enums.StatusAtlet
  }

  export type NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel> | $Enums.JenisKelamin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisKelaminFilter<$PrismaModel>
    _max?: NestedEnumJenisKelaminFilter<$PrismaModel>
  }

  export type NestedEnumPeganganRaketWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PeganganRaket | EnumPeganganRaketFieldRefInput<$PrismaModel>
    in?: $Enums.PeganganRaket[] | ListEnumPeganganRaketFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeganganRaket[] | ListEnumPeganganRaketFieldRefInput<$PrismaModel>
    not?: NestedEnumPeganganRaketWithAggregatesFilter<$PrismaModel> | $Enums.PeganganRaket
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeganganRaketFilter<$PrismaModel>
    _max?: NestedEnumPeganganRaketFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusAtletWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAtlet | EnumStatusAtletFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAtlet[] | ListEnumStatusAtletFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAtlet[] | ListEnumStatusAtletFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtletWithAggregatesFilter<$PrismaModel> | $Enums.StatusAtlet
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAtletFilter<$PrismaModel>
    _max?: NestedEnumStatusAtletFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MAtletCreateWithoutUser_akunInput = {
    uid_atlet: string
    nik: string
    id_pbsi: string
    nama_lengkap: string
    nama_ayah: string
    nama_ibu: string
    tempat_lahir: string
    tanggal_lahir: Date | string
    alamat: string
    jenis_kelamin: $Enums.JenisKelamin
    pegangan_raket: $Enums.PeganganRaket
    tinggi_badan: number
    berat_badan: number
    status_atlet: $Enums.StatusAtlet
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    provinsi: MProvinsiCreateNestedOneWithoutAtletsInput
    creator: MUserCreateNestedOneWithoutCreated_atletsInput
    updater: MUserCreateNestedOneWithoutUpdated_atletsInput
    deleter?: MUserCreateNestedOneWithoutDeleted_atletsInput
  }

  export type MAtletUncheckedCreateWithoutUser_akunInput = {
    uid_atlet: string
    nik: string
    id_pbsi: string
    nama_lengkap: string
    nama_ayah: string
    nama_ibu: string
    tempat_lahir: string
    tanggal_lahir: Date | string
    alamat: string
    jenis_kelamin: $Enums.JenisKelamin
    pegangan_raket: $Enums.PeganganRaket
    tinggi_badan: number
    berat_badan: number
    status_atlet: $Enums.StatusAtlet
    foto: string
    uid_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid: string
    updated_by_uid: string
    deleted_by_uid?: string | null
  }

  export type MAtletCreateOrConnectWithoutUser_akunInput = {
    where: MAtletWhereUniqueInput
    create: XOR<MAtletCreateWithoutUser_akunInput, MAtletUncheckedCreateWithoutUser_akunInput>
  }

  export type MPelatihCreateWithoutUser_akunInput = {
    uid_pelatih: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    tahun_bergabung: number
    pernah_melatih_sebelumnya: boolean
    klub_negara_sebelumnya: string
    mantan_atlet_nasional: boolean
    asal_klub_nasional: string
    mantan_pelatnas: boolean
    tahun_pelatnas: number
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    provinsi: MProvinsiCreateNestedOneWithoutCoachsInput
    creator: MUserCreateNestedOneWithoutCreated_pelatihhsInput
    updater: MUserCreateNestedOneWithoutUpdated_pelatihhsInput
    deleter?: MUserCreateNestedOneWithoutDeleted_pelatihhsInput
  }

  export type MPelatihUncheckedCreateWithoutUser_akunInput = {
    uid_pelatih: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    tahun_bergabung: number
    pernah_melatih_sebelumnya: boolean
    klub_negara_sebelumnya: string
    mantan_atlet_nasional: boolean
    asal_klub_nasional: string
    mantan_pelatnas: boolean
    tahun_pelatnas: number
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    uid_provinsi: string
    created_by_uid: string
    updated_by_uid: string
    deleted_by_uid?: string | null
  }

  export type MPelatihCreateOrConnectWithoutUser_akunInput = {
    where: MPelatihWhereUniqueInput
    create: XOR<MPelatihCreateWithoutUser_akunInput, MPelatihUncheckedCreateWithoutUser_akunInput>
  }

  export type MUserCreateWithoutCreated_usersInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atlet_profile?: MAtletCreateNestedOneWithoutUser_akunInput
    pelatih_profile?: MPelatihCreateNestedOneWithoutUser_akunInput
    creator?: MUserCreateNestedOneWithoutCreated_usersInput
    updater?: MUserCreateNestedOneWithoutUpdated_usersInput
    deleter?: MUserCreateNestedOneWithoutDeleted_usersInput
    updated_users?: MUserCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiCreateNestedManyWithoutDeleterInput
  }

  export type MUserUncheckedCreateWithoutCreated_usersInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid?: string | null
    updated_by_uid?: string | null
    deleted_by_uid?: string | null
    updated_users?: MUserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserUncheckedCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletUncheckedCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletUncheckedCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutDeleterInput
  }

  export type MUserCreateOrConnectWithoutCreated_usersInput = {
    where: MUserWhereUniqueInput
    create: XOR<MUserCreateWithoutCreated_usersInput, MUserUncheckedCreateWithoutCreated_usersInput>
  }

  export type MUserCreateWithoutUpdated_usersInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atlet_profile?: MAtletCreateNestedOneWithoutUser_akunInput
    pelatih_profile?: MPelatihCreateNestedOneWithoutUser_akunInput
    creator?: MUserCreateNestedOneWithoutCreated_usersInput
    updater?: MUserCreateNestedOneWithoutUpdated_usersInput
    deleter?: MUserCreateNestedOneWithoutDeleted_usersInput
    created_users?: MUserCreateNestedManyWithoutCreatorInput
    deleted_users?: MUserCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiCreateNestedManyWithoutDeleterInput
  }

  export type MUserUncheckedCreateWithoutUpdated_usersInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid?: string | null
    updated_by_uid?: string | null
    deleted_by_uid?: string | null
    created_users?: MUserUncheckedCreateNestedManyWithoutCreatorInput
    deleted_users?: MUserUncheckedCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletUncheckedCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletUncheckedCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutDeleterInput
  }

  export type MUserCreateOrConnectWithoutUpdated_usersInput = {
    where: MUserWhereUniqueInput
    create: XOR<MUserCreateWithoutUpdated_usersInput, MUserUncheckedCreateWithoutUpdated_usersInput>
  }

  export type MUserCreateWithoutDeleted_usersInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atlet_profile?: MAtletCreateNestedOneWithoutUser_akunInput
    pelatih_profile?: MPelatihCreateNestedOneWithoutUser_akunInput
    creator?: MUserCreateNestedOneWithoutCreated_usersInput
    updater?: MUserCreateNestedOneWithoutUpdated_usersInput
    deleter?: MUserCreateNestedOneWithoutDeleted_usersInput
    created_users?: MUserCreateNestedManyWithoutCreatorInput
    updated_users?: MUserCreateNestedManyWithoutUpdaterInput
    created_atlets?: MAtletCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiCreateNestedManyWithoutDeleterInput
  }

  export type MUserUncheckedCreateWithoutDeleted_usersInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid?: string | null
    updated_by_uid?: string | null
    deleted_by_uid?: string | null
    created_users?: MUserUncheckedCreateNestedManyWithoutCreatorInput
    updated_users?: MUserUncheckedCreateNestedManyWithoutUpdaterInput
    created_atlets?: MAtletUncheckedCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletUncheckedCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutDeleterInput
  }

  export type MUserCreateOrConnectWithoutDeleted_usersInput = {
    where: MUserWhereUniqueInput
    create: XOR<MUserCreateWithoutDeleted_usersInput, MUserUncheckedCreateWithoutDeleted_usersInput>
  }

  export type MUserCreateWithoutCreatorInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atlet_profile?: MAtletCreateNestedOneWithoutUser_akunInput
    pelatih_profile?: MPelatihCreateNestedOneWithoutUser_akunInput
    updater?: MUserCreateNestedOneWithoutUpdated_usersInput
    deleter?: MUserCreateNestedOneWithoutDeleted_usersInput
    created_users?: MUserCreateNestedManyWithoutCreatorInput
    updated_users?: MUserCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiCreateNestedManyWithoutDeleterInput
  }

  export type MUserUncheckedCreateWithoutCreatorInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    updated_by_uid?: string | null
    deleted_by_uid?: string | null
    created_users?: MUserUncheckedCreateNestedManyWithoutCreatorInput
    updated_users?: MUserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserUncheckedCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletUncheckedCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletUncheckedCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutDeleterInput
  }

  export type MUserCreateOrConnectWithoutCreatorInput = {
    where: MUserWhereUniqueInput
    create: XOR<MUserCreateWithoutCreatorInput, MUserUncheckedCreateWithoutCreatorInput>
  }

  export type MUserCreateManyCreatorInputEnvelope = {
    data: MUserCreateManyCreatorInput | MUserCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type MUserCreateWithoutUpdaterInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atlet_profile?: MAtletCreateNestedOneWithoutUser_akunInput
    pelatih_profile?: MPelatihCreateNestedOneWithoutUser_akunInput
    creator?: MUserCreateNestedOneWithoutCreated_usersInput
    deleter?: MUserCreateNestedOneWithoutDeleted_usersInput
    created_users?: MUserCreateNestedManyWithoutCreatorInput
    updated_users?: MUserCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiCreateNestedManyWithoutDeleterInput
  }

  export type MUserUncheckedCreateWithoutUpdaterInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid?: string | null
    deleted_by_uid?: string | null
    created_users?: MUserUncheckedCreateNestedManyWithoutCreatorInput
    updated_users?: MUserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserUncheckedCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletUncheckedCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletUncheckedCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutDeleterInput
  }

  export type MUserCreateOrConnectWithoutUpdaterInput = {
    where: MUserWhereUniqueInput
    create: XOR<MUserCreateWithoutUpdaterInput, MUserUncheckedCreateWithoutUpdaterInput>
  }

  export type MUserCreateManyUpdaterInputEnvelope = {
    data: MUserCreateManyUpdaterInput | MUserCreateManyUpdaterInput[]
    skipDuplicates?: boolean
  }

  export type MUserCreateWithoutDeleterInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atlet_profile?: MAtletCreateNestedOneWithoutUser_akunInput
    pelatih_profile?: MPelatihCreateNestedOneWithoutUser_akunInput
    creator?: MUserCreateNestedOneWithoutCreated_usersInput
    updater?: MUserCreateNestedOneWithoutUpdated_usersInput
    created_users?: MUserCreateNestedManyWithoutCreatorInput
    updated_users?: MUserCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiCreateNestedManyWithoutDeleterInput
  }

  export type MUserUncheckedCreateWithoutDeleterInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid?: string | null
    updated_by_uid?: string | null
    created_users?: MUserUncheckedCreateNestedManyWithoutCreatorInput
    updated_users?: MUserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserUncheckedCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletUncheckedCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletUncheckedCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutDeleterInput
  }

  export type MUserCreateOrConnectWithoutDeleterInput = {
    where: MUserWhereUniqueInput
    create: XOR<MUserCreateWithoutDeleterInput, MUserUncheckedCreateWithoutDeleterInput>
  }

  export type MUserCreateManyDeleterInputEnvelope = {
    data: MUserCreateManyDeleterInput | MUserCreateManyDeleterInput[]
    skipDuplicates?: boolean
  }

  export type MAtletCreateWithoutCreatorInput = {
    uid_atlet: string
    nik: string
    id_pbsi: string
    nama_lengkap: string
    nama_ayah: string
    nama_ibu: string
    tempat_lahir: string
    tanggal_lahir: Date | string
    alamat: string
    jenis_kelamin: $Enums.JenisKelamin
    pegangan_raket: $Enums.PeganganRaket
    tinggi_badan: number
    berat_badan: number
    status_atlet: $Enums.StatusAtlet
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user_akun?: MUserCreateNestedOneWithoutAtlet_profileInput
    provinsi: MProvinsiCreateNestedOneWithoutAtletsInput
    updater: MUserCreateNestedOneWithoutUpdated_atletsInput
    deleter?: MUserCreateNestedOneWithoutDeleted_atletsInput
  }

  export type MAtletUncheckedCreateWithoutCreatorInput = {
    uid_atlet: string
    nik: string
    id_pbsi: string
    nama_lengkap: string
    nama_ayah: string
    nama_ibu: string
    tempat_lahir: string
    tanggal_lahir: Date | string
    alamat: string
    jenis_kelamin: $Enums.JenisKelamin
    pegangan_raket: $Enums.PeganganRaket
    tinggi_badan: number
    berat_badan: number
    status_atlet: $Enums.StatusAtlet
    foto: string
    uid_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    updated_by_uid: string
    deleted_by_uid?: string | null
    user_akun?: MUserUncheckedCreateNestedOneWithoutAtlet_profileInput
  }

  export type MAtletCreateOrConnectWithoutCreatorInput = {
    where: MAtletWhereUniqueInput
    create: XOR<MAtletCreateWithoutCreatorInput, MAtletUncheckedCreateWithoutCreatorInput>
  }

  export type MAtletCreateManyCreatorInputEnvelope = {
    data: MAtletCreateManyCreatorInput | MAtletCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type MAtletCreateWithoutUpdaterInput = {
    uid_atlet: string
    nik: string
    id_pbsi: string
    nama_lengkap: string
    nama_ayah: string
    nama_ibu: string
    tempat_lahir: string
    tanggal_lahir: Date | string
    alamat: string
    jenis_kelamin: $Enums.JenisKelamin
    pegangan_raket: $Enums.PeganganRaket
    tinggi_badan: number
    berat_badan: number
    status_atlet: $Enums.StatusAtlet
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user_akun?: MUserCreateNestedOneWithoutAtlet_profileInput
    provinsi: MProvinsiCreateNestedOneWithoutAtletsInput
    creator: MUserCreateNestedOneWithoutCreated_atletsInput
    deleter?: MUserCreateNestedOneWithoutDeleted_atletsInput
  }

  export type MAtletUncheckedCreateWithoutUpdaterInput = {
    uid_atlet: string
    nik: string
    id_pbsi: string
    nama_lengkap: string
    nama_ayah: string
    nama_ibu: string
    tempat_lahir: string
    tanggal_lahir: Date | string
    alamat: string
    jenis_kelamin: $Enums.JenisKelamin
    pegangan_raket: $Enums.PeganganRaket
    tinggi_badan: number
    berat_badan: number
    status_atlet: $Enums.StatusAtlet
    foto: string
    uid_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid: string
    deleted_by_uid?: string | null
    user_akun?: MUserUncheckedCreateNestedOneWithoutAtlet_profileInput
  }

  export type MAtletCreateOrConnectWithoutUpdaterInput = {
    where: MAtletWhereUniqueInput
    create: XOR<MAtletCreateWithoutUpdaterInput, MAtletUncheckedCreateWithoutUpdaterInput>
  }

  export type MAtletCreateManyUpdaterInputEnvelope = {
    data: MAtletCreateManyUpdaterInput | MAtletCreateManyUpdaterInput[]
    skipDuplicates?: boolean
  }

  export type MAtletCreateWithoutDeleterInput = {
    uid_atlet: string
    nik: string
    id_pbsi: string
    nama_lengkap: string
    nama_ayah: string
    nama_ibu: string
    tempat_lahir: string
    tanggal_lahir: Date | string
    alamat: string
    jenis_kelamin: $Enums.JenisKelamin
    pegangan_raket: $Enums.PeganganRaket
    tinggi_badan: number
    berat_badan: number
    status_atlet: $Enums.StatusAtlet
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user_akun?: MUserCreateNestedOneWithoutAtlet_profileInput
    provinsi: MProvinsiCreateNestedOneWithoutAtletsInput
    creator: MUserCreateNestedOneWithoutCreated_atletsInput
    updater: MUserCreateNestedOneWithoutUpdated_atletsInput
  }

  export type MAtletUncheckedCreateWithoutDeleterInput = {
    uid_atlet: string
    nik: string
    id_pbsi: string
    nama_lengkap: string
    nama_ayah: string
    nama_ibu: string
    tempat_lahir: string
    tanggal_lahir: Date | string
    alamat: string
    jenis_kelamin: $Enums.JenisKelamin
    pegangan_raket: $Enums.PeganganRaket
    tinggi_badan: number
    berat_badan: number
    status_atlet: $Enums.StatusAtlet
    foto: string
    uid_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid: string
    updated_by_uid: string
    user_akun?: MUserUncheckedCreateNestedOneWithoutAtlet_profileInput
  }

  export type MAtletCreateOrConnectWithoutDeleterInput = {
    where: MAtletWhereUniqueInput
    create: XOR<MAtletCreateWithoutDeleterInput, MAtletUncheckedCreateWithoutDeleterInput>
  }

  export type MAtletCreateManyDeleterInputEnvelope = {
    data: MAtletCreateManyDeleterInput | MAtletCreateManyDeleterInput[]
    skipDuplicates?: boolean
  }

  export type MPelatihCreateWithoutCreatorInput = {
    uid_pelatih: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    tahun_bergabung: number
    pernah_melatih_sebelumnya: boolean
    klub_negara_sebelumnya: string
    mantan_atlet_nasional: boolean
    asal_klub_nasional: string
    mantan_pelatnas: boolean
    tahun_pelatnas: number
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user_akun?: MUserCreateNestedOneWithoutPelatih_profileInput
    provinsi: MProvinsiCreateNestedOneWithoutCoachsInput
    updater: MUserCreateNestedOneWithoutUpdated_pelatihhsInput
    deleter?: MUserCreateNestedOneWithoutDeleted_pelatihhsInput
  }

  export type MPelatihUncheckedCreateWithoutCreatorInput = {
    uid_pelatih: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    tahun_bergabung: number
    pernah_melatih_sebelumnya: boolean
    klub_negara_sebelumnya: string
    mantan_atlet_nasional: boolean
    asal_klub_nasional: string
    mantan_pelatnas: boolean
    tahun_pelatnas: number
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    uid_provinsi: string
    updated_by_uid: string
    deleted_by_uid?: string | null
    user_akun?: MUserUncheckedCreateNestedOneWithoutPelatih_profileInput
  }

  export type MPelatihCreateOrConnectWithoutCreatorInput = {
    where: MPelatihWhereUniqueInput
    create: XOR<MPelatihCreateWithoutCreatorInput, MPelatihUncheckedCreateWithoutCreatorInput>
  }

  export type MPelatihCreateManyCreatorInputEnvelope = {
    data: MPelatihCreateManyCreatorInput | MPelatihCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type MPelatihCreateWithoutUpdaterInput = {
    uid_pelatih: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    tahun_bergabung: number
    pernah_melatih_sebelumnya: boolean
    klub_negara_sebelumnya: string
    mantan_atlet_nasional: boolean
    asal_klub_nasional: string
    mantan_pelatnas: boolean
    tahun_pelatnas: number
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user_akun?: MUserCreateNestedOneWithoutPelatih_profileInput
    provinsi: MProvinsiCreateNestedOneWithoutCoachsInput
    creator: MUserCreateNestedOneWithoutCreated_pelatihhsInput
    deleter?: MUserCreateNestedOneWithoutDeleted_pelatihhsInput
  }

  export type MPelatihUncheckedCreateWithoutUpdaterInput = {
    uid_pelatih: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    tahun_bergabung: number
    pernah_melatih_sebelumnya: boolean
    klub_negara_sebelumnya: string
    mantan_atlet_nasional: boolean
    asal_klub_nasional: string
    mantan_pelatnas: boolean
    tahun_pelatnas: number
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    uid_provinsi: string
    created_by_uid: string
    deleted_by_uid?: string | null
    user_akun?: MUserUncheckedCreateNestedOneWithoutPelatih_profileInput
  }

  export type MPelatihCreateOrConnectWithoutUpdaterInput = {
    where: MPelatihWhereUniqueInput
    create: XOR<MPelatihCreateWithoutUpdaterInput, MPelatihUncheckedCreateWithoutUpdaterInput>
  }

  export type MPelatihCreateManyUpdaterInputEnvelope = {
    data: MPelatihCreateManyUpdaterInput | MPelatihCreateManyUpdaterInput[]
    skipDuplicates?: boolean
  }

  export type MPelatihCreateWithoutDeleterInput = {
    uid_pelatih: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    tahun_bergabung: number
    pernah_melatih_sebelumnya: boolean
    klub_negara_sebelumnya: string
    mantan_atlet_nasional: boolean
    asal_klub_nasional: string
    mantan_pelatnas: boolean
    tahun_pelatnas: number
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user_akun?: MUserCreateNestedOneWithoutPelatih_profileInput
    provinsi: MProvinsiCreateNestedOneWithoutCoachsInput
    creator: MUserCreateNestedOneWithoutCreated_pelatihhsInput
    updater: MUserCreateNestedOneWithoutUpdated_pelatihhsInput
  }

  export type MPelatihUncheckedCreateWithoutDeleterInput = {
    uid_pelatih: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    tahun_bergabung: number
    pernah_melatih_sebelumnya: boolean
    klub_negara_sebelumnya: string
    mantan_atlet_nasional: boolean
    asal_klub_nasional: string
    mantan_pelatnas: boolean
    tahun_pelatnas: number
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    uid_provinsi: string
    created_by_uid: string
    updated_by_uid: string
    user_akun?: MUserUncheckedCreateNestedOneWithoutPelatih_profileInput
  }

  export type MPelatihCreateOrConnectWithoutDeleterInput = {
    where: MPelatihWhereUniqueInput
    create: XOR<MPelatihCreateWithoutDeleterInput, MPelatihUncheckedCreateWithoutDeleterInput>
  }

  export type MPelatihCreateManyDeleterInputEnvelope = {
    data: MPelatihCreateManyDeleterInput | MPelatihCreateManyDeleterInput[]
    skipDuplicates?: boolean
  }

  export type MProvinsiCreateWithoutCreatorInput = {
    uid_provinsi: string
    nama_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    updater: MUserCreateNestedOneWithoutUpdated_provinsisInput
    deleter?: MUserCreateNestedOneWithoutDeleted_provinsisInput
    atlets?: MAtletCreateNestedManyWithoutProvinsiInput
    coachs?: MPelatihCreateNestedManyWithoutProvinsiInput
  }

  export type MProvinsiUncheckedCreateWithoutCreatorInput = {
    uid_provinsi: string
    nama_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    updated_by_uid: string
    deleted_by_uid?: string | null
    atlets?: MAtletUncheckedCreateNestedManyWithoutProvinsiInput
    coachs?: MPelatihUncheckedCreateNestedManyWithoutProvinsiInput
  }

  export type MProvinsiCreateOrConnectWithoutCreatorInput = {
    where: MProvinsiWhereUniqueInput
    create: XOR<MProvinsiCreateWithoutCreatorInput, MProvinsiUncheckedCreateWithoutCreatorInput>
  }

  export type MProvinsiCreateManyCreatorInputEnvelope = {
    data: MProvinsiCreateManyCreatorInput | MProvinsiCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type MProvinsiCreateWithoutUpdaterInput = {
    uid_provinsi: string
    nama_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    creator: MUserCreateNestedOneWithoutCreated_provinsisInput
    deleter?: MUserCreateNestedOneWithoutDeleted_provinsisInput
    atlets?: MAtletCreateNestedManyWithoutProvinsiInput
    coachs?: MPelatihCreateNestedManyWithoutProvinsiInput
  }

  export type MProvinsiUncheckedCreateWithoutUpdaterInput = {
    uid_provinsi: string
    nama_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid: string
    deleted_by_uid?: string | null
    atlets?: MAtletUncheckedCreateNestedManyWithoutProvinsiInput
    coachs?: MPelatihUncheckedCreateNestedManyWithoutProvinsiInput
  }

  export type MProvinsiCreateOrConnectWithoutUpdaterInput = {
    where: MProvinsiWhereUniqueInput
    create: XOR<MProvinsiCreateWithoutUpdaterInput, MProvinsiUncheckedCreateWithoutUpdaterInput>
  }

  export type MProvinsiCreateManyUpdaterInputEnvelope = {
    data: MProvinsiCreateManyUpdaterInput | MProvinsiCreateManyUpdaterInput[]
    skipDuplicates?: boolean
  }

  export type MProvinsiCreateWithoutDeleterInput = {
    uid_provinsi: string
    nama_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    creator: MUserCreateNestedOneWithoutCreated_provinsisInput
    updater: MUserCreateNestedOneWithoutUpdated_provinsisInput
    atlets?: MAtletCreateNestedManyWithoutProvinsiInput
    coachs?: MPelatihCreateNestedManyWithoutProvinsiInput
  }

  export type MProvinsiUncheckedCreateWithoutDeleterInput = {
    uid_provinsi: string
    nama_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid: string
    updated_by_uid: string
    atlets?: MAtletUncheckedCreateNestedManyWithoutProvinsiInput
    coachs?: MPelatihUncheckedCreateNestedManyWithoutProvinsiInput
  }

  export type MProvinsiCreateOrConnectWithoutDeleterInput = {
    where: MProvinsiWhereUniqueInput
    create: XOR<MProvinsiCreateWithoutDeleterInput, MProvinsiUncheckedCreateWithoutDeleterInput>
  }

  export type MProvinsiCreateManyDeleterInputEnvelope = {
    data: MProvinsiCreateManyDeleterInput | MProvinsiCreateManyDeleterInput[]
    skipDuplicates?: boolean
  }

  export type MAtletUpsertWithoutUser_akunInput = {
    update: XOR<MAtletUpdateWithoutUser_akunInput, MAtletUncheckedUpdateWithoutUser_akunInput>
    create: XOR<MAtletCreateWithoutUser_akunInput, MAtletUncheckedCreateWithoutUser_akunInput>
    where?: MAtletWhereInput
  }

  export type MAtletUpdateToOneWithWhereWithoutUser_akunInput = {
    where?: MAtletWhereInput
    data: XOR<MAtletUpdateWithoutUser_akunInput, MAtletUncheckedUpdateWithoutUser_akunInput>
  }

  export type MAtletUpdateWithoutUser_akunInput = {
    uid_atlet?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    id_pbsi?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    nama_ayah?: StringFieldUpdateOperationsInput | string
    nama_ibu?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFieldUpdateOperationsInput | $Enums.PeganganRaket
    tinggi_badan?: IntFieldUpdateOperationsInput | number
    berat_badan?: IntFieldUpdateOperationsInput | number
    status_atlet?: EnumStatusAtletFieldUpdateOperationsInput | $Enums.StatusAtlet
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provinsi?: MProvinsiUpdateOneRequiredWithoutAtletsNestedInput
    creator?: MUserUpdateOneRequiredWithoutCreated_atletsNestedInput
    updater?: MUserUpdateOneRequiredWithoutUpdated_atletsNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_atletsNestedInput
  }

  export type MAtletUncheckedUpdateWithoutUser_akunInput = {
    uid_atlet?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    id_pbsi?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    nama_ayah?: StringFieldUpdateOperationsInput | string
    nama_ibu?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFieldUpdateOperationsInput | $Enums.PeganganRaket
    tinggi_badan?: IntFieldUpdateOperationsInput | number
    berat_badan?: IntFieldUpdateOperationsInput | number
    status_atlet?: EnumStatusAtletFieldUpdateOperationsInput | $Enums.StatusAtlet
    foto?: StringFieldUpdateOperationsInput | string
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MPelatihUpsertWithoutUser_akunInput = {
    update: XOR<MPelatihUpdateWithoutUser_akunInput, MPelatihUncheckedUpdateWithoutUser_akunInput>
    create: XOR<MPelatihCreateWithoutUser_akunInput, MPelatihUncheckedCreateWithoutUser_akunInput>
    where?: MPelatihWhereInput
  }

  export type MPelatihUpdateToOneWithWhereWithoutUser_akunInput = {
    where?: MPelatihWhereInput
    data: XOR<MPelatihUpdateWithoutUser_akunInput, MPelatihUncheckedUpdateWithoutUser_akunInput>
  }

  export type MPelatihUpdateWithoutUser_akunInput = {
    uid_pelatih?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun_bergabung?: IntFieldUpdateOperationsInput | number
    pernah_melatih_sebelumnya?: BoolFieldUpdateOperationsInput | boolean
    klub_negara_sebelumnya?: StringFieldUpdateOperationsInput | string
    mantan_atlet_nasional?: BoolFieldUpdateOperationsInput | boolean
    asal_klub_nasional?: StringFieldUpdateOperationsInput | string
    mantan_pelatnas?: BoolFieldUpdateOperationsInput | boolean
    tahun_pelatnas?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provinsi?: MProvinsiUpdateOneRequiredWithoutCoachsNestedInput
    creator?: MUserUpdateOneRequiredWithoutCreated_pelatihhsNestedInput
    updater?: MUserUpdateOneRequiredWithoutUpdated_pelatihhsNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_pelatihhsNestedInput
  }

  export type MPelatihUncheckedUpdateWithoutUser_akunInput = {
    uid_pelatih?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun_bergabung?: IntFieldUpdateOperationsInput | number
    pernah_melatih_sebelumnya?: BoolFieldUpdateOperationsInput | boolean
    klub_negara_sebelumnya?: StringFieldUpdateOperationsInput | string
    mantan_atlet_nasional?: BoolFieldUpdateOperationsInput | boolean
    asal_klub_nasional?: StringFieldUpdateOperationsInput | string
    mantan_pelatnas?: BoolFieldUpdateOperationsInput | boolean
    tahun_pelatnas?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    created_by_uid?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MUserUpsertWithoutCreated_usersInput = {
    update: XOR<MUserUpdateWithoutCreated_usersInput, MUserUncheckedUpdateWithoutCreated_usersInput>
    create: XOR<MUserCreateWithoutCreated_usersInput, MUserUncheckedCreateWithoutCreated_usersInput>
    where?: MUserWhereInput
  }

  export type MUserUpdateToOneWithWhereWithoutCreated_usersInput = {
    where?: MUserWhereInput
    data: XOR<MUserUpdateWithoutCreated_usersInput, MUserUncheckedUpdateWithoutCreated_usersInput>
  }

  export type MUserUpdateWithoutCreated_usersInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atlet_profile?: MAtletUpdateOneWithoutUser_akunNestedInput
    pelatih_profile?: MPelatihUpdateOneWithoutUser_akunNestedInput
    creator?: MUserUpdateOneWithoutCreated_usersNestedInput
    updater?: MUserUpdateOneWithoutUpdated_usersNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_usersNestedInput
    updated_users?: MUserUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUncheckedUpdateWithoutCreated_usersInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    updated_users?: MUserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUncheckedUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUncheckedUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUncheckedUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUncheckedUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUncheckedUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUncheckedUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUncheckedUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUpsertWithoutUpdated_usersInput = {
    update: XOR<MUserUpdateWithoutUpdated_usersInput, MUserUncheckedUpdateWithoutUpdated_usersInput>
    create: XOR<MUserCreateWithoutUpdated_usersInput, MUserUncheckedCreateWithoutUpdated_usersInput>
    where?: MUserWhereInput
  }

  export type MUserUpdateToOneWithWhereWithoutUpdated_usersInput = {
    where?: MUserWhereInput
    data: XOR<MUserUpdateWithoutUpdated_usersInput, MUserUncheckedUpdateWithoutUpdated_usersInput>
  }

  export type MUserUpdateWithoutUpdated_usersInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atlet_profile?: MAtletUpdateOneWithoutUser_akunNestedInput
    pelatih_profile?: MPelatihUpdateOneWithoutUser_akunNestedInput
    creator?: MUserUpdateOneWithoutCreated_usersNestedInput
    updater?: MUserUpdateOneWithoutUpdated_usersNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_usersNestedInput
    created_users?: MUserUpdateManyWithoutCreatorNestedInput
    deleted_users?: MUserUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUncheckedUpdateWithoutUpdated_usersInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    created_users?: MUserUncheckedUpdateManyWithoutCreatorNestedInput
    deleted_users?: MUserUncheckedUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUncheckedUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUncheckedUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUncheckedUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUncheckedUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUncheckedUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUncheckedUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUpsertWithoutDeleted_usersInput = {
    update: XOR<MUserUpdateWithoutDeleted_usersInput, MUserUncheckedUpdateWithoutDeleted_usersInput>
    create: XOR<MUserCreateWithoutDeleted_usersInput, MUserUncheckedCreateWithoutDeleted_usersInput>
    where?: MUserWhereInput
  }

  export type MUserUpdateToOneWithWhereWithoutDeleted_usersInput = {
    where?: MUserWhereInput
    data: XOR<MUserUpdateWithoutDeleted_usersInput, MUserUncheckedUpdateWithoutDeleted_usersInput>
  }

  export type MUserUpdateWithoutDeleted_usersInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atlet_profile?: MAtletUpdateOneWithoutUser_akunNestedInput
    pelatih_profile?: MPelatihUpdateOneWithoutUser_akunNestedInput
    creator?: MUserUpdateOneWithoutCreated_usersNestedInput
    updater?: MUserUpdateOneWithoutUpdated_usersNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_usersNestedInput
    created_users?: MUserUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUpdateManyWithoutUpdaterNestedInput
    created_atlets?: MAtletUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUncheckedUpdateWithoutDeleted_usersInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    created_users?: MUserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUncheckedUpdateManyWithoutUpdaterNestedInput
    created_atlets?: MAtletUncheckedUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUncheckedUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUncheckedUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUncheckedUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUncheckedUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUncheckedUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUpsertWithWhereUniqueWithoutCreatorInput = {
    where: MUserWhereUniqueInput
    update: XOR<MUserUpdateWithoutCreatorInput, MUserUncheckedUpdateWithoutCreatorInput>
    create: XOR<MUserCreateWithoutCreatorInput, MUserUncheckedCreateWithoutCreatorInput>
  }

  export type MUserUpdateWithWhereUniqueWithoutCreatorInput = {
    where: MUserWhereUniqueInput
    data: XOR<MUserUpdateWithoutCreatorInput, MUserUncheckedUpdateWithoutCreatorInput>
  }

  export type MUserUpdateManyWithWhereWithoutCreatorInput = {
    where: MUserScalarWhereInput
    data: XOR<MUserUpdateManyMutationInput, MUserUncheckedUpdateManyWithoutCreatorInput>
  }

  export type MUserScalarWhereInput = {
    AND?: MUserScalarWhereInput | MUserScalarWhereInput[]
    OR?: MUserScalarWhereInput[]
    NOT?: MUserScalarWhereInput | MUserScalarWhereInput[]
    uid_user?: StringFilter<"MUser"> | string
    username?: StringFilter<"MUser"> | string
    password?: StringFilter<"MUser"> | string
    role?: EnumRoleUserFilter<"MUser"> | $Enums.RoleUser
    uid_atlet?: StringNullableFilter<"MUser"> | string | null
    uid_pelatih?: StringNullableFilter<"MUser"> | string | null
    created_at?: DateTimeFilter<"MUser"> | Date | string
    updated_at?: DateTimeFilter<"MUser"> | Date | string
    deleted_at?: DateTimeNullableFilter<"MUser"> | Date | string | null
    created_by_uid?: StringNullableFilter<"MUser"> | string | null
    updated_by_uid?: StringNullableFilter<"MUser"> | string | null
    deleted_by_uid?: StringNullableFilter<"MUser"> | string | null
  }

  export type MUserUpsertWithWhereUniqueWithoutUpdaterInput = {
    where: MUserWhereUniqueInput
    update: XOR<MUserUpdateWithoutUpdaterInput, MUserUncheckedUpdateWithoutUpdaterInput>
    create: XOR<MUserCreateWithoutUpdaterInput, MUserUncheckedCreateWithoutUpdaterInput>
  }

  export type MUserUpdateWithWhereUniqueWithoutUpdaterInput = {
    where: MUserWhereUniqueInput
    data: XOR<MUserUpdateWithoutUpdaterInput, MUserUncheckedUpdateWithoutUpdaterInput>
  }

  export type MUserUpdateManyWithWhereWithoutUpdaterInput = {
    where: MUserScalarWhereInput
    data: XOR<MUserUpdateManyMutationInput, MUserUncheckedUpdateManyWithoutUpdaterInput>
  }

  export type MUserUpsertWithWhereUniqueWithoutDeleterInput = {
    where: MUserWhereUniqueInput
    update: XOR<MUserUpdateWithoutDeleterInput, MUserUncheckedUpdateWithoutDeleterInput>
    create: XOR<MUserCreateWithoutDeleterInput, MUserUncheckedCreateWithoutDeleterInput>
  }

  export type MUserUpdateWithWhereUniqueWithoutDeleterInput = {
    where: MUserWhereUniqueInput
    data: XOR<MUserUpdateWithoutDeleterInput, MUserUncheckedUpdateWithoutDeleterInput>
  }

  export type MUserUpdateManyWithWhereWithoutDeleterInput = {
    where: MUserScalarWhereInput
    data: XOR<MUserUpdateManyMutationInput, MUserUncheckedUpdateManyWithoutDeleterInput>
  }

  export type MAtletUpsertWithWhereUniqueWithoutCreatorInput = {
    where: MAtletWhereUniqueInput
    update: XOR<MAtletUpdateWithoutCreatorInput, MAtletUncheckedUpdateWithoutCreatorInput>
    create: XOR<MAtletCreateWithoutCreatorInput, MAtletUncheckedCreateWithoutCreatorInput>
  }

  export type MAtletUpdateWithWhereUniqueWithoutCreatorInput = {
    where: MAtletWhereUniqueInput
    data: XOR<MAtletUpdateWithoutCreatorInput, MAtletUncheckedUpdateWithoutCreatorInput>
  }

  export type MAtletUpdateManyWithWhereWithoutCreatorInput = {
    where: MAtletScalarWhereInput
    data: XOR<MAtletUpdateManyMutationInput, MAtletUncheckedUpdateManyWithoutCreatorInput>
  }

  export type MAtletScalarWhereInput = {
    AND?: MAtletScalarWhereInput | MAtletScalarWhereInput[]
    OR?: MAtletScalarWhereInput[]
    NOT?: MAtletScalarWhereInput | MAtletScalarWhereInput[]
    uid_atlet?: StringFilter<"MAtlet"> | string
    nik?: StringFilter<"MAtlet"> | string
    id_pbsi?: StringFilter<"MAtlet"> | string
    nama_lengkap?: StringFilter<"MAtlet"> | string
    nama_ayah?: StringFilter<"MAtlet"> | string
    nama_ibu?: StringFilter<"MAtlet"> | string
    tempat_lahir?: StringFilter<"MAtlet"> | string
    tanggal_lahir?: DateTimeFilter<"MAtlet"> | Date | string
    alamat?: StringFilter<"MAtlet"> | string
    jenis_kelamin?: EnumJenisKelaminFilter<"MAtlet"> | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFilter<"MAtlet"> | $Enums.PeganganRaket
    tinggi_badan?: IntFilter<"MAtlet"> | number
    berat_badan?: IntFilter<"MAtlet"> | number
    status_atlet?: EnumStatusAtletFilter<"MAtlet"> | $Enums.StatusAtlet
    foto?: StringFilter<"MAtlet"> | string
    uid_provinsi?: StringFilter<"MAtlet"> | string
    created_at?: DateTimeFilter<"MAtlet"> | Date | string
    updated_at?: DateTimeFilter<"MAtlet"> | Date | string
    deleted_at?: DateTimeNullableFilter<"MAtlet"> | Date | string | null
    created_by_uid?: StringFilter<"MAtlet"> | string
    updated_by_uid?: StringFilter<"MAtlet"> | string
    deleted_by_uid?: StringNullableFilter<"MAtlet"> | string | null
  }

  export type MAtletUpsertWithWhereUniqueWithoutUpdaterInput = {
    where: MAtletWhereUniqueInput
    update: XOR<MAtletUpdateWithoutUpdaterInput, MAtletUncheckedUpdateWithoutUpdaterInput>
    create: XOR<MAtletCreateWithoutUpdaterInput, MAtletUncheckedCreateWithoutUpdaterInput>
  }

  export type MAtletUpdateWithWhereUniqueWithoutUpdaterInput = {
    where: MAtletWhereUniqueInput
    data: XOR<MAtletUpdateWithoutUpdaterInput, MAtletUncheckedUpdateWithoutUpdaterInput>
  }

  export type MAtletUpdateManyWithWhereWithoutUpdaterInput = {
    where: MAtletScalarWhereInput
    data: XOR<MAtletUpdateManyMutationInput, MAtletUncheckedUpdateManyWithoutUpdaterInput>
  }

  export type MAtletUpsertWithWhereUniqueWithoutDeleterInput = {
    where: MAtletWhereUniqueInput
    update: XOR<MAtletUpdateWithoutDeleterInput, MAtletUncheckedUpdateWithoutDeleterInput>
    create: XOR<MAtletCreateWithoutDeleterInput, MAtletUncheckedCreateWithoutDeleterInput>
  }

  export type MAtletUpdateWithWhereUniqueWithoutDeleterInput = {
    where: MAtletWhereUniqueInput
    data: XOR<MAtletUpdateWithoutDeleterInput, MAtletUncheckedUpdateWithoutDeleterInput>
  }

  export type MAtletUpdateManyWithWhereWithoutDeleterInput = {
    where: MAtletScalarWhereInput
    data: XOR<MAtletUpdateManyMutationInput, MAtletUncheckedUpdateManyWithoutDeleterInput>
  }

  export type MPelatihUpsertWithWhereUniqueWithoutCreatorInput = {
    where: MPelatihWhereUniqueInput
    update: XOR<MPelatihUpdateWithoutCreatorInput, MPelatihUncheckedUpdateWithoutCreatorInput>
    create: XOR<MPelatihCreateWithoutCreatorInput, MPelatihUncheckedCreateWithoutCreatorInput>
  }

  export type MPelatihUpdateWithWhereUniqueWithoutCreatorInput = {
    where: MPelatihWhereUniqueInput
    data: XOR<MPelatihUpdateWithoutCreatorInput, MPelatihUncheckedUpdateWithoutCreatorInput>
  }

  export type MPelatihUpdateManyWithWhereWithoutCreatorInput = {
    where: MPelatihScalarWhereInput
    data: XOR<MPelatihUpdateManyMutationInput, MPelatihUncheckedUpdateManyWithoutCreatorInput>
  }

  export type MPelatihScalarWhereInput = {
    AND?: MPelatihScalarWhereInput | MPelatihScalarWhereInput[]
    OR?: MPelatihScalarWhereInput[]
    NOT?: MPelatihScalarWhereInput | MPelatihScalarWhereInput[]
    uid_pelatih?: StringFilter<"MPelatih"> | string
    nik?: StringFilter<"MPelatih"> | string
    nama_lengkap?: StringFilter<"MPelatih"> | string
    jenis_kelamin?: EnumJenisKelaminFilter<"MPelatih"> | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFilter<"MPelatih"> | Date | string
    tahun_bergabung?: IntFilter<"MPelatih"> | number
    pernah_melatih_sebelumnya?: BoolFilter<"MPelatih"> | boolean
    klub_negara_sebelumnya?: StringFilter<"MPelatih"> | string
    mantan_atlet_nasional?: BoolFilter<"MPelatih"> | boolean
    asal_klub_nasional?: StringFilter<"MPelatih"> | string
    mantan_pelatnas?: BoolFilter<"MPelatih"> | boolean
    tahun_pelatnas?: IntFilter<"MPelatih"> | number
    foto?: StringFilter<"MPelatih"> | string
    created_at?: DateTimeFilter<"MPelatih"> | Date | string
    updated_at?: DateTimeFilter<"MPelatih"> | Date | string
    deleted_at?: DateTimeNullableFilter<"MPelatih"> | Date | string | null
    uid_provinsi?: StringFilter<"MPelatih"> | string
    created_by_uid?: StringFilter<"MPelatih"> | string
    updated_by_uid?: StringFilter<"MPelatih"> | string
    deleted_by_uid?: StringNullableFilter<"MPelatih"> | string | null
  }

  export type MPelatihUpsertWithWhereUniqueWithoutUpdaterInput = {
    where: MPelatihWhereUniqueInput
    update: XOR<MPelatihUpdateWithoutUpdaterInput, MPelatihUncheckedUpdateWithoutUpdaterInput>
    create: XOR<MPelatihCreateWithoutUpdaterInput, MPelatihUncheckedCreateWithoutUpdaterInput>
  }

  export type MPelatihUpdateWithWhereUniqueWithoutUpdaterInput = {
    where: MPelatihWhereUniqueInput
    data: XOR<MPelatihUpdateWithoutUpdaterInput, MPelatihUncheckedUpdateWithoutUpdaterInput>
  }

  export type MPelatihUpdateManyWithWhereWithoutUpdaterInput = {
    where: MPelatihScalarWhereInput
    data: XOR<MPelatihUpdateManyMutationInput, MPelatihUncheckedUpdateManyWithoutUpdaterInput>
  }

  export type MPelatihUpsertWithWhereUniqueWithoutDeleterInput = {
    where: MPelatihWhereUniqueInput
    update: XOR<MPelatihUpdateWithoutDeleterInput, MPelatihUncheckedUpdateWithoutDeleterInput>
    create: XOR<MPelatihCreateWithoutDeleterInput, MPelatihUncheckedCreateWithoutDeleterInput>
  }

  export type MPelatihUpdateWithWhereUniqueWithoutDeleterInput = {
    where: MPelatihWhereUniqueInput
    data: XOR<MPelatihUpdateWithoutDeleterInput, MPelatihUncheckedUpdateWithoutDeleterInput>
  }

  export type MPelatihUpdateManyWithWhereWithoutDeleterInput = {
    where: MPelatihScalarWhereInput
    data: XOR<MPelatihUpdateManyMutationInput, MPelatihUncheckedUpdateManyWithoutDeleterInput>
  }

  export type MProvinsiUpsertWithWhereUniqueWithoutCreatorInput = {
    where: MProvinsiWhereUniqueInput
    update: XOR<MProvinsiUpdateWithoutCreatorInput, MProvinsiUncheckedUpdateWithoutCreatorInput>
    create: XOR<MProvinsiCreateWithoutCreatorInput, MProvinsiUncheckedCreateWithoutCreatorInput>
  }

  export type MProvinsiUpdateWithWhereUniqueWithoutCreatorInput = {
    where: MProvinsiWhereUniqueInput
    data: XOR<MProvinsiUpdateWithoutCreatorInput, MProvinsiUncheckedUpdateWithoutCreatorInput>
  }

  export type MProvinsiUpdateManyWithWhereWithoutCreatorInput = {
    where: MProvinsiScalarWhereInput
    data: XOR<MProvinsiUpdateManyMutationInput, MProvinsiUncheckedUpdateManyWithoutCreatorInput>
  }

  export type MProvinsiScalarWhereInput = {
    AND?: MProvinsiScalarWhereInput | MProvinsiScalarWhereInput[]
    OR?: MProvinsiScalarWhereInput[]
    NOT?: MProvinsiScalarWhereInput | MProvinsiScalarWhereInput[]
    uid_provinsi?: StringFilter<"MProvinsi"> | string
    nama_provinsi?: StringFilter<"MProvinsi"> | string
    created_at?: DateTimeFilter<"MProvinsi"> | Date | string
    updated_at?: DateTimeFilter<"MProvinsi"> | Date | string
    deleted_at?: DateTimeNullableFilter<"MProvinsi"> | Date | string | null
    created_by_uid?: StringFilter<"MProvinsi"> | string
    updated_by_uid?: StringFilter<"MProvinsi"> | string
    deleted_by_uid?: StringNullableFilter<"MProvinsi"> | string | null
  }

  export type MProvinsiUpsertWithWhereUniqueWithoutUpdaterInput = {
    where: MProvinsiWhereUniqueInput
    update: XOR<MProvinsiUpdateWithoutUpdaterInput, MProvinsiUncheckedUpdateWithoutUpdaterInput>
    create: XOR<MProvinsiCreateWithoutUpdaterInput, MProvinsiUncheckedCreateWithoutUpdaterInput>
  }

  export type MProvinsiUpdateWithWhereUniqueWithoutUpdaterInput = {
    where: MProvinsiWhereUniqueInput
    data: XOR<MProvinsiUpdateWithoutUpdaterInput, MProvinsiUncheckedUpdateWithoutUpdaterInput>
  }

  export type MProvinsiUpdateManyWithWhereWithoutUpdaterInput = {
    where: MProvinsiScalarWhereInput
    data: XOR<MProvinsiUpdateManyMutationInput, MProvinsiUncheckedUpdateManyWithoutUpdaterInput>
  }

  export type MProvinsiUpsertWithWhereUniqueWithoutDeleterInput = {
    where: MProvinsiWhereUniqueInput
    update: XOR<MProvinsiUpdateWithoutDeleterInput, MProvinsiUncheckedUpdateWithoutDeleterInput>
    create: XOR<MProvinsiCreateWithoutDeleterInput, MProvinsiUncheckedCreateWithoutDeleterInput>
  }

  export type MProvinsiUpdateWithWhereUniqueWithoutDeleterInput = {
    where: MProvinsiWhereUniqueInput
    data: XOR<MProvinsiUpdateWithoutDeleterInput, MProvinsiUncheckedUpdateWithoutDeleterInput>
  }

  export type MProvinsiUpdateManyWithWhereWithoutDeleterInput = {
    where: MProvinsiScalarWhereInput
    data: XOR<MProvinsiUpdateManyMutationInput, MProvinsiUncheckedUpdateManyWithoutDeleterInput>
  }

  export type MUserCreateWithoutAtlet_profileInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    pelatih_profile?: MPelatihCreateNestedOneWithoutUser_akunInput
    creator?: MUserCreateNestedOneWithoutCreated_usersInput
    updater?: MUserCreateNestedOneWithoutUpdated_usersInput
    deleter?: MUserCreateNestedOneWithoutDeleted_usersInput
    created_users?: MUserCreateNestedManyWithoutCreatorInput
    updated_users?: MUserCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiCreateNestedManyWithoutDeleterInput
  }

  export type MUserUncheckedCreateWithoutAtlet_profileInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid?: string | null
    updated_by_uid?: string | null
    deleted_by_uid?: string | null
    created_users?: MUserUncheckedCreateNestedManyWithoutCreatorInput
    updated_users?: MUserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserUncheckedCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletUncheckedCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletUncheckedCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutDeleterInput
  }

  export type MUserCreateOrConnectWithoutAtlet_profileInput = {
    where: MUserWhereUniqueInput
    create: XOR<MUserCreateWithoutAtlet_profileInput, MUserUncheckedCreateWithoutAtlet_profileInput>
  }

  export type MProvinsiCreateWithoutAtletsInput = {
    uid_provinsi: string
    nama_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    creator: MUserCreateNestedOneWithoutCreated_provinsisInput
    updater: MUserCreateNestedOneWithoutUpdated_provinsisInput
    deleter?: MUserCreateNestedOneWithoutDeleted_provinsisInput
    coachs?: MPelatihCreateNestedManyWithoutProvinsiInput
  }

  export type MProvinsiUncheckedCreateWithoutAtletsInput = {
    uid_provinsi: string
    nama_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid: string
    updated_by_uid: string
    deleted_by_uid?: string | null
    coachs?: MPelatihUncheckedCreateNestedManyWithoutProvinsiInput
  }

  export type MProvinsiCreateOrConnectWithoutAtletsInput = {
    where: MProvinsiWhereUniqueInput
    create: XOR<MProvinsiCreateWithoutAtletsInput, MProvinsiUncheckedCreateWithoutAtletsInput>
  }

  export type MUserCreateWithoutCreated_atletsInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atlet_profile?: MAtletCreateNestedOneWithoutUser_akunInput
    pelatih_profile?: MPelatihCreateNestedOneWithoutUser_akunInput
    creator?: MUserCreateNestedOneWithoutCreated_usersInput
    updater?: MUserCreateNestedOneWithoutUpdated_usersInput
    deleter?: MUserCreateNestedOneWithoutDeleted_usersInput
    created_users?: MUserCreateNestedManyWithoutCreatorInput
    updated_users?: MUserCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserCreateNestedManyWithoutDeleterInput
    updated_atlets?: MAtletCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiCreateNestedManyWithoutDeleterInput
  }

  export type MUserUncheckedCreateWithoutCreated_atletsInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid?: string | null
    updated_by_uid?: string | null
    deleted_by_uid?: string | null
    created_users?: MUserUncheckedCreateNestedManyWithoutCreatorInput
    updated_users?: MUserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserUncheckedCreateNestedManyWithoutDeleterInput
    updated_atlets?: MAtletUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletUncheckedCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutDeleterInput
  }

  export type MUserCreateOrConnectWithoutCreated_atletsInput = {
    where: MUserWhereUniqueInput
    create: XOR<MUserCreateWithoutCreated_atletsInput, MUserUncheckedCreateWithoutCreated_atletsInput>
  }

  export type MUserCreateWithoutUpdated_atletsInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atlet_profile?: MAtletCreateNestedOneWithoutUser_akunInput
    pelatih_profile?: MPelatihCreateNestedOneWithoutUser_akunInput
    creator?: MUserCreateNestedOneWithoutCreated_usersInput
    updater?: MUserCreateNestedOneWithoutUpdated_usersInput
    deleter?: MUserCreateNestedOneWithoutDeleted_usersInput
    created_users?: MUserCreateNestedManyWithoutCreatorInput
    updated_users?: MUserCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletCreateNestedManyWithoutCreatorInput
    deleted_atlets?: MAtletCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiCreateNestedManyWithoutDeleterInput
  }

  export type MUserUncheckedCreateWithoutUpdated_atletsInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid?: string | null
    updated_by_uid?: string | null
    deleted_by_uid?: string | null
    created_users?: MUserUncheckedCreateNestedManyWithoutCreatorInput
    updated_users?: MUserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserUncheckedCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletUncheckedCreateNestedManyWithoutCreatorInput
    deleted_atlets?: MAtletUncheckedCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutDeleterInput
  }

  export type MUserCreateOrConnectWithoutUpdated_atletsInput = {
    where: MUserWhereUniqueInput
    create: XOR<MUserCreateWithoutUpdated_atletsInput, MUserUncheckedCreateWithoutUpdated_atletsInput>
  }

  export type MUserCreateWithoutDeleted_atletsInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atlet_profile?: MAtletCreateNestedOneWithoutUser_akunInput
    pelatih_profile?: MPelatihCreateNestedOneWithoutUser_akunInput
    creator?: MUserCreateNestedOneWithoutCreated_usersInput
    updater?: MUserCreateNestedOneWithoutUpdated_usersInput
    deleter?: MUserCreateNestedOneWithoutDeleted_usersInput
    created_users?: MUserCreateNestedManyWithoutCreatorInput
    updated_users?: MUserCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletCreateNestedManyWithoutUpdaterInput
    created_pelatihhs?: MPelatihCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiCreateNestedManyWithoutDeleterInput
  }

  export type MUserUncheckedCreateWithoutDeleted_atletsInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid?: string | null
    updated_by_uid?: string | null
    deleted_by_uid?: string | null
    created_users?: MUserUncheckedCreateNestedManyWithoutCreatorInput
    updated_users?: MUserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserUncheckedCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletUncheckedCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletUncheckedCreateNestedManyWithoutUpdaterInput
    created_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutDeleterInput
  }

  export type MUserCreateOrConnectWithoutDeleted_atletsInput = {
    where: MUserWhereUniqueInput
    create: XOR<MUserCreateWithoutDeleted_atletsInput, MUserUncheckedCreateWithoutDeleted_atletsInput>
  }

  export type MUserUpsertWithoutAtlet_profileInput = {
    update: XOR<MUserUpdateWithoutAtlet_profileInput, MUserUncheckedUpdateWithoutAtlet_profileInput>
    create: XOR<MUserCreateWithoutAtlet_profileInput, MUserUncheckedCreateWithoutAtlet_profileInput>
    where?: MUserWhereInput
  }

  export type MUserUpdateToOneWithWhereWithoutAtlet_profileInput = {
    where?: MUserWhereInput
    data: XOR<MUserUpdateWithoutAtlet_profileInput, MUserUncheckedUpdateWithoutAtlet_profileInput>
  }

  export type MUserUpdateWithoutAtlet_profileInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pelatih_profile?: MPelatihUpdateOneWithoutUser_akunNestedInput
    creator?: MUserUpdateOneWithoutCreated_usersNestedInput
    updater?: MUserUpdateOneWithoutUpdated_usersNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_usersNestedInput
    created_users?: MUserUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUncheckedUpdateWithoutAtlet_profileInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    created_users?: MUserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUncheckedUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUncheckedUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUncheckedUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUncheckedUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUncheckedUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUncheckedUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUncheckedUpdateManyWithoutDeleterNestedInput
  }

  export type MProvinsiUpsertWithoutAtletsInput = {
    update: XOR<MProvinsiUpdateWithoutAtletsInput, MProvinsiUncheckedUpdateWithoutAtletsInput>
    create: XOR<MProvinsiCreateWithoutAtletsInput, MProvinsiUncheckedCreateWithoutAtletsInput>
    where?: MProvinsiWhereInput
  }

  export type MProvinsiUpdateToOneWithWhereWithoutAtletsInput = {
    where?: MProvinsiWhereInput
    data: XOR<MProvinsiUpdateWithoutAtletsInput, MProvinsiUncheckedUpdateWithoutAtletsInput>
  }

  export type MProvinsiUpdateWithoutAtletsInput = {
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    nama_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: MUserUpdateOneRequiredWithoutCreated_provinsisNestedInput
    updater?: MUserUpdateOneRequiredWithoutUpdated_provinsisNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_provinsisNestedInput
    coachs?: MPelatihUpdateManyWithoutProvinsiNestedInput
  }

  export type MProvinsiUncheckedUpdateWithoutAtletsInput = {
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    nama_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    coachs?: MPelatihUncheckedUpdateManyWithoutProvinsiNestedInput
  }

  export type MUserUpsertWithoutCreated_atletsInput = {
    update: XOR<MUserUpdateWithoutCreated_atletsInput, MUserUncheckedUpdateWithoutCreated_atletsInput>
    create: XOR<MUserCreateWithoutCreated_atletsInput, MUserUncheckedCreateWithoutCreated_atletsInput>
    where?: MUserWhereInput
  }

  export type MUserUpdateToOneWithWhereWithoutCreated_atletsInput = {
    where?: MUserWhereInput
    data: XOR<MUserUpdateWithoutCreated_atletsInput, MUserUncheckedUpdateWithoutCreated_atletsInput>
  }

  export type MUserUpdateWithoutCreated_atletsInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atlet_profile?: MAtletUpdateOneWithoutUser_akunNestedInput
    pelatih_profile?: MPelatihUpdateOneWithoutUser_akunNestedInput
    creator?: MUserUpdateOneWithoutCreated_usersNestedInput
    updater?: MUserUpdateOneWithoutUpdated_usersNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_usersNestedInput
    created_users?: MUserUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUpdateManyWithoutDeleterNestedInput
    updated_atlets?: MAtletUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUncheckedUpdateWithoutCreated_atletsInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    created_users?: MUserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUncheckedUpdateManyWithoutDeleterNestedInput
    updated_atlets?: MAtletUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUncheckedUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUncheckedUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUncheckedUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUncheckedUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUncheckedUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUpsertWithoutUpdated_atletsInput = {
    update: XOR<MUserUpdateWithoutUpdated_atletsInput, MUserUncheckedUpdateWithoutUpdated_atletsInput>
    create: XOR<MUserCreateWithoutUpdated_atletsInput, MUserUncheckedCreateWithoutUpdated_atletsInput>
    where?: MUserWhereInput
  }

  export type MUserUpdateToOneWithWhereWithoutUpdated_atletsInput = {
    where?: MUserWhereInput
    data: XOR<MUserUpdateWithoutUpdated_atletsInput, MUserUncheckedUpdateWithoutUpdated_atletsInput>
  }

  export type MUserUpdateWithoutUpdated_atletsInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atlet_profile?: MAtletUpdateOneWithoutUser_akunNestedInput
    pelatih_profile?: MPelatihUpdateOneWithoutUser_akunNestedInput
    creator?: MUserUpdateOneWithoutCreated_usersNestedInput
    updater?: MUserUpdateOneWithoutUpdated_usersNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_usersNestedInput
    created_users?: MUserUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUpdateManyWithoutCreatorNestedInput
    deleted_atlets?: MAtletUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUncheckedUpdateWithoutUpdated_atletsInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    created_users?: MUserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUncheckedUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUncheckedUpdateManyWithoutCreatorNestedInput
    deleted_atlets?: MAtletUncheckedUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUncheckedUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUncheckedUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUncheckedUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUncheckedUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUpsertWithoutDeleted_atletsInput = {
    update: XOR<MUserUpdateWithoutDeleted_atletsInput, MUserUncheckedUpdateWithoutDeleted_atletsInput>
    create: XOR<MUserCreateWithoutDeleted_atletsInput, MUserUncheckedCreateWithoutDeleted_atletsInput>
    where?: MUserWhereInput
  }

  export type MUserUpdateToOneWithWhereWithoutDeleted_atletsInput = {
    where?: MUserWhereInput
    data: XOR<MUserUpdateWithoutDeleted_atletsInput, MUserUncheckedUpdateWithoutDeleted_atletsInput>
  }

  export type MUserUpdateWithoutDeleted_atletsInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atlet_profile?: MAtletUpdateOneWithoutUser_akunNestedInput
    pelatih_profile?: MPelatihUpdateOneWithoutUser_akunNestedInput
    creator?: MUserUpdateOneWithoutCreated_usersNestedInput
    updater?: MUserUpdateOneWithoutUpdated_usersNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_usersNestedInput
    created_users?: MUserUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUpdateManyWithoutUpdaterNestedInput
    created_pelatihhs?: MPelatihUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUncheckedUpdateWithoutDeleted_atletsInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    created_users?: MUserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUncheckedUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUncheckedUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUncheckedUpdateManyWithoutUpdaterNestedInput
    created_pelatihhs?: MPelatihUncheckedUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUncheckedUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUncheckedUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUncheckedUpdateManyWithoutDeleterNestedInput
  }

  export type MUserCreateWithoutPelatih_profileInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atlet_profile?: MAtletCreateNestedOneWithoutUser_akunInput
    creator?: MUserCreateNestedOneWithoutCreated_usersInput
    updater?: MUserCreateNestedOneWithoutUpdated_usersInput
    deleter?: MUserCreateNestedOneWithoutDeleted_usersInput
    created_users?: MUserCreateNestedManyWithoutCreatorInput
    updated_users?: MUserCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiCreateNestedManyWithoutDeleterInput
  }

  export type MUserUncheckedCreateWithoutPelatih_profileInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid?: string | null
    updated_by_uid?: string | null
    deleted_by_uid?: string | null
    created_users?: MUserUncheckedCreateNestedManyWithoutCreatorInput
    updated_users?: MUserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserUncheckedCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletUncheckedCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletUncheckedCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutDeleterInput
  }

  export type MUserCreateOrConnectWithoutPelatih_profileInput = {
    where: MUserWhereUniqueInput
    create: XOR<MUserCreateWithoutPelatih_profileInput, MUserUncheckedCreateWithoutPelatih_profileInput>
  }

  export type MProvinsiCreateWithoutCoachsInput = {
    uid_provinsi: string
    nama_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    creator: MUserCreateNestedOneWithoutCreated_provinsisInput
    updater: MUserCreateNestedOneWithoutUpdated_provinsisInput
    deleter?: MUserCreateNestedOneWithoutDeleted_provinsisInput
    atlets?: MAtletCreateNestedManyWithoutProvinsiInput
  }

  export type MProvinsiUncheckedCreateWithoutCoachsInput = {
    uid_provinsi: string
    nama_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid: string
    updated_by_uid: string
    deleted_by_uid?: string | null
    atlets?: MAtletUncheckedCreateNestedManyWithoutProvinsiInput
  }

  export type MProvinsiCreateOrConnectWithoutCoachsInput = {
    where: MProvinsiWhereUniqueInput
    create: XOR<MProvinsiCreateWithoutCoachsInput, MProvinsiUncheckedCreateWithoutCoachsInput>
  }

  export type MUserCreateWithoutCreated_pelatihhsInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atlet_profile?: MAtletCreateNestedOneWithoutUser_akunInput
    pelatih_profile?: MPelatihCreateNestedOneWithoutUser_akunInput
    creator?: MUserCreateNestedOneWithoutCreated_usersInput
    updater?: MUserCreateNestedOneWithoutUpdated_usersInput
    deleter?: MUserCreateNestedOneWithoutDeleted_usersInput
    created_users?: MUserCreateNestedManyWithoutCreatorInput
    updated_users?: MUserCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletCreateNestedManyWithoutDeleterInput
    updated_pelatihhs?: MPelatihCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiCreateNestedManyWithoutDeleterInput
  }

  export type MUserUncheckedCreateWithoutCreated_pelatihhsInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid?: string | null
    updated_by_uid?: string | null
    deleted_by_uid?: string | null
    created_users?: MUserUncheckedCreateNestedManyWithoutCreatorInput
    updated_users?: MUserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserUncheckedCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletUncheckedCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletUncheckedCreateNestedManyWithoutDeleterInput
    updated_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutDeleterInput
  }

  export type MUserCreateOrConnectWithoutCreated_pelatihhsInput = {
    where: MUserWhereUniqueInput
    create: XOR<MUserCreateWithoutCreated_pelatihhsInput, MUserUncheckedCreateWithoutCreated_pelatihhsInput>
  }

  export type MUserCreateWithoutUpdated_pelatihhsInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atlet_profile?: MAtletCreateNestedOneWithoutUser_akunInput
    pelatih_profile?: MPelatihCreateNestedOneWithoutUser_akunInput
    creator?: MUserCreateNestedOneWithoutCreated_usersInput
    updater?: MUserCreateNestedOneWithoutUpdated_usersInput
    deleter?: MUserCreateNestedOneWithoutDeleted_usersInput
    created_users?: MUserCreateNestedManyWithoutCreatorInput
    updated_users?: MUserCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihCreateNestedManyWithoutCreatorInput
    deleted_pelatihhs?: MPelatihCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiCreateNestedManyWithoutDeleterInput
  }

  export type MUserUncheckedCreateWithoutUpdated_pelatihhsInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid?: string | null
    updated_by_uid?: string | null
    deleted_by_uid?: string | null
    created_users?: MUserUncheckedCreateNestedManyWithoutCreatorInput
    updated_users?: MUserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserUncheckedCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletUncheckedCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletUncheckedCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutCreatorInput
    deleted_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutDeleterInput
  }

  export type MUserCreateOrConnectWithoutUpdated_pelatihhsInput = {
    where: MUserWhereUniqueInput
    create: XOR<MUserCreateWithoutUpdated_pelatihhsInput, MUserUncheckedCreateWithoutUpdated_pelatihhsInput>
  }

  export type MUserCreateWithoutDeleted_pelatihhsInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atlet_profile?: MAtletCreateNestedOneWithoutUser_akunInput
    pelatih_profile?: MPelatihCreateNestedOneWithoutUser_akunInput
    creator?: MUserCreateNestedOneWithoutCreated_usersInput
    updater?: MUserCreateNestedOneWithoutUpdated_usersInput
    deleter?: MUserCreateNestedOneWithoutDeleted_usersInput
    created_users?: MUserCreateNestedManyWithoutCreatorInput
    updated_users?: MUserCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihCreateNestedManyWithoutUpdaterInput
    created_provinsis?: MProvinsiCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiCreateNestedManyWithoutDeleterInput
  }

  export type MUserUncheckedCreateWithoutDeleted_pelatihhsInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid?: string | null
    updated_by_uid?: string | null
    deleted_by_uid?: string | null
    created_users?: MUserUncheckedCreateNestedManyWithoutCreatorInput
    updated_users?: MUserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserUncheckedCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletUncheckedCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletUncheckedCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutUpdaterInput
    created_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutDeleterInput
  }

  export type MUserCreateOrConnectWithoutDeleted_pelatihhsInput = {
    where: MUserWhereUniqueInput
    create: XOR<MUserCreateWithoutDeleted_pelatihhsInput, MUserUncheckedCreateWithoutDeleted_pelatihhsInput>
  }

  export type MUserUpsertWithoutPelatih_profileInput = {
    update: XOR<MUserUpdateWithoutPelatih_profileInput, MUserUncheckedUpdateWithoutPelatih_profileInput>
    create: XOR<MUserCreateWithoutPelatih_profileInput, MUserUncheckedCreateWithoutPelatih_profileInput>
    where?: MUserWhereInput
  }

  export type MUserUpdateToOneWithWhereWithoutPelatih_profileInput = {
    where?: MUserWhereInput
    data: XOR<MUserUpdateWithoutPelatih_profileInput, MUserUncheckedUpdateWithoutPelatih_profileInput>
  }

  export type MUserUpdateWithoutPelatih_profileInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atlet_profile?: MAtletUpdateOneWithoutUser_akunNestedInput
    creator?: MUserUpdateOneWithoutCreated_usersNestedInput
    updater?: MUserUpdateOneWithoutUpdated_usersNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_usersNestedInput
    created_users?: MUserUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUncheckedUpdateWithoutPelatih_profileInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    created_users?: MUserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUncheckedUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUncheckedUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUncheckedUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUncheckedUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUncheckedUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUncheckedUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUncheckedUpdateManyWithoutDeleterNestedInput
  }

  export type MProvinsiUpsertWithoutCoachsInput = {
    update: XOR<MProvinsiUpdateWithoutCoachsInput, MProvinsiUncheckedUpdateWithoutCoachsInput>
    create: XOR<MProvinsiCreateWithoutCoachsInput, MProvinsiUncheckedCreateWithoutCoachsInput>
    where?: MProvinsiWhereInput
  }

  export type MProvinsiUpdateToOneWithWhereWithoutCoachsInput = {
    where?: MProvinsiWhereInput
    data: XOR<MProvinsiUpdateWithoutCoachsInput, MProvinsiUncheckedUpdateWithoutCoachsInput>
  }

  export type MProvinsiUpdateWithoutCoachsInput = {
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    nama_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: MUserUpdateOneRequiredWithoutCreated_provinsisNestedInput
    updater?: MUserUpdateOneRequiredWithoutUpdated_provinsisNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_provinsisNestedInput
    atlets?: MAtletUpdateManyWithoutProvinsiNestedInput
  }

  export type MProvinsiUncheckedUpdateWithoutCoachsInput = {
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    nama_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    atlets?: MAtletUncheckedUpdateManyWithoutProvinsiNestedInput
  }

  export type MUserUpsertWithoutCreated_pelatihhsInput = {
    update: XOR<MUserUpdateWithoutCreated_pelatihhsInput, MUserUncheckedUpdateWithoutCreated_pelatihhsInput>
    create: XOR<MUserCreateWithoutCreated_pelatihhsInput, MUserUncheckedCreateWithoutCreated_pelatihhsInput>
    where?: MUserWhereInput
  }

  export type MUserUpdateToOneWithWhereWithoutCreated_pelatihhsInput = {
    where?: MUserWhereInput
    data: XOR<MUserUpdateWithoutCreated_pelatihhsInput, MUserUncheckedUpdateWithoutCreated_pelatihhsInput>
  }

  export type MUserUpdateWithoutCreated_pelatihhsInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atlet_profile?: MAtletUpdateOneWithoutUser_akunNestedInput
    pelatih_profile?: MPelatihUpdateOneWithoutUser_akunNestedInput
    creator?: MUserUpdateOneWithoutCreated_usersNestedInput
    updater?: MUserUpdateOneWithoutUpdated_usersNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_usersNestedInput
    created_users?: MUserUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUpdateManyWithoutDeleterNestedInput
    updated_pelatihhs?: MPelatihUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUncheckedUpdateWithoutCreated_pelatihhsInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    created_users?: MUserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUncheckedUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUncheckedUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUncheckedUpdateManyWithoutDeleterNestedInput
    updated_pelatihhs?: MPelatihUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUncheckedUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUncheckedUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUncheckedUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUpsertWithoutUpdated_pelatihhsInput = {
    update: XOR<MUserUpdateWithoutUpdated_pelatihhsInput, MUserUncheckedUpdateWithoutUpdated_pelatihhsInput>
    create: XOR<MUserCreateWithoutUpdated_pelatihhsInput, MUserUncheckedCreateWithoutUpdated_pelatihhsInput>
    where?: MUserWhereInput
  }

  export type MUserUpdateToOneWithWhereWithoutUpdated_pelatihhsInput = {
    where?: MUserWhereInput
    data: XOR<MUserUpdateWithoutUpdated_pelatihhsInput, MUserUncheckedUpdateWithoutUpdated_pelatihhsInput>
  }

  export type MUserUpdateWithoutUpdated_pelatihhsInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atlet_profile?: MAtletUpdateOneWithoutUser_akunNestedInput
    pelatih_profile?: MPelatihUpdateOneWithoutUser_akunNestedInput
    creator?: MUserUpdateOneWithoutCreated_usersNestedInput
    updater?: MUserUpdateOneWithoutUpdated_usersNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_usersNestedInput
    created_users?: MUserUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUpdateManyWithoutCreatorNestedInput
    deleted_pelatihhs?: MPelatihUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUncheckedUpdateWithoutUpdated_pelatihhsInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    created_users?: MUserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUncheckedUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUncheckedUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUncheckedUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUncheckedUpdateManyWithoutCreatorNestedInput
    deleted_pelatihhs?: MPelatihUncheckedUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUncheckedUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUncheckedUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUpsertWithoutDeleted_pelatihhsInput = {
    update: XOR<MUserUpdateWithoutDeleted_pelatihhsInput, MUserUncheckedUpdateWithoutDeleted_pelatihhsInput>
    create: XOR<MUserCreateWithoutDeleted_pelatihhsInput, MUserUncheckedCreateWithoutDeleted_pelatihhsInput>
    where?: MUserWhereInput
  }

  export type MUserUpdateToOneWithWhereWithoutDeleted_pelatihhsInput = {
    where?: MUserWhereInput
    data: XOR<MUserUpdateWithoutDeleted_pelatihhsInput, MUserUncheckedUpdateWithoutDeleted_pelatihhsInput>
  }

  export type MUserUpdateWithoutDeleted_pelatihhsInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atlet_profile?: MAtletUpdateOneWithoutUser_akunNestedInput
    pelatih_profile?: MPelatihUpdateOneWithoutUser_akunNestedInput
    creator?: MUserUpdateOneWithoutCreated_usersNestedInput
    updater?: MUserUpdateOneWithoutUpdated_usersNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_usersNestedInput
    created_users?: MUserUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUpdateManyWithoutUpdaterNestedInput
    created_provinsis?: MProvinsiUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUncheckedUpdateWithoutDeleted_pelatihhsInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    created_users?: MUserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUncheckedUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUncheckedUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUncheckedUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUncheckedUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUncheckedUpdateManyWithoutUpdaterNestedInput
    created_provinsis?: MProvinsiUncheckedUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUncheckedUpdateManyWithoutDeleterNestedInput
  }

  export type MUserCreateWithoutCreated_provinsisInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atlet_profile?: MAtletCreateNestedOneWithoutUser_akunInput
    pelatih_profile?: MPelatihCreateNestedOneWithoutUser_akunInput
    creator?: MUserCreateNestedOneWithoutCreated_usersInput
    updater?: MUserCreateNestedOneWithoutUpdated_usersInput
    deleter?: MUserCreateNestedOneWithoutDeleted_usersInput
    created_users?: MUserCreateNestedManyWithoutCreatorInput
    updated_users?: MUserCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihCreateNestedManyWithoutDeleterInput
    updated_provinsis?: MProvinsiCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiCreateNestedManyWithoutDeleterInput
  }

  export type MUserUncheckedCreateWithoutCreated_provinsisInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid?: string | null
    updated_by_uid?: string | null
    deleted_by_uid?: string | null
    created_users?: MUserUncheckedCreateNestedManyWithoutCreatorInput
    updated_users?: MUserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserUncheckedCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletUncheckedCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletUncheckedCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutDeleterInput
    updated_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutDeleterInput
  }

  export type MUserCreateOrConnectWithoutCreated_provinsisInput = {
    where: MUserWhereUniqueInput
    create: XOR<MUserCreateWithoutCreated_provinsisInput, MUserUncheckedCreateWithoutCreated_provinsisInput>
  }

  export type MUserCreateWithoutUpdated_provinsisInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atlet_profile?: MAtletCreateNestedOneWithoutUser_akunInput
    pelatih_profile?: MPelatihCreateNestedOneWithoutUser_akunInput
    creator?: MUserCreateNestedOneWithoutCreated_usersInput
    updater?: MUserCreateNestedOneWithoutUpdated_usersInput
    deleter?: MUserCreateNestedOneWithoutDeleted_usersInput
    created_users?: MUserCreateNestedManyWithoutCreatorInput
    updated_users?: MUserCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiCreateNestedManyWithoutCreatorInput
    deleted_provinsis?: MProvinsiCreateNestedManyWithoutDeleterInput
  }

  export type MUserUncheckedCreateWithoutUpdated_provinsisInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid?: string | null
    updated_by_uid?: string | null
    deleted_by_uid?: string | null
    created_users?: MUserUncheckedCreateNestedManyWithoutCreatorInput
    updated_users?: MUserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserUncheckedCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletUncheckedCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletUncheckedCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutCreatorInput
    deleted_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutDeleterInput
  }

  export type MUserCreateOrConnectWithoutUpdated_provinsisInput = {
    where: MUserWhereUniqueInput
    create: XOR<MUserCreateWithoutUpdated_provinsisInput, MUserUncheckedCreateWithoutUpdated_provinsisInput>
  }

  export type MUserCreateWithoutDeleted_provinsisInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    atlet_profile?: MAtletCreateNestedOneWithoutUser_akunInput
    pelatih_profile?: MPelatihCreateNestedOneWithoutUser_akunInput
    creator?: MUserCreateNestedOneWithoutCreated_usersInput
    updater?: MUserCreateNestedOneWithoutUpdated_usersInput
    deleter?: MUserCreateNestedOneWithoutDeleted_usersInput
    created_users?: MUserCreateNestedManyWithoutCreatorInput
    updated_users?: MUserCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiCreateNestedManyWithoutUpdaterInput
  }

  export type MUserUncheckedCreateWithoutDeleted_provinsisInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid?: string | null
    updated_by_uid?: string | null
    deleted_by_uid?: string | null
    created_users?: MUserUncheckedCreateNestedManyWithoutCreatorInput
    updated_users?: MUserUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_users?: MUserUncheckedCreateNestedManyWithoutDeleterInput
    created_atlets?: MAtletUncheckedCreateNestedManyWithoutCreatorInput
    updated_atlets?: MAtletUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_atlets?: MAtletUncheckedCreateNestedManyWithoutDeleterInput
    created_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutCreatorInput
    updated_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutUpdaterInput
    deleted_pelatihhs?: MPelatihUncheckedCreateNestedManyWithoutDeleterInput
    created_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutCreatorInput
    updated_provinsis?: MProvinsiUncheckedCreateNestedManyWithoutUpdaterInput
  }

  export type MUserCreateOrConnectWithoutDeleted_provinsisInput = {
    where: MUserWhereUniqueInput
    create: XOR<MUserCreateWithoutDeleted_provinsisInput, MUserUncheckedCreateWithoutDeleted_provinsisInput>
  }

  export type MAtletCreateWithoutProvinsiInput = {
    uid_atlet: string
    nik: string
    id_pbsi: string
    nama_lengkap: string
    nama_ayah: string
    nama_ibu: string
    tempat_lahir: string
    tanggal_lahir: Date | string
    alamat: string
    jenis_kelamin: $Enums.JenisKelamin
    pegangan_raket: $Enums.PeganganRaket
    tinggi_badan: number
    berat_badan: number
    status_atlet: $Enums.StatusAtlet
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user_akun?: MUserCreateNestedOneWithoutAtlet_profileInput
    creator: MUserCreateNestedOneWithoutCreated_atletsInput
    updater: MUserCreateNestedOneWithoutUpdated_atletsInput
    deleter?: MUserCreateNestedOneWithoutDeleted_atletsInput
  }

  export type MAtletUncheckedCreateWithoutProvinsiInput = {
    uid_atlet: string
    nik: string
    id_pbsi: string
    nama_lengkap: string
    nama_ayah: string
    nama_ibu: string
    tempat_lahir: string
    tanggal_lahir: Date | string
    alamat: string
    jenis_kelamin: $Enums.JenisKelamin
    pegangan_raket: $Enums.PeganganRaket
    tinggi_badan: number
    berat_badan: number
    status_atlet: $Enums.StatusAtlet
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid: string
    updated_by_uid: string
    deleted_by_uid?: string | null
    user_akun?: MUserUncheckedCreateNestedOneWithoutAtlet_profileInput
  }

  export type MAtletCreateOrConnectWithoutProvinsiInput = {
    where: MAtletWhereUniqueInput
    create: XOR<MAtletCreateWithoutProvinsiInput, MAtletUncheckedCreateWithoutProvinsiInput>
  }

  export type MAtletCreateManyProvinsiInputEnvelope = {
    data: MAtletCreateManyProvinsiInput | MAtletCreateManyProvinsiInput[]
    skipDuplicates?: boolean
  }

  export type MPelatihCreateWithoutProvinsiInput = {
    uid_pelatih: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    tahun_bergabung: number
    pernah_melatih_sebelumnya: boolean
    klub_negara_sebelumnya: string
    mantan_atlet_nasional: boolean
    asal_klub_nasional: string
    mantan_pelatnas: boolean
    tahun_pelatnas: number
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    user_akun?: MUserCreateNestedOneWithoutPelatih_profileInput
    creator: MUserCreateNestedOneWithoutCreated_pelatihhsInput
    updater: MUserCreateNestedOneWithoutUpdated_pelatihhsInput
    deleter?: MUserCreateNestedOneWithoutDeleted_pelatihhsInput
  }

  export type MPelatihUncheckedCreateWithoutProvinsiInput = {
    uid_pelatih: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    tahun_bergabung: number
    pernah_melatih_sebelumnya: boolean
    klub_negara_sebelumnya: string
    mantan_atlet_nasional: boolean
    asal_klub_nasional: string
    mantan_pelatnas: boolean
    tahun_pelatnas: number
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid: string
    updated_by_uid: string
    deleted_by_uid?: string | null
    user_akun?: MUserUncheckedCreateNestedOneWithoutPelatih_profileInput
  }

  export type MPelatihCreateOrConnectWithoutProvinsiInput = {
    where: MPelatihWhereUniqueInput
    create: XOR<MPelatihCreateWithoutProvinsiInput, MPelatihUncheckedCreateWithoutProvinsiInput>
  }

  export type MPelatihCreateManyProvinsiInputEnvelope = {
    data: MPelatihCreateManyProvinsiInput | MPelatihCreateManyProvinsiInput[]
    skipDuplicates?: boolean
  }

  export type MUserUpsertWithoutCreated_provinsisInput = {
    update: XOR<MUserUpdateWithoutCreated_provinsisInput, MUserUncheckedUpdateWithoutCreated_provinsisInput>
    create: XOR<MUserCreateWithoutCreated_provinsisInput, MUserUncheckedCreateWithoutCreated_provinsisInput>
    where?: MUserWhereInput
  }

  export type MUserUpdateToOneWithWhereWithoutCreated_provinsisInput = {
    where?: MUserWhereInput
    data: XOR<MUserUpdateWithoutCreated_provinsisInput, MUserUncheckedUpdateWithoutCreated_provinsisInput>
  }

  export type MUserUpdateWithoutCreated_provinsisInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atlet_profile?: MAtletUpdateOneWithoutUser_akunNestedInput
    pelatih_profile?: MPelatihUpdateOneWithoutUser_akunNestedInput
    creator?: MUserUpdateOneWithoutCreated_usersNestedInput
    updater?: MUserUpdateOneWithoutUpdated_usersNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_usersNestedInput
    created_users?: MUserUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUpdateManyWithoutDeleterNestedInput
    updated_provinsis?: MProvinsiUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUncheckedUpdateWithoutCreated_provinsisInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    created_users?: MUserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUncheckedUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUncheckedUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUncheckedUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUncheckedUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUncheckedUpdateManyWithoutDeleterNestedInput
    updated_provinsis?: MProvinsiUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUncheckedUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUpsertWithoutUpdated_provinsisInput = {
    update: XOR<MUserUpdateWithoutUpdated_provinsisInput, MUserUncheckedUpdateWithoutUpdated_provinsisInput>
    create: XOR<MUserCreateWithoutUpdated_provinsisInput, MUserUncheckedCreateWithoutUpdated_provinsisInput>
    where?: MUserWhereInput
  }

  export type MUserUpdateToOneWithWhereWithoutUpdated_provinsisInput = {
    where?: MUserWhereInput
    data: XOR<MUserUpdateWithoutUpdated_provinsisInput, MUserUncheckedUpdateWithoutUpdated_provinsisInput>
  }

  export type MUserUpdateWithoutUpdated_provinsisInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atlet_profile?: MAtletUpdateOneWithoutUser_akunNestedInput
    pelatih_profile?: MPelatihUpdateOneWithoutUser_akunNestedInput
    creator?: MUserUpdateOneWithoutCreated_usersNestedInput
    updater?: MUserUpdateOneWithoutUpdated_usersNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_usersNestedInput
    created_users?: MUserUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUpdateManyWithoutCreatorNestedInput
    deleted_provinsis?: MProvinsiUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUncheckedUpdateWithoutUpdated_provinsisInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    created_users?: MUserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUncheckedUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUncheckedUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUncheckedUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUncheckedUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUncheckedUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUncheckedUpdateManyWithoutCreatorNestedInput
    deleted_provinsis?: MProvinsiUncheckedUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUpsertWithoutDeleted_provinsisInput = {
    update: XOR<MUserUpdateWithoutDeleted_provinsisInput, MUserUncheckedUpdateWithoutDeleted_provinsisInput>
    create: XOR<MUserCreateWithoutDeleted_provinsisInput, MUserUncheckedCreateWithoutDeleted_provinsisInput>
    where?: MUserWhereInput
  }

  export type MUserUpdateToOneWithWhereWithoutDeleted_provinsisInput = {
    where?: MUserWhereInput
    data: XOR<MUserUpdateWithoutDeleted_provinsisInput, MUserUncheckedUpdateWithoutDeleted_provinsisInput>
  }

  export type MUserUpdateWithoutDeleted_provinsisInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atlet_profile?: MAtletUpdateOneWithoutUser_akunNestedInput
    pelatih_profile?: MPelatihUpdateOneWithoutUser_akunNestedInput
    creator?: MUserUpdateOneWithoutCreated_usersNestedInput
    updater?: MUserUpdateOneWithoutUpdated_usersNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_usersNestedInput
    created_users?: MUserUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUpdateManyWithoutUpdaterNestedInput
  }

  export type MUserUncheckedUpdateWithoutDeleted_provinsisInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    created_users?: MUserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUncheckedUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUncheckedUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUncheckedUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUncheckedUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUncheckedUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUncheckedUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUncheckedUpdateManyWithoutUpdaterNestedInput
  }

  export type MAtletUpsertWithWhereUniqueWithoutProvinsiInput = {
    where: MAtletWhereUniqueInput
    update: XOR<MAtletUpdateWithoutProvinsiInput, MAtletUncheckedUpdateWithoutProvinsiInput>
    create: XOR<MAtletCreateWithoutProvinsiInput, MAtletUncheckedCreateWithoutProvinsiInput>
  }

  export type MAtletUpdateWithWhereUniqueWithoutProvinsiInput = {
    where: MAtletWhereUniqueInput
    data: XOR<MAtletUpdateWithoutProvinsiInput, MAtletUncheckedUpdateWithoutProvinsiInput>
  }

  export type MAtletUpdateManyWithWhereWithoutProvinsiInput = {
    where: MAtletScalarWhereInput
    data: XOR<MAtletUpdateManyMutationInput, MAtletUncheckedUpdateManyWithoutProvinsiInput>
  }

  export type MPelatihUpsertWithWhereUniqueWithoutProvinsiInput = {
    where: MPelatihWhereUniqueInput
    update: XOR<MPelatihUpdateWithoutProvinsiInput, MPelatihUncheckedUpdateWithoutProvinsiInput>
    create: XOR<MPelatihCreateWithoutProvinsiInput, MPelatihUncheckedCreateWithoutProvinsiInput>
  }

  export type MPelatihUpdateWithWhereUniqueWithoutProvinsiInput = {
    where: MPelatihWhereUniqueInput
    data: XOR<MPelatihUpdateWithoutProvinsiInput, MPelatihUncheckedUpdateWithoutProvinsiInput>
  }

  export type MPelatihUpdateManyWithWhereWithoutProvinsiInput = {
    where: MPelatihScalarWhereInput
    data: XOR<MPelatihUpdateManyMutationInput, MPelatihUncheckedUpdateManyWithoutProvinsiInput>
  }

  export type MUserCreateManyCreatorInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    updated_by_uid?: string | null
    deleted_by_uid?: string | null
  }

  export type MUserCreateManyUpdaterInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid?: string | null
    deleted_by_uid?: string | null
  }

  export type MUserCreateManyDeleterInput = {
    uid_user: string
    username: string
    password: string
    role: $Enums.RoleUser
    uid_atlet?: string | null
    uid_pelatih?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid?: string | null
    updated_by_uid?: string | null
  }

  export type MAtletCreateManyCreatorInput = {
    uid_atlet: string
    nik: string
    id_pbsi: string
    nama_lengkap: string
    nama_ayah: string
    nama_ibu: string
    tempat_lahir: string
    tanggal_lahir: Date | string
    alamat: string
    jenis_kelamin: $Enums.JenisKelamin
    pegangan_raket: $Enums.PeganganRaket
    tinggi_badan: number
    berat_badan: number
    status_atlet: $Enums.StatusAtlet
    foto: string
    uid_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    updated_by_uid: string
    deleted_by_uid?: string | null
  }

  export type MAtletCreateManyUpdaterInput = {
    uid_atlet: string
    nik: string
    id_pbsi: string
    nama_lengkap: string
    nama_ayah: string
    nama_ibu: string
    tempat_lahir: string
    tanggal_lahir: Date | string
    alamat: string
    jenis_kelamin: $Enums.JenisKelamin
    pegangan_raket: $Enums.PeganganRaket
    tinggi_badan: number
    berat_badan: number
    status_atlet: $Enums.StatusAtlet
    foto: string
    uid_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid: string
    deleted_by_uid?: string | null
  }

  export type MAtletCreateManyDeleterInput = {
    uid_atlet: string
    nik: string
    id_pbsi: string
    nama_lengkap: string
    nama_ayah: string
    nama_ibu: string
    tempat_lahir: string
    tanggal_lahir: Date | string
    alamat: string
    jenis_kelamin: $Enums.JenisKelamin
    pegangan_raket: $Enums.PeganganRaket
    tinggi_badan: number
    berat_badan: number
    status_atlet: $Enums.StatusAtlet
    foto: string
    uid_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid: string
    updated_by_uid: string
  }

  export type MPelatihCreateManyCreatorInput = {
    uid_pelatih: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    tahun_bergabung: number
    pernah_melatih_sebelumnya: boolean
    klub_negara_sebelumnya: string
    mantan_atlet_nasional: boolean
    asal_klub_nasional: string
    mantan_pelatnas: boolean
    tahun_pelatnas: number
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    uid_provinsi: string
    updated_by_uid: string
    deleted_by_uid?: string | null
  }

  export type MPelatihCreateManyUpdaterInput = {
    uid_pelatih: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    tahun_bergabung: number
    pernah_melatih_sebelumnya: boolean
    klub_negara_sebelumnya: string
    mantan_atlet_nasional: boolean
    asal_klub_nasional: string
    mantan_pelatnas: boolean
    tahun_pelatnas: number
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    uid_provinsi: string
    created_by_uid: string
    deleted_by_uid?: string | null
  }

  export type MPelatihCreateManyDeleterInput = {
    uid_pelatih: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    tahun_bergabung: number
    pernah_melatih_sebelumnya: boolean
    klub_negara_sebelumnya: string
    mantan_atlet_nasional: boolean
    asal_klub_nasional: string
    mantan_pelatnas: boolean
    tahun_pelatnas: number
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    uid_provinsi: string
    created_by_uid: string
    updated_by_uid: string
  }

  export type MProvinsiCreateManyCreatorInput = {
    uid_provinsi: string
    nama_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    updated_by_uid: string
    deleted_by_uid?: string | null
  }

  export type MProvinsiCreateManyUpdaterInput = {
    uid_provinsi: string
    nama_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid: string
    deleted_by_uid?: string | null
  }

  export type MProvinsiCreateManyDeleterInput = {
    uid_provinsi: string
    nama_provinsi: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid: string
    updated_by_uid: string
  }

  export type MUserUpdateWithoutCreatorInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atlet_profile?: MAtletUpdateOneWithoutUser_akunNestedInput
    pelatih_profile?: MPelatihUpdateOneWithoutUser_akunNestedInput
    updater?: MUserUpdateOneWithoutUpdated_usersNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_usersNestedInput
    created_users?: MUserUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUncheckedUpdateWithoutCreatorInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    created_users?: MUserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUncheckedUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUncheckedUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUncheckedUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUncheckedUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUncheckedUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUncheckedUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUncheckedUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUncheckedUpdateManyWithoutCreatorInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MUserUpdateWithoutUpdaterInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atlet_profile?: MAtletUpdateOneWithoutUser_akunNestedInput
    pelatih_profile?: MPelatihUpdateOneWithoutUser_akunNestedInput
    creator?: MUserUpdateOneWithoutCreated_usersNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_usersNestedInput
    created_users?: MUserUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUncheckedUpdateWithoutUpdaterInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    created_users?: MUserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUncheckedUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUncheckedUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUncheckedUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUncheckedUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUncheckedUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUncheckedUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUncheckedUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUncheckedUpdateManyWithoutUpdaterInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MUserUpdateWithoutDeleterInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    atlet_profile?: MAtletUpdateOneWithoutUser_akunNestedInput
    pelatih_profile?: MPelatihUpdateOneWithoutUser_akunNestedInput
    creator?: MUserUpdateOneWithoutCreated_usersNestedInput
    updater?: MUserUpdateOneWithoutUpdated_usersNestedInput
    created_users?: MUserUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUncheckedUpdateWithoutDeleterInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    created_users?: MUserUncheckedUpdateManyWithoutCreatorNestedInput
    updated_users?: MUserUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_users?: MUserUncheckedUpdateManyWithoutDeleterNestedInput
    created_atlets?: MAtletUncheckedUpdateManyWithoutCreatorNestedInput
    updated_atlets?: MAtletUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_atlets?: MAtletUncheckedUpdateManyWithoutDeleterNestedInput
    created_pelatihhs?: MPelatihUncheckedUpdateManyWithoutCreatorNestedInput
    updated_pelatihhs?: MPelatihUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_pelatihhs?: MPelatihUncheckedUpdateManyWithoutDeleterNestedInput
    created_provinsis?: MProvinsiUncheckedUpdateManyWithoutCreatorNestedInput
    updated_provinsis?: MProvinsiUncheckedUpdateManyWithoutUpdaterNestedInput
    deleted_provinsis?: MProvinsiUncheckedUpdateManyWithoutDeleterNestedInput
  }

  export type MUserUncheckedUpdateManyWithoutDeleterInput = {
    uid_user?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUserFieldUpdateOperationsInput | $Enums.RoleUser
    uid_atlet?: NullableStringFieldUpdateOperationsInput | string | null
    uid_pelatih?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MAtletUpdateWithoutCreatorInput = {
    uid_atlet?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    id_pbsi?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    nama_ayah?: StringFieldUpdateOperationsInput | string
    nama_ibu?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFieldUpdateOperationsInput | $Enums.PeganganRaket
    tinggi_badan?: IntFieldUpdateOperationsInput | number
    berat_badan?: IntFieldUpdateOperationsInput | number
    status_atlet?: EnumStatusAtletFieldUpdateOperationsInput | $Enums.StatusAtlet
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_akun?: MUserUpdateOneWithoutAtlet_profileNestedInput
    provinsi?: MProvinsiUpdateOneRequiredWithoutAtletsNestedInput
    updater?: MUserUpdateOneRequiredWithoutUpdated_atletsNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_atletsNestedInput
  }

  export type MAtletUncheckedUpdateWithoutCreatorInput = {
    uid_atlet?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    id_pbsi?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    nama_ayah?: StringFieldUpdateOperationsInput | string
    nama_ibu?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFieldUpdateOperationsInput | $Enums.PeganganRaket
    tinggi_badan?: IntFieldUpdateOperationsInput | number
    berat_badan?: IntFieldUpdateOperationsInput | number
    status_atlet?: EnumStatusAtletFieldUpdateOperationsInput | $Enums.StatusAtlet
    foto?: StringFieldUpdateOperationsInput | string
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    user_akun?: MUserUncheckedUpdateOneWithoutAtlet_profileNestedInput
  }

  export type MAtletUncheckedUpdateManyWithoutCreatorInput = {
    uid_atlet?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    id_pbsi?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    nama_ayah?: StringFieldUpdateOperationsInput | string
    nama_ibu?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFieldUpdateOperationsInput | $Enums.PeganganRaket
    tinggi_badan?: IntFieldUpdateOperationsInput | number
    berat_badan?: IntFieldUpdateOperationsInput | number
    status_atlet?: EnumStatusAtletFieldUpdateOperationsInput | $Enums.StatusAtlet
    foto?: StringFieldUpdateOperationsInput | string
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MAtletUpdateWithoutUpdaterInput = {
    uid_atlet?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    id_pbsi?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    nama_ayah?: StringFieldUpdateOperationsInput | string
    nama_ibu?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFieldUpdateOperationsInput | $Enums.PeganganRaket
    tinggi_badan?: IntFieldUpdateOperationsInput | number
    berat_badan?: IntFieldUpdateOperationsInput | number
    status_atlet?: EnumStatusAtletFieldUpdateOperationsInput | $Enums.StatusAtlet
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_akun?: MUserUpdateOneWithoutAtlet_profileNestedInput
    provinsi?: MProvinsiUpdateOneRequiredWithoutAtletsNestedInput
    creator?: MUserUpdateOneRequiredWithoutCreated_atletsNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_atletsNestedInput
  }

  export type MAtletUncheckedUpdateWithoutUpdaterInput = {
    uid_atlet?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    id_pbsi?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    nama_ayah?: StringFieldUpdateOperationsInput | string
    nama_ibu?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFieldUpdateOperationsInput | $Enums.PeganganRaket
    tinggi_badan?: IntFieldUpdateOperationsInput | number
    berat_badan?: IntFieldUpdateOperationsInput | number
    status_atlet?: EnumStatusAtletFieldUpdateOperationsInput | $Enums.StatusAtlet
    foto?: StringFieldUpdateOperationsInput | string
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    user_akun?: MUserUncheckedUpdateOneWithoutAtlet_profileNestedInput
  }

  export type MAtletUncheckedUpdateManyWithoutUpdaterInput = {
    uid_atlet?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    id_pbsi?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    nama_ayah?: StringFieldUpdateOperationsInput | string
    nama_ibu?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFieldUpdateOperationsInput | $Enums.PeganganRaket
    tinggi_badan?: IntFieldUpdateOperationsInput | number
    berat_badan?: IntFieldUpdateOperationsInput | number
    status_atlet?: EnumStatusAtletFieldUpdateOperationsInput | $Enums.StatusAtlet
    foto?: StringFieldUpdateOperationsInput | string
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MAtletUpdateWithoutDeleterInput = {
    uid_atlet?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    id_pbsi?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    nama_ayah?: StringFieldUpdateOperationsInput | string
    nama_ibu?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFieldUpdateOperationsInput | $Enums.PeganganRaket
    tinggi_badan?: IntFieldUpdateOperationsInput | number
    berat_badan?: IntFieldUpdateOperationsInput | number
    status_atlet?: EnumStatusAtletFieldUpdateOperationsInput | $Enums.StatusAtlet
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_akun?: MUserUpdateOneWithoutAtlet_profileNestedInput
    provinsi?: MProvinsiUpdateOneRequiredWithoutAtletsNestedInput
    creator?: MUserUpdateOneRequiredWithoutCreated_atletsNestedInput
    updater?: MUserUpdateOneRequiredWithoutUpdated_atletsNestedInput
  }

  export type MAtletUncheckedUpdateWithoutDeleterInput = {
    uid_atlet?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    id_pbsi?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    nama_ayah?: StringFieldUpdateOperationsInput | string
    nama_ibu?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFieldUpdateOperationsInput | $Enums.PeganganRaket
    tinggi_badan?: IntFieldUpdateOperationsInput | number
    berat_badan?: IntFieldUpdateOperationsInput | number
    status_atlet?: EnumStatusAtletFieldUpdateOperationsInput | $Enums.StatusAtlet
    foto?: StringFieldUpdateOperationsInput | string
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    user_akun?: MUserUncheckedUpdateOneWithoutAtlet_profileNestedInput
  }

  export type MAtletUncheckedUpdateManyWithoutDeleterInput = {
    uid_atlet?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    id_pbsi?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    nama_ayah?: StringFieldUpdateOperationsInput | string
    nama_ibu?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFieldUpdateOperationsInput | $Enums.PeganganRaket
    tinggi_badan?: IntFieldUpdateOperationsInput | number
    berat_badan?: IntFieldUpdateOperationsInput | number
    status_atlet?: EnumStatusAtletFieldUpdateOperationsInput | $Enums.StatusAtlet
    foto?: StringFieldUpdateOperationsInput | string
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
  }

  export type MPelatihUpdateWithoutCreatorInput = {
    uid_pelatih?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun_bergabung?: IntFieldUpdateOperationsInput | number
    pernah_melatih_sebelumnya?: BoolFieldUpdateOperationsInput | boolean
    klub_negara_sebelumnya?: StringFieldUpdateOperationsInput | string
    mantan_atlet_nasional?: BoolFieldUpdateOperationsInput | boolean
    asal_klub_nasional?: StringFieldUpdateOperationsInput | string
    mantan_pelatnas?: BoolFieldUpdateOperationsInput | boolean
    tahun_pelatnas?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_akun?: MUserUpdateOneWithoutPelatih_profileNestedInput
    provinsi?: MProvinsiUpdateOneRequiredWithoutCoachsNestedInput
    updater?: MUserUpdateOneRequiredWithoutUpdated_pelatihhsNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_pelatihhsNestedInput
  }

  export type MPelatihUncheckedUpdateWithoutCreatorInput = {
    uid_pelatih?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun_bergabung?: IntFieldUpdateOperationsInput | number
    pernah_melatih_sebelumnya?: BoolFieldUpdateOperationsInput | boolean
    klub_negara_sebelumnya?: StringFieldUpdateOperationsInput | string
    mantan_atlet_nasional?: BoolFieldUpdateOperationsInput | boolean
    asal_klub_nasional?: StringFieldUpdateOperationsInput | string
    mantan_pelatnas?: BoolFieldUpdateOperationsInput | boolean
    tahun_pelatnas?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    user_akun?: MUserUncheckedUpdateOneWithoutPelatih_profileNestedInput
  }

  export type MPelatihUncheckedUpdateManyWithoutCreatorInput = {
    uid_pelatih?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun_bergabung?: IntFieldUpdateOperationsInput | number
    pernah_melatih_sebelumnya?: BoolFieldUpdateOperationsInput | boolean
    klub_negara_sebelumnya?: StringFieldUpdateOperationsInput | string
    mantan_atlet_nasional?: BoolFieldUpdateOperationsInput | boolean
    asal_klub_nasional?: StringFieldUpdateOperationsInput | string
    mantan_pelatnas?: BoolFieldUpdateOperationsInput | boolean
    tahun_pelatnas?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MPelatihUpdateWithoutUpdaterInput = {
    uid_pelatih?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun_bergabung?: IntFieldUpdateOperationsInput | number
    pernah_melatih_sebelumnya?: BoolFieldUpdateOperationsInput | boolean
    klub_negara_sebelumnya?: StringFieldUpdateOperationsInput | string
    mantan_atlet_nasional?: BoolFieldUpdateOperationsInput | boolean
    asal_klub_nasional?: StringFieldUpdateOperationsInput | string
    mantan_pelatnas?: BoolFieldUpdateOperationsInput | boolean
    tahun_pelatnas?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_akun?: MUserUpdateOneWithoutPelatih_profileNestedInput
    provinsi?: MProvinsiUpdateOneRequiredWithoutCoachsNestedInput
    creator?: MUserUpdateOneRequiredWithoutCreated_pelatihhsNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_pelatihhsNestedInput
  }

  export type MPelatihUncheckedUpdateWithoutUpdaterInput = {
    uid_pelatih?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun_bergabung?: IntFieldUpdateOperationsInput | number
    pernah_melatih_sebelumnya?: BoolFieldUpdateOperationsInput | boolean
    klub_negara_sebelumnya?: StringFieldUpdateOperationsInput | string
    mantan_atlet_nasional?: BoolFieldUpdateOperationsInput | boolean
    asal_klub_nasional?: StringFieldUpdateOperationsInput | string
    mantan_pelatnas?: BoolFieldUpdateOperationsInput | boolean
    tahun_pelatnas?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    created_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    user_akun?: MUserUncheckedUpdateOneWithoutPelatih_profileNestedInput
  }

  export type MPelatihUncheckedUpdateManyWithoutUpdaterInput = {
    uid_pelatih?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun_bergabung?: IntFieldUpdateOperationsInput | number
    pernah_melatih_sebelumnya?: BoolFieldUpdateOperationsInput | boolean
    klub_negara_sebelumnya?: StringFieldUpdateOperationsInput | string
    mantan_atlet_nasional?: BoolFieldUpdateOperationsInput | boolean
    asal_klub_nasional?: StringFieldUpdateOperationsInput | string
    mantan_pelatnas?: BoolFieldUpdateOperationsInput | boolean
    tahun_pelatnas?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    created_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MPelatihUpdateWithoutDeleterInput = {
    uid_pelatih?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun_bergabung?: IntFieldUpdateOperationsInput | number
    pernah_melatih_sebelumnya?: BoolFieldUpdateOperationsInput | boolean
    klub_negara_sebelumnya?: StringFieldUpdateOperationsInput | string
    mantan_atlet_nasional?: BoolFieldUpdateOperationsInput | boolean
    asal_klub_nasional?: StringFieldUpdateOperationsInput | string
    mantan_pelatnas?: BoolFieldUpdateOperationsInput | boolean
    tahun_pelatnas?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_akun?: MUserUpdateOneWithoutPelatih_profileNestedInput
    provinsi?: MProvinsiUpdateOneRequiredWithoutCoachsNestedInput
    creator?: MUserUpdateOneRequiredWithoutCreated_pelatihhsNestedInput
    updater?: MUserUpdateOneRequiredWithoutUpdated_pelatihhsNestedInput
  }

  export type MPelatihUncheckedUpdateWithoutDeleterInput = {
    uid_pelatih?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun_bergabung?: IntFieldUpdateOperationsInput | number
    pernah_melatih_sebelumnya?: BoolFieldUpdateOperationsInput | boolean
    klub_negara_sebelumnya?: StringFieldUpdateOperationsInput | string
    mantan_atlet_nasional?: BoolFieldUpdateOperationsInput | boolean
    asal_klub_nasional?: StringFieldUpdateOperationsInput | string
    mantan_pelatnas?: BoolFieldUpdateOperationsInput | boolean
    tahun_pelatnas?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    created_by_uid?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    user_akun?: MUserUncheckedUpdateOneWithoutPelatih_profileNestedInput
  }

  export type MPelatihUncheckedUpdateManyWithoutDeleterInput = {
    uid_pelatih?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun_bergabung?: IntFieldUpdateOperationsInput | number
    pernah_melatih_sebelumnya?: BoolFieldUpdateOperationsInput | boolean
    klub_negara_sebelumnya?: StringFieldUpdateOperationsInput | string
    mantan_atlet_nasional?: BoolFieldUpdateOperationsInput | boolean
    asal_klub_nasional?: StringFieldUpdateOperationsInput | string
    mantan_pelatnas?: BoolFieldUpdateOperationsInput | boolean
    tahun_pelatnas?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    created_by_uid?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
  }

  export type MProvinsiUpdateWithoutCreatorInput = {
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    nama_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updater?: MUserUpdateOneRequiredWithoutUpdated_provinsisNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_provinsisNestedInput
    atlets?: MAtletUpdateManyWithoutProvinsiNestedInput
    coachs?: MPelatihUpdateManyWithoutProvinsiNestedInput
  }

  export type MProvinsiUncheckedUpdateWithoutCreatorInput = {
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    nama_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    atlets?: MAtletUncheckedUpdateManyWithoutProvinsiNestedInput
    coachs?: MPelatihUncheckedUpdateManyWithoutProvinsiNestedInput
  }

  export type MProvinsiUncheckedUpdateManyWithoutCreatorInput = {
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    nama_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MProvinsiUpdateWithoutUpdaterInput = {
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    nama_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: MUserUpdateOneRequiredWithoutCreated_provinsisNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_provinsisNestedInput
    atlets?: MAtletUpdateManyWithoutProvinsiNestedInput
    coachs?: MPelatihUpdateManyWithoutProvinsiNestedInput
  }

  export type MProvinsiUncheckedUpdateWithoutUpdaterInput = {
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    nama_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    atlets?: MAtletUncheckedUpdateManyWithoutProvinsiNestedInput
    coachs?: MPelatihUncheckedUpdateManyWithoutProvinsiNestedInput
  }

  export type MProvinsiUncheckedUpdateManyWithoutUpdaterInput = {
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    nama_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MProvinsiUpdateWithoutDeleterInput = {
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    nama_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: MUserUpdateOneRequiredWithoutCreated_provinsisNestedInput
    updater?: MUserUpdateOneRequiredWithoutUpdated_provinsisNestedInput
    atlets?: MAtletUpdateManyWithoutProvinsiNestedInput
    coachs?: MPelatihUpdateManyWithoutProvinsiNestedInput
  }

  export type MProvinsiUncheckedUpdateWithoutDeleterInput = {
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    nama_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    atlets?: MAtletUncheckedUpdateManyWithoutProvinsiNestedInput
    coachs?: MPelatihUncheckedUpdateManyWithoutProvinsiNestedInput
  }

  export type MProvinsiUncheckedUpdateManyWithoutDeleterInput = {
    uid_provinsi?: StringFieldUpdateOperationsInput | string
    nama_provinsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
  }

  export type MAtletCreateManyProvinsiInput = {
    uid_atlet: string
    nik: string
    id_pbsi: string
    nama_lengkap: string
    nama_ayah: string
    nama_ibu: string
    tempat_lahir: string
    tanggal_lahir: Date | string
    alamat: string
    jenis_kelamin: $Enums.JenisKelamin
    pegangan_raket: $Enums.PeganganRaket
    tinggi_badan: number
    berat_badan: number
    status_atlet: $Enums.StatusAtlet
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid: string
    updated_by_uid: string
    deleted_by_uid?: string | null
  }

  export type MPelatihCreateManyProvinsiInput = {
    uid_pelatih: string
    nik: string
    nama_lengkap: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    tahun_bergabung: number
    pernah_melatih_sebelumnya: boolean
    klub_negara_sebelumnya: string
    mantan_atlet_nasional: boolean
    asal_klub_nasional: string
    mantan_pelatnas: boolean
    tahun_pelatnas: number
    foto: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    created_by_uid: string
    updated_by_uid: string
    deleted_by_uid?: string | null
  }

  export type MAtletUpdateWithoutProvinsiInput = {
    uid_atlet?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    id_pbsi?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    nama_ayah?: StringFieldUpdateOperationsInput | string
    nama_ibu?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFieldUpdateOperationsInput | $Enums.PeganganRaket
    tinggi_badan?: IntFieldUpdateOperationsInput | number
    berat_badan?: IntFieldUpdateOperationsInput | number
    status_atlet?: EnumStatusAtletFieldUpdateOperationsInput | $Enums.StatusAtlet
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_akun?: MUserUpdateOneWithoutAtlet_profileNestedInput
    creator?: MUserUpdateOneRequiredWithoutCreated_atletsNestedInput
    updater?: MUserUpdateOneRequiredWithoutUpdated_atletsNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_atletsNestedInput
  }

  export type MAtletUncheckedUpdateWithoutProvinsiInput = {
    uid_atlet?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    id_pbsi?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    nama_ayah?: StringFieldUpdateOperationsInput | string
    nama_ibu?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFieldUpdateOperationsInput | $Enums.PeganganRaket
    tinggi_badan?: IntFieldUpdateOperationsInput | number
    berat_badan?: IntFieldUpdateOperationsInput | number
    status_atlet?: EnumStatusAtletFieldUpdateOperationsInput | $Enums.StatusAtlet
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    user_akun?: MUserUncheckedUpdateOneWithoutAtlet_profileNestedInput
  }

  export type MAtletUncheckedUpdateManyWithoutProvinsiInput = {
    uid_atlet?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    id_pbsi?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    nama_ayah?: StringFieldUpdateOperationsInput | string
    nama_ibu?: StringFieldUpdateOperationsInput | string
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    pegangan_raket?: EnumPeganganRaketFieldUpdateOperationsInput | $Enums.PeganganRaket
    tinggi_badan?: IntFieldUpdateOperationsInput | number
    berat_badan?: IntFieldUpdateOperationsInput | number
    status_atlet?: EnumStatusAtletFieldUpdateOperationsInput | $Enums.StatusAtlet
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MPelatihUpdateWithoutProvinsiInput = {
    uid_pelatih?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun_bergabung?: IntFieldUpdateOperationsInput | number
    pernah_melatih_sebelumnya?: BoolFieldUpdateOperationsInput | boolean
    klub_negara_sebelumnya?: StringFieldUpdateOperationsInput | string
    mantan_atlet_nasional?: BoolFieldUpdateOperationsInput | boolean
    asal_klub_nasional?: StringFieldUpdateOperationsInput | string
    mantan_pelatnas?: BoolFieldUpdateOperationsInput | boolean
    tahun_pelatnas?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_akun?: MUserUpdateOneWithoutPelatih_profileNestedInput
    creator?: MUserUpdateOneRequiredWithoutCreated_pelatihhsNestedInput
    updater?: MUserUpdateOneRequiredWithoutUpdated_pelatihhsNestedInput
    deleter?: MUserUpdateOneWithoutDeleted_pelatihhsNestedInput
  }

  export type MPelatihUncheckedUpdateWithoutProvinsiInput = {
    uid_pelatih?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun_bergabung?: IntFieldUpdateOperationsInput | number
    pernah_melatih_sebelumnya?: BoolFieldUpdateOperationsInput | boolean
    klub_negara_sebelumnya?: StringFieldUpdateOperationsInput | string
    mantan_atlet_nasional?: BoolFieldUpdateOperationsInput | boolean
    asal_klub_nasional?: StringFieldUpdateOperationsInput | string
    mantan_pelatnas?: BoolFieldUpdateOperationsInput | boolean
    tahun_pelatnas?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
    user_akun?: MUserUncheckedUpdateOneWithoutPelatih_profileNestedInput
  }

  export type MPelatihUncheckedUpdateManyWithoutProvinsiInput = {
    uid_pelatih?: StringFieldUpdateOperationsInput | string
    nik?: StringFieldUpdateOperationsInput | string
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    tahun_bergabung?: IntFieldUpdateOperationsInput | number
    pernah_melatih_sebelumnya?: BoolFieldUpdateOperationsInput | boolean
    klub_negara_sebelumnya?: StringFieldUpdateOperationsInput | string
    mantan_atlet_nasional?: BoolFieldUpdateOperationsInput | boolean
    asal_klub_nasional?: StringFieldUpdateOperationsInput | string
    mantan_pelatnas?: BoolFieldUpdateOperationsInput | boolean
    tahun_pelatnas?: IntFieldUpdateOperationsInput | number
    foto?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_uid?: StringFieldUpdateOperationsInput | string
    updated_by_uid?: StringFieldUpdateOperationsInput | string
    deleted_by_uid?: NullableStringFieldUpdateOperationsInput | string | null
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