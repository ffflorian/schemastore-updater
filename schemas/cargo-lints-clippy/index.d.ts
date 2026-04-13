/* eslint-disable */

/**
 * Checks for usage of items through absolute paths, like `std::env::current_dir`.
 */
export type AbsolutePaths = LintLevel | DetailedLint;
/**
 * Specify the [lint level](https://doc.rust-lang.org/rustc/lints/levels.html) for a lint or lint group.
 */
export type LintLevel = 'forbid' | 'deny' | 'warn' | 'allow';
/**
 * Checks for comparisons where one side of the relation is either the minimum or maximum value for its type and warns if it involves a case that is always true or always false. Only integer and boolean types are checked.
 */
export type AbsurdExtremeComparisons = LintLevel | DetailedLint;
/**
 * The whole set of warn-by-default lints using the `clippy` lint group (`#![allow(clippy::all)]`).
 */
export type AllClippyLints = LintLevel | DetailedLint;
/**
 * Finds items imported through `alloc` when available through `core`.
 */
export type AllocInsteadOfCore = LintLevel | DetailedLint;
/**
 * Checks for usage of the `#[allow]` attribute and suggests replacing it with the `#[expect]` attribute (See RFC 2383)
 */
export type AllowAttributes = LintLevel | DetailedLint;
/**
 * Checks for attributes that allow lints without a reason.
 */
export type AllowAttributesWithoutReason = LintLevel | DetailedLint;
/**
 * Checks for ranges which almost include the entire range of letters from 'a' to 'z' or digits from '0' to '9', but don't because they're a half open range.
 */
export type AlmostCompleteRange = LintLevel | DetailedLint;
/**
 * Checks for `foo = bar; bar = foo` sequences.
 */
export type AlmostSwapped = LintLevel | DetailedLint;
/**
 * Checks for floating point literals that approximate constants which are defined in `std::f32::consts` or `std::f64::consts`, respectively, suggesting to use the predefined constant.
 */
export type ApproxConstant = LintLevel | DetailedLint;
/**
 * Confirms that items are sorted in source files as per configuration.
 */
export type ArbitrarySourceItemOrdering = LintLevel | DetailedLint;
/**
 * This lint warns when you use `Arc` with a type that does not implement `Send` or `Sync`.
 */
export type ArcWithNonSendSync = LintLevel | DetailedLint;
/**
 * Checks any kind of arithmetic operation of any type.
 */
export type ArithmeticSideEffects = LintLevel | DetailedLint;
/**
 * Checks for usage of `as` conversions.
 */
export type AsConversions = LintLevel | DetailedLint;
/**
 * Checks for the usage of `as *const _` or `as *mut _` conversion using inferred type.
 */
export type AsPointerUnderscore = LintLevel | DetailedLint;
/**
 * Checks for the result of a `&self`-taking `as_ptr` being cast to a mutable pointer.
 */
export type AsPtrCastMut = LintLevel | DetailedLint;
/**
 * Checks for the usage of `as _` conversion using inferred type.
 */
export type AsUnderscore = LintLevel | DetailedLint;
/**
 * Checks for `assert!(true)` and `assert!(false)` calls.
 */
export type AssertionsOnConstants = LintLevel | DetailedLint;
/**
 * Checks for `assert!(r.is_ok())` or `assert!(r.is_err())` calls.
 */
export type AssertionsOnResultStates = LintLevel | DetailedLint;
/**
 * Checks for `a = a op b` or `a = b commutative_op a` patterns.
 */
export type AssignOpPattern = LintLevel | DetailedLint;
/**
 * Nothing. This lint has been deprecated
 */
export type AssignOps = LintLevel | DetailedLint;
/**
 * Checks for code like `foo = bar.clone();`
 */
export type AssigningClones = LintLevel | DetailedLint;
/**
 * Checks for async blocks that yield values of types that can themselves be awaited.
 */
export type AsyncYieldsAsync = LintLevel | DetailedLint;
/**
 * Allows users to configure types which should not be held across await suspension points.
 */
export type AwaitHoldingInvalidType = LintLevel | DetailedLint;
/**
 * Checks for calls to `await` while holding a non-async-aware `MutexGuard`.
 */
export type AwaitHoldingLock = LintLevel | DetailedLint;
/**
 * Checks for calls to `await` while holding a `RefCell`, `Ref`, or `RefMut`.
 */
export type AwaitHoldingRefcellRef = LintLevel | DetailedLint;
/**
 * Checks for incompatible bit masks in comparisons.
 */
export type BadBitMask = LintLevel | DetailedLint;
/**
 * Checks for the usage of the `to_be_bytes` method and/or the function `from_be_bytes`.
 */
export type BigEndianBytes = LintLevel | DetailedLint;
/**
 * Checks for usage of `_.and_then(|x| Some(y))`, `_.and_then(|x| Ok(y))` or `_.or_else(|x| Err(y))`.
 */
export type BindInsteadOfMap = LintLevel | DetailedLint;
/**
 * Checks for `warn`/`deny`/`forbid` attributes targeting the whole clippy::restriction category.
 */
export type BlanketClippyRestrictionLints = LintLevel | DetailedLint;
/**
 * Checks for `if` and `match` conditions that use blocks containing an expression, statements or conditions that use closures with blocks.
 */
export type BlocksInConditions = LintLevel | DetailedLint;
/**
 * This lint warns about boolean comparisons in assert-like macros.
 */
export type BoolAssertComparison = LintLevel | DetailedLint;
/**
 * Checks for expressions of the form `x == true`, `x!= true` and order comparisons such as `x
 */
export type BoolComparison = LintLevel | DetailedLint;
/**
 * Instead of using an if statement to convert a bool to an int, this lint suggests using a `from()` function or an `as` coercion.
 */
export type BoolToIntWithIf = LintLevel | DetailedLint;
/**
 * Checks for the usage of `&expr as *const T` or `&mut expr as *mut T`, and suggest using `&raw const` or `&raw mut` instead.
 */
export type BorrowAsPtr = LintLevel | DetailedLint;
/**
 * Checks for `&*(&T)`.
 */
export type BorrowDerefRef = LintLevel | DetailedLint;
/**
 * Checks for a borrow of a named constant with interior mutability.
 */
export type BorrowInteriorMutableConst = LintLevel | DetailedLint;
/**
 * Checks for usage of `&Box ` anywhere in the code. Check the Box documentation for more information.
 */
export type BorrowedBox = LintLevel | DetailedLint;
/**
 * Checks for usage of `Box ` where T is a collection such as Vec anywhere in the code. Check the Box documentation for more information.
 */
export type BoxCollection = LintLevel | DetailedLint;
/**
 * checks for `Box::new(Default::default())`, which can be written as `Box::default()`.
 */
export type BoxDefault = LintLevel | DetailedLint;
/**
 * Checks for usage of `Box ` where an unboxed `T` would work fine.
 */
export type BoxedLocal = LintLevel | DetailedLint;
/**
 * Checks if the `if` and `else` block contain shared code that can be moved out of the blocks.
 */
export type BranchesSharingCode = LintLevel | DetailedLint;
/**
 * Warns if a generic shadows a built-in type.
 */
export type BuiltinTypeShadow = LintLevel | DetailedLint;
/**
 * Checks for hard to read slices of byte characters, that could be more easily expressed as a byte string.
 */
export type ByteCharSlices = LintLevel | DetailedLint;
/**
 * It checks for `str::bytes().count()` and suggests replacing it with `str::len()`.
 */
export type BytesCountToLen = LintLevel | DetailedLint;
/**
 * Checks for the use of `.bytes().nth()`.
 */
export type BytesNth = LintLevel | DetailedLint;
/**
 * The `clippy::cargo` group gives you suggestions on how to improve your `Cargo.toml` file. This might be especially interesting if you want to publish your crate and are not sure if you have all useful information in your `Cargo.toml`.
 */
export type Cargo = LintLevel | DetailedLint;
/**
 * Checks to see if all common metadata is defined in `Cargo.toml`. See: https://rust-lang-nursery.github.io/api-guidelines/documentation.html#cargotoml-includes-all-common-metadata-c-metadata
 */
export type CargoCommonMetadata = LintLevel | DetailedLint;
/**
 * Checks for calls to `ends_with` with possible file extensions and suggests to use a case-insensitive approach instead.
 */
export type CaseSensitiveFileExtensionComparisons = LintLevel | DetailedLint;
/**
 * Checks for usage of the `abs()` method that cast the result to unsigned.
 */
export type CastAbsToUnsigned = LintLevel | DetailedLint;
/**
 * Checks for casts from an enum tuple constructor to an integer.
 */
export type CastEnumConstructor = LintLevel | DetailedLint;
/**
 * Checks for casts from an enum type to an integral type that will definitely truncate the value.
 */
export type CastEnumTruncation = LintLevel | DetailedLint;
/**
 * Checks for casts between numeric types that can be replaced by safe conversion functions.
 */
export type CastLossless = LintLevel | DetailedLint;
/**
 * Checks for a known NaN float being cast to an integer
 */
export type CastNanToInt = LintLevel | DetailedLint;
/**
 * Checks for casts between numeric types that may truncate large values. This is expected behavior, so the cast is `Allow` by default. It suggests user either explicitly ignore the lint, or use `try_from()` and handle the truncation, default, or panic explicitly.
 */
export type CastPossibleTruncation = LintLevel | DetailedLint;
/**
 * Checks for casts from an unsigned type to a signed type of the same size, or possibly smaller due to target-dependent integers. Performing such a cast is a no-op for the compiler (that is, nothing is changed at the bit level), and the binary representation of the value is reinterpreted. This can cause wrapping if the value is too big for the target signed type. However, the cast works as defined, so this lint is `Allow` by default.
 */
export type CastPossibleWrap = LintLevel | DetailedLint;
/**
 * Checks for casts from any numeric type to a float type where the receiving type cannot store all values from the original type without rounding errors. This possible rounding is to be expected, so this lint is `Allow` by default.
 */
export type CastPrecisionLoss = LintLevel | DetailedLint;
/**
 * Checks for casts, using `as` or `pointer::cast`, from a less strictly aligned pointer to a more strictly aligned pointer.
 */
export type CastPtrAlignment = LintLevel | DetailedLint;
/**
 * Checks for casts from a signed to an unsigned numeric type. In this case, negative values wrap around to large positive values, which can be quite surprising in practice. However, since the cast works as defined, this lint is `Allow` by default.
 */
export type CastSignLoss = LintLevel | DetailedLint;
/**
 * Checks for `as` casts between raw pointers to slices with differently sized elements.
 */
export type CastSliceDifferentSizes = LintLevel | DetailedLint;
/**
 * Checks for a raw slice being cast to a slice pointer
 */
export type CastSliceFromRawParts = LintLevel | DetailedLint;
/**
 * Checks for usage of `cfg` that excludes code from `test` builds. (i.e., `#[cfg(not(test))]`)
 */
export type CfgNotTest = LintLevel | DetailedLint;
/**
 * Checks for usage of a character position yielded by `.chars().enumerate()` in a context where a byte index is expected, such as an argument to a specific `str` method or indexing into a `str` or `String`.
 */
export type CharIndicesAsByteIndices = LintLevel | DetailedLint;
/**
 * Checks for expressions where a character literal is cast to `u8` and suggests using a byte literal instead.
 */
export type CharLitAsU8 = LintLevel | DetailedLint;
/**
 * Checks for usage of `_.chars().last()` or `_.chars().next_back()` on a `str` to check if it ends with a given char.
 */
export type CharsLastCmp = LintLevel | DetailedLint;
/**
 * Checks for usage of `.chars().next()` on a `str` to check if it starts with a given char.
 */
export type CharsNextCmp = LintLevel | DetailedLint;
/**
 * Checks for explicit bounds checking when casting.
 */
export type CheckedConversions = LintLevel | DetailedLint;
/**
 * Checks for usage of `.drain(..)` for the sole purpose of clearing a container.
 */
export type ClearWithDrain = LintLevel | DetailedLint;
/**
 * Checks for usage of `.clone()` on a `Copy` type.
 */
export type CloneOnCopy = LintLevel | DetailedLint;
/**
 * Checks for usage of `.clone()` on a ref-counted pointer, (`Rc`, `Arc`, `rc::Weak`, or `sync::Weak`), and suggests calling Clone via unified function syntax instead (e.g., `Rc::clone(foo)`).
 */
export type CloneOnRefPtr = LintLevel | DetailedLint;
/**
 * Checks for usage of `cloned()` on an `Iterator` or `Option` where `copied()` could be used instead.
 */
export type ClonedInsteadOfCopied = LintLevel | DetailedLint;
/**
 * Checks for slice references with cloned references such as `&[f.clone()]`.
 */
export type ClonedRefToSliceRefs = LintLevel | DetailedLint;
/**
 * This lint checks for equality comparisons with `ptr::null` or `ptr::null_mut`
 */
export type CmpNull = LintLevel | DetailedLint;
/**
 * Checks for conversions to owned values just for the sake of a comparison.
 */
export type CmpOwned = LintLevel | DetailedLint;
/**
 * Protects against unintended coercion of references to container types to `&dyn Any` when the container type dereferences to a `dyn Any` which could be directly referenced instead.
 */
export type CoerceContainerToAny = LintLevel | DetailedLint;
/**
 * We used to think it measured how hard a method is to understand.
 */
export type CognitiveComplexity = LintLevel | DetailedLint;
/**
 * Checks for collapsible `else { if... }` expressions that can be collapsed to `else if...`.
 */
export type CollapsibleElseIf = LintLevel | DetailedLint;
/**
 * Checks for nested `if` statements which can be collapsed by `&&`-combining their conditions.
 */
export type CollapsibleIf = LintLevel | DetailedLint;
/**
 * Finds nested `match` or `if let` expressions where the patterns may be "collapsed" together without adding any branches.
 */
export type CollapsibleMatch = LintLevel | DetailedLint;
/**
 * Checks for consecutive calls to `str::replace` (2 or more) that can be collapsed into a single call.
 */
export type CollapsibleStrReplace = LintLevel | DetailedLint;
/**
 * Checks for collections that are never queried.
 */
export type CollectionIsNeverRead = LintLevel | DetailedLint;
/**
 * Checks comparison chains written with `if` that can be rewritten with `match` and `cmp`.
 */
export type ComparisonChain = LintLevel | DetailedLint;
/**
 * Checks for comparing to an empty slice such as `""` or `[]`, and suggests using `.is_empty()` where applicable.
 */
export type ComparisonToEmpty = LintLevel | DetailedLint;
/**
 * The `clippy::complexity` group offers lints that give you suggestions on how to simplify your code. It mostly focuses on code that can be written in a shorter and more readable way, while preserving the semantics.
 */
export type Complexity = LintLevel | DetailedLint;
/**
 * Checks for casts of a primitive method pointer like `max`/`min` to any integer type.
 */
export type ConfusingMethodToNumericCast = LintLevel | DetailedLint;
/**
 * It identifies calls to `.is_empty()` on constant values.
 */
export type ConstIsEmpty = LintLevel | DetailedLint;
/**
 * Checks for types that implement `Copy` as well as `Iterator`.
 */
export type CopyIterator = LintLevel | DetailedLint;
/**
 * The `clippy::correctness` group is the only lint group in Clippy which lints are deny-by-default and abort the compilation when triggered. This is for good reason: If you see a `correctness` lint, it means that your code is outright wrong or useless, and you should try to fix it.
 */
export type Correctness = LintLevel | DetailedLint;
/**
 * Checks for usage of `crate` as opposed to `$crate` in a macro definition.
 */
export type CrateInMacroDef = LintLevel | DetailedLint;
/**
 * Checks usage of `std::fs::create_dir` and suggest using `std::fs::create_dir_all` instead.
 */
export type CreateDir = LintLevel | DetailedLint;
/**
 * Checks for transmutes between a type `T` and `*T`.
 */
export type CrosspointerTransmute = LintLevel | DetailedLint;
/**
 * Checks for usage of the `dbg!` macro.
 */
export type DbgMacro = LintLevel | DetailedLint;
/**
 * Checks for function/method calls with a mutable parameter in `debug_assert!`, `debug_assert_eq!` and `debug_assert_ne!` macros.
 */
export type DebugAssertWithMutCall = LintLevel | DetailedLint;
/**
 * Checks for decimal literals used as bit masks in bitwise operations.
 */
export type DecimalBitwiseOperands = LintLevel | DetailedLint;
/**
 * Warns if there is a better representation for a numeric literal.
 */
export type DecimalLiteralRepresentation = LintLevel | DetailedLint;
/**
 * Checks for the declaration of named constant which contain interior mutability.
 */
export type DeclareInteriorMutableConst = LintLevel | DetailedLint;
/**
 * Checks for construction on unit struct using `default`.
 */
export type DefaultConstructedUnitStructs = LintLevel | DetailedLint;
/**
 * It checks for `std::iter::Empty::default()` and suggests replacing it with `std::iter::empty()`.
 */
export type DefaultInsteadOfIterEmpty = LintLevel | DetailedLint;
/**
 * Checks for usage of unconstrained numeric literals which may cause default numeric fallback in type inference.
 */
export type DefaultNumericFallback = LintLevel | DetailedLint;
/**
 * Checks for literal calls to `Default::default()`.
 */
export type DefaultTraitAccess = LintLevel | DetailedLint;
/**
 * Displays a warning when a union is declared with the default representation (without a `#[repr(C)]` attribute).
 */
export type DefaultUnionRepresentation = LintLevel | DetailedLint;
/**
 * The `clippy::deprecated` is empty lints that exist to ensure that `#[allow(lintname)]` still compiles after the lint was deprecated. Deprecation "removes" lints by removing their functionality and marking them as deprecated, which may cause further warnings but cannot cause a compiler error.
 */
export type Deprecated = LintLevel | DetailedLint;
/**
 * Checks for `#[cfg_attr(rustfmt, rustfmt_skip)]` and suggests to replace it with `#[rustfmt::skip]`.
 */
export type DeprecatedCfgAttr = LintLevel | DetailedLint;
/**
 * Checks for `#[cfg_attr(feature = "cargo-clippy",...)]` and for `#[cfg(feature = "cargo-clippy")]` and suggests to replace it with `#[cfg_attr(clippy,...)]` or `#[cfg(clippy)]`.
 */
export type DeprecatedClippyCfgAttr = LintLevel | DetailedLint;
/**
 * Checks for `#[deprecated]` annotations with a `since` field that is not a valid semantic version. Also allows "TBD" to signal future deprecation.
 */
export type DeprecatedSemver = LintLevel | DetailedLint;
/**
 * Checks for usage of `*&` and `*&mut` in expressions.
 */
export type DerefAddrof = LintLevel | DetailedLint;
/**
 * Checks for slicing expressions which are equivalent to dereferencing the value.
 */
export type DerefBySlicing = LintLevel | DetailedLint;
/**
 * Detects manual `std::default::Default` implementations that are identical to a derived implementation.
 */
export type DerivableImpls = LintLevel | DetailedLint;
/**
 * Lints against manual `PartialOrd` and `Ord` implementations for types with a derived `Ord` or `PartialOrd` implementation.
 */
export type DeriveOrdXorPartialOrd = LintLevel | DetailedLint;
/**
 * Checks for types that derive `PartialEq` and could implement `Eq`.
 */
export type DerivePartialEqWithoutEq = LintLevel | DetailedLint;
/**
 * Lints against manual `PartialEq` implementations for types with a derived `Hash` implementation.
 */
export type DerivedHashWithManualEq = LintLevel | DetailedLint;
/**
 * Denies the configured fields in clippy.toml
 */
export type DisallowedFields = LintLevel | DetailedLint;
/**
 * Denies the configured macros in clippy.toml
 */
export type DisallowedMacros = LintLevel | DetailedLint;
/**
 * Denies the configured methods and functions in clippy.toml
 */
export type DisallowedMethods = LintLevel | DetailedLint;
/**
 * Checks for usage of disallowed names for variables, such as `foo`.
 */
export type DisallowedNames = LintLevel | DetailedLint;
/**
 * Checks for usage of unicode scripts other than those explicitly allowed by the lint config.
 */
export type DisallowedScriptIdents = LintLevel | DetailedLint;
/**
 * Denies the configured types in clippy.toml.
 */
export type DisallowedTypes = LintLevel | DetailedLint;
/**
 * Checks for diverging calls that are not match arms or statements.
 */
export type DivergingSubExpression = LintLevel | DetailedLint;
/**
 * Checks the doc comments have unbroken links, mostly caused by bad formatted links such as broken across multiple lines.
 */
export type DocBrokenLink = LintLevel | DetailedLint;
/**
 * Detects doc comment linebreaks that use double spaces to separate lines, instead of back-slash (`\`).
 */
export type DocCommentDoubleSpaceLinebreaks = LintLevel | DetailedLint;
/**
 * Checks if included files in doc comments are included only for `cfg(doc)`.
 */
export type DocIncludeWithoutCfg = LintLevel | DetailedLint;
/**
 * In CommonMark Markdown, the language used to write doc comments, a paragraph nested within a list or block quote does not need any line after the first one to be indented or marked. The specification calls this a "lazy paragraph continuation."
 */
export type DocLazyContinuation = LintLevel | DetailedLint;
/**
 * Checks for links with code directly adjacent to code text: `[`MyItem`]` ``.
 */
export type DocLinkCode = LintLevel | DetailedLint;
/**
 * Detects the syntax `['foo']` in documentation comments (notice quotes instead of backticks) outside of code blocks
 */
export type DocLinkWithQuotes = LintLevel | DetailedLint;
/**
 * Checks for the presence of `_`, `::` or camel-case words outside ticks in documentation.
 */
export type DocMarkdown = LintLevel | DetailedLint;
/**
 * Warns if a link reference definition appears at the start of a list item or quote.
 */
export type DocNestedRefdefs = LintLevel | DetailedLint;
/**
 * Detects overindented list items in doc comments where the continuation lines are indented more than necessary.
 */
export type DocOverindentedListItems = LintLevel | DetailedLint;
/**
 * Checks for doc comments whose paragraphs do not end with a period or another punctuation mark. Various Markdowns constructs are taken into account to avoid false positives.
 */
export type DocParagraphsMissingPunctuation = LintLevel | DetailedLint;
/**
 * Detects syntax that looks like a footnote reference.
 */
export type DocSuspiciousFootnotes = LintLevel | DetailedLint;
/**
 * Checks for double comparisons that could be simplified to a single expression.
 */
export type DoubleComparisons = LintLevel | DetailedLint;
/**
 * Checks for `Iterator::last` being called on a `DoubleEndedIterator`, which can be replaced with `DoubleEndedIterator::next_back`.
 */
export type DoubleEndedIteratorLast = LintLevel | DetailedLint;
/**
 * Checks for a `#[must_use]` attribute without further information on functions and methods that return a type already marked as `#[must_use]`.
 */
export type DoubleMustUse = LintLevel | DetailedLint;
/**
 * Checks for unnecessary double parentheses.
 */
export type DoubleParens = LintLevel | DetailedLint;
/**
 * Checks for calls to `.drain()` that clear the collection, immediately followed by a call to `.collect()`.
 */
export type DrainCollect = LintLevel | DetailedLint;
/**
 * Checks for calls to `std::mem::drop` with a value that does not implement `Drop`.
 */
export type DropNonDrop = LintLevel | DetailedLint;
/**
 * Checks for files that are included as modules multiple times.
 */
export type DuplicateMod = LintLevel | DetailedLint;
/**
 * Checks for function arguments having the similar names differing by an underscore.
 */
export type DuplicateUnderscoreArgument = LintLevel | DetailedLint;
/**
 * Checks for attributes that appear two or more times.
 */
export type DuplicatedAttributes = LintLevel | DetailedLint;
/**
 * Checks for instances where a `std::time::Duration` is constructed using a smaller time unit when the value could be expressed more clearly using a larger unit.
 */
export type DurationSuboptimalUnits = LintLevel | DetailedLint;
/**
 * Checks for calculation of subsecond microseconds or milliseconds from other `Duration` methods.
 */
export type DurationSubsec = LintLevel | DetailedLint;
/**
 * Checks for integer validity checks, followed by a transmute that is (incorrectly) evaluated eagerly (e.g. using `bool::then_some`).
 */
export type EagerTransmute = LintLevel | DetailedLint;
/**
 * Checks for lifetime annotations which can be replaced with anonymous lifetimes (`'_`).
 */
export type ElidableLifetimeNames = LintLevel | DetailedLint;
/**
 * Checks for usage of if expressions with an `else if` branch, but without a final `else` branch.
 */
export type ElseIfWithoutElse = LintLevel | DetailedLint;
/**
 * Detects documentation that is empty.
 */
export type EmptyDocs = LintLevel | DetailedLint;
/**
 * Checks for empty `Drop` implementations.
 */
export type EmptyDrop = LintLevel | DetailedLint;
/**
 * Finds enum variants without fields that are declared with empty brackets.
 */
export type EmptyEnumVariantsWithBrackets = LintLevel | DetailedLint;
/**
 * Checks for `enum`s with no variants, which therefore are uninhabited types (cannot be instantiated).
 */
export type EmptyEnums = LintLevel | DetailedLint;
/**
 * Checks for empty lines after doc comments.
 */
export type EmptyLineAfterDocComments = LintLevel | DetailedLint;
/**
 * Checks for empty lines after outer attributes
 */
export type EmptyLineAfterOuterAttr = LintLevel | DetailedLint;
/**
 * Checks for empty `loop` expressions.
 */
export type EmptyLoop = LintLevel | DetailedLint;
/**
 * Finds structs without fields (a so-called "empty struct") that are declared with brackets.
 */
export type EmptyStructsWithBrackets = LintLevel | DetailedLint;
/**
 * Checks for C-like enumerations that are `repr(isize/usize)` and have values that don't fit into an `i32`.
 */
export type EnumClikeUnportableVariant = LintLevel | DetailedLint;
/**
 * Checks for `use Enum::*`.
 */
export type EnumGlobUse = LintLevel | DetailedLint;
/**
 * Detects enumeration variants that are prefixed or suffixed by the same characters.
 */
export type EnumVariantNames = LintLevel | DetailedLint;
/**
 * Checks for equal operands to comparison, logical and bitwise, difference and division binary operators (`==`, `>`, etc., `&&`, `||`, `&`, `|`, `^`, `-` and `/`).
 */
export type EqOp = LintLevel | DetailedLint;
/**
 * Checks for pattern matchings that can be expressed using equality.
 */
export type EquatableIfLet = LintLevel | DetailedLint;
/**
 * Checks for erasing operations, e.g., `x * 0`.
 */
export type ErasingOp = LintLevel | DetailedLint;
/**
 * Checks for `.err().expect()` calls on the `Result` type.
 */
export type ErrExpect = LintLevel | DetailedLint;
/**
 * Checks for types named `Error` that implement `Error`.
 */
export type ErrorImplError = LintLevel | DetailedLint;
/**
 * Checks for blocks which are nested beyond a certain threshold.
 */
export type ExcessiveNesting = LintLevel | DetailedLint;
/**
 * Checks for float literals with a precision greater than that supported by the underlying type.
 */
export type ExcessivePrecision = LintLevel | DetailedLint;
/**
 * Warns on any exported `enum`s that are not tagged `#[non_exhaustive]`
 */
export type ExhaustiveEnums = LintLevel | DetailedLint;
/**
 * Warns on any exported `struct`s that are not tagged `#[non_exhaustive]`
 */
export type ExhaustiveStructs = LintLevel | DetailedLint;
/**
 * Detects calls to the `exit()` function that are not in the `main` function. Calls to `exit()` immediately terminate the program.
 */
export type Exit = LintLevel | DetailedLint;
/**
 * Checks for calls to `.expect(&format!(...))`, `.expect(foo(..))`, etc., and suggests to use `unwrap_or_else` instead
 */
export type ExpectFunCall = LintLevel | DetailedLint;
/**
 * Checks for `.expect()` or `.expect_err()` calls on `Result`s and `.expect()` call on `Option`s.
 */
export type ExpectUsed = LintLevel | DetailedLint;
/**
 * Checks for explicit `Clone` implementations for `Copy` types.
 */
export type ExplImplCloneOnCopy = LintLevel | DetailedLint;
/**
 * Checks for dereferencing expressions which would be covered by auto-deref.
 */
export type ExplicitAutoDeref = LintLevel | DetailedLint;
/**
 * Checks `for` loops over slices with an explicit counter and suggests the use of `.enumerate()`.
 */
export type ExplicitCounterLoop = LintLevel | DetailedLint;
/**
 * Checks for explicit `deref()` or `deref_mut()` method calls.
 */
export type ExplicitDerefMethods = LintLevel | DetailedLint;
/**
 * Checks for loops on `y.into_iter()` where `y` will do, and suggests the latter.
 */
export type ExplicitIntoIterLoop = LintLevel | DetailedLint;
/**
 * Checks for loops on `x.iter()` where `&x` will do, and suggests the latter.
 */
export type ExplicitIterLoop = LintLevel | DetailedLint;
/**
 * Checks for usage of `write!()` / `writeln()!` which can be replaced with `(e)print!()` / `(e)println!()`
 */
export type ExplicitWrite = LintLevel | DetailedLint;
/**
 * Nothing. This lint has been deprecated
 */
export type ExtendFromSlice = LintLevel | DetailedLint;
/**
 * Checks for occurrences where one vector gets extended instead of append
 */
export type ExtendWithDrain = LintLevel | DetailedLint;
/**
 * Checks for lifetimes in generics that are never used anywhere else.
 */
export type ExtraUnusedLifetimes = LintLevel | DetailedLint;
/**
 * Checks for type parameters in generics that are never used anywhere else.
 */
export type ExtraUnusedTypeParameters = LintLevel | DetailedLint;
/**
 * Checks for impls of `From ` that contain `panic!()` or `unwrap()`
 */
export type FallibleImplFrom = LintLevel | DetailedLint;
/**
 * Checks for immediate reassignment of fields initialized with Default::default().
 */
export type FieldReassignWithDefault = LintLevel | DetailedLint;
/**
 * Checks for usage of scoped visibility modifiers, like `pub(crate)`, on fields. These make a field visible within a scope between public and private.
 */
export type FieldScopedVisibilityModifiers = LintLevel | DetailedLint;
/**
 * Checks for `FileType::is_file()`.
 */
export type FiletypeIsFile = LintLevel | DetailedLint;
/**
 * Checks for usage of `bool::then` in `Iterator::filter_map`.
 */
export type FilterMapBoolThen = LintLevel | DetailedLint;
/**
 * Checks for usage of `filter_map(|x| x)`.
 */
export type FilterMapIdentity = LintLevel | DetailedLint;
/**
 * Checks for usage of `_.filter_map(_).next()`.
 */
export type FilterMapNext = LintLevel | DetailedLint;
/**
 * Checks for usage of `_.filter(_).next()`.
 */
export type FilterNext = LintLevel | DetailedLint;
/**
 * Checks for usage of `flat_map(|x| x)`.
 */
export type FlatMapIdentity = LintLevel | DetailedLint;
/**
 * Checks for usage of `Iterator::flat_map()` where `filter_map()` could be used instead.
 */
export type FlatMapOption = LintLevel | DetailedLint;
/**
 * Checks for float arithmetic.
 */
export type FloatArithmetic = LintLevel | DetailedLint;
/**
 * Checks for (in-)equality comparisons on floating-point values (apart from zero), except in functions called `*eq*` (which probably implement equality for a type involving floats).
 */
export type FloatCmp = LintLevel | DetailedLint;
/**
 * Checks for (in-)equality comparisons on constant floating-point values (apart from zero), except in functions called `*eq*` (which probably implement equality for a type involving floats).
 */
export type FloatCmpConst = LintLevel | DetailedLint;
/**
 * Checks for statements of the form `(a - b)
 */
export type FloatEqualityWithoutAbs = LintLevel | DetailedLint;
/**
 * Checks for excessive use of bools in function definitions.
 */
export type FnParamsExcessiveBools = LintLevel | DetailedLint;
/**
 * Checks for casts of function pointers to something other than `usize`.
 */
export type FnToNumericCast = LintLevel | DetailedLint;
/**
 * Checks for casts of a function pointer to any integer type.
 */
export type FnToNumericCastAny = LintLevel | DetailedLint;
/**
 * Checks for casts of a function pointer to a numeric type not wide enough to store an address.
 */
export type FnToNumericCastWithTruncation = LintLevel | DetailedLint;
/**
 * Checks for iterating a map (`HashMap` or `BTreeMap`) and ignoring either the keys or values.
 */
export type ForKvMap = LintLevel | DetailedLint;
/**
 * Checks for calls to `std::mem::forget` with a value that does not implement `Drop`.
 */
export type ForgetNonDrop = LintLevel | DetailedLint;
/**
 * Checks for usage of `.map(|_| format!(..)).collect:: ()`.
 */
export type FormatCollect = LintLevel | DetailedLint;
/**
 * Detects `format!` within the arguments of another macro that does formatting such as `format!` itself, `write!` or `println!`. Suggests inlining the `format!` call.
 */
export type FormatInFormatArgs = LintLevel | DetailedLint;
/**
 * Detects cases where the result of a `format!` call is appended to an existing `String`.
 */
export type FormatPushString = LintLevel | DetailedLint;
/**
 * Checks for outer doc comments written with 4 forward slashes (`////`).
 */
export type FourForwardSlashes = LintLevel | DetailedLint;
/**
 * Checks for `from_iter()` function calls on types that implement the `FromIterator` trait.
 */
export type FromIterInsteadOfCollect = LintLevel | DetailedLint;
/**
 * Searches for implementations of the `Into ` trait and suggests to implement `From ` instead.
 */
export type FromOverInto = LintLevel | DetailedLint;
/**
 * Checks if we're passing a `c_void` raw pointer to `{Box,Rc,Arc,Weak}::from_raw(_)`
 */
export type FromRawWithVoidPtr = LintLevel | DetailedLint;
/**
 * Checks for function invocations of the form `primitive::from_str_radix(s, 10)`
 */
export type FromStrRadix10 = LintLevel | DetailedLint;
/**
 * This lint requires Future implementations returned from functions and methods to implement the `Send` marker trait, ignoring type parameters.
 */
export type FutureNotSend = LintLevel | DetailedLint;
/**
 * Checks for usage of `x.get(0)` instead of `x.first()` or `x.front()`.
 */
export type GetFirst = LintLevel | DetailedLint;
/**
 * Checks for usage of `x.get(x.len() - 1)` instead of `x.last()`.
 */
export type GetLastWithLen = LintLevel | DetailedLint;
/**
 * Checks for usage of `.get().unwrap()` (or `.get_mut().unwrap`) on a standard library type which implements `Index`
 */
export type GetUnwrap = LintLevel | DetailedLint;
/**
 * Checks for the usage of the `to_ne_bytes` method and/or the function `from_ne_bytes`.
 */
export type HostEndianBytes = LintLevel | DetailedLint;
/**
 * Checks for identity operations, e.g., `x + 0`.
 */
export type IdentityOp = LintLevel | DetailedLint;
/**
 * Checks for `Mutex::lock` calls in `if let` expression with lock calls in any of the else blocks.
 */
export type IfLetMutex = LintLevel | DetailedLint;
/**
 * Checks for usage of `!` or `!=` in an if condition with an else branch.
 */
export type IfNotElse = LintLevel | DetailedLint;
/**
 * Checks for `if/else` with the same body as the then part and the else part.
 */
export type IfSameThenElse = LintLevel | DetailedLint;
/**
 * Checks for if-else that could be written using either `bool::then` or `bool::then_some`.
 */
export type IfThenSomeElseNone = LintLevel | DetailedLint;
/**
 * Checks for consecutive `if`s with the same condition.
 */
export type IfsSameCond = LintLevel | DetailedLint;
/**
 * Checks for ignored tests without messages.
 */
export type IgnoreWithoutReason = LintLevel | DetailedLint;
/**
 * Checks for usage of `_` in patterns of type `()`.
 */
export type IgnoredUnitPatterns = LintLevel | DetailedLint;
/**
 * This lint is concerned with the semantics of `Borrow` and `Hash` for a type that implements all three of `Hash`, `Borrow ` and `Borrow ` as it is impossible to satisfy the semantics of Borrow and `Hash` for both `Borrow ` and `Borrow `.
 */
export type ImplHashBorrowWithStrAndBytes = LintLevel | DetailedLint;
/**
 * Lints when `impl Trait` is being used in a function's parameters.
 */
export type ImplTraitInParams = LintLevel | DetailedLint;
/**
 * Checks for the usage of `_.to_owned()`, `vec.to_vec()`, or similar when calling `_.clone()` would be clearer.
 */
export type ImplicitClone = LintLevel | DetailedLint;
/**
 * Checks for public `impl` or `fn` missing generalization over different hashers and implicitly defaulting to the default hashing algorithm (`SipHash`).
 */
export type ImplicitHasher = LintLevel | DetailedLint;
/**
 * Checks for missing return statements at the end of a block.
 */
export type ImplicitReturn = LintLevel | DetailedLint;
/**
 * Checks for implicit saturating addition.
 */
export type ImplicitSaturatingAdd = LintLevel | DetailedLint;
/**
 * Checks for implicit saturating subtraction.
 */
export type ImplicitSaturatingSub = LintLevel | DetailedLint;
/**
 * Looks for bounds in `impl Trait` in return position that are implied by other bounds. This can happen when a trait is specified that another trait already has as a supertrait (e.g. `fn() -> impl Deref + DerefMut ` has an unnecessary `Deref` bound, because `Deref` is a supertrait of `DerefMut`)
 */
export type ImpliedBoundsInImpls = LintLevel | DetailedLint;
/**
 * Checks for double comparisons that can never succeed
 */
export type ImpossibleComparisons = LintLevel | DetailedLint;
/**
 * Looks for floating-point expressions that can be expressed using built-in methods to improve accuracy at the cost of performance.
 */
export type ImpreciseFlops = LintLevel | DetailedLint;
/**
 * This lint checks that no function newer than the defined MSRV (minimum supported rust version) is used in the crate.
 */
export type IncompatibleMsrv = LintLevel | DetailedLint;
/**
 * Warns if an integral or floating-point constant is grouped inconsistently with underscores.
 */
export type InconsistentDigitGrouping = LintLevel | DetailedLint;
/**
 * Checks for struct constructors where the order of the field init in the constructor is inconsistent with the order in the struct definition.
 */
export type InconsistentStructConstructor = LintLevel | DetailedLint;
/**
 * The lint checks for slice bindings in patterns that are only used to access individual slice values.
 */
export type IndexRefutableSlice = LintLevel | DetailedLint;
/**
 * Checks for usage of indexing or slicing that may panic at runtime.
 */
export type IndexingSlicing = LintLevel | DetailedLint;
/**
 * Checks for bit masks in comparisons which can be removed without changing the outcome. The basic structure can be seen in the following table:
 */
export type IneffectiveBitMask = LintLevel | DetailedLint;
/**
 * Checks if both `.write(true)` and `.append(true)` methods are called on a same `OpenOptions`.
 */
export type IneffectiveOpenOptions = LintLevel | DetailedLint;
/**
 * Checks for usage of `.to_string()` on an `&&T` where `T` implements `ToString` directly (like `&&str` or `&&String`).
 */
export type InefficientToString = LintLevel | DetailedLint;
/**
 * Checks for matches being used to destructure a single-variant enum or tuple struct where a `let` will suffice.
 */
export type InfallibleDestructuringMatch = LintLevel | DetailedLint;
/**
 * Finds manual impls of `TryFrom` with infallible error types.
 */
export type InfallibleTryFrom = LintLevel | DetailedLint;
/**
 * Checks for iteration that is guaranteed to be infinite.
 */
export type InfiniteIter = LintLevel | DetailedLint;
/**
 * Checks for infinite loops in a function where the return type is not `!` and lint accordingly.
 */
export type InfiniteLoop = LintLevel | DetailedLint;
/**
 * Checks for the definition of inherent methods with a signature of `to_string(&self) -> String`.
 */
export type InherentToString = LintLevel | DetailedLint;
/**
 * Checks for the definition of inherent methods with a signature of `to_string(&self) -> String` and if the type implementing this method also implements the `Display` trait.
 */
export type InherentToStringShadowDisplay = LintLevel | DetailedLint;
/**
 * Checks for tuple structs initialized with field syntax. It will however not lint if a base initializer is present. The lint will also ignore code in macros.
 */
export type InitNumberedFields = LintLevel | DetailedLint;
/**
 * Checks for items annotated with `#[inline(always)]`, unless the annotated function is empty or simply panics.
 */
export type InlineAlways = LintLevel | DetailedLint;
/**
 * Checks for usage of AT&T x86 assembly syntax.
 */
export type InlineAsmX86AttSyntax = LintLevel | DetailedLint;
/**
 * Checks for usage of Intel x86 assembly syntax.
 */
export type InlineAsmX86IntelSyntax = LintLevel | DetailedLint;
/**
 * Checks for `#[inline]` on trait methods without bodies
 */
export type InlineFnWithoutBody = LintLevel | DetailedLint;
/**
 * Checks for usage of `inspect().for_each()`.
 */
export type InspectForEach = LintLevel | DetailedLint;
/**
 * Checks for usage of `x >= y + 1` or `x - 1 >= y` (and `
 */
export type IntPlusOne = LintLevel | DetailedLint;
/**
 * Checks for division of integers
 */
export type IntegerDivision = LintLevel | DetailedLint;
/**
 * Checks for the usage of division (`/`) and remainder (`%`) operations when performed on any integer types using the default `Div` and `Rem` trait implementations.
 */
export type IntegerDivisionRemainderUsed = LintLevel | DetailedLint;
/**
 * Checks for `into_iter` calls on references which should be replaced by `iter` or `iter_mut`.
 */
export type IntoIterOnRef = LintLevel | DetailedLint;
/**
 * This is the opposite of the `iter_without_into_iter` lint. It looks for `IntoIterator for (&|&mut) Type` implementations without an inherent `iter` or `iter_mut` method on the type or on any of the types in its `Deref` chain.
 */
export type IntoIterWithoutIter = LintLevel | DetailedLint;
/**
 * Checks regex creation (with `Regex::new`, `RegexBuilder::new`, or `RegexSet::new`) for correct regex syntax.
 */
export type InvalidRegex = LintLevel | DetailedLint;
/**
 * Checks for comparisons where the relation is always either true or false, but where one side has been upcast so that the comparison is necessary. Only integer types are checked.
 */
export type InvalidUpcastComparisons = LintLevel | DetailedLint;
/**
 * Checks for comparisons between integers, followed by subtracting the greater value from the lower one.
 */
export type InvertedSaturatingSub = LintLevel | DetailedLint;
/**
 * Checks for invisible Unicode characters in the code.
 */
export type InvisibleCharacters = LintLevel | DetailedLint;
/**
 * This lint warns on calling `io::Error::new(..)` with a kind of `io::ErrorKind::Other`.
 */
export type IoOtherError = LintLevel | DetailedLint;
/**
 * Checks for IP addresses that could be replaced with predefined constants such as `Ipv4Addr::new(127, 0, 0, 1)` instead of using the appropriate constants.
 */
export type IpConstant = LintLevel | DetailedLint;
/**
 * Finds usages of `char::is_digit` that can be replaced with `is_ascii_digit` or `is_ascii_hexdigit`.
 */
export type IsDigitAsciiRadix = LintLevel | DetailedLint;
/**
 * Checks for items declared after some statement in a block.
 */
export type ItemsAfterStatements = LintLevel | DetailedLint;
/**
 * Triggers if an item is declared after the testing module marked with `#[cfg(test)]`.
 */
export type ItemsAfterTestModule = LintLevel | DetailedLint;
/**
 * Checks for the use of `.cloned().collect()` on slice to create a `Vec`.
 */
export type IterClonedCollect = LintLevel | DetailedLint;
/**
 * Checks for the use of `.iter().count()`.
 */
export type IterCount = LintLevel | DetailedLint;
/**
 * Checks for usage of `.filter(Result::is_ok)` that may be replaced with a `.flatten()` call. This lint will require additional changes to the follow-up calls as it affects the type.
 */
export type IterFilterIsOk = LintLevel | DetailedLint;
/**
 * Checks for usage of `.filter(Option::is_some)` that may be replaced with a `.flatten()` call. This lint will require additional changes to the follow-up calls as it affects the type.
 */
export type IterFilterIsSome = LintLevel | DetailedLint;
/**
 * Checks for iterating a map (`HashMap` or `BTreeMap`) and ignoring either the keys or values.
 */
export type IterKvMap = LintLevel | DetailedLint;
/**
 * Checks for loops on `x.next()`.
 */
export type IterNextLoop = LintLevel | DetailedLint;
/**
 * Checks for usage of `iter().next()` on a Slice or an Array
 */
export type IterNextSlice = LintLevel | DetailedLint;
/**
 * Detects methods named `iter` or `iter_mut` that do not have a return type that implements `Iterator`.
 */
export type IterNotReturningIterator = LintLevel | DetailedLint;
/**
 * Checks for usage of `.iter().nth()`/`.iter_mut().nth()` on standard library types that have equivalent `.get()`/`.get_mut()` methods.
 */
export type IterNth = LintLevel | DetailedLint;
/**
 * Checks for the use of `iter.nth(0)`.
 */
export type IterNthZero = LintLevel | DetailedLint;
/**
 * Checks for calls to `iter`, `iter_mut` or `into_iter` on empty collections
 */
export type IterOnEmptyCollections = LintLevel | DetailedLint;
/**
 * Checks for calls to `iter`, `iter_mut` or `into_iter` on collections containing a single item
 */
export type IterOnSingleItems = LintLevel | DetailedLint;
/**
 * Looks for iterator combinator calls such as `.take(x)` or `.skip(x)` where `x` is greater than the amount of items that an iterator will produce.
 */
export type IterOutOfBounds = LintLevel | DetailedLint;
/**
 * This is a restriction lint which prevents the use of hash types (i.e., `HashSet` and `HashMap`) in for loops.
 */
export type IterOverHashType = LintLevel | DetailedLint;
/**
 * Checks for usage of `_.cloned(). ()` where call to `.cloned()` can be postponed.
 */
export type IterOvereagerCloned = LintLevel | DetailedLint;
/**
 * Checks for usage of `.skip(x).next()` on iterators.
 */
export type IterSkipNext = LintLevel | DetailedLint;
/**
 * Checks for usage of `.skip(0)` on iterators.
 */
export type IterSkipZero = LintLevel | DetailedLint;
/**
 * Checks for usage of `.drain(..)` on `Vec` and `VecDeque` for iteration.
 */
export type IterWithDrain = LintLevel | DetailedLint;
/**
 * Looks for `iter` and `iter_mut` methods without an associated `IntoIterator for (&|&mut) Type` implementation.
 */
export type IterWithoutIntoIter = LintLevel | DetailedLint;
/**
 * Checks for calling `.step_by(0)` on iterators which panics.
 */
export type IteratorStepByZero = LintLevel | DetailedLint;
/**
 * Checks for calls to `Path::join` that start with a path separator (`\\` or `/`).
 */
export type JoinAbsolutePaths = LintLevel | DetailedLint;
/**
 * Checks if you have variables whose name consists of just underscores and digits.
 */
export type JustUnderscoresAndDigits = LintLevel | DetailedLint;
/**
 * Checks for large `const` arrays that should be defined as `static` instead.
 */
export type LargeConstArrays = LintLevel | DetailedLint;
/**
 * Warns if the digits of an integral or floating-point constant are grouped into groups that are too large.
 */
export type LargeDigitGroups = LintLevel | DetailedLint;
/**
 * Checks for large size differences between variants on `enum`s.
 */
export type LargeEnumVariant = LintLevel | DetailedLint;
/**
 * It checks for the size of a `Future` created by `async fn` or `async {}`.
 */
export type LargeFutures = LintLevel | DetailedLint;
/**
 * Checks for the inclusion of large files via `include_bytes!()` or `include_str!()`.
 */
export type LargeIncludeFile = LintLevel | DetailedLint;
/**
 * Checks for local arrays that may be too large.
 */
export type LargeStackArrays = LintLevel | DetailedLint;
/**
 * Checks for functions that use a lot of stack space.
 */
export type LargeStackFrames = LintLevel | DetailedLint;
/**
 * Checks for functions taking arguments by value, where the argument type is `Copy` and large enough to be worth considering passing by reference. Does not trigger if the function is being exported, because that might induce API breakage, if the parameter is declared as mutable, or if the argument is a `self`.
 */
export type LargeTypesPassedByValue = LintLevel | DetailedLint;
/**
 * Checks for usage of `::max_value()`, `std::::MAX`, `std::::EPSILON`, etc.
 */
export type LegacyNumericConstants = LintLevel | DetailedLint;
/**
 * Checks for items that implement `.len()` but not `.is_empty()`.
 */
export type LenWithoutIsEmpty = LintLevel | DetailedLint;
/**
 * Checks for getting the length of something via `.len()` just to compare to zero, and suggests using `.is_empty()` where applicable.
 */
export type LenZero = LintLevel | DetailedLint;
/**
 * Checks for `let`-bindings, which are subsequently returned.
 */
export type LetAndReturn = LintLevel | DetailedLint;
/**
 * Checks for `let _ = ` where the resulting type of expr implements `Future`
 */
export type LetUnderscoreFuture = LintLevel | DetailedLint;
/**
 * Checks for `let _ = sync_lock`. This supports `mutex` and `rwlock` in `parking_lot`. For `std` locks see the `rustc` lint `let_underscore_lock`
 */
export type LetUnderscoreLock = LintLevel | DetailedLint;
/**
 * Checks for `let _ = ` where expr is `#[must_use]`
 */
export type LetUnderscoreMustUse = LintLevel | DetailedLint;
/**
 * Checks for `let _ = ` without a type annotation, and suggests to either provide one, or remove the `let` keyword altogether.
 */
export type LetUnderscoreUntyped = LintLevel | DetailedLint;
/**
 * Checks for binding a unit value.
 */
export type LetUnitValue = LintLevel | DetailedLint;
/**
 * Detects when a variable is declared with an explicit type of `_`.
 */
export type LetWithTypeUnderscore = LintLevel | DetailedLint;
/**
 * Checks for usage of `lines.filter_map(Result::ok)` or `lines.flat_map(Result::ok)` when `lines` has type `std::io::Lines`.
 */
export type LinesFilterMapOk = LintLevel | DetailedLint;
/**
 * Checks for usage of any `LinkedList`, suggesting to use a `Vec` or a `VecDeque` (formerly called `RingBuf`).
 */
export type Linkedlist = LintLevel | DetailedLint;
/**
 * Checks for lint groups with the same priority as lints in the `Cargo.toml` `[lints]` table.
 */
export type LintGroupsPriority = LintLevel | DetailedLint;
/**
 * Checks if string literals have formatting arguments outside of macros using them (like `format!`).
 */
export type LiteralStringWithFormattingArgs = LintLevel | DetailedLint;
/**
 * Checks for the usage of the `to_le_bytes` method and/or the function `from_le_bytes`.
 */
export type LittleEndianBytes = LintLevel | DetailedLint;
/**
 * Checks for whole number float literals that cannot be represented as the underlying type without loss.
 */
export type LossyFloatLiteral = LintLevel | DetailedLint;
/**
 * Looks for macros that expand metavariables in an unsafe block.
 */
export type MacroMetavarsInUnsafe = LintLevel | DetailedLint;
/**
 * Checks for `#[macro_use] use...`.
 */
export type MacroUseImports = LintLevel | DetailedLint;
/**
 * Checks for recursion using the entrypoint.
 */
export type MainRecursion = LintLevel | DetailedLint;
/**
 * Detects patterns like `if a > b { a - b } else { b - a }` and suggests using `a.abs_diff(b)`.
 */
export type ManualAbsDiff = LintLevel | DetailedLint;
/**
 * Detects `if`-then-`panic!` that can be replaced with `assert!`.
 */
export type ManualAssert = LintLevel | DetailedLint;
/**
 * It checks for manual implementations of `async` functions.
 */
export type ManualAsyncFn = LintLevel | DetailedLint;
/**
 * Checks for usage of `size_of:: () * 8` when `T::BITS` is available.
 */
export type ManualBits = LintLevel | DetailedLint;
/**
 * Checks for the manual creation of C strings (a string with a `NUL` byte at the end), either through one of the `CStr` constructor functions, or more plainly by calling `.as_ptr()` on a (byte) string literal with a hardcoded `\0` byte at the end.
 */
export type ManualCStrLiterals = LintLevel | DetailedLint;
/**
 * Detects manual zero checks before dividing integers, such as `if x!= 0 { y / x }`.
 */
export type ManualCheckedOps = LintLevel | DetailedLint;
/**
 * Identifies good opportunities for a clamp function from std or core, and suggests using it.
 */
export type ManualClamp = LintLevel | DetailedLint;
/**
 * Checks for usage of `iter().any()` on slices when it can be replaced with `contains()` and suggests doing so.
 */
export type ManualContains = LintLevel | DetailedLint;
/**
 * Checks for casts of small constant literals or `mem::align_of` results to raw pointers.
 */
export type ManualDanglingPtr = LintLevel | DetailedLint;
/**
 * Checks for an expression like `(x + (y - 1)) / y` which is a common manual reimplementation of `x.div_ceil(y)`.
 */
export type ManualDivCeil = LintLevel | DetailedLint;
/**
 * Checks for usage of `match` which could be implemented using `filter`
 */
export type ManualFilter = LintLevel | DetailedLint;
/**
 * Checks for usage of `_.filter(_).map(_)` that can be written more simply as `filter_map(_)`.
 */
export type ManualFilterMap = LintLevel | DetailedLint;
/**
 * Checks for manual implementations of Iterator::find
 */
export type ManualFind = LintLevel | DetailedLint;
/**
 * Checks for usage of `_.find(_).map(_)` that can be written more simply as `find_map(_)`.
 */
export type ManualFindMap = LintLevel | DetailedLint;
/**
 * Checks for unnecessary `if let` usage in a for loop where only the `Some` or `Ok` variant of the iterator element is used.
 */
export type ManualFlatten = LintLevel | DetailedLint;
/**
 * Checks for cases where `BuildHasher::hash_one` can be used.
 */
export type ManualHashOne = LintLevel | DetailedLint;
/**
 * Checks for manual case-insensitive ASCII comparison.
 */
export type ManualIgnoreCaseCmp = LintLevel | DetailedLint;
/**
 * Checks for expressions like `N - x.leading_zeros()` (where `N` is one less than bit width of `x`) or `x.ilog(2)`, which are manual reimplementations of `x.ilog2()`
 */
export type ManualIlog2 = LintLevel | DetailedLint;
/**
 * Checks for uses of `map` which return the original item.
 */
export type ManualInspect = LintLevel | DetailedLint;
/**
 * Lints subtraction between `Instant::now()` and another `Instant`.
 */
export type ManualInstantElapsed = LintLevel | DetailedLint;
/**
 * Suggests to use dedicated built-in methods, `is_ascii_(lowercase|uppercase|digit|hexdigit)` for checking on corresponding ascii range
 */
export type ManualIsAsciiCheck = LintLevel | DetailedLint;
/**
 * Checks for manual `is_finite` reimplementations (i.e., `x!=::INFINITY && x!=::NEG_INFINITY`).
 */
export type ManualIsFinite = LintLevel | DetailedLint;
/**
 * Checks for manual `is_infinite` reimplementations (i.e., `x ==::INFINITY || x ==::NEG_INFINITY`).
 */
export type ManualIsInfinite = LintLevel | DetailedLint;
/**
 * Checks for manual implementation of `.is_multiple_of()` on unsigned integer types.
 */
export type ManualIsMultipleOf = LintLevel | DetailedLint;
/**
 * Checks for expressions like `x.count_ones() == 1` or `x & (x - 1) == 0`, with x and unsigned integer, which may be manual reimplementations of `x.is_power_of_two()`.
 */
export type ManualIsPowerOfTwo = LintLevel | DetailedLint;
/**
 * Checks for usage of `option.map(f).unwrap_or_default()` and `result.map(f).unwrap_or_default()` where `f` is a function or closure that returns the `bool` type.
 */
export type ManualIsVariantAnd = LintLevel | DetailedLint;
/**
 * Warn of cases where `let...else` could be used
 */
export type ManualLetElse = LintLevel | DetailedLint;
/**
 * Checks for references on `std::path::MAIN_SEPARATOR.to_string()` used to build a `&str`.
 */
export type ManualMainSeparatorStr = LintLevel | DetailedLint;
/**
 * Checks for usage of `match` which could be implemented using `map`
 */
export type ManualMap = LintLevel | DetailedLint;
/**
 * Checks for for-loops that manually copy items between slices that could be optimized by having a memcpy.
 */
export type ManualMemcpy = LintLevel | DetailedLint;
/**
 * Checks for manual implementation of `midpoint`.
 */
export type ManualMidpoint = LintLevel | DetailedLint;
/**
 * Checks for `.rev().next()` on a `DoubleEndedIterator`
 */
export type ManualNextBack = LintLevel | DetailedLint;
/**
 * Checks for manual implementations of the non-exhaustive pattern.
 */
export type ManualNonExhaustive = LintLevel | DetailedLint;
/**
 * Checks for manual implementations of `std::task::Wake` that are empty.
 */
export type ManualNoopWaker = LintLevel | DetailedLint;
/**
 * Checks for manual implementation of `.ok()` or `.err()` on `Result` values.
 */
export type ManualOkErr = LintLevel | DetailedLint;
/**
 * Finds patterns that reimplement `Option::ok_or`.
 */
export type ManualOkOr = LintLevel | DetailedLint;
/**
 * This detects various manual reimplementations of `Option::as_slice`.
 */
export type ManualOptionAsSlice = LintLevel | DetailedLint;
/**
 * Checks for usage of `a.and_then(|a| b.map(|b| (a, b)))` which can be more concisely expressed as `a.zip(b)`.
 */
export type ManualOptionZip = LintLevel | DetailedLint;
/**
 * Checks for manual `char` comparison in string patterns
 */
export type ManualPatternCharComparison = LintLevel | DetailedLint;
/**
 * Checks for code to be replaced by `pop_if` methods.
 */
export type ManualPopIf = LintLevel | DetailedLint;
/**
 * Checks for expressions like `x >= 3 && x
 */
export type ManualRangeContains = LintLevel | DetailedLint;
/**
 * Looks for combined OR patterns that are all contained in a specific range, e.g. `6 | 4 | 5 | 9 | 7 | 8` can be rewritten as `4..=9`.
 */
export type ManualRangePatterns = LintLevel | DetailedLint;
/**
 * Checks for an expression like `((x % 4) + 4) % 4` which is a common manual reimplementation of `x.rem_euclid(4)`.
 */
export type ManualRemEuclid = LintLevel | DetailedLint;
/**
 * Checks for `repeat().take()` that can be replaced with `repeat_n()`.
 */
export type ManualRepeatN = LintLevel | DetailedLint;
/**
 * Checks for code to be replaced by `.retain()`.
 */
export type ManualRetain = LintLevel | DetailedLint;
/**
 * It detects manual bit rotations that could be rewritten using standard functions `rotate_left` or `rotate_right`.
 */
export type ManualRotate = LintLevel | DetailedLint;
/**
 * Checks for `.checked_add/sub(x).unwrap_or(MAX/MIN)`.
 */
export type ManualSaturatingArithmetic = LintLevel | DetailedLint;
/**
 * Checks for manually filling a slice with a value.
 */
export type ManualSliceFill = LintLevel | DetailedLint;
/**
 * When `a` is `&[T]`, detect `a.len() * size_of:: ()` and suggest `size_of_val(a)` instead.
 */
export type ManualSliceSizeCalculation = LintLevel | DetailedLint;
/**
 * Checks for usage of `str::splitn(2, _)`
 */
export type ManualSplitOnce = LintLevel | DetailedLint;
/**
 * Checks for manual implementations of `str::repeat`
 */
export type ManualStrRepeat = LintLevel | DetailedLint;
/**
 * Checks for usage of `""` to create a `String`, such as `"".to_string()`, `"".to_owned()`, `String::from("")` and others.
 */
export type ManualStringNew = LintLevel | DetailedLint;
/**
 * Suggests using `strip_{prefix,suffix}` over `str::{starts,ends}_with` and slicing using the pattern's length.
 */
export type ManualStrip = LintLevel | DetailedLint;
/**
 * Checks for manual swapping.
 */
export type ManualSwap = LintLevel | DetailedLint;
/**
 * Detects manual re-implementations of `std::mem::take`.
 */
export type ManualTake = LintLevel | DetailedLint;
/**
 * Checks for usage of `Iterator::fold` with a type that implements `Try`.
 */
export type ManualTryFold = LintLevel | DetailedLint;
/**
 * Finds patterns that reimplement `Option::unwrap_or` or `Result::unwrap_or`.
 */
export type ManualUnwrapOr = LintLevel | DetailedLint;
/**
 * Checks if a `match` or `if let` expression can be simplified using `.unwrap_or_default()`.
 */
export type ManualUnwrapOrDefault = LintLevel | DetailedLint;
/**
 * Looks for loops that check for emptiness of a `Vec` in the condition and pop an element in the body as a separate operation.
 */
export type ManualWhileLetSome = LintLevel | DetailedLint;
/**
 * Checks for too many variables whose name consists of a single character.
 */
export type ManySingleCharNames = LintLevel | DetailedLint;
/**
 * Checks for usage of `.map(…)`, followed by `.all(identity)` or `.any(identity)`.
 */
export type MapAllAnyIdentity = LintLevel | DetailedLint;
/**
 * Checks for usage of `map(|x| x.clone())` or dereferencing closures for `Copy` types, on `Iterator` or `Option`, and suggests `cloned()` or `copied()` instead
 */
export type MapClone = LintLevel | DetailedLint;
/**
 * Checks for usage of `_.map(_).collect:: ()`.
 */
export type MapCollectResultUnit = LintLevel | DetailedLint;
/**
 * Checks for usage of `contains_key` + `insert` on `HashMap` or `BTreeMap`.
 */
export type MapEntry = LintLevel | DetailedLint;
/**
 * Checks for instances of `map_err(|_| Some::Enum)`
 */
export type MapErrIgnore = LintLevel | DetailedLint;
/**
 * Checks for usage of `_.map(_).flatten(_)` on `Iterator` and `Option`
 */
export type MapFlatten = LintLevel | DetailedLint;
/**
 * Checks for instances of `map(f)` where `f` is the identity function.
 */
export type MapIdentity = LintLevel | DetailedLint;
/**
 * Checks for usage of `option.map(_).unwrap_or(_)` or `option.map(_).unwrap_or_else(_)` or `result.map(_).unwrap_or_else(_)`.
 */
export type MapUnwrapOr = LintLevel | DetailedLint;
/**
 * Checks for `Iterator::map` over ranges without using the parameter which could be more clearly expressed using `std::iter::repeat(...).take(...)` or `std::iter::repeat_n`.
 */
export type MapWithUnusedArgumentOverRanges = LintLevel | DetailedLint;
/**
 * Checks for match which is used to add a reference to an `Option` value.
 */
export type MatchAsRef = LintLevel | DetailedLint;
/**
 * Checks for matches where match expression is a `bool`. It suggests to replace the expression with an `if...else` block.
 */
export type MatchBool = LintLevel | DetailedLint;
/**
 * Checks for `match` or `if let` expressions producing a `bool` that could be written using `matches!`
 */
export type MatchLikeMatchesMacro = LintLevel | DetailedLint;
/**
 * Nothing. This lint has been deprecated
 */
export type MatchOnVecItems = LintLevel | DetailedLint;
/**
 * Checks for overlapping match arms.
 */
export type MatchOverlappingArm = LintLevel | DetailedLint;
/**
 * Checks for matches where all arms match a reference, suggesting to remove the reference and deref the matched expression instead. It also checks for `if let &foo = bar` blocks.
 */
export type MatchRefPats = LintLevel | DetailedLint;
/**
 * Checks for unnecessary `ok()` in `while let`.
 */
export type MatchResultOk = LintLevel | DetailedLint;
/**
 * Checks for `match` with identical arm bodies.
 */
export type MatchSameArms = LintLevel | DetailedLint;
/**
 * Checks for useless match that binds to only one value.
 */
export type MatchSingleBinding = LintLevel | DetailedLint;
/**
 * Checks for `match` expressions modifying the case of a string with non-compliant arms
 */
export type MatchStrCaseMismatch = LintLevel | DetailedLint;
/**
 * Checks for arm which matches all errors with `Err(_)` and take drastic actions like `panic!`.
 */
export type MatchWildErrArm = LintLevel | DetailedLint;
/**
 * Checks for wildcard enum matches for a single variant.
 */
export type MatchWildcardForSingleVariants = LintLevel | DetailedLint;
/**
 * Checks for iteration that may be infinite.
 */
export type MaybeInfiniteIter = LintLevel | DetailedLint;
/**
 * Checks for usage of `std::mem::forget(t)` where `t` is `Drop` or has a field that implements `Drop`.
 */
export type MemForget = LintLevel | DetailedLint;
/**
 * Checks for `mem::replace()` on an `Option` with `None`.
 */
export type MemReplaceOptionWithNone = LintLevel | DetailedLint;
/**
 * Checks for `mem::replace()` on an `Option` with `Some(…)`.
 */
export type MemReplaceOptionWithSome = LintLevel | DetailedLint;
/**
 * Checks for `std::mem::replace` on a value of type `T` with `T::default()`.
 */
export type MemReplaceWithDefault = LintLevel | DetailedLint;
/**
 * Checks for `mem::replace(&mut _, mem::uninitialized())` and `mem::replace(&mut _, mem::zeroed())`.
 */
export type MemReplaceWithUninit = LintLevel | DetailedLint;
/**
 * Checks for identifiers which consist of a single character (or fewer than the configured threshold).
 */
export type MinIdentChars = LintLevel | DetailedLint;
/**
 * Checks for expressions where `std::cmp::min` and `max` are used to clamp values, but switched so that the result is constant.
 */
export type MinMax = LintLevel | DetailedLint;
/**
 * Nothing. This lint has been deprecated
 */
export type MisalignedTransmute = LintLevel | DetailedLint;
/**
 * Checks for type parameters which are positioned inconsistently between a type definition and impl block. Specifically, a parameter in an impl block which has the same name as a parameter in the type def, but is in a different place.
 */
export type MismatchingTypeParamOrder = LintLevel | DetailedLint;
/**
 * Checks for getter methods that return a field that doesn't correspond to the name of the method, when there is a field's whose name matches that of the method.
 */
export type MisnamedGetters = LintLevel | DetailedLint;
/**
 * Checks for `a op= a op b` or `a op= b op a` patterns.
 */
export type MisrefactoredAssignOp = LintLevel | DetailedLint;
/**
 * Checks assertions without a custom panic message.
 */
export type MissingAssertMessage = LintLevel | DetailedLint;
/**
 * Checks for repeated slice indexing without asserting beforehand that the length is greater than the largest index used to index into the slice.
 */
export type MissingAssertsForIndexing = LintLevel | DetailedLint;
/**
 * Suggests the use of `const` in functions and methods where possible.
 */
export type MissingConstForFn = LintLevel | DetailedLint;
/**
 * Suggests to use `const` in `thread_local!` macro if possible.
 */
export type MissingConstForThreadLocal = LintLevel | DetailedLint;
/**
 * Warns if there is missing documentation for any private documentable item.
 */
export type MissingDocsInPrivateItems = LintLevel | DetailedLint;
/**
 * Checks for imports that do not rename the item as specified in the `enforced-import-renames` config option.
 */
export type MissingEnforcedImportRenames = LintLevel | DetailedLint;
/**
 * Checks the doc comments of publicly visible functions that return a `Result` type and warns if there is no `# Errors` section.
 */
export type MissingErrorsDoc = LintLevel | DetailedLint;
/**
 * Checks for manual `core::fmt::Debug` implementations that do not use all fields.
 */
export type MissingFieldsInDebug = LintLevel | DetailedLint;
/**
 * It lints if an exported function, method, trait method with default impl, or trait method impl is not `#[inline]`.
 */
export type MissingInlineInPublicItems = LintLevel | DetailedLint;
/**
 * Checks the doc comments of publicly visible functions that may panic and warns if there is no `# Panics` section.
 */
export type MissingPanicsDoc = LintLevel | DetailedLint;
/**
 * Checks for the doc comments of publicly visible unsafe functions and warns if there is no `# Safety` section.
 */
export type MissingSafetyDoc = LintLevel | DetailedLint;
/**
 * Checks for empty spin loops
 */
export type MissingSpinLoop = LintLevel | DetailedLint;
/**
 * Checks if a provided method is used implicitly by a trait implementation.
 */
export type MissingTraitMethods = LintLevel | DetailedLint;
/**
 * Checks if transmute calls have all generics specified.
 */
export type MissingTransmuteAnnotations = LintLevel | DetailedLint;
/**
 * Warns for mistyped suffix in literals
 */
export type MistypedLiteralSuffixes = LintLevel | DetailedLint;
/**
 * Checks for items that have the same kind of attributes with mixed styles (inner/outer).
 */
export type MixedAttributesStyle = LintLevel | DetailedLint;
/**
 * Warns on hexadecimal literals with mixed-case letter digits.
 */
export type MixedCaseHexLiterals = LintLevel | DetailedLint;
/**
 * Checks for a read and a write to the same variable where whether the read occurs before or after the write depends on the evaluation order of sub-expressions.
 */
export type MixedReadWriteInExpression = LintLevel | DetailedLint;
/**
 * Checks that module layout uses only self named module files; bans `mod.rs` files.
 */
export type ModModuleFiles = LintLevel | DetailedLint;
/**
 * Checks for modules that have the same name as their parent module
 */
export type ModuleInception = LintLevel | DetailedLint;
/**
 * Detects public item names that are prefixed or suffixed by the containing public module's name.
 */
export type ModuleNameRepetitions = LintLevel | DetailedLint;
/**
 * Checks for modulo arithmetic.
 */
export type ModuloArithmetic = LintLevel | DetailedLint;
/**
 * Checks for getting the remainder of integer division by one or minus one.
 */
export type ModuloOne = LintLevel | DetailedLint;
/**
 * Checks for nested assignments.
 */
export type MultiAssignments = LintLevel | DetailedLint;
/**
 * Check if a generic is defined both in the bound predicate and in the `where` clause.
 */
export type MultipleBoundLocations = LintLevel | DetailedLint;
/**
 * Checks to see if multiple versions of a crate are being used.
 */
export type MultipleCrateVersions = LintLevel | DetailedLint;
/**
 * Checks for multiple inherent implementations of a struct
 */
export type MultipleInherentImpl = LintLevel | DetailedLint;
/**
 * Checks for `unsafe` blocks that contain more than one unsafe operation.
 */
export type MultipleUnsafeOpsPerBlock = LintLevel | DetailedLint;
/**
 * Checks for public functions that have no `#[must_use]` attribute, but return something not already marked must-use, have no mutable arg and mutate no statics.
 */
export type MustUseCandidate = LintLevel | DetailedLint;
/**
 * Checks for a `#[must_use]` attribute on unit-returning functions and methods.
 */
export type MustUseUnit = LintLevel | DetailedLint;
/**
 * This lint checks for functions that take immutable references and return mutable ones. This will not trigger if no unsafe code exists as there are multiple safe functions which will do this transformation
 */
export type MutFromRef = LintLevel | DetailedLint;
/**
 * Checks for instances of `mut mut` references.
 */
export type MutMut = LintLevel | DetailedLint;
/**
 * Checks for `&mut Mutex::lock` calls
 */
export type MutMutexLock = LintLevel | DetailedLint;
/**
 * Checks for loops with a range bound that is a mutable variable.
 */
export type MutRangeBound = LintLevel | DetailedLint;
/**
 * Checks for sets/maps with mutable key types.
 */
export type MutableKeyType = LintLevel | DetailedLint;
/**
 * Checks for usage of `Mutex ` where an atomic will do.
 */
export type MutexAtomic = LintLevel | DetailedLint;
/**
 * Checks for usage of `Mutex ` where `X` is an integral type.
 */
export type MutexInteger = LintLevel | DetailedLint;
/**
 * Checks for naive byte counts
 */
export type NaiveBytecount = LintLevel | DetailedLint;
/**
 * The lint checks for `self` in fn parameters that specify the `Self`-type explicitly
 */
export type NeedlessArbitrarySelfType = LintLevel | DetailedLint;
/**
 * It detects useless calls to `str::as_bytes()` before calling `len()` or `is_empty()`.
 */
export type NeedlessAsBytes = LintLevel | DetailedLint;
/**
 * Checks for usage of bitwise and/or operators between booleans, where performance may be improved by using a lazy and.
 */
export type NeedlessBitwiseBool = LintLevel | DetailedLint;
/**
 * Checks for expressions of the form `if c { true } else { false }` (or vice versa) and suggests using the condition directly.
 */
export type NeedlessBool = LintLevel | DetailedLint;
/**
 * Checks for expressions of the form `if c { x = true } else { x = false }` (or vice versa) and suggest assigning the variable directly from the condition.
 */
export type NeedlessBoolAssign = LintLevel | DetailedLint;
/**
 * Checks for address of operations (`&`) that are going to be dereferenced immediately by the compiler.
 */
export type NeedlessBorrow = LintLevel | DetailedLint;
/**
 * Checks for bindings that needlessly destructure a reference and borrow the inner value with `&ref`.
 */
export type NeedlessBorrowedReference = LintLevel | DetailedLint;
/**
 * Checks for borrow operations (`&`) that are used as a generic argument to a function when the borrowed value could be used.
 */
export type NeedlessBorrowsForGenericArgs = LintLevel | DetailedLint;
/**
 * Checks if an iterator is used to check if a string is ascii.
 */
export type NeedlessCharacterIteration = LintLevel | DetailedLint;
/**
 * Checks for functions collecting an iterator when collect is not needed.
 */
export type NeedlessCollect = LintLevel | DetailedLint;
/**
 * The lint checks for `if`-statements appearing in loops that contain a `continue` statement in either their main blocks or their `else`-blocks, when omitting the `else`-block possibly with some rearrangement of code can make the code easier to understand. The lint also checks if the last statement in the loop is a `continue`
 */
export type NeedlessContinue = LintLevel | DetailedLint;
/**
 * Checks for `fn main() {.. }` in doctests
 */
export type NeedlessDoctestMain = LintLevel | DetailedLint;
/**
 * Checks for empty `else` branches.
 */
export type NeedlessElse = LintLevel | DetailedLint;
/**
 * Checks for usage of `for_each` that would be more simply written as a `for` loop.
 */
export type NeedlessForEach = LintLevel | DetailedLint;
/**
 * Checks for empty `if` branches with no else branch.
 */
export type NeedlessIfs = LintLevel | DetailedLint;
/**
 * Checks for late initializations that can be replaced by a `let` statement with an initializer.
 */
export type NeedlessLateInit = LintLevel | DetailedLint;
/**
 * Checks for lifetime annotations which can be removed by relying on lifetime elision.
 */
export type NeedlessLifetimes = LintLevel | DetailedLint;
/**
 * Checks for unnecessary `match` or match-like `if let` returns for `Option` and `Result` when function signatures are the same.
 */
export type NeedlessMatch = LintLevel | DetailedLint;
/**
 * Lints `?Sized` bounds applied to type parameters that cannot be unsized
 */
export type NeedlessMaybeSized = LintLevel | DetailedLint;
/**
 * Checks for no-op uses of `Option::{as_deref, as_deref_mut}`, for example, `Option::as_deref()` returns the same type.
 */
export type NeedlessOptionAsDeref = LintLevel | DetailedLint;
/**
 * Checks for calling `take` function after `as_ref`.
 */
export type NeedlessOptionTake = LintLevel | DetailedLint;
/**
 * The lint checks for parenthesis on literals in range statements that are superfluous.
 */
export type NeedlessParensOnRangeLiterals = LintLevel | DetailedLint;
/**
 * Check if a `&mut` function argument is actually used mutably.
 */
export type NeedlessPassByRefMut = LintLevel | DetailedLint;
/**
 * Checks for functions taking arguments by value, but not consuming them in its body.
 */
export type NeedlessPassByValue = LintLevel | DetailedLint;
/**
 * Checks for usage of `pub(self)` and `pub(in self)`.
 */
export type NeedlessPubSelf = LintLevel | DetailedLint;
/**
 * Suggests replacing `Ok(x?)` or `Some(x?)` with `x` in return positions where the `?` operator is not needed to convert the type of `x`.
 */
export type NeedlessQuestionMark = LintLevel | DetailedLint;
/**
 * Checks for looping over the range of `0..len` of some collection just to get the values by index.
 */
export type NeedlessRangeLoop = LintLevel | DetailedLint;
/**
 * Checks for raw string literals with an unnecessary amount of hashes around them.
 */
export type NeedlessRawStringHashes = LintLevel | DetailedLint;
/**
 * Checks for raw string literals where a string literal can be used instead.
 */
export type NeedlessRawStrings = LintLevel | DetailedLint;
/**
 * Checks for return statements at the end of a block.
 */
export type NeedlessReturn = LintLevel | DetailedLint;
/**
 * Checks for return statements on `Err` paired with the `?` operator.
 */
export type NeedlessReturnWithQuestionMark = LintLevel | DetailedLint;
/**
 * Checks for usage of `str::splitn` (or `str::rsplitn`) where using `str::split` would be the same.
 */
export type NeedlessSplitn = LintLevel | DetailedLint;
/**
 * Checks for bindings (constants, statics, or let bindings) that are defined with one numeric type but are consistently cast to a different type in all usages.
 */
export type NeedlessTypeCast = LintLevel | DetailedLint;
/**
 * Checks for needlessly including a base struct on update when all fields are changed anyway.
 */
export type NeedlessUpdate = LintLevel | DetailedLint;
/**
 * Checks for the usage of negated comparison operators on types which only implement `PartialOrd` (e.g., `f64`).
 */
export type NegCmpOpOnPartialOrd = LintLevel | DetailedLint;
/**
 * Checks for multiplication by -1 as a form of negation.
 */
export type NegMultiply = LintLevel | DetailedLint;
/**
 * Checks for negative feature names with prefix `no-` or `not-`
 */
export type NegativeFeatureNames = LintLevel | DetailedLint;
/**
 * Checks for loops that will always `break`, `return` or `continue` an outer loop.
 */
export type NeverLoop = LintLevel | DetailedLint;
/**
 * Checks for `new` not returning a type that contains `Self`.
 */
export type NewRetNoSelf = LintLevel | DetailedLint;
/**
 * Checks for public types with a `pub fn new() -> Self` method and no implementation of `Default`.
 */
export type NewWithoutDefault = LintLevel | DetailedLint;
/**
 * Checks for statements which have no effect.
 */
export type NoEffect = LintLevel | DetailedLint;
/**
 * Checks for `replace` statements which have no effect.
 */
export type NoEffectReplace = LintLevel | DetailedLint;
/**
 * Checks for binding to underscore prefixed variable without side-effects.
 */
export type NoEffectUnderscoreBinding = LintLevel | DetailedLint;
/**
 * Checks for Rust ABI functions with the `#[no_mangle]` attribute.
 */
export type NoMangleWithRustAbi = LintLevel | DetailedLint;
/**
 * Checks for non-ASCII characters in string and char literals.
 */
export type NonAsciiLiteral = LintLevel | DetailedLint;
/**
 * Checks for non-canonical implementations of `Clone` when `Copy` is already implemented.
 */
export type NonCanonicalCloneImpl = LintLevel | DetailedLint;
/**
 * Checks for non-canonical implementations of `PartialOrd` when `Ord` is already implemented.
 */
export type NonCanonicalPartialOrdImpl = LintLevel | DetailedLint;
/**
 * Checks for `any` and `all` combinators in `cfg` with only one condition.
 */
export type NonMinimalCfg = LintLevel | DetailedLint;
/**
 * Checks for non-octal values used to set Unix file permissions.
 */
export type NonOctalUnixPermissions = LintLevel | DetailedLint;
/**
 * This lint warns about a `Send` implementation for a type that contains fields that are not safe to be sent across threads. It tries to detect fields that can cause a soundness issue when sent to another thread (e.g., `Rc`) while allowing `!Send` fields that are expected to exist in a `Send` type, such as raw pointers.
 */
export type NonSendFieldsInSendTy = LintLevel | DetailedLint;
/**
 * Lints when `once_cell::sync::Lazy` or `lazy_static!` are used to define a static variable, and suggests replacing such cases with `std::sync::LazyLock` instead.
 */
export type NonStdLazyStatics = LintLevel | DetailedLint;
/**
 * Checks for conversions from `NonZero` types to regular integer types, and suggests using `NonZero` types for the target as well.
 */
export type NonZeroSuggestions = LintLevel | DetailedLint;
/**
 * Checks for boolean expressions that can be written more concisely.
 */
export type NonminimalBool = LintLevel | DetailedLint;
/**
 * Checks for duplicate open options as well as combinations that make no sense.
 */
export type NonsensicalOpenOptions = LintLevel | DetailedLint;
/**
 * Checks that common macros are used with consistent bracing.
 */
export type NonstandardMacroBraces = LintLevel | DetailedLint;
/**
 * Checks for public functions that dereference raw pointer arguments but are not marked `unsafe`.
 */
export type NotUnsafePtrArgDeref = LintLevel | DetailedLint;
/**
 * The `clippy::nursery` group contains lints which are buggy or need more work. It is not recommended to enable the whole group, but rather cherry-pick lints that are useful for your code base and your use case.
 */
export type Nursery = LintLevel | DetailedLint;
/**
 * Checks for unnecessary method chains that can be simplified into `if.. else..`.
 */
export type ObfuscatedIfElse = LintLevel | DetailedLint;
/**
 * Checks for `\0` escapes in string and byte literals that look like octal character escapes in C.
 */
export type OctalEscapes = LintLevel | DetailedLint;
/**
 * Checks for usage of `ok().expect(..)`.
 */
export type OkExpect = LintLevel | DetailedLint;
/**
 * Checks for arguments that are only used in recursion with no side-effects.
 */
export type OnlyUsedInRecursion = LintLevel | DetailedLint;
/**
 * Checks for arguments to `==` which have their address taken to satisfy a bound and suggests to dereference the other argument instead
 */
export type OpRef = LintLevel | DetailedLint;
/**
 * Checks for usage of `.as_ref().cloned()` and `.as_mut().cloned()` on `Option`s
 */
export type OptionAsRefCloned = LintLevel | DetailedLint;
/**
 * Checks for usage of `_.as_ref().map(Deref::deref)` or its aliases (such as String::as_str).
 */
export type OptionAsRefDeref = LintLevel | DetailedLint;
/**
 * Checks for usage of `option_env!(...).unwrap()` and suggests usage of the `env!` macro.
 */
export type OptionEnvUnwrap = LintLevel | DetailedLint;
/**
 * Checks for iterators of `Option`s using `.filter(Option::is_some).map(Option::unwrap)` that may be replaced with a `.flatten()` call.
 */
export type OptionFilterMap = LintLevel | DetailedLint;
/**
 * Lints usage of `if let Some(v) =... { y } else { x }` and `match.. { Some(v) => y, None/_ => x }` which are more idiomatically done with `Option::map_or` (if the else bit is a pure expression) or `Option::map_or_else` (if the else bit is an impure expression).
 */
export type OptionIfLetElse = LintLevel | DetailedLint;
/**
 * Nothing. This lint has been deprecated
 */
export type OptionMapOrErrOk = LintLevel | DetailedLint;
/**
 * Checks for usage of `_.map_or(None, _)`.
 */
export type OptionMapOrNone = LintLevel | DetailedLint;
/**
 * Checks for usage of `option.map(f)` where f is a function or closure that returns the unit type `()`.
 */
export type OptionMapUnitFn = LintLevel | DetailedLint;
/**
 * Checks for usage of `Option >` in function signatures and type definitions
 */
export type OptionOption = LintLevel | DetailedLint;
/**
 * Checks for calls to `.or(foo(..))`, `.unwrap_or(foo(..))`, `.or_insert(foo(..))` etc., and suggests to use `.or_else(|| foo(..))`, `.unwrap_or_else(|| foo(..))`, `.unwrap_or_default()` or `.or_default()` etc. instead.
 */
export type OrFunCall = LintLevel | DetailedLint;
/**
 * Checks for `.or(…).unwrap()` calls to Options and Results.
 */
export type OrThenUnwrap = LintLevel | DetailedLint;
/**
 * Checks for out of bounds array indexing with a constant index.
 */
export type OutOfBoundsIndexing = LintLevel | DetailedLint;
/**
 * Checks for boolean expressions that contain terminals that can be eliminated.
 */
export type OverlyComplexBoolExpr = LintLevel | DetailedLint;
/**
 * Detects needlessly owned `Cow` types.
 */
export type OwnedCow = LintLevel | DetailedLint;
/**
 * Checks for usage of `panic!`.
 */
export type Panic = LintLevel | DetailedLint;
/**
 * Checks for usage of `panic!` or assertions in a function whose return type is `Result`.
 */
export type PanicInResultFn = LintLevel | DetailedLint;
/**
 * Detects C-style underflow/overflow checks.
 */
export type PanickingOverflowChecks = LintLevel | DetailedLint;
/**
 * Checks for calls of `unwrap[_err]()` that will always fail.
 */
export type PanickingUnwrap = LintLevel | DetailedLint;
/**
 * Checks whether some but not all fields of a `struct` are public.
 */
export type PartialPubFields = LintLevel | DetailedLint;
/**
 * Checks for manual re-implementations of `PartialEq::ne`.
 */
export type PartialeqNeImpl = LintLevel | DetailedLint;
/**
 * Checks for binary comparisons to a literal `Option::None`.
 */
export type PartialeqToNone = LintLevel | DetailedLint;
/**
 * Checks for push calls on `PathBuf` that can cause overwrites.
 */
export type PathBufPushOverwrite = LintLevel | DetailedLint;
/**
 * Looks for calls to `Path::ends_with` calls where the argument looks like a file extension.
 */
export type PathEndsWithExt = LintLevel | DetailedLint;
/**
 * Checks for calls to `push` immediately after creating a new `PathBuf`.
 */
export type PathbufInitThenPush = LintLevel | DetailedLint;
/**
 * Checks for patterns that aren't exact representations of the types they are applied to.
 */
export type PatternTypeMismatch = LintLevel | DetailedLint;
/**
 * The `clippy::pedantic` group makes Clippy even more pedantic. You can enable the whole group with `#![warn(clippy::pedantic)]` in the `lib.rs`/`main.rs` of your crate. This lint group is for Clippy power users that want an in depth check of their code.
 */
export type Pedantic = LintLevel | DetailedLint;
/**
 * The `clippy::perf` group gives you suggestions on how you can increase the performance of your code. Those lints are mostly about code that the compiler can't trivially optimize, but has to be written in a slightly different way to make the optimizer job easier.
 */
export type Perf = LintLevel | DetailedLint;
/**
 * Checks for calls to `std::fs::Permissions.set_readonly` with argument `false`.
 */
export type PermissionsSetReadonlyFalse = LintLevel | DetailedLint;
/**
 * Detects pointer format as well as `Debug` formatting of raw pointers or function pointers or any types that have a derived `Debug` impl that recursively contains them.
 */
export type PointerFormat = LintLevel | DetailedLint;
/**
 * Checks if any pointer is being passed to an asm! block with `nomem` option.
 */
export type PointersInNomemAsmBlock = LintLevel | DetailedLint;
/**
 * Checks for possible missing comma in an array. It lints if an array element is a binary operator expression and it lies on two lines.
 */
export type PossibleMissingComma = LintLevel | DetailedLint;
/**
 * Checks for an `if` expression followed by either a block or another `if` that looks like it should have an `else` between them.
 */
export type PossibleMissingElse = LintLevel | DetailedLint;
/**
 * Checks for operations where precedence may be unclear and suggests to add parentheses. It catches a mixed usage of arithmetic and bit shifting/combining operators, as well as method calls applied to closures.
 */
export type Precedence = LintLevel | DetailedLint;
/**
 * Checks for bit shifting operations combined with bit masking/combining operators and suggest using parentheses.
 */
export type PrecedenceBits = LintLevel | DetailedLint;
/**
 * Checks for usage of `println`, `print`, `eprintln` or `eprint` in an implementation of a formatting trait.
 */
export type PrintInFormatImpl = LintLevel | DetailedLint;
/**
 * This lint warns about the use of literals as `print!`/`println!` args.
 */
export type PrintLiteral = LintLevel | DetailedLint;
/**
 * Checks for printing on stderr. The purpose of this lint is to catch debugging remnants.
 */
export type PrintStderr = LintLevel | DetailedLint;
/**
 * Checks for printing on stdout. The purpose of this lint is to catch debugging remnants.
 */
export type PrintStdout = LintLevel | DetailedLint;
/**
 * This lint warns when you use `print!()` with a format string that ends in a newline.
 */
export type PrintWithNewline = LintLevel | DetailedLint;
/**
 * This lint warns when you use `println!("")` to print a newline.
 */
export type PrintlnEmptyString = LintLevel | DetailedLint;
/**
 * This lint checks for function arguments of type `&String`, `&Vec`, `&PathBuf`, and `Cow `. It will also suggest you replace `.clone()` calls with the appropriate `.to_owned()`/`to_string()` calls.
 */
export type PtrArg = LintLevel | DetailedLint;
/**
 * Checks for `as` casts between raw pointers that don't change their constness, namely `*const T` to `*const U` and `*mut T` to `*mut U`.
 */
export type PtrAsPtr = LintLevel | DetailedLint;
/**
 * Checks for `as` casts between raw pointers that change their constness, namely `*const T` to `*mut T` and `*mut T` to `*const T`.
 */
export type PtrCastConstness = LintLevel | DetailedLint;
/**
 * Use `std::ptr::eq` when applicable
 */
export type PtrEq = LintLevel | DetailedLint;
/**
 * Checks for usage of the `offset` pointer method with an integer literal.
 */
export type PtrOffsetByLiteral = LintLevel | DetailedLint;
/**
 * Checks for usage of the `offset` pointer method with a `usize` casted to an `isize`.
 */
export type PtrOffsetWithCast = LintLevel | DetailedLint;
/**
 * Nothing. This lint has been deprecated
 */
export type PubEnumVariantNames = LintLevel | DetailedLint;
/**
 * Checks whether any field of the struct is prefixed with an `_` (underscore) and also marked `pub` (public)
 */
export type PubUnderscoreFields = LintLevel | DetailedLint;
/**
 * Restricts the usage of `pub use...`
 */
export type PubUse = LintLevel | DetailedLint;
/**
 * Checks for usage of `pub()` with `in`.
 */
export type PubWithShorthand = LintLevel | DetailedLint;
/**
 * Checks for usage of `pub()` without `in`.
 */
export type PubWithoutShorthand = LintLevel | DetailedLint;
/**
 * Checks for expressions that could be replaced by the `?` operator.
 */
export type QuestionMark = LintLevel | DetailedLint;
/**
 * Checks for expressions that use the `?` operator and rejects them.
 */
export type QuestionMarkUsed = LintLevel | DetailedLint;
/**
 * Checks for inclusive ranges where 1 is subtracted from the upper bound, e.g., `x..=(y-1)`.
 */
export type RangeMinusOne = LintLevel | DetailedLint;
/**
 * Checks for exclusive ranges where 1 is added to the upper bound, e.g., `x..(y+1)`.
 */
export type RangePlusOne = LintLevel | DetailedLint;
/**
 * Nothing. This lint has been deprecated
 */
export type RangeStepByZero = LintLevel | DetailedLint;
/**
 * Checks for zipping a collection with the range of `0.._.len()`.
 */
export type RangeZipWithLen = LintLevel | DetailedLint;
/**
 * Checks for `Rc ` and `Arc ` when `T` is a mutable buffer type such as `String` or `Vec`.
 */
export type RcBuffer = LintLevel | DetailedLint;
/**
 * Checks for reference-counted pointers (`Arc`, `Rc`, `rc::Weak`, and `sync::Weak`) in `vec![elem; len]`
 */
export type RcCloneInVecInit = LintLevel | DetailedLint;
/**
 * Checks for `Rc >`.
 */
export type RcMutex = LintLevel | DetailedLint;
/**
 * Looks for calls to [`Stdin::read_line`] to read a line from the standard input into a string, then later attempting to use that string for an operation that will never work for strings with a trailing newline character in it (e.g. parsing into a `i32`).
 */
export type ReadLineWithoutTrim = LintLevel | DetailedLint;
/**
 * This lint catches reads into a zero-length `Vec`. Especially in the case of a call to `with_capacity`, this lint warns that read gets the number of bytes from the `Vec`'s length, not its capacity.
 */
export type ReadZeroByteVec = LintLevel | DetailedLint;
/**
 * Looks for calls to `RwLock::write` where the lock is only used for reading.
 */
export type ReadonlyWriteLock = LintLevel | DetailedLint;
/**
 * Checks for format trait implementations (e.g. `Display`) with a recursive call to itself which uses `self` as a parameter. This is typically done indirectly with the `write!` macro or with `to_string()`.
 */
export type RecursiveFormatImpl = LintLevel | DetailedLint;
/**
 * Checks for usage of redundant allocations anywhere in the code.
 */
export type RedundantAllocation = LintLevel | DetailedLint;
/**
 * Checks for usage of `as_str()` on a `String` chained with a method available on the `String` itself.
 */
export type RedundantAsStr = LintLevel | DetailedLint;
/**
 * Checks for `async` block that only returns `await` on a future.
 */
export type RedundantAsyncBlock = LintLevel | DetailedLint;
/**
 * Checks for `[all @..]` patterns.
 */
export type RedundantAtRestPattern = LintLevel | DetailedLint;
/**
 * Checks for a redundant `clone()` (and its relatives) which clones an owned value that is going to be dropped without further use.
 */
export type RedundantClone = LintLevel | DetailedLint;
/**
 * Checks for closures which just call another function where the function can be called directly. `unsafe` functions, calls where types get adjusted or where the callee is marked `#[track_caller]` are ignored.
 */
export type RedundantClosure = LintLevel | DetailedLint;
/**
 * Detects closures called in the same expression where they are defined.
 */
export type RedundantClosureCall = LintLevel | DetailedLint;
/**
 * Checks for closures which only invoke a method on the closure argument and can be replaced by referencing the method directly.
 */
export type RedundantClosureForMethodCalls = LintLevel | DetailedLint;
/**
 * Checks for ineffective double comparisons against constants.
 */
export type RedundantComparisons = LintLevel | DetailedLint;
/**
 * Checks for `else` blocks that can be removed without changing semantics.
 */
export type RedundantElse = LintLevel | DetailedLint;
/**
 * Checks for feature names with prefix `use-`, `with-` or suffix `-support`
 */
export type RedundantFeatureNames = LintLevel | DetailedLint;
/**
 * Checks for fields in struct literals where shorthands could be used.
 */
export type RedundantFieldNames = LintLevel | DetailedLint;
/**
 * Checks for unnecessary guards in match expressions.
 */
export type RedundantGuards = LintLevel | DetailedLint;
/**
 * Checks for calls to `Iterator::cloned` where the original value could be used instead.
 */
export type RedundantIterCloned = LintLevel | DetailedLint;
/**
 * Checks for redundant redefinitions of local bindings.
 */
export type RedundantLocals = LintLevel | DetailedLint;
/**
 * Checks for patterns in the form `name @ _`.
 */
export type RedundantPattern = LintLevel | DetailedLint;
/**
 * Lint for redundant pattern matching over `Result`, `Option`, `std::task::Poll`, `std::net::IpAddr` or `bool`s
 */
export type RedundantPatternMatching = LintLevel | DetailedLint;
/**
 * Checks for items declared `pub(crate)` that are not crate visible because they are inside a private module.
 */
export type RedundantPubCrate = LintLevel | DetailedLint;
/**
 * Checks for redundant slicing expressions which use the full range, and do not change the type.
 */
export type RedundantSlicing = LintLevel | DetailedLint;
/**
 * Checks for constants and statics with an explicit `'static` lifetime.
 */
export type RedundantStaticLifetimes = LintLevel | DetailedLint;
/**
 * Checks for test functions (functions annotated with `#[test]`) that are prefixed with `test_` which is redundant.
 */
export type RedundantTestPrefix = LintLevel | DetailedLint;
/**
 * Warns about needless / redundant type annotations.
 */
export type RedundantTypeAnnotations = LintLevel | DetailedLint;
/**
 * Checks for casts of references to pointer using `as` and suggests `std::ptr::from_ref` and `std::ptr::from_mut` instead.
 */
export type RefAsPtr = LintLevel | DetailedLint;
/**
 * Checks for `ref` bindings which create a reference to a reference.
 */
export type RefBindingToReference = LintLevel | DetailedLint;
/**
 * Warns when a function signature uses `&Option ` instead of `Option `.
 */
export type RefOption = LintLevel | DetailedLint;
/**
 * Checks for usage of `&Option `.
 */
export type RefOptionRef = LintLevel | DetailedLint;
/**
 * Checks for usages of the `ref` keyword.
 */
export type RefPatterns = LintLevel | DetailedLint;
/**
 * Checks for regex compilation inside a loop with a literal.
 */
export type RegexCreationInLoops = LintLevel | DetailedLint;
/**
 * Nothing. This lint has been deprecated
 */
export type RegexMacro = LintLevel | DetailedLint;
/**
 * Lints when the name of function parameters from trait impl is different than its default implementation.
 */
export type RenamedFunctionParams = LintLevel | DetailedLint;
/**
 * Checks for usage of `.repeat(1)` and suggest the following method for each types.
 */
export type RepeatOnce = LintLevel | DetailedLint;
/**
 * Looks for patterns such as `vec![Vec::with_capacity(x); n]` or `iter::repeat(Vec::with_capacity(x))`.
 */
export type RepeatVecWithCapacity = LintLevel | DetailedLint;
/**
 * Detects assignments of `Default::default()` or `Box::new(value)` to a place of type `Box `.
 */
export type ReplaceBox = LintLevel | DetailedLint;
/**
 * Nothing. This lint has been deprecated
 */
export type ReplaceConsts = LintLevel | DetailedLint;
/**
 * Checks for items with `#[repr(packed)]`-attribute without ABI qualification
 */
export type ReprPackedWithoutAbi = LintLevel | DetailedLint;
/**
 * Informs the user about a more concise way to create a vector with a known capacity.
 */
export type ReserveAfterInitialization = LintLevel | DetailedLint;
/**
 * Checks for unnecessary '..' pattern binding on struct when all fields are explicitly matched.
 */
export type RestPatInFullyBoundStructs = LintLevel | DetailedLint;
/**
 * The `clippy::restriction` group contains lints that will restrict you from using certain parts of the Rust language. It is not recommended to enable the whole group, but rather cherry-pick lints that are useful for your code base and your use case.
 */
export type Restriction = LintLevel | DetailedLint;
/**
 * Checks for iterators of `Result`s using `.filter(Result::is_ok).map(Result::unwrap)` that may be replaced with a `.flatten()` call.
 */
export type ResultFilterMap = LintLevel | DetailedLint;
/**
 * Checks for functions that return `Result` with an unusually large `Err`-variant.
 */
export type ResultLargeErr = LintLevel | DetailedLint;
/**
 * Checks for usage of `_.map_or(None, Some)`.
 */
export type ResultMapOrIntoOption = LintLevel | DetailedLint;
/**
 * Checks for usage of `result.map(f)` where f is a function or closure that returns the unit type `()`.
 */
export type ResultMapUnitFn = LintLevel | DetailedLint;
/**
 * Checks for public functions that return a `Result` with an `Err` type of `()`. It suggests using a custom type that implements `std::error::Error`.
 */
export type ResultUnitErr = LintLevel | DetailedLint;
/**
 * Detect functions that end with `Option::and_then` or `Result::and_then`, and suggest using the `?` operator instead.
 */
export type ReturnAndThen = LintLevel | DetailedLint;
/**
 * This lint warns when a method returning `Self` doesn't have the `#[must_use]` attribute.
 */
export type ReturnSelfNotMustUse = LintLevel | DetailedLint;
/**
 * Checks for range expressions `x..y` where both `x` and `y` are constant and `x` is greater to `y`. Also triggers if `x` is equal to `y` when they are conditions to a `for` loop.
 */
export type ReversedEmptyRanges = LintLevel | DetailedLint;
/**
 * Checks for consecutive `if`s with the same function call.
 */
export type SameFunctionsInIfCondition = LintLevel | DetailedLint;
/**
 * Checks whether a for loop is being used to push a constant value into a Vec.
 */
export type SameItemPush = LintLevel | DetailedLint;
/**
 * Checks for usages of `Vec::from_raw_parts` and `String::from_raw_parts` where the same expression is used for the length and the capacity.
 */
export type SameLengthAndCapacity = LintLevel | DetailedLint;
/**
 * It lints if a struct has two methods with the same name: one from a trait, another not from a trait.
 */
export type SameNameMethod = LintLevel | DetailedLint;
/**
 * Checks for an iterator or string search (such as `find()`, `position()`, or `rposition()`) followed by a call to `is_some()` or `is_none()`.
 */
export type SearchIsSome = LintLevel | DetailedLint;
/**
 * Checks if the `seek` method of the `Seek` trait is called with `SeekFrom::Current(0)`, and if it is, suggests using `stream_position` instead.
 */
export type SeekFromCurrent = LintLevel | DetailedLint;
/**
 * Checks for jumps to the start of a stream that implements `Seek` and uses the `seek` method providing `Start` as parameter.
 */
export type SeekToStartInsteadOfRewind = LintLevel | DetailedLint;
/**
 * Checks for explicit self-assignments.
 */
export type SelfAssignment = LintLevel | DetailedLint;
/**
 * Warns when constructors have the same name as their types.
 */
export type SelfNamedConstructors = LintLevel | DetailedLint;
/**
 * Checks that module layout uses only `mod.rs` files.
 */
export type SelfNamedModuleFiles = LintLevel | DetailedLint;
/**
 * Checks for `self` receiver that is only used in recursion with no side-effects.
 */
export type SelfOnlyUsedInRecursion = LintLevel | DetailedLint;
/**
 * Looks for blocks of expressions and fires if the last expression returns `()` but is not followed by a semicolon.
 */
export type SemicolonIfNothingReturned = LintLevel | DetailedLint;
/**
 * Suggests moving the semicolon after a block to the inside of the block, after its last expression.
 */
export type SemicolonInsideBlock = LintLevel | DetailedLint;
/**
 * Suggests moving the semicolon from a block's final expression outside of the block.
 */
export type SemicolonOutsideBlock = LintLevel | DetailedLint;
/**
 * Warns if literal suffixes are separated by an underscore. To enforce separated literal suffix style, see the `unseparated_literal_suffix` lint.
 */
export type SeparatedLiteralSuffix = LintLevel | DetailedLint;
/**
 * Checks for misuses of the serde API.
 */
export type SerdeApiMisuse = LintLevel | DetailedLint;
/**
 * Checks for usage of `contains` to see if a value is not present in a set like `HashSet` or `BTreeSet`, followed by an `insert`.
 */
export type SetContainsOrInsert = LintLevel | DetailedLint;
/**
 * Checks for bindings that shadow other bindings already in scope, while reusing the original value.
 */
export type ShadowReuse = LintLevel | DetailedLint;
/**
 * Checks for bindings that shadow other bindings already in scope, while just changing reference level or mutability.
 */
export type ShadowSame = LintLevel | DetailedLint;
/**
 * Checks for bindings that shadow other bindings already in scope, either without an initialization or with one that does not even use the original value.
 */
export type ShadowUnrelated = LintLevel | DetailedLint;
/**
 * Checks for the use of short circuit boolean conditions as a statement.
 */
export type ShortCircuitStatement = LintLevel | DetailedLint;
/**
 * Nothing. This lint has been deprecated
 */
export type ShouldAssertEq = LintLevel | DetailedLint;
/**
 * Checks for methods that should live in a trait implementation of a `std` trait (see llogiq's blog post for further information) instead of an inherent implementation.
 */
export type ShouldImplementTrait = LintLevel | DetailedLint;
/**
 * Checks for `#[should_panic]` attributes without specifying the expected panic message.
 */
export type ShouldPanicWithoutExpect = LintLevel | DetailedLint;
/**
 * Checks for temporaries returned from function calls in a match scrutinee that have the `clippy::has_significant_drop` attribute.
 */
export type SignificantDropInScrutinee = LintLevel | DetailedLint;
/**
 * Searches for elements marked with `#[clippy::has_significant_drop]` that could be early dropped but are in fact dropped at the end of their scopes. In other words, enforces the "tightening" of their possible lifetimes.
 */
export type SignificantDropTightening = LintLevel | DetailedLint;
/**
 * Checks for names that are very similar and thus confusing. In particular, the lint checks for names with a single character change.
 */
export type SimilarNames = LintLevel | DetailedLint;
/**
 * Checks for functions that are only used once. Does not lint tests.
 */
export type SingleCallFn = LintLevel | DetailedLint;
/**
 * Warns when using `push_str`/`insert_str` with a single-character string literal where `push`/`insert` with a `char` would work fine.
 */
export type SingleCharAddStr = LintLevel | DetailedLint;
/**
 * Checks for lifetimes with names which are one character long.
 */
export type SingleCharLifetimeNames = LintLevel | DetailedLint;
/**
 * Checks for string methods that receive a single-character `str` as an argument, e.g., `_.split("x")`.
 */
export type SingleCharPattern = LintLevel | DetailedLint;
/**
 * Checking for imports with single component use path.
 */
export type SingleComponentPathImports = LintLevel | DetailedLint;
/**
 * Checks whether a for loop has a single element.
 */
export type SingleElementLoop = LintLevel | DetailedLint;
/**
 * Checks for matches with a single arm where an `if let` will usually suffice.
 */
export type SingleMatch = LintLevel | DetailedLint;
/**
 * Checks for matches with two arms where an `if let else` will usually suffice.
 */
export type SingleMatchElse = LintLevel | DetailedLint;
/**
 * Checks for functions with method calls to `.map(_)` on an arg of type `Option` as the outermost expression.
 */
export type SingleOptionMap = LintLevel | DetailedLint;
/**
 * Checks for `Vec` or array initializations that contain only one range.
 */
export type SingleRangeInVecInit = LintLevel | DetailedLint;
/**
 * Detects expressions where `size_of:: ` or `size_of_val:: ` is used as a count of elements of type `T`
 */
export type SizeOfInElementCount = LintLevel | DetailedLint;
/**
 * Checks for calls to `size_of_val()` where the argument is a reference to a reference.
 */
export type SizeOfRef = LintLevel | DetailedLint;
/**
 * Checks for usage of `_.skip_while(condition).next()`.
 */
export type SkipWhileNext = LintLevel | DetailedLint;
/**
 * Checks for string slices immediately followed by `as_bytes`.
 */
export type SlicedStringAsBytes = LintLevel | DetailedLint;
/**
 * Checks slow zero-filled vector initialization
 */
export type SlowVectorInitialization = LintLevel | DetailedLint;
/**
 * When sorting primitive values (integers, bools, chars, as well as arrays, slices, and tuples of such items), it is typically better to use an unstable sort than a stable sort.
 */
export type StableSortPrimitive = LintLevel | DetailedLint;
/**
 * Finds items imported through `std` when available through `alloc`.
 */
export type StdInsteadOfAlloc = LintLevel | DetailedLint;
/**
 * Finds items imported through `std` when available through `core`.
 */
export type StdInsteadOfCore = LintLevel | DetailedLint;
/**
 * Checks for usages of `str.trim().split("\n")` and `str.trim().split("\r\n")`.
 */
export type StrSplitAtNewline = LintLevel | DetailedLint;
/**
 * This lint checks for `.to_string()` method calls on values of type `&str`.
 */
export type StrToString = LintLevel | DetailedLint;
/**
 * Checks for all instances of `x + _` where `x` is of type `String`, but only if `string_add_assign` does not match.
 */
export type StringAdd = LintLevel | DetailedLint;
/**
 * Checks for string appends of the form `x = x + y` (without `let`!).
 */
export type StringAddAssign = LintLevel | DetailedLint;
/**
 * Checks for the use of `.extend(s.chars())` where s is a `&str` or `String`.
 */
export type StringExtendChars = LintLevel | DetailedLint;
/**
 * Check if the string is transformed to byte array and casted back to string.
 */
export type StringFromUtf8AsBytes = LintLevel | DetailedLint;
/**
 * Checks for the `as_bytes` method called on string literals that contain only ASCII characters.
 */
export type StringLitAsBytes = LintLevel | DetailedLint;
/**
 * Checks for `.chars().any(|i| i == c)`.
 */
export type StringLitCharsAny = LintLevel | DetailedLint;
/**
 * Checks for slice operations on strings
 */
export type StringSlice = LintLevel | DetailedLint;
/**
 * Nothing. This lint has been deprecated
 */
export type StringToString = LintLevel | DetailedLint;
/**
 * Checks for usage of `libc::strlen` on a `CString` or `CStr` value, and suggest calling `count_bytes()` instead.
 */
export type StrlenOnCStrings = LintLevel | DetailedLint;
/**
 * Checks for excessive use of bools in structs.
 */
export type StructExcessiveBools = LintLevel | DetailedLint;
/**
 * Detects struct fields that are prefixed or suffixed by the same characters or the name of the struct itself.
 */
export type StructFieldNames = LintLevel | DetailedLint;
/**
 * The `clippy::style` group is mostly about writing idiomatic code. Because style is subjective, this lint group is the most opinionated warn-by-default group in Clippy.
 */
export type Style = LintLevel | DetailedLint;
/**
 * Looks for floating-point expressions that can be expressed using built-in methods to improve both accuracy and performance.
 */
export type SuboptimalFlops = LintLevel | DetailedLint;
/**
 * The `clippy::suspicious` group is similar to the correctness lints in that it contains lints that trigger on code that is really sus and should be fixed. As opposed to correctness lints, it might be possible that the linted code is intentionally written like it is.
 */
export type Suspicious = LintLevel | DetailedLint;
/**
 * Lints for suspicious operations in impls of arithmetic operators, e.g. subtracting elements in an Add impl.
 */
export type SuspiciousArithmeticImpl = LintLevel | DetailedLint;
/**
 * Checks for usage of the non-existent `=*`, `=!` and `=-` operators.
 */
export type SuspiciousAssignmentFormatting = LintLevel | DetailedLint;
/**
 * Checks for `Command::arg()` invocations that look like they should be multiple arguments instead, such as `arg("-t ext2")`.
 */
export type SuspiciousCommandArgSpace = LintLevel | DetailedLint;
/**
 * Detects the use of outer doc comments (`///`, `/**`) followed by a bang (`!`): `///!`
 */
export type SuspiciousDocComments = LintLevel | DetailedLint;
/**
 * Checks for formatting of `else`. It lints if the `else` is followed immediately by a newline or the `else` seems to be missing.
 */
export type SuspiciousElseFormatting = LintLevel | DetailedLint;
/**
 * Checks for calls to `map` followed by a `count`.
 */
export type SuspiciousMap = LintLevel | DetailedLint;
/**
 * Lints for suspicious operations in impls of OpAssign, e.g. subtracting elements in an AddAssign impl.
 */
export type SuspiciousOpAssignImpl = LintLevel | DetailedLint;
/**
 * Checks for the suspicious use of `OpenOptions::create()` without an explicit `OpenOptions::truncate()`.
 */
export type SuspiciousOpenOptions = LintLevel | DetailedLint;
/**
 * Checks for unlikely usages of binary operators that are almost certainly typos and/or copy/paste errors, given the other usages of binary operators nearby.
 */
export type SuspiciousOperationGroupings = LintLevel | DetailedLint;
/**
 * Checks for calls to [`splitn`] (https://doc.rust-lang.org/std/primitive.str.html#method.splitn) and related functions with either zero or one splits.
 */
export type SuspiciousSplitn = LintLevel | DetailedLint;
/**
 * Checks for the usage of `_.to_owned()`, on a `Cow `.
 */
export type SuspiciousToOwned = LintLevel | DetailedLint;
/**
 * Checks the formatting of a unary operator on the right hand side of a binary operator. It lints if there is no space between the binary and unary operators, but there is a space between the unary and its operand.
 */
export type SuspiciousUnaryOpFormatting = LintLevel | DetailedLint;
/**
 * Warns for a Bitwise XOR (`^`) operator being probably confused as a powering. It will not trigger if any of the numbers are not in decimal.
 */
export type SuspiciousXorUsedAsPow = LintLevel | DetailedLint;
/**
 * Checks for calls to `core::mem::swap` where either parameter is derived from a pointer
 */
export type SwapPtrToRef = LintLevel | DetailedLint;
/**
 * Checks for usage of `std::mem::swap` with temporary values.
 */
export type SwapWithTemporary = LintLevel | DetailedLint;
/**
 * Checks doc comments for usage of tab characters.
 */
export type TabsInDocComments = LintLevel | DetailedLint;
/**
 * Checks for construction of a structure or tuple just to assign a value in it.
 */
export type TemporaryAssignment = LintLevel | DetailedLint;
/**
 * Checks for `#[test]` in doctests unless they are marked with either `ignore`, `no_run` or `compile_fail`.
 */
export type TestAttrInDoctest = LintLevel | DetailedLint;
/**
 * Triggers when a testing function (marked with the `#[test]` attribute) isn't inside a testing module (marked with `#[cfg(test)]`).
 */
export type TestsOutsideTestModule = LintLevel | DetailedLint;
/**
 * Checks for `.to_digit(..).is_some()` on `char`s.
 */
export type ToDigitIsSome = LintLevel | DetailedLint;
/**
 * Checks for `ToString::to_string` applied to a type that implements `Display` in a macro that does formatting.
 */
export type ToStringInFormatArgs = LintLevel | DetailedLint;
/**
 * Checks for direct implementations of `ToString`.
 */
export type ToStringTraitImpl = LintLevel | DetailedLint;
/**
 * Checks for usage of `todo!`.
 */
export type Todo = LintLevel | DetailedLint;
/**
 * Checks if the first paragraph in the documentation of items listed in the module page is too long.
 */
export type TooLongFirstDocParagraph = LintLevel | DetailedLint;
/**
 * Checks for functions with too many parameters.
 */
export type TooManyArguments = LintLevel | DetailedLint;
/**
 * Checks for functions with a large amount of lines.
 */
export type TooManyLines = LintLevel | DetailedLint;
/**
 * Checks for function arguments and let bindings denoted as `ref`.
 */
export type ToplevelRefArg = LintLevel | DetailedLint;
/**
 * Displays a warning when a struct with a trailing zero-sized array is declared without a `repr` attribute.
 */
export type TrailingEmptyArray = LintLevel | DetailedLint;
/**
 * Checks for cases where generics or trait objects are being used and multiple syntax specifications for trait bounds are used simultaneously.
 */
export type TraitDuplicationInBounds = LintLevel | DetailedLint;
/**
 * Checks for transmutes from a `&[u8]` to a `&str`.
 */
export type TransmuteBytesToStr = LintLevel | DetailedLint;
/**
 * Checks for transmutes from an integer to a `bool`.
 */
export type TransmuteIntToBool = LintLevel | DetailedLint;
/**
 * Checks for transmutes from `T` to `NonZero `, and suggests the `new_unchecked` method instead.
 */
export type TransmuteIntToNonZero = LintLevel | DetailedLint;
/**
 * Checks for null function pointer creation through transmute.
 */
export type TransmuteNullToFn = LintLevel | DetailedLint;
/**
 * Checks for transmutes from a pointer to a pointer, or from a reference to a reference.
 */
export type TransmutePtrToPtr = LintLevel | DetailedLint;
/**
 * Checks for transmutes from a pointer to a reference.
 */
export type TransmutePtrToRef = LintLevel | DetailedLint;
/**
 * Checks for transmutes between types which do not have a representation defined relative to each other.
 */
export type TransmuteUndefinedRepr = LintLevel | DetailedLint;
/**
 * Checks for transmutes that could be a pointer cast.
 */
export type TransmutesExpressibleAsPtrCasts = LintLevel | DetailedLint;
/**
 * Checks for transmute calls which would receive a null pointer.
 */
export type TransmutingNull = LintLevel | DetailedLint;
/**
 * Warns about calling `str::trim` (or variants) before `str::split_whitespace`.
 */
export type TrimSplitWhitespace = LintLevel | DetailedLint;
/**
 * Checks for trivial regex creation (with `Regex::new`, `RegexBuilder::new`, or `RegexSet::new`).
 */
export type TrivialRegex = LintLevel | DetailedLint;
/**
 * Checks for functions taking arguments by reference, where the argument type is `Copy` and small enough to be more efficient to always pass by value.
 */
export type TriviallyCopyPassByRef = LintLevel | DetailedLint;
/**
 * Checks for usage of `Err(x)?`.
 */
export type TryErr = LintLevel | DetailedLint;
/**
 * Checks for tuple<=>array conversions that are not done with `.into()`.
 */
export type TupleArrayConversions = LintLevel | DetailedLint;
/**
 * Checks for types used in structs, parameters and `let` declarations above a certain complexity threshold.
 */
export type TypeComplexity = LintLevel | DetailedLint;
/**
 * Looks for calls to `.type_id()` on a `Box `.
 */
export type TypeIdOnBox = LintLevel | DetailedLint;
/**
 * This lint warns about unnecessary type repetitions in trait bounds
 */
export type TypeRepetitionInBounds = LintLevel | DetailedLint;
/**
 * Checks for calls to `Read::bytes` on types which don't implement `BufRead`.
 */
export type UnbufferedBytes = LintLevel | DetailedLint;
/**
 * Lints subtraction between an `Instant` and a `Duration`, or between two `Duration` values.
 */
export type UncheckedTimeSubtraction = LintLevel | DetailedLint;
/**
 * Checks that there isn't an infinite recursion in trait implementations.
 */
export type UnconditionalRecursion = LintLevel | DetailedLint;
/**
 * Checks for `unsafe` blocks and impls without a `// SAFETY: ` comment explaining why the unsafe operations performed inside the block are safe.
 */
export type UndocumentedUnsafeBlocks = LintLevel | DetailedLint;
/**
 * Checks for string literals that contain Unicode in a form that is not equal to its NFC-recomposition.
 */
export type UnicodeNotNfc = LintLevel | DetailedLint;
/**
 * Checks for usage of `unimplemented!`.
 */
export type Unimplemented = LintLevel | DetailedLint;
/**
 * It detects references to uninhabited types, such as `!` and warns when those are either dereferenced or returned from a function.
 */
export type UninhabitedReferences = LintLevel | DetailedLint;
/**
 * Checks for `MaybeUninit::uninit().assume_init()`.
 */
export type UninitAssumedInit = LintLevel | DetailedLint;
/**
 * Checks for `set_len()` call that creates `Vec` with uninitialized elements. This is commonly caused by calling `set_len()` right after allocating or reserving a buffer with `new()`, `default()`, `with_capacity()`, or `reserve()`.
 */
export type UninitVec = LintLevel | DetailedLint;
/**
 * Detect when a variable is not inlined in a format string, and suggests to inline it.
 */
export type UninlinedFormatArgs = LintLevel | DetailedLint;
/**
 * Checks for passing a unit value as an argument to a function without using a unit literal (`()`).
 */
export type UnitArg = LintLevel | DetailedLint;
/**
 * Checks for comparisons to unit. This includes all binary comparisons (like `==` and `
 */
export type UnitCmp = LintLevel | DetailedLint;
/**
 * Detects `().hash(_)`.
 */
export type UnitHash = LintLevel | DetailedLint;
/**
 * Checks for functions that expect closures of type Fn(…) -> Ord where the implemented closure returns the unit type. The lint also suggests to remove the semi-colon at the end of the statement if present.
 */
export type UnitReturnExpectingOrd = LintLevel | DetailedLint;
/**
 * Checks for a return type containing a `Box ` where `T` implements `Sized`
 */
export type UnnecessaryBoxReturns = LintLevel | DetailedLint;
/**
 * Checks for casts to the same type, casts of int literals to integer types, casts of float literals to float types, and casts between raw pointers that don't change type or constness.
 */
export type UnnecessaryCast = LintLevel | DetailedLint;
/**
 * Checks for `#[cfg_attr(clippy, allow(clippy::lint))]` and suggests to replace it with `#[allow(clippy::lint)]`.
 */
export type UnnecessaryClippyCfg = LintLevel | DetailedLint;
/**
 * Checks for `Debug` formatting (`{:?}`) applied to an `OsStr` or `Path`.
 */
export type UnnecessaryDebugFormatting = LintLevel | DetailedLint;
/**
 * Checks for calls to `TryInto::try_into` and `TryFrom::try_from` when their infallible counterparts could be used.
 */
export type UnnecessaryFallibleConversions = LintLevel | DetailedLint;
/**
 * Checks for `filter_map` calls that could be replaced by `filter` or `map`. More specifically it checks if the closure provided is only performing one of the filter or map operations and suggests the appropriate option.
 */
export type UnnecessaryFilterMap = LintLevel | DetailedLint;
/**
 * Checks for `find_map` calls that could be replaced by `find` or `map`. More specifically it checks if the closure provided is only performing one of the find or map operations and suggests the appropriate option.
 */
export type UnnecessaryFindMap = LintLevel | DetailedLint;
/**
 * Checks the usage of `.first().is_some()` or `.first().is_none()` to check if a slice is empty.
 */
export type UnnecessaryFirstThenCheck = LintLevel | DetailedLint;
/**
 * Checks for usage of `fold` when a more succinct alternative exists. Specifically, this checks for `fold`s which could be replaced by `any`, `all`, `sum` or `product`.
 */
export type UnnecessaryFold = LintLevel | DetailedLint;
/**
 * Checks the usage of `.get().is_some()` or `.get().is_none()` on std map types.
 */
export type UnnecessaryGetThenCheck = LintLevel | DetailedLint;
/**
 * Checks for usage of `.collect:: >().join("")` on iterators.
 */
export type UnnecessaryJoin = LintLevel | DetailedLint;
/**
 * As the counterpart to `or_fun_call`, this lint looks for unnecessary lazily evaluated closures on `Option` and `Result`.
 */
export type UnnecessaryLazyEvaluations = LintLevel | DetailedLint;
/**
 * Detects functions that are written to return `&str` that could return `&'static str` but instead return a `&'a str`.
 */
export type UnnecessaryLiteralBound = LintLevel | DetailedLint;
/**
 * Checks for `.unwrap()` related calls on `Result`s and `Option`s that are constructed.
 */
export type UnnecessaryLiteralUnwrap = LintLevel | DetailedLint;
/**
 * Suggests removing the use of a `map()` (or `map_err()`) method when an `Option` or `Result` is being constructed.
 */
export type UnnecessaryMapOnConstructor = LintLevel | DetailedLint;
/**
 * Converts some constructs mapping an Enum value for equality comparison.
 */
export type UnnecessaryMapOr = LintLevel | DetailedLint;
/**
 * Checks for unnecessary calls to `min()` or `max()` in the following cases
 */
export type UnnecessaryMinOrMax = LintLevel | DetailedLint;
/**
 * Detects passing a mutable reference to a function that only requires an immutable reference.
 */
export type UnnecessaryMutPassed = LintLevel | DetailedLint;
/**
 * Checks for expression statements that can be reduced to a sub-expression.
 */
export type UnnecessaryOperation = LintLevel | DetailedLint;
/**
 * Checks for usage of `.map_or_else()` "map closure" for `Option` type.
 */
export type UnnecessaryOptionMapOrElse = LintLevel | DetailedLint;
/**
 * Detects cases of owned empty strings being passed as an argument to a function expecting `&str`
 */
export type UnnecessaryOwnedEmptyStrings = LintLevel | DetailedLint;
/**
 * Checks for usage of `.map_or_else()` "map closure" for `Result` type.
 */
export type UnnecessaryResultMapOrElse = LintLevel | DetailedLint;
/**
 * Checks for `// SAFETY: ` comments on safe code.
 */
export type UnnecessarySafetyComment = LintLevel | DetailedLint;
/**
 * Checks for the doc comments of publicly visible safe functions and traits and warns if there is a `# Safety` section.
 */
export type UnnecessarySafetyDoc = LintLevel | DetailedLint;
/**
 * Checks for imports ending in `::{self}`.
 */
export type UnnecessarySelfImports = LintLevel | DetailedLint;
/**
 * Checks for the presence of a semicolon at the end of a `match` or `if` statement evaluating to `()`.
 */
export type UnnecessarySemicolon = LintLevel | DetailedLint;
/**
 * Checks for usage of `Vec::sort_by` passing in a closure which compares the two arguments, either directly or indirectly.
 */
export type UnnecessarySortBy = LintLevel | DetailedLint;
/**
 * Checks for initialization of an identical `struct` from another instance of the type, either by copying a base without setting any field or by moving all fields individually.
 */
export type UnnecessaryStructInitialization = LintLevel | DetailedLint;
/**
 * Checks for unnecessary calls to `ToOwned::to_owned` and other `to_owned`-like functions.
 */
export type UnnecessaryToOwned = LintLevel | DetailedLint;
/**
 * Suggests removing an unnecessary trailing comma before the closing parenthesis in single-line macro invocations.
 */
export type UnnecessaryTrailingComma = LintLevel | DetailedLint;
/**
 * Checks for calls of `unwrap[_err]()` that cannot fail.
 */
export type UnnecessaryUnwrap = LintLevel | DetailedLint;
/**
 * Checks for private functions that only return `Ok` or `Some`.
 */
export type UnnecessaryWraps = LintLevel | DetailedLint;
/**
 * Checks for structure field patterns bound to wildcards.
 */
export type UnneededFieldPattern = LintLevel | DetailedLint;
/**
 * Checks for struct patterns that match against unit variant.
 */
export type UnneededStructPattern = LintLevel | DetailedLint;
/**
 * Checks for tuple and struct patterns with a wildcard pattern (`_`) is next to a rest pattern (`..`).
 */
export type UnneededWildcardPattern = LintLevel | DetailedLint;
/**
 * Checks for unnested or-patterns, e.g., `Some(0) | Some(2)` and suggests replacing the pattern with a nested one, `Some(0 | 2)`.
 */
export type UnnestedOrPatterns = LintLevel | DetailedLint;
/**
 * Checks for usage of `unreachable!`.
 */
export type Unreachable = LintLevel | DetailedLint;
/**
 * Warns if a long integral or floating-point constant does not contain underscores.
 */
export type UnreadableLiteral = LintLevel | DetailedLint;
/**
 * Checks for deriving `serde::Deserialize` on a type that has methods using `unsafe`.
 */
export type UnsafeDeriveDeserialize = LintLevel | DetailedLint;
/**
 * Checks for imports that remove "unsafe" from an item's name.
 */
export type UnsafeRemovedFromName = LintLevel | DetailedLint;
/**
 * Nothing. This lint has been deprecated
 */
export type UnsafeVectorInitialization = LintLevel | DetailedLint;
/**
 * Warns if literal suffixes are not separated by an underscore. To enforce unseparated literal suffix style, see the `separated_literal_suffix` lint.
 */
export type UnseparatedLiteralSuffix = LintLevel | DetailedLint;
/**
 * Checks for transmutes between collections whose types have different ABI, size or alignment.
 */
export type UnsoundCollectionTransmute = LintLevel | DetailedLint;
/**
 * Nothing. This lint has been deprecated
 */
export type UnstableAsMutSlice = LintLevel | DetailedLint;
/**
 * Nothing. This lint has been deprecated
 */
export type UnstableAsSlice = LintLevel | DetailedLint;
/**
 * Checks for functions that are declared `async` but have no `.await`s inside of them.
 */
export type UnusedAsync = LintLevel | DetailedLint;
/**
 * Nothing. This lint has been deprecated
 */
export type UnusedCollect = LintLevel | DetailedLint;
/**
 * Checks for uses of the `enumerate` method where the index is unused (`_`)
 */
export type UnusedEnumerateIndex = LintLevel | DetailedLint;
/**
 * Detects formatting parameters that have no effect on the output of `format!()`, `println!()` or similar macros.
 */
export type UnusedFormatSpecs = LintLevel | DetailedLint;
/**
 * Checks for unused written/read amount.
 */
export type UnusedIoAmount = LintLevel | DetailedLint;
/**
 * Checks for the creation of a `peekable` iterator that is never `.peek()`ed
 */
export type UnusedPeekable = LintLevel | DetailedLint;
/**
 * Checks for calls to `Result::ok()` without using the returned `Option`.
 */
export type UnusedResultOk = LintLevel | DetailedLint;
/**
 * Detects cases where a whole-number literal float is being rounded, using the `floor`, `ceil`, or `round` methods.
 */
export type UnusedRounding = LintLevel | DetailedLint;
/**
 * Checks methods that contain a `self` argument but don't use it
 */
export type UnusedSelf = LintLevel | DetailedLint;
/**
 * Checks for `use Trait` where the Trait is only used for its methods and not referenced by a path directly.
 */
export type UnusedTraitNames = LintLevel | DetailedLint;
/**
 * Checks for unit (`()`) expressions that can be removed.
 */
export type UnusedUnit = LintLevel | DetailedLint;
/**
 * Warns if hexadecimal or binary literals are not grouped by nibble or byte.
 */
export type UnusualByteGroupings = LintLevel | DetailedLint;
/**
 * Checks for functions of type `Result` that contain `expect()` or `unwrap()`
 */
export type UnwrapInResult = LintLevel | DetailedLint;
/**
 * Checks for usages of the following functions with an argument that constructs a default value (e.g., `Default::default` or `String::new`):
 */
export type UnwrapOrDefault = LintLevel | DetailedLint;
/**
 * Checks for `.unwrap()` or `.unwrap_err()` calls on `Result`s and `.unwrap()` call on `Option`s.
 */
export type UnwrapUsed = LintLevel | DetailedLint;
/**
 * Checks for fully capitalized names and optionally names containing a capitalized acronym.
 */
export type UpperCaseAcronyms = LintLevel | DetailedLint;
/**
 * Checks for usage of `Debug` formatting. The purpose of this lint is to catch debugging remnants.
 */
export type UseDebug = LintLevel | DetailedLint;
/**
 * Checks for unnecessary repetition of structure name when a replacement with `Self` is applicable.
 */
export type UseSelf = LintLevel | DetailedLint;
/**
 * Checks for the use of bindings with a single leading underscore.
 */
export type UsedUnderscoreBinding = LintLevel | DetailedLint;
/**
 * Checks for the use of item with a single leading underscore.
 */
export type UsedUnderscoreItems = LintLevel | DetailedLint;
/**
 * Checks for usage of `.as_ref()` or `.as_mut()` where the types before and after the call are the same.
 */
export type UselessAsref = LintLevel | DetailedLint;
/**
 * Checks for `extern crate` and `use` items annotated with lint attributes.
 */
export type UselessAttribute = LintLevel | DetailedLint;
/**
 * Checks that the `concat!` macro has at least two arguments.
 */
export type UselessConcat = LintLevel | DetailedLint;
/**
 * Checks for `Into`, `TryInto`, `From`, `TryFrom`, or `IntoIter` calls which uselessly convert to the same type.
 */
export type UselessConversion = LintLevel | DetailedLint;
/**
 * Checks for the use of `format!("string literal with no argument")` and `format!("{}", foo)` where `foo` is a string.
 */
export type UselessFormat = LintLevel | DetailedLint;
/**
 * Checks for variable declarations immediately followed by a conditional affectation.
 */
export type UselessLetIfSeq = LintLevel | DetailedLint;
/**
 * Checks for `NonZero*::new_unchecked()` being used in a `const` context.
 */
export type UselessNonzeroNewUnchecked = LintLevel | DetailedLint;
/**
 * Checks for transmutes to the original type of the object and transmutes that could be a cast.
 */
export type UselessTransmute = LintLevel | DetailedLint;
/**
 * Checks for usage of `vec![..]` when using `[..]` would be possible.
 */
export type UselessVec = LintLevel | DetailedLint;
/**
 * Checks for usage of `Vec >` where T: Sized anywhere in the code. Check the Box documentation for more information.
 */
export type VecBox = LintLevel | DetailedLint;
/**
 * Checks for calls to `push` immediately after creating a new `Vec`.
 */
export type VecInitThenPush = LintLevel | DetailedLint;
/**
 * Finds occurrences of `Vec::resize(0, an_int)`
 */
export type VecResizeToZero = LintLevel | DetailedLint;
/**
 * Checks for bit masks that can be replaced by a call to `trailing_zeros`
 */
export type VerboseBitMask = LintLevel | DetailedLint;
/**
 * Checks for usage of File::read_to_end and File::read_to_string.
 */
export type VerboseFileReads = LintLevel | DetailedLint;
/**
 * This lint warns when volatile load/store operations (`write_volatile`/`read_volatile`) are applied to composite types.
 */
export type VolatileComposites = LintLevel | DetailedLint;
/**
 * Checks for usage of `waker.clone().wake()`
 */
export type WakerCloneWake = LintLevel | DetailedLint;
/**
 * Checks for while loops comparing floating point values.
 */
export type WhileFloat = LintLevel | DetailedLint;
/**
 * Checks whether variables used within while loop condition can be (and are) mutated in the body.
 */
export type WhileImmutableCondition = LintLevel | DetailedLint;
/**
 * Detects `loop + match` combinations that are easier written as a `while let` loop.
 */
export type WhileLetLoop = LintLevel | DetailedLint;
/**
 * Checks for `while let` expressions on iterators.
 */
export type WhileLetOnIterator = LintLevel | DetailedLint;
/**
 * Checks for wildcard dependencies in the `Cargo.toml`.
 */
export type WildcardDependencies = LintLevel | DetailedLint;
/**
 * Checks for wildcard enum matches using `_`.
 */
export type WildcardEnumMatchArm = LintLevel | DetailedLint;
/**
 * Checks for wildcard imports `use _::*`.
 */
export type WildcardImports = LintLevel | DetailedLint;
/**
 * Checks for wildcard pattern used with others patterns in same match arm.
 */
export type WildcardInOrPatterns = LintLevel | DetailedLint;
/**
 * This lint warns about the use of literals as `write!`/`writeln!` args.
 */
export type WriteLiteral = LintLevel | DetailedLint;
/**
 * This lint warns when you use `write!()` with a format string that ends in a newline.
 */
export type WriteWithNewline = LintLevel | DetailedLint;
/**
 * This lint warns when you use `writeln!(buf, "")` to print a newline.
 */
export type WritelnEmptyString = LintLevel | DetailedLint;
/**
 * Nothing. This lint has been deprecated
 */
export type WrongPubSelfConvention = LintLevel | DetailedLint;
/**
 * Checks for methods with certain name prefixes or suffixes, and which do not adhere to standard conventions regarding how `self` is taken. The actual rules are:
 */
export type WrongSelfConvention = LintLevel | DetailedLint;
/**
 * Checks for transmutes that can't ever be correct on any architecture.
 */
export type WrongTransmute = LintLevel | DetailedLint;
/**
 * Checks for `0.0 / 0.0`.
 */
export type ZeroDividedByZero = LintLevel | DetailedLint;
/**
 * Warns if an integral constant literal starts with `0`.
 */
export type ZeroPrefixedLiteral = LintLevel | DetailedLint;
/**
 * Catch casts from `0` to some pointer type
 */
export type ZeroPtr = LintLevel | DetailedLint;
/**
 * Checks for array or vec initializations which contain an expression with side effects, but which have a repeat count of zero.
 */
export type ZeroRepeatSideEffects = LintLevel | DetailedLint;
/**
 * Checks for maps with zero-sized value types anywhere in the code.
 */
export type ZeroSizedMapValues = LintLevel | DetailedLint;
/**
 * Looks for code that spawns a process but never calls `wait()` on the child.
 */
export type ZombieProcesses = LintLevel | DetailedLint;
/**
 * Checks for `offset(_)`, `wrapping_`{`add`, `sub`}, etc. on raw pointers to zero-sized types
 */
export type ZstOffset = LintLevel | DetailedLint;
export type Lint = (LintLevel | DetailedLint) | undefined;

/**
 * Lint settings for Clippy individual lints and lint groups.
 */
export interface ClippyLints {
  absolute_paths?: AbsolutePaths;
  absurd_extreme_comparisons?: AbsurdExtremeComparisons;
  all?: AllClippyLints;
  alloc_instead_of_core?: AllocInsteadOfCore;
  allow_attributes?: AllowAttributes;
  allow_attributes_without_reason?: AllowAttributesWithoutReason;
  almost_complete_range?: AlmostCompleteRange;
  almost_swapped?: AlmostSwapped;
  approx_constant?: ApproxConstant;
  arbitrary_source_item_ordering?: ArbitrarySourceItemOrdering;
  arc_with_non_send_sync?: ArcWithNonSendSync;
  arithmetic_side_effects?: ArithmeticSideEffects;
  as_conversions?: AsConversions;
  as_pointer_underscore?: AsPointerUnderscore;
  as_ptr_cast_mut?: AsPtrCastMut;
  as_underscore?: AsUnderscore;
  assertions_on_constants?: AssertionsOnConstants;
  assertions_on_result_states?: AssertionsOnResultStates;
  assign_op_pattern?: AssignOpPattern;
  assign_ops?: AssignOps;
  assigning_clones?: AssigningClones;
  async_yields_async?: AsyncYieldsAsync;
  await_holding_invalid_type?: AwaitHoldingInvalidType;
  await_holding_lock?: AwaitHoldingLock;
  await_holding_refcell_ref?: AwaitHoldingRefcellRef;
  bad_bit_mask?: BadBitMask;
  big_endian_bytes?: BigEndianBytes;
  bind_instead_of_map?: BindInsteadOfMap;
  blanket_clippy_restriction_lints?: BlanketClippyRestrictionLints;
  blocks_in_conditions?: BlocksInConditions;
  bool_assert_comparison?: BoolAssertComparison;
  bool_comparison?: BoolComparison;
  bool_to_int_with_if?: BoolToIntWithIf;
  borrow_as_ptr?: BorrowAsPtr;
  borrow_deref_ref?: BorrowDerefRef;
  borrow_interior_mutable_const?: BorrowInteriorMutableConst;
  borrowed_box?: BorrowedBox;
  box_collection?: BoxCollection;
  box_default?: BoxDefault;
  boxed_local?: BoxedLocal;
  branches_sharing_code?: BranchesSharingCode;
  builtin_type_shadow?: BuiltinTypeShadow;
  byte_char_slices?: ByteCharSlices;
  bytes_count_to_len?: BytesCountToLen;
  bytes_nth?: BytesNth;
  cargo?: Cargo;
  cargo_common_metadata?: CargoCommonMetadata;
  case_sensitive_file_extension_comparisons?: CaseSensitiveFileExtensionComparisons;
  cast_abs_to_unsigned?: CastAbsToUnsigned;
  cast_enum_constructor?: CastEnumConstructor;
  cast_enum_truncation?: CastEnumTruncation;
  cast_lossless?: CastLossless;
  cast_nan_to_int?: CastNanToInt;
  cast_possible_truncation?: CastPossibleTruncation;
  cast_possible_wrap?: CastPossibleWrap;
  cast_precision_loss?: CastPrecisionLoss;
  cast_ptr_alignment?: CastPtrAlignment;
  cast_sign_loss?: CastSignLoss;
  cast_slice_different_sizes?: CastSliceDifferentSizes;
  cast_slice_from_raw_parts?: CastSliceFromRawParts;
  cfg_not_test?: CfgNotTest;
  char_indices_as_byte_indices?: CharIndicesAsByteIndices;
  char_lit_as_u8?: CharLitAsU8;
  chars_last_cmp?: CharsLastCmp;
  chars_next_cmp?: CharsNextCmp;
  checked_conversions?: CheckedConversions;
  clear_with_drain?: ClearWithDrain;
  clone_on_copy?: CloneOnCopy;
  clone_on_ref_ptr?: CloneOnRefPtr;
  cloned_instead_of_copied?: ClonedInsteadOfCopied;
  cloned_ref_to_slice_refs?: ClonedRefToSliceRefs;
  cmp_null?: CmpNull;
  cmp_owned?: CmpOwned;
  coerce_container_to_any?: CoerceContainerToAny;
  cognitive_complexity?: CognitiveComplexity;
  collapsible_else_if?: CollapsibleElseIf;
  collapsible_if?: CollapsibleIf;
  collapsible_match?: CollapsibleMatch;
  collapsible_str_replace?: CollapsibleStrReplace;
  collection_is_never_read?: CollectionIsNeverRead;
  comparison_chain?: ComparisonChain;
  comparison_to_empty?: ComparisonToEmpty;
  complexity?: Complexity;
  confusing_method_to_numeric_cast?: ConfusingMethodToNumericCast;
  const_is_empty?: ConstIsEmpty;
  copy_iterator?: CopyIterator;
  correctness?: Correctness;
  crate_in_macro_def?: CrateInMacroDef;
  create_dir?: CreateDir;
  crosspointer_transmute?: CrosspointerTransmute;
  dbg_macro?: DbgMacro;
  debug_assert_with_mut_call?: DebugAssertWithMutCall;
  decimal_bitwise_operands?: DecimalBitwiseOperands;
  decimal_literal_representation?: DecimalLiteralRepresentation;
  declare_interior_mutable_const?: DeclareInteriorMutableConst;
  default_constructed_unit_structs?: DefaultConstructedUnitStructs;
  default_instead_of_iter_empty?: DefaultInsteadOfIterEmpty;
  default_numeric_fallback?: DefaultNumericFallback;
  default_trait_access?: DefaultTraitAccess;
  default_union_representation?: DefaultUnionRepresentation;
  deprecated?: Deprecated;
  deprecated_cfg_attr?: DeprecatedCfgAttr;
  deprecated_clippy_cfg_attr?: DeprecatedClippyCfgAttr;
  deprecated_semver?: DeprecatedSemver;
  deref_addrof?: DerefAddrof;
  deref_by_slicing?: DerefBySlicing;
  derivable_impls?: DerivableImpls;
  derive_ord_xor_partial_ord?: DeriveOrdXorPartialOrd;
  derive_partial_eq_without_eq?: DerivePartialEqWithoutEq;
  derived_hash_with_manual_eq?: DerivedHashWithManualEq;
  disallowed_fields?: DisallowedFields;
  disallowed_macros?: DisallowedMacros;
  disallowed_methods?: DisallowedMethods;
  disallowed_names?: DisallowedNames;
  disallowed_script_idents?: DisallowedScriptIdents;
  disallowed_types?: DisallowedTypes;
  diverging_sub_expression?: DivergingSubExpression;
  doc_broken_link?: DocBrokenLink;
  doc_comment_double_space_linebreaks?: DocCommentDoubleSpaceLinebreaks;
  doc_include_without_cfg?: DocIncludeWithoutCfg;
  doc_lazy_continuation?: DocLazyContinuation;
  doc_link_code?: DocLinkCode;
  doc_link_with_quotes?: DocLinkWithQuotes;
  doc_markdown?: DocMarkdown;
  doc_nested_refdefs?: DocNestedRefdefs;
  doc_overindented_list_items?: DocOverindentedListItems;
  doc_paragraphs_missing_punctuation?: DocParagraphsMissingPunctuation;
  doc_suspicious_footnotes?: DocSuspiciousFootnotes;
  double_comparisons?: DoubleComparisons;
  double_ended_iterator_last?: DoubleEndedIteratorLast;
  double_must_use?: DoubleMustUse;
  double_parens?: DoubleParens;
  drain_collect?: DrainCollect;
  drop_non_drop?: DropNonDrop;
  duplicate_mod?: DuplicateMod;
  duplicate_underscore_argument?: DuplicateUnderscoreArgument;
  duplicated_attributes?: DuplicatedAttributes;
  duration_suboptimal_units?: DurationSuboptimalUnits;
  duration_subsec?: DurationSubsec;
  eager_transmute?: EagerTransmute;
  elidable_lifetime_names?: ElidableLifetimeNames;
  else_if_without_else?: ElseIfWithoutElse;
  empty_docs?: EmptyDocs;
  empty_drop?: EmptyDrop;
  empty_enum_variants_with_brackets?: EmptyEnumVariantsWithBrackets;
  empty_enums?: EmptyEnums;
  empty_line_after_doc_comments?: EmptyLineAfterDocComments;
  empty_line_after_outer_attr?: EmptyLineAfterOuterAttr;
  empty_loop?: EmptyLoop;
  empty_structs_with_brackets?: EmptyStructsWithBrackets;
  enum_clike_unportable_variant?: EnumClikeUnportableVariant;
  enum_glob_use?: EnumGlobUse;
  enum_variant_names?: EnumVariantNames;
  eq_op?: EqOp;
  equatable_if_let?: EquatableIfLet;
  erasing_op?: ErasingOp;
  err_expect?: ErrExpect;
  error_impl_error?: ErrorImplError;
  excessive_nesting?: ExcessiveNesting;
  excessive_precision?: ExcessivePrecision;
  exhaustive_enums?: ExhaustiveEnums;
  exhaustive_structs?: ExhaustiveStructs;
  exit?: Exit;
  expect_fun_call?: ExpectFunCall;
  expect_used?: ExpectUsed;
  expl_impl_clone_on_copy?: ExplImplCloneOnCopy;
  explicit_auto_deref?: ExplicitAutoDeref;
  explicit_counter_loop?: ExplicitCounterLoop;
  explicit_deref_methods?: ExplicitDerefMethods;
  explicit_into_iter_loop?: ExplicitIntoIterLoop;
  explicit_iter_loop?: ExplicitIterLoop;
  explicit_write?: ExplicitWrite;
  extend_from_slice?: ExtendFromSlice;
  extend_with_drain?: ExtendWithDrain;
  extra_unused_lifetimes?: ExtraUnusedLifetimes;
  extra_unused_type_parameters?: ExtraUnusedTypeParameters;
  fallible_impl_from?: FallibleImplFrom;
  field_reassign_with_default?: FieldReassignWithDefault;
  field_scoped_visibility_modifiers?: FieldScopedVisibilityModifiers;
  filetype_is_file?: FiletypeIsFile;
  filter_map_bool_then?: FilterMapBoolThen;
  filter_map_identity?: FilterMapIdentity;
  filter_map_next?: FilterMapNext;
  filter_next?: FilterNext;
  flat_map_identity?: FlatMapIdentity;
  flat_map_option?: FlatMapOption;
  float_arithmetic?: FloatArithmetic;
  float_cmp?: FloatCmp;
  float_cmp_const?: FloatCmpConst;
  float_equality_without_abs?: FloatEqualityWithoutAbs;
  fn_params_excessive_bools?: FnParamsExcessiveBools;
  fn_to_numeric_cast?: FnToNumericCast;
  fn_to_numeric_cast_any?: FnToNumericCastAny;
  fn_to_numeric_cast_with_truncation?: FnToNumericCastWithTruncation;
  for_kv_map?: ForKvMap;
  forget_non_drop?: ForgetNonDrop;
  format_collect?: FormatCollect;
  format_in_format_args?: FormatInFormatArgs;
  format_push_string?: FormatPushString;
  four_forward_slashes?: FourForwardSlashes;
  from_iter_instead_of_collect?: FromIterInsteadOfCollect;
  from_over_into?: FromOverInto;
  from_raw_with_void_ptr?: FromRawWithVoidPtr;
  from_str_radix_10?: FromStrRadix10;
  future_not_send?: FutureNotSend;
  get_first?: GetFirst;
  get_last_with_len?: GetLastWithLen;
  get_unwrap?: GetUnwrap;
  host_endian_bytes?: HostEndianBytes;
  identity_op?: IdentityOp;
  if_let_mutex?: IfLetMutex;
  if_not_else?: IfNotElse;
  if_same_then_else?: IfSameThenElse;
  if_then_some_else_none?: IfThenSomeElseNone;
  ifs_same_cond?: IfsSameCond;
  ignore_without_reason?: IgnoreWithoutReason;
  ignored_unit_patterns?: IgnoredUnitPatterns;
  impl_hash_borrow_with_str_and_bytes?: ImplHashBorrowWithStrAndBytes;
  impl_trait_in_params?: ImplTraitInParams;
  implicit_clone?: ImplicitClone;
  implicit_hasher?: ImplicitHasher;
  implicit_return?: ImplicitReturn;
  implicit_saturating_add?: ImplicitSaturatingAdd;
  implicit_saturating_sub?: ImplicitSaturatingSub;
  implied_bounds_in_impls?: ImpliedBoundsInImpls;
  impossible_comparisons?: ImpossibleComparisons;
  imprecise_flops?: ImpreciseFlops;
  incompatible_msrv?: IncompatibleMsrv;
  inconsistent_digit_grouping?: InconsistentDigitGrouping;
  inconsistent_struct_constructor?: InconsistentStructConstructor;
  index_refutable_slice?: IndexRefutableSlice;
  indexing_slicing?: IndexingSlicing;
  ineffective_bit_mask?: IneffectiveBitMask;
  ineffective_open_options?: IneffectiveOpenOptions;
  inefficient_to_string?: InefficientToString;
  infallible_destructuring_match?: InfallibleDestructuringMatch;
  infallible_try_from?: InfallibleTryFrom;
  infinite_iter?: InfiniteIter;
  infinite_loop?: InfiniteLoop;
  inherent_to_string?: InherentToString;
  inherent_to_string_shadow_display?: InherentToStringShadowDisplay;
  init_numbered_fields?: InitNumberedFields;
  inline_always?: InlineAlways;
  inline_asm_x86_att_syntax?: InlineAsmX86AttSyntax;
  inline_asm_x86_intel_syntax?: InlineAsmX86IntelSyntax;
  inline_fn_without_body?: InlineFnWithoutBody;
  inspect_for_each?: InspectForEach;
  int_plus_one?: IntPlusOne;
  integer_division?: IntegerDivision;
  integer_division_remainder_used?: IntegerDivisionRemainderUsed;
  into_iter_on_ref?: IntoIterOnRef;
  into_iter_without_iter?: IntoIterWithoutIter;
  invalid_regex?: InvalidRegex;
  invalid_upcast_comparisons?: InvalidUpcastComparisons;
  inverted_saturating_sub?: InvertedSaturatingSub;
  invisible_characters?: InvisibleCharacters;
  io_other_error?: IoOtherError;
  ip_constant?: IpConstant;
  is_digit_ascii_radix?: IsDigitAsciiRadix;
  items_after_statements?: ItemsAfterStatements;
  items_after_test_module?: ItemsAfterTestModule;
  iter_cloned_collect?: IterClonedCollect;
  iter_count?: IterCount;
  iter_filter_is_ok?: IterFilterIsOk;
  iter_filter_is_some?: IterFilterIsSome;
  iter_kv_map?: IterKvMap;
  iter_next_loop?: IterNextLoop;
  iter_next_slice?: IterNextSlice;
  iter_not_returning_iterator?: IterNotReturningIterator;
  iter_nth?: IterNth;
  iter_nth_zero?: IterNthZero;
  iter_on_empty_collections?: IterOnEmptyCollections;
  iter_on_single_items?: IterOnSingleItems;
  iter_out_of_bounds?: IterOutOfBounds;
  iter_over_hash_type?: IterOverHashType;
  iter_overeager_cloned?: IterOvereagerCloned;
  iter_skip_next?: IterSkipNext;
  iter_skip_zero?: IterSkipZero;
  iter_with_drain?: IterWithDrain;
  iter_without_into_iter?: IterWithoutIntoIter;
  iterator_step_by_zero?: IteratorStepByZero;
  join_absolute_paths?: JoinAbsolutePaths;
  just_underscores_and_digits?: JustUnderscoresAndDigits;
  large_const_arrays?: LargeConstArrays;
  large_digit_groups?: LargeDigitGroups;
  large_enum_variant?: LargeEnumVariant;
  large_futures?: LargeFutures;
  large_include_file?: LargeIncludeFile;
  large_stack_arrays?: LargeStackArrays;
  large_stack_frames?: LargeStackFrames;
  large_types_passed_by_value?: LargeTypesPassedByValue;
  legacy_numeric_constants?: LegacyNumericConstants;
  len_without_is_empty?: LenWithoutIsEmpty;
  len_zero?: LenZero;
  let_and_return?: LetAndReturn;
  let_underscore_future?: LetUnderscoreFuture;
  let_underscore_lock?: LetUnderscoreLock;
  let_underscore_must_use?: LetUnderscoreMustUse;
  let_underscore_untyped?: LetUnderscoreUntyped;
  let_unit_value?: LetUnitValue;
  let_with_type_underscore?: LetWithTypeUnderscore;
  lines_filter_map_ok?: LinesFilterMapOk;
  linkedlist?: Linkedlist;
  lint_groups_priority?: LintGroupsPriority;
  literal_string_with_formatting_args?: LiteralStringWithFormattingArgs;
  little_endian_bytes?: LittleEndianBytes;
  lossy_float_literal?: LossyFloatLiteral;
  macro_metavars_in_unsafe?: MacroMetavarsInUnsafe;
  macro_use_imports?: MacroUseImports;
  main_recursion?: MainRecursion;
  manual_abs_diff?: ManualAbsDiff;
  manual_assert?: ManualAssert;
  manual_async_fn?: ManualAsyncFn;
  manual_bits?: ManualBits;
  manual_c_str_literals?: ManualCStrLiterals;
  manual_checked_ops?: ManualCheckedOps;
  manual_clamp?: ManualClamp;
  manual_contains?: ManualContains;
  manual_dangling_ptr?: ManualDanglingPtr;
  manual_div_ceil?: ManualDivCeil;
  manual_filter?: ManualFilter;
  manual_filter_map?: ManualFilterMap;
  manual_find?: ManualFind;
  manual_find_map?: ManualFindMap;
  manual_flatten?: ManualFlatten;
  manual_hash_one?: ManualHashOne;
  manual_ignore_case_cmp?: ManualIgnoreCaseCmp;
  manual_ilog2?: ManualIlog2;
  manual_inspect?: ManualInspect;
  manual_instant_elapsed?: ManualInstantElapsed;
  manual_is_ascii_check?: ManualIsAsciiCheck;
  manual_is_finite?: ManualIsFinite;
  manual_is_infinite?: ManualIsInfinite;
  manual_is_multiple_of?: ManualIsMultipleOf;
  manual_is_power_of_two?: ManualIsPowerOfTwo;
  manual_is_variant_and?: ManualIsVariantAnd;
  manual_let_else?: ManualLetElse;
  manual_main_separator_str?: ManualMainSeparatorStr;
  manual_map?: ManualMap;
  manual_memcpy?: ManualMemcpy;
  manual_midpoint?: ManualMidpoint;
  manual_next_back?: ManualNextBack;
  manual_non_exhaustive?: ManualNonExhaustive;
  manual_noop_waker?: ManualNoopWaker;
  manual_ok_err?: ManualOkErr;
  manual_ok_or?: ManualOkOr;
  manual_option_as_slice?: ManualOptionAsSlice;
  manual_option_zip?: ManualOptionZip;
  manual_pattern_char_comparison?: ManualPatternCharComparison;
  manual_pop_if?: ManualPopIf;
  manual_range_contains?: ManualRangeContains;
  manual_range_patterns?: ManualRangePatterns;
  manual_rem_euclid?: ManualRemEuclid;
  manual_repeat_n?: ManualRepeatN;
  manual_retain?: ManualRetain;
  manual_rotate?: ManualRotate;
  manual_saturating_arithmetic?: ManualSaturatingArithmetic;
  manual_slice_fill?: ManualSliceFill;
  manual_slice_size_calculation?: ManualSliceSizeCalculation;
  manual_split_once?: ManualSplitOnce;
  manual_str_repeat?: ManualStrRepeat;
  manual_string_new?: ManualStringNew;
  manual_strip?: ManualStrip;
  manual_swap?: ManualSwap;
  manual_take?: ManualTake;
  manual_try_fold?: ManualTryFold;
  manual_unwrap_or?: ManualUnwrapOr;
  manual_unwrap_or_default?: ManualUnwrapOrDefault;
  manual_while_let_some?: ManualWhileLetSome;
  many_single_char_names?: ManySingleCharNames;
  map_all_any_identity?: MapAllAnyIdentity;
  map_clone?: MapClone;
  map_collect_result_unit?: MapCollectResultUnit;
  map_entry?: MapEntry;
  map_err_ignore?: MapErrIgnore;
  map_flatten?: MapFlatten;
  map_identity?: MapIdentity;
  map_unwrap_or?: MapUnwrapOr;
  map_with_unused_argument_over_ranges?: MapWithUnusedArgumentOverRanges;
  match_as_ref?: MatchAsRef;
  match_bool?: MatchBool;
  match_like_matches_macro?: MatchLikeMatchesMacro;
  match_on_vec_items?: MatchOnVecItems;
  match_overlapping_arm?: MatchOverlappingArm;
  match_ref_pats?: MatchRefPats;
  match_result_ok?: MatchResultOk;
  match_same_arms?: MatchSameArms;
  match_single_binding?: MatchSingleBinding;
  match_str_case_mismatch?: MatchStrCaseMismatch;
  match_wild_err_arm?: MatchWildErrArm;
  match_wildcard_for_single_variants?: MatchWildcardForSingleVariants;
  maybe_infinite_iter?: MaybeInfiniteIter;
  mem_forget?: MemForget;
  mem_replace_option_with_none?: MemReplaceOptionWithNone;
  mem_replace_option_with_some?: MemReplaceOptionWithSome;
  mem_replace_with_default?: MemReplaceWithDefault;
  mem_replace_with_uninit?: MemReplaceWithUninit;
  min_ident_chars?: MinIdentChars;
  min_max?: MinMax;
  misaligned_transmute?: MisalignedTransmute;
  mismatching_type_param_order?: MismatchingTypeParamOrder;
  misnamed_getters?: MisnamedGetters;
  misrefactored_assign_op?: MisrefactoredAssignOp;
  missing_assert_message?: MissingAssertMessage;
  missing_asserts_for_indexing?: MissingAssertsForIndexing;
  missing_const_for_fn?: MissingConstForFn;
  missing_const_for_thread_local?: MissingConstForThreadLocal;
  missing_docs_in_private_items?: MissingDocsInPrivateItems;
  missing_enforced_import_renames?: MissingEnforcedImportRenames;
  missing_errors_doc?: MissingErrorsDoc;
  missing_fields_in_debug?: MissingFieldsInDebug;
  missing_inline_in_public_items?: MissingInlineInPublicItems;
  missing_panics_doc?: MissingPanicsDoc;
  missing_safety_doc?: MissingSafetyDoc;
  missing_spin_loop?: MissingSpinLoop;
  missing_trait_methods?: MissingTraitMethods;
  missing_transmute_annotations?: MissingTransmuteAnnotations;
  mistyped_literal_suffixes?: MistypedLiteralSuffixes;
  mixed_attributes_style?: MixedAttributesStyle;
  mixed_case_hex_literals?: MixedCaseHexLiterals;
  mixed_read_write_in_expression?: MixedReadWriteInExpression;
  mod_module_files?: ModModuleFiles;
  module_inception?: ModuleInception;
  module_name_repetitions?: ModuleNameRepetitions;
  modulo_arithmetic?: ModuloArithmetic;
  modulo_one?: ModuloOne;
  multi_assignments?: MultiAssignments;
  multiple_bound_locations?: MultipleBoundLocations;
  multiple_crate_versions?: MultipleCrateVersions;
  multiple_inherent_impl?: MultipleInherentImpl;
  multiple_unsafe_ops_per_block?: MultipleUnsafeOpsPerBlock;
  must_use_candidate?: MustUseCandidate;
  must_use_unit?: MustUseUnit;
  mut_from_ref?: MutFromRef;
  mut_mut?: MutMut;
  mut_mutex_lock?: MutMutexLock;
  mut_range_bound?: MutRangeBound;
  mutable_key_type?: MutableKeyType;
  mutex_atomic?: MutexAtomic;
  mutex_integer?: MutexInteger;
  naive_bytecount?: NaiveBytecount;
  needless_arbitrary_self_type?: NeedlessArbitrarySelfType;
  needless_as_bytes?: NeedlessAsBytes;
  needless_bitwise_bool?: NeedlessBitwiseBool;
  needless_bool?: NeedlessBool;
  needless_bool_assign?: NeedlessBoolAssign;
  needless_borrow?: NeedlessBorrow;
  needless_borrowed_reference?: NeedlessBorrowedReference;
  needless_borrows_for_generic_args?: NeedlessBorrowsForGenericArgs;
  needless_character_iteration?: NeedlessCharacterIteration;
  needless_collect?: NeedlessCollect;
  needless_continue?: NeedlessContinue;
  needless_doctest_main?: NeedlessDoctestMain;
  needless_else?: NeedlessElse;
  needless_for_each?: NeedlessForEach;
  needless_ifs?: NeedlessIfs;
  needless_late_init?: NeedlessLateInit;
  needless_lifetimes?: NeedlessLifetimes;
  needless_match?: NeedlessMatch;
  needless_maybe_sized?: NeedlessMaybeSized;
  needless_option_as_deref?: NeedlessOptionAsDeref;
  needless_option_take?: NeedlessOptionTake;
  needless_parens_on_range_literals?: NeedlessParensOnRangeLiterals;
  needless_pass_by_ref_mut?: NeedlessPassByRefMut;
  needless_pass_by_value?: NeedlessPassByValue;
  needless_pub_self?: NeedlessPubSelf;
  needless_question_mark?: NeedlessQuestionMark;
  needless_range_loop?: NeedlessRangeLoop;
  needless_raw_string_hashes?: NeedlessRawStringHashes;
  needless_raw_strings?: NeedlessRawStrings;
  needless_return?: NeedlessReturn;
  needless_return_with_question_mark?: NeedlessReturnWithQuestionMark;
  needless_splitn?: NeedlessSplitn;
  needless_type_cast?: NeedlessTypeCast;
  needless_update?: NeedlessUpdate;
  neg_cmp_op_on_partial_ord?: NegCmpOpOnPartialOrd;
  neg_multiply?: NegMultiply;
  negative_feature_names?: NegativeFeatureNames;
  never_loop?: NeverLoop;
  new_ret_no_self?: NewRetNoSelf;
  new_without_default?: NewWithoutDefault;
  no_effect?: NoEffect;
  no_effect_replace?: NoEffectReplace;
  no_effect_underscore_binding?: NoEffectUnderscoreBinding;
  no_mangle_with_rust_abi?: NoMangleWithRustAbi;
  non_ascii_literal?: NonAsciiLiteral;
  non_canonical_clone_impl?: NonCanonicalCloneImpl;
  non_canonical_partial_ord_impl?: NonCanonicalPartialOrdImpl;
  non_minimal_cfg?: NonMinimalCfg;
  non_octal_unix_permissions?: NonOctalUnixPermissions;
  non_send_fields_in_send_ty?: NonSendFieldsInSendTy;
  non_std_lazy_statics?: NonStdLazyStatics;
  non_zero_suggestions?: NonZeroSuggestions;
  nonminimal_bool?: NonminimalBool;
  nonsensical_open_options?: NonsensicalOpenOptions;
  nonstandard_macro_braces?: NonstandardMacroBraces;
  not_unsafe_ptr_arg_deref?: NotUnsafePtrArgDeref;
  nursery?: Nursery;
  obfuscated_if_else?: ObfuscatedIfElse;
  octal_escapes?: OctalEscapes;
  ok_expect?: OkExpect;
  only_used_in_recursion?: OnlyUsedInRecursion;
  op_ref?: OpRef;
  option_as_ref_cloned?: OptionAsRefCloned;
  option_as_ref_deref?: OptionAsRefDeref;
  option_env_unwrap?: OptionEnvUnwrap;
  option_filter_map?: OptionFilterMap;
  option_if_let_else?: OptionIfLetElse;
  option_map_or_err_ok?: OptionMapOrErrOk;
  option_map_or_none?: OptionMapOrNone;
  option_map_unit_fn?: OptionMapUnitFn;
  option_option?: OptionOption;
  or_fun_call?: OrFunCall;
  or_then_unwrap?: OrThenUnwrap;
  out_of_bounds_indexing?: OutOfBoundsIndexing;
  overly_complex_bool_expr?: OverlyComplexBoolExpr;
  owned_cow?: OwnedCow;
  panic?: Panic;
  panic_in_result_fn?: PanicInResultFn;
  panicking_overflow_checks?: PanickingOverflowChecks;
  panicking_unwrap?: PanickingUnwrap;
  partial_pub_fields?: PartialPubFields;
  partialeq_ne_impl?: PartialeqNeImpl;
  partialeq_to_none?: PartialeqToNone;
  path_buf_push_overwrite?: PathBufPushOverwrite;
  path_ends_with_ext?: PathEndsWithExt;
  pathbuf_init_then_push?: PathbufInitThenPush;
  pattern_type_mismatch?: PatternTypeMismatch;
  pedantic?: Pedantic;
  perf?: Perf;
  permissions_set_readonly_false?: PermissionsSetReadonlyFalse;
  pointer_format?: PointerFormat;
  pointers_in_nomem_asm_block?: PointersInNomemAsmBlock;
  possible_missing_comma?: PossibleMissingComma;
  possible_missing_else?: PossibleMissingElse;
  precedence?: Precedence;
  precedence_bits?: PrecedenceBits;
  print_in_format_impl?: PrintInFormatImpl;
  print_literal?: PrintLiteral;
  print_stderr?: PrintStderr;
  print_stdout?: PrintStdout;
  print_with_newline?: PrintWithNewline;
  println_empty_string?: PrintlnEmptyString;
  ptr_arg?: PtrArg;
  ptr_as_ptr?: PtrAsPtr;
  ptr_cast_constness?: PtrCastConstness;
  ptr_eq?: PtrEq;
  ptr_offset_by_literal?: PtrOffsetByLiteral;
  ptr_offset_with_cast?: PtrOffsetWithCast;
  pub_enum_variant_names?: PubEnumVariantNames;
  pub_underscore_fields?: PubUnderscoreFields;
  pub_use?: PubUse;
  pub_with_shorthand?: PubWithShorthand;
  pub_without_shorthand?: PubWithoutShorthand;
  question_mark?: QuestionMark;
  question_mark_used?: QuestionMarkUsed;
  range_minus_one?: RangeMinusOne;
  range_plus_one?: RangePlusOne;
  range_step_by_zero?: RangeStepByZero;
  range_zip_with_len?: RangeZipWithLen;
  rc_buffer?: RcBuffer;
  rc_clone_in_vec_init?: RcCloneInVecInit;
  rc_mutex?: RcMutex;
  read_line_without_trim?: ReadLineWithoutTrim;
  read_zero_byte_vec?: ReadZeroByteVec;
  readonly_write_lock?: ReadonlyWriteLock;
  recursive_format_impl?: RecursiveFormatImpl;
  redundant_allocation?: RedundantAllocation;
  redundant_as_str?: RedundantAsStr;
  redundant_async_block?: RedundantAsyncBlock;
  redundant_at_rest_pattern?: RedundantAtRestPattern;
  redundant_clone?: RedundantClone;
  redundant_closure?: RedundantClosure;
  redundant_closure_call?: RedundantClosureCall;
  redundant_closure_for_method_calls?: RedundantClosureForMethodCalls;
  redundant_comparisons?: RedundantComparisons;
  redundant_else?: RedundantElse;
  redundant_feature_names?: RedundantFeatureNames;
  redundant_field_names?: RedundantFieldNames;
  redundant_guards?: RedundantGuards;
  redundant_iter_cloned?: RedundantIterCloned;
  redundant_locals?: RedundantLocals;
  redundant_pattern?: RedundantPattern;
  redundant_pattern_matching?: RedundantPatternMatching;
  redundant_pub_crate?: RedundantPubCrate;
  redundant_slicing?: RedundantSlicing;
  redundant_static_lifetimes?: RedundantStaticLifetimes;
  redundant_test_prefix?: RedundantTestPrefix;
  redundant_type_annotations?: RedundantTypeAnnotations;
  ref_as_ptr?: RefAsPtr;
  ref_binding_to_reference?: RefBindingToReference;
  ref_option?: RefOption;
  ref_option_ref?: RefOptionRef;
  ref_patterns?: RefPatterns;
  regex_creation_in_loops?: RegexCreationInLoops;
  regex_macro?: RegexMacro;
  renamed_function_params?: RenamedFunctionParams;
  repeat_once?: RepeatOnce;
  repeat_vec_with_capacity?: RepeatVecWithCapacity;
  replace_box?: ReplaceBox;
  replace_consts?: ReplaceConsts;
  repr_packed_without_abi?: ReprPackedWithoutAbi;
  reserve_after_initialization?: ReserveAfterInitialization;
  rest_pat_in_fully_bound_structs?: RestPatInFullyBoundStructs;
  restriction?: Restriction;
  result_filter_map?: ResultFilterMap;
  result_large_err?: ResultLargeErr;
  result_map_or_into_option?: ResultMapOrIntoOption;
  result_map_unit_fn?: ResultMapUnitFn;
  result_unit_err?: ResultUnitErr;
  return_and_then?: ReturnAndThen;
  return_self_not_must_use?: ReturnSelfNotMustUse;
  reversed_empty_ranges?: ReversedEmptyRanges;
  same_functions_in_if_condition?: SameFunctionsInIfCondition;
  same_item_push?: SameItemPush;
  same_length_and_capacity?: SameLengthAndCapacity;
  same_name_method?: SameNameMethod;
  search_is_some?: SearchIsSome;
  seek_from_current?: SeekFromCurrent;
  seek_to_start_instead_of_rewind?: SeekToStartInsteadOfRewind;
  self_assignment?: SelfAssignment;
  self_named_constructors?: SelfNamedConstructors;
  self_named_module_files?: SelfNamedModuleFiles;
  self_only_used_in_recursion?: SelfOnlyUsedInRecursion;
  semicolon_if_nothing_returned?: SemicolonIfNothingReturned;
  semicolon_inside_block?: SemicolonInsideBlock;
  semicolon_outside_block?: SemicolonOutsideBlock;
  separated_literal_suffix?: SeparatedLiteralSuffix;
  serde_api_misuse?: SerdeApiMisuse;
  set_contains_or_insert?: SetContainsOrInsert;
  shadow_reuse?: ShadowReuse;
  shadow_same?: ShadowSame;
  shadow_unrelated?: ShadowUnrelated;
  short_circuit_statement?: ShortCircuitStatement;
  should_assert_eq?: ShouldAssertEq;
  should_implement_trait?: ShouldImplementTrait;
  should_panic_without_expect?: ShouldPanicWithoutExpect;
  significant_drop_in_scrutinee?: SignificantDropInScrutinee;
  significant_drop_tightening?: SignificantDropTightening;
  similar_names?: SimilarNames;
  single_call_fn?: SingleCallFn;
  single_char_add_str?: SingleCharAddStr;
  single_char_lifetime_names?: SingleCharLifetimeNames;
  single_char_pattern?: SingleCharPattern;
  single_component_path_imports?: SingleComponentPathImports;
  single_element_loop?: SingleElementLoop;
  single_match?: SingleMatch;
  single_match_else?: SingleMatchElse;
  single_option_map?: SingleOptionMap;
  single_range_in_vec_init?: SingleRangeInVecInit;
  size_of_in_element_count?: SizeOfInElementCount;
  size_of_ref?: SizeOfRef;
  skip_while_next?: SkipWhileNext;
  sliced_string_as_bytes?: SlicedStringAsBytes;
  slow_vector_initialization?: SlowVectorInitialization;
  stable_sort_primitive?: StableSortPrimitive;
  std_instead_of_alloc?: StdInsteadOfAlloc;
  std_instead_of_core?: StdInsteadOfCore;
  str_split_at_newline?: StrSplitAtNewline;
  str_to_string?: StrToString;
  string_add?: StringAdd;
  string_add_assign?: StringAddAssign;
  string_extend_chars?: StringExtendChars;
  string_from_utf8_as_bytes?: StringFromUtf8AsBytes;
  string_lit_as_bytes?: StringLitAsBytes;
  string_lit_chars_any?: StringLitCharsAny;
  string_slice?: StringSlice;
  string_to_string?: StringToString;
  strlen_on_c_strings?: StrlenOnCStrings;
  struct_excessive_bools?: StructExcessiveBools;
  struct_field_names?: StructFieldNames;
  style?: Style;
  suboptimal_flops?: SuboptimalFlops;
  suspicious?: Suspicious;
  suspicious_arithmetic_impl?: SuspiciousArithmeticImpl;
  suspicious_assignment_formatting?: SuspiciousAssignmentFormatting;
  suspicious_command_arg_space?: SuspiciousCommandArgSpace;
  suspicious_doc_comments?: SuspiciousDocComments;
  suspicious_else_formatting?: SuspiciousElseFormatting;
  suspicious_map?: SuspiciousMap;
  suspicious_op_assign_impl?: SuspiciousOpAssignImpl;
  suspicious_open_options?: SuspiciousOpenOptions;
  suspicious_operation_groupings?: SuspiciousOperationGroupings;
  suspicious_splitn?: SuspiciousSplitn;
  suspicious_to_owned?: SuspiciousToOwned;
  suspicious_unary_op_formatting?: SuspiciousUnaryOpFormatting;
  suspicious_xor_used_as_pow?: SuspiciousXorUsedAsPow;
  swap_ptr_to_ref?: SwapPtrToRef;
  swap_with_temporary?: SwapWithTemporary;
  tabs_in_doc_comments?: TabsInDocComments;
  temporary_assignment?: TemporaryAssignment;
  test_attr_in_doctest?: TestAttrInDoctest;
  tests_outside_test_module?: TestsOutsideTestModule;
  to_digit_is_some?: ToDigitIsSome;
  to_string_in_format_args?: ToStringInFormatArgs;
  to_string_trait_impl?: ToStringTraitImpl;
  todo?: Todo;
  too_long_first_doc_paragraph?: TooLongFirstDocParagraph;
  too_many_arguments?: TooManyArguments;
  too_many_lines?: TooManyLines;
  toplevel_ref_arg?: ToplevelRefArg;
  trailing_empty_array?: TrailingEmptyArray;
  trait_duplication_in_bounds?: TraitDuplicationInBounds;
  transmute_bytes_to_str?: TransmuteBytesToStr;
  transmute_int_to_bool?: TransmuteIntToBool;
  transmute_int_to_non_zero?: TransmuteIntToNonZero;
  transmute_null_to_fn?: TransmuteNullToFn;
  transmute_ptr_to_ptr?: TransmutePtrToPtr;
  transmute_ptr_to_ref?: TransmutePtrToRef;
  transmute_undefined_repr?: TransmuteUndefinedRepr;
  transmutes_expressible_as_ptr_casts?: TransmutesExpressibleAsPtrCasts;
  transmuting_null?: TransmutingNull;
  trim_split_whitespace?: TrimSplitWhitespace;
  trivial_regex?: TrivialRegex;
  trivially_copy_pass_by_ref?: TriviallyCopyPassByRef;
  try_err?: TryErr;
  tuple_array_conversions?: TupleArrayConversions;
  type_complexity?: TypeComplexity;
  type_id_on_box?: TypeIdOnBox;
  type_repetition_in_bounds?: TypeRepetitionInBounds;
  unbuffered_bytes?: UnbufferedBytes;
  unchecked_time_subtraction?: UncheckedTimeSubtraction;
  unconditional_recursion?: UnconditionalRecursion;
  undocumented_unsafe_blocks?: UndocumentedUnsafeBlocks;
  unicode_not_nfc?: UnicodeNotNfc;
  unimplemented?: Unimplemented;
  uninhabited_references?: UninhabitedReferences;
  uninit_assumed_init?: UninitAssumedInit;
  uninit_vec?: UninitVec;
  uninlined_format_args?: UninlinedFormatArgs;
  unit_arg?: UnitArg;
  unit_cmp?: UnitCmp;
  unit_hash?: UnitHash;
  unit_return_expecting_ord?: UnitReturnExpectingOrd;
  unnecessary_box_returns?: UnnecessaryBoxReturns;
  unnecessary_cast?: UnnecessaryCast;
  unnecessary_clippy_cfg?: UnnecessaryClippyCfg;
  unnecessary_debug_formatting?: UnnecessaryDebugFormatting;
  unnecessary_fallible_conversions?: UnnecessaryFallibleConversions;
  unnecessary_filter_map?: UnnecessaryFilterMap;
  unnecessary_find_map?: UnnecessaryFindMap;
  unnecessary_first_then_check?: UnnecessaryFirstThenCheck;
  unnecessary_fold?: UnnecessaryFold;
  unnecessary_get_then_check?: UnnecessaryGetThenCheck;
  unnecessary_join?: UnnecessaryJoin;
  unnecessary_lazy_evaluations?: UnnecessaryLazyEvaluations;
  unnecessary_literal_bound?: UnnecessaryLiteralBound;
  unnecessary_literal_unwrap?: UnnecessaryLiteralUnwrap;
  unnecessary_map_on_constructor?: UnnecessaryMapOnConstructor;
  unnecessary_map_or?: UnnecessaryMapOr;
  unnecessary_min_or_max?: UnnecessaryMinOrMax;
  unnecessary_mut_passed?: UnnecessaryMutPassed;
  unnecessary_operation?: UnnecessaryOperation;
  unnecessary_option_map_or_else?: UnnecessaryOptionMapOrElse;
  unnecessary_owned_empty_strings?: UnnecessaryOwnedEmptyStrings;
  unnecessary_result_map_or_else?: UnnecessaryResultMapOrElse;
  unnecessary_safety_comment?: UnnecessarySafetyComment;
  unnecessary_safety_doc?: UnnecessarySafetyDoc;
  unnecessary_self_imports?: UnnecessarySelfImports;
  unnecessary_semicolon?: UnnecessarySemicolon;
  unnecessary_sort_by?: UnnecessarySortBy;
  unnecessary_struct_initialization?: UnnecessaryStructInitialization;
  unnecessary_to_owned?: UnnecessaryToOwned;
  unnecessary_trailing_comma?: UnnecessaryTrailingComma;
  unnecessary_unwrap?: UnnecessaryUnwrap;
  unnecessary_wraps?: UnnecessaryWraps;
  unneeded_field_pattern?: UnneededFieldPattern;
  unneeded_struct_pattern?: UnneededStructPattern;
  unneeded_wildcard_pattern?: UnneededWildcardPattern;
  unnested_or_patterns?: UnnestedOrPatterns;
  unreachable?: Unreachable;
  unreadable_literal?: UnreadableLiteral;
  unsafe_derive_deserialize?: UnsafeDeriveDeserialize;
  unsafe_removed_from_name?: UnsafeRemovedFromName;
  unsafe_vector_initialization?: UnsafeVectorInitialization;
  unseparated_literal_suffix?: UnseparatedLiteralSuffix;
  unsound_collection_transmute?: UnsoundCollectionTransmute;
  unstable_as_mut_slice?: UnstableAsMutSlice;
  unstable_as_slice?: UnstableAsSlice;
  unused_async?: UnusedAsync;
  unused_collect?: UnusedCollect;
  unused_enumerate_index?: UnusedEnumerateIndex;
  unused_format_specs?: UnusedFormatSpecs;
  unused_io_amount?: UnusedIoAmount;
  unused_peekable?: UnusedPeekable;
  unused_result_ok?: UnusedResultOk;
  unused_rounding?: UnusedRounding;
  unused_self?: UnusedSelf;
  unused_trait_names?: UnusedTraitNames;
  unused_unit?: UnusedUnit;
  unusual_byte_groupings?: UnusualByteGroupings;
  unwrap_in_result?: UnwrapInResult;
  unwrap_or_default?: UnwrapOrDefault;
  unwrap_used?: UnwrapUsed;
  upper_case_acronyms?: UpperCaseAcronyms;
  use_debug?: UseDebug;
  use_self?: UseSelf;
  used_underscore_binding?: UsedUnderscoreBinding;
  used_underscore_items?: UsedUnderscoreItems;
  useless_asref?: UselessAsref;
  useless_attribute?: UselessAttribute;
  useless_concat?: UselessConcat;
  useless_conversion?: UselessConversion;
  useless_format?: UselessFormat;
  useless_let_if_seq?: UselessLetIfSeq;
  useless_nonzero_new_unchecked?: UselessNonzeroNewUnchecked;
  useless_transmute?: UselessTransmute;
  useless_vec?: UselessVec;
  vec_box?: VecBox;
  vec_init_then_push?: VecInitThenPush;
  vec_resize_to_zero?: VecResizeToZero;
  verbose_bit_mask?: VerboseBitMask;
  verbose_file_reads?: VerboseFileReads;
  volatile_composites?: VolatileComposites;
  waker_clone_wake?: WakerCloneWake;
  while_float?: WhileFloat;
  while_immutable_condition?: WhileImmutableCondition;
  while_let_loop?: WhileLetLoop;
  while_let_on_iterator?: WhileLetOnIterator;
  wildcard_dependencies?: WildcardDependencies;
  wildcard_enum_match_arm?: WildcardEnumMatchArm;
  wildcard_imports?: WildcardImports;
  wildcard_in_or_patterns?: WildcardInOrPatterns;
  write_literal?: WriteLiteral;
  write_with_newline?: WriteWithNewline;
  writeln_empty_string?: WritelnEmptyString;
  wrong_pub_self_convention?: WrongPubSelfConvention;
  wrong_self_convention?: WrongSelfConvention;
  wrong_transmute?: WrongTransmute;
  zero_divided_by_zero?: ZeroDividedByZero;
  zero_prefixed_literal?: ZeroPrefixedLiteral;
  zero_ptr?: ZeroPtr;
  zero_repeat_side_effects?: ZeroRepeatSideEffects;
  zero_sized_map_values?: ZeroSizedMapValues;
  zombie_processes?: ZombieProcesses;
  zst_offset?: ZstOffset;
  [k: string]: Lint | undefined;
}
export interface DetailedLint {
  level?: LintLevel;
  /**
   * The priority that controls which lints or [lint groups](https://doc.rust-lang.org/rustc/lints/groups.html) override other lint groups. Lower (particularly negative) numbers have lower priority, being overridden by higher numbers, and show up first on the command-line to tools like rustc.
   */
  priority?: number;
  /**
   * A list of `cfg` expressions that this lint should check for.
   */
  'check-cfg'?: string[];
  [k: string]: unknown | undefined;
}
