/* eslint-disable */

/**
 * The `aarch64_softfloat_neon` lint detects usage of `#[target_feature(enable = "neon")]` on softfloat aarch64 targets. Enabling this target feature causes LLVM to alter the ABI of function calls, making this attribute unsound to use.
 */
export type Aarch64SoftfloatNeon = LintLevel | DetailedLint;
/**
 * Specify the [lint level](https://doc.rust-lang.org/rustc/lints/levels.html) for a lint or lint group.
 */
export type LintLevel = 'forbid' | 'deny' | 'warn' | 'allow';
/**
 * The `absolute_paths_not_starting_with_crate` lint detects fully qualified paths that start with a module name instead of `crate`, `self`, or an extern crate name
 */
export type AbsolutePathsNotStartingWithCrate = LintLevel | DetailedLint;
/**
 * The `ambiguous_associated_items` lint detects ambiguity between associated items and enum variants.
 */
export type AmbiguousAssociatedItems = LintLevel | DetailedLint;
/**
 * The `ambiguous_glob_imports` lint detects glob imports that should report ambiguity errors, but previously didn’t do that due to rustc bugs.
 */
export type AmbiguousGlobImports = LintLevel | DetailedLint;
/**
 * The `ambiguous_glob_reexports` lint detects cases where names re-exported via globs collide. Downstream users trying to use the same name re-exported from multiple globs will receive a warning pointing out redefinition of the same name.
 */
export type AmbiguousGlobReexports = LintLevel | DetailedLint;
/**
 * The `ambiguous_negative_literals` lint checks for cases that are confusing between a negative literal and a negation that’s not part of the literal.
 */
export type AmbiguousNegativeLiterals = LintLevel | DetailedLint;
/**
 * The `ambiguous_wide_pointer_comparisons` lint checks comparison of `*const/*mut ?Sized` as the operands.
 */
export type AmbiguousWidePointerComparisons = LintLevel | DetailedLint;
/**
 * The `anonymous_parameters` lint detects anonymous parameters in trait definitions.
 */
export type AnonymousParameters = LintLevel | DetailedLint;
/**
 * The `arithmetic_overflow` lint detects that an arithmetic operation will overflow.
 */
export type ArithmeticOverflow = LintLevel | DetailedLint;
/**
 * The `array_into_iter` lint detects calling `into_iter` on arrays.
 */
export type ArrayIntoIter = LintLevel | DetailedLint;
/**
 * The `asm_sub_register` lint detects using only a subset of a register for inline asm inputs.
 */
export type AsmSubRegister = LintLevel | DetailedLint;
/**
 * The `async_fn_in_trait` lint detects use of `async fn` in the definition of a publicly-reachable trait.
 */
export type AsyncFnInTrait = LintLevel | DetailedLint;
/**
 * The `bad_asm_style` lint detects the use of the `.intel_syntax` and `.att_syntax` directives.
 */
export type BadAsmStyle = LintLevel | DetailedLint;
/**
 * The `bare_trait_objects` lint suggests using `dyn Trait` for trait objects.
 */
export type BareTraitObjects = LintLevel | DetailedLint;
/**
 * The `binary_asm_labels` lint detects the use of numeric labels containing only binary digits in the inline `asm!` macro.
 */
export type BinaryAsmLabels = LintLevel | DetailedLint;
/**
 * The `bindings_with_variant_name` lint detects pattern bindings with the same name as one of the matched variants.
 */
export type BindingsWithVariantName = LintLevel | DetailedLint;
/**
 * The `boxed_slice_into_iter` lint detects calling `into_iter` on boxed slices.
 */
export type BoxedSliceIntoIter = LintLevel | DetailedLint;
/**
 * The `break_with_label_and_loop` lint detects labeled `break` expressions with an unlabeled loop as their value expression.
 */
export type BreakWithLabelAndLoop = LintLevel | DetailedLint;
/**
 * The `clashing_extern_declarations` lint detects when an `extern fn` has been declared with the same name but different types.
 */
export type ClashingExternDeclarations = LintLevel | DetailedLint;
/**
 * The `closure_returning_async_block` lint detects cases where users write a closure that returns an async block.
 */
export type ClosureReturningAsyncBlock = LintLevel | DetailedLint;
/**
 * The `coherence_leak_check` lint detects conflicting implementations of a trait that are only distinguished by the old leak-check code.
 */
export type CoherenceLeakCheck = LintLevel | DetailedLint;
/**
 * The `conflicting_repr_hints` lint detects `repr` attributes with conflicting hints.
 */
export type ConflictingReprHints = LintLevel | DetailedLint;
/**
 * The `confusable_idents` lint detects visually confusable pairs between identifiers.
 */
export type ConfusableIdents = LintLevel | DetailedLint;
/**
 * The `const_evaluatable_unchecked` lint detects a generic constant used in a type.
 */
export type ConstEvaluatableUnchecked = LintLevel | DetailedLint;
/**
 * The `const_item_mutation` lint detects attempts to mutate a `const` item.
 */
export type ConstItemMutation = LintLevel | DetailedLint;
/**
 * The `dangerous_implicit_autorefs` lint checks for implicitly taken references to dereferences of raw pointers.
 */
export type DangerousImplicitAutorefs = LintLevel | DetailedLint;
/**
 * The `dangling_pointers_from_temporaries` lint detects getting a pointer to data of a temporary that will immediately get dropped.
 */
export type DanglingPointersFromTemporaries = LintLevel | DetailedLint;
/**
 * The `dead_code` lint detects unused, unexported items.
 */
export type DeadCode = LintLevel | DetailedLint;
/**
 * The `default_overrides_default_fields` lint checks for manual `impl` blocks of the `Default` trait of types with default field values.
 */
export type DefaultOverridesDefaultFields = LintLevel | DetailedLint;
/**
 * The `dependency_on_unit_never_type_fallback` lint detects cases where code compiles with never type fallback being `()`, but will stop compiling with fallback being `!`.
 */
export type DependencyOnUnitNeverTypeFallback = LintLevel | DetailedLint;
/**
 * The `deprecated` lint detects use of deprecated items.
 */
export type Deprecated = LintLevel | DetailedLint;
/**
 * detects use of items that will be deprecated in a future version.
 */
export type DeprecatedInFuture = LintLevel | DetailedLint;
/**
 * The `deprecated_where_clause_location` lint detects when a where clause in front of the equals in an associated type.
 */
export type DeprecatedWhereClauseLocation = LintLevel | DetailedLint;
/**
 * The `deref_into_dyn_supertrait` lint is emitted whenever there is a `Deref` implementation for `dyn SubTrait` with a `dyn SuperTrait` type as the `Output` type.
 */
export type DerefIntoDynSupertrait = LintLevel | DetailedLint;
/**
 * The `deref_nullptr` lint detects when a null pointer is dereferenced, which causes undefined behavior.
 */
export type DerefNullptr = LintLevel | DetailedLint;
/**
 * The `double_negations` lint detects expressions of the form `--x`.
 */
export type DoubleNegations = LintLevel | DetailedLint;
/**
 * The `drop_bounds` lint checks for generics with `std::ops::Drop` as bounds.
 */
export type DropBounds = LintLevel | DetailedLint;
/**
 * The `dropping_copy_types` lint checks for calls to `std::mem::drop` with a value that derives the Copy trait.
 */
export type DroppingCopyTypes = LintLevel | DetailedLint;
/**
 * The `dropping_references` lint checks for calls to `std::mem::drop` with a reference instead of an owned value.
 */
export type DroppingReferences = LintLevel | DetailedLint;
/**
 * The `duplicate_macro_attributes` lint detects when a `#[test]`-like built-in macro attribute is duplicated on an item. This lint may trigger on `bench`, `cfg_eval`, `test` and `test_case`.
 */
export type DuplicateMacroAttributes = LintLevel | DetailedLint;
/**
 * The `dyn_drop` lint checks for trait objects with `std::ops::Drop`.
 */
export type DynDrop = LintLevel | DetailedLint;
/**
 * The `edition_2024_expr_fragment_specifier` lint detects the use of `expr` fragments in macros during migration to the 2024 edition.
 */
export type Edition2024ExprFragmentSpecifier = LintLevel | DetailedLint;
/**
 * The `elided_lifetimes_in_associated_constant` lint detects elided lifetimes in associated constants when there are other lifetimes in scope. This was accidentally supported, and this lint was later relaxed to allow eliding lifetimes to `'static` when there are no lifetimes in scope.
 */
export type ElidedLifetimesInAssociatedConstant = LintLevel | DetailedLint;
/**
 * The `elided_lifetimes_in_paths` lint detects the use of hidden lifetime parameters.
 */
export type ElidedLifetimesInPaths = LintLevel | DetailedLint;
/**
 * The `ellipsis_inclusive_range_patterns` lint detects the `...` range pattern, which is deprecated.
 */
export type EllipsisInclusiveRangePatterns = LintLevel | DetailedLint;
/**
 * The `enum_intrinsics_non_enums` lint detects calls to intrinsic functions that require an enum (`core::mem::discriminant`, `core::mem::variant_count`), but are called with a non-enum type.
 */
export type EnumIntrinsicsNonEnums = LintLevel | DetailedLint;
/**
 * The `explicit_builtin_cfgs_in_flags` lint detects builtin cfgs set via the `--cfg` flag.
 */
export type ExplicitBuiltinCfgsInFlags = LintLevel | DetailedLint;
/**
 * The `explicit_outlives_requirements` lint detects unnecessary lifetime bounds that can be inferred.
 */
export type ExplicitOutlivesRequirements = LintLevel | DetailedLint;
/**
 * The `exported_private_dependencies` lint detects private dependencies that are exposed in a public interface.
 */
export type ExportedPrivateDependencies = LintLevel | DetailedLint;
/**
 * The `ffi_unwind_calls` lint detects calls to foreign functions or function pointers with `C-unwind` or other FFI-unwind ABIs.
 */
export type FfiUnwindCalls = LintLevel | DetailedLint;
/**
 * The `for_loops_over_fallibles` lint checks for `for` loops over `Option` or `Result` values.
 */
export type ForLoopsOverFallibles = LintLevel | DetailedLint;
/**
 * The `forbidden_lint_groups` lint detects violations of `forbid` applied to a lint group. Due to a bug in the compiler, these used to be overlooked entirely. They now generate a warning.
 */
export type ForbiddenLintGroups = LintLevel | DetailedLint;
/**
 * The `forgetting_copy_types` lint checks for calls to `std::mem::forget` with a value that derives the Copy trait.
 */
export type ForgettingCopyTypes = LintLevel | DetailedLint;
/**
 * The `forgetting_references` lint checks for calls to `std::mem::forget` with a reference instead of an owned value.
 */
export type ForgettingReferences = LintLevel | DetailedLint;
/**
 * The `function_item_references` lint detects function references that are formatted with `fmt::Pointer` or transmuted.
 */
export type FunctionItemReferences = LintLevel | DetailedLint;
/**
 * The `fuzzy_provenance_casts` lint detects an `as` cast between an integer and a pointer.
 */
export type FuzzyProvenanceCasts = LintLevel | DetailedLint;
/**
 * The `hidden_glob_reexports` lint detects cases where glob re-export items are shadowed by private items.
 */
export type HiddenGlobReexports = LintLevel | DetailedLint;
/**
 * The `if_let_rescope` lint detects cases where a temporary value with significant drop is generated on the right hand side of `if let` and suggests a rewrite into `match` when possible.
 */
export type IfLetRescope = LintLevel | DetailedLint;
/**
 * The `ill_formed_attribute_input` lint detects ill-formed attribute inputs that were previously accepted and used in practice.
 */
export type IllFormedAttributeInput = LintLevel | DetailedLint;
/**
 * The `impl_trait_overcaptures` lint warns against cases where lifetime capture behavior will differ in edition 2024.
 */
export type ImplTraitOvercaptures = LintLevel | DetailedLint;
/**
 * The `impl_trait_redundant_captures` lint warns against cases where use of the precise capturing `use ` syntax is not needed.
 */
export type ImplTraitRedundantCaptures = LintLevel | DetailedLint;
/**
 * The `improper_ctypes` lint detects incorrect use of types in foreign modules.
 */
export type ImproperCtypes = LintLevel | DetailedLint;
/**
 * The `improper_ctypes_definitions` lint detects incorrect use of `extern` function definitions.
 */
export type ImproperCtypesDefinitions = LintLevel | DetailedLint;
/**
 * The `incomplete_features` lint detects unstable features enabled with the `feature` attribute that may function improperly in some or all cases.
 */
export type IncompleteFeatures = LintLevel | DetailedLint;
/**
 * The `incomplete_include` lint detects the use of the `include!` macro with a file that contains more than one expression.
 */
export type IncompleteInclude = LintLevel | DetailedLint;
/**
 * The `ineffective_unstable_trait_impl` lint detects `#[unstable]` attributes which are not used.
 */
export type IneffectiveUnstableTraitImpl = LintLevel | DetailedLint;
/**
 * The `inline_no_sanitize` lint detects incompatible use of `#[inline(always)]` and `#[sanitize(xyz = "off")]`.
 */
export type InlineNoSanitize = LintLevel | DetailedLint;
/**
 * The `internal_features` lint detects unstable features enabled with the `feature` attribute that are internal to the compiler or standard library.
 */
export type InternalFeatures = LintLevel | DetailedLint;
/**
 * The `invalid_atomic_ordering` lint detects passing an `Ordering` to an atomic operation that does not support that ordering.
 */
export type InvalidAtomicOrdering = LintLevel | DetailedLint;
/**
 * The `invalid_doc_attributes` lint detects when the `#[doc(...)]` is misused.
 */
export type InvalidDocAttributes = LintLevel | DetailedLint;
/**
 * The `invalid_from_utf8` lint checks for calls to `std::str::from_utf8` and `std::str::from_utf8_mut` with a known invalid UTF-8 value.
 */
export type InvalidFromUtf8 = LintLevel | DetailedLint;
/**
 * The `invalid_from_utf8_unchecked` lint checks for calls to `std::str::from_utf8_unchecked` and `std::str::from_utf8_unchecked_mut` with a known invalid UTF-8 value.
 */
export type InvalidFromUtf8Unchecked = LintLevel | DetailedLint;
/**
 * The `invalid_macro_export_arguments` lint detects cases where `#[macro_export]` is being used with invalid arguments.
 */
export type InvalidMacroExportArguments = LintLevel | DetailedLint;
/**
 * The `invalid_nan_comparisons` lint checks comparison with `f32::NAN` or `f64::NAN` as one of the operand.
 */
export type InvalidNanComparisons = LintLevel | DetailedLint;
/**
 * The `invalid_null_arguments` lint checks for invalid usage of null pointers in arguments.
 */
export type InvalidNullArguments = LintLevel | DetailedLint;
/**
 * The `invalid_reference_casting` lint checks for casts of `&T` to `&mut T` without using interior mutability.
 */
export type InvalidReferenceCasting = LintLevel | DetailedLint;
/**
 * The `invalid_type_param_default` lint detects type parameter defaults erroneously allowed in an invalid location.
 */
export type InvalidTypeParamDefault = LintLevel | DetailedLint;
/**
 * The `invalid_value` lint detects creating a value that is not valid, such as a null reference.
 */
export type InvalidValue = LintLevel | DetailedLint;
/**
 * The `irrefutable_let_patterns` lint detects irrefutable patterns in `if let`s, `while let`s, and `if let` guards.
 */
export type IrrefutableLetPatterns = LintLevel | DetailedLint;
/**
 * The `large_assignments` lint detects when objects of large types are being moved around.
 */
export type LargeAssignments = LintLevel | DetailedLint;
/**
 * The `late_bound_lifetime_arguments` lint detects generic lifetime arguments in path segments with late bound lifetime parameters.
 */
export type LateBoundLifetimeArguments = LintLevel | DetailedLint;
/**
 * The `legacy_derive_helpers` lint detects derive helper attributes that are used before they are introduced.
 */
export type LegacyDeriveHelpers = LintLevel | DetailedLint;
/**
 * The `let_underscore_drop` lint checks for statements which don’t bind an expression which has a non-trivial Drop implementation to anything, causing the expression to be dropped immediately instead of at end of scope.
 */
export type LetUnderscoreDrop = LintLevel | DetailedLint;
/**
 * The `let_underscore_lock` lint checks for statements which don’t bind a mutex to anything, causing the lock to be released immediately instead of at end of scope, which is typically incorrect.
 */
export type LetUnderscoreLock = LintLevel | DetailedLint;
/**
 * The `linker_messages` lint forwards warnings from the linker.
 */
export type LinkerMessages = LintLevel | DetailedLint;
/**
 * The `long_running_const_eval` lint is emitted when const eval is running for a long time to ensure rustc terminates even if you accidentally wrote an infinite loop.
 */
export type LongRunningConstEval = LintLevel | DetailedLint;
/**
 * The `lossy_provenance_casts` lint detects an `as` cast between a pointer and an integer.
 */
export type LossyProvenanceCasts = LintLevel | DetailedLint;
/**
 * The `macro_expanded_macro_exports_accessed_by_absolute_paths` lint detects macro-expanded `macro_export` macros from the current crate that cannot be referred to by absolute paths.
 */
export type MacroExpandedMacroExportsAccessedByAbsolutePaths = LintLevel | DetailedLint;
/**
 * The `macro_use_extern_crate` lint detects the use of the `macro_use` attribute.
 */
export type MacroUseExternCrate = LintLevel | DetailedLint;
/**
 * The `malformed_diagnostic_attributes` lint detects malformed diagnostic attributes.
 */
export type MalformedDiagnosticAttributes = LintLevel | DetailedLint;
/**
 * The `malformed_diagnostic_format_literals` lint detects malformed diagnostic format literals.
 */
export type MalformedDiagnosticFormatLiterals = LintLevel | DetailedLint;
/**
 * The `map_unit_fn` lint checks for `Iterator::map` receive a callable that returns `()`.
 */
export type MapUnitFn = LintLevel | DetailedLint;
/**
 * The `meta_variable_misuse` lint detects possible meta-variable misuse in macro definitions.
 */
export type MetaVariableMisuse = LintLevel | DetailedLint;
/**
 * The `mismatched_lifetime_syntaxes` lint detects when the same lifetime is referred to by different syntaxes between function arguments and return values.
 */
export type MismatchedLifetimeSyntaxes = LintLevel | DetailedLint;
/**
 * The `misplaced_diagnostic_attributes` lint detects wrongly placed diagnostic attributes.
 */
export type MisplacedDiagnosticAttributes = LintLevel | DetailedLint;
/**
 * The `missing_abi` lint detects cases where the ABI is omitted from `extern` declarations.
 */
export type MissingAbi = LintLevel | DetailedLint;
/**
 * The `missing_copy_implementations` lint detects potentially-forgotten implementations of `Copy` for public types.
 */
export type MissingCopyImplementations = LintLevel | DetailedLint;
/**
 * The `missing_debug_implementations` lint detects missing implementations of `fmt::Debug` for public types.
 */
export type MissingDebugImplementations = LintLevel | DetailedLint;
/**
 * The `missing_docs` lint detects missing documentation for public items.
 */
export type MissingDocs = LintLevel | DetailedLint;
/**
 * The `missing_unsafe_on_extern` lint detects missing unsafe keyword on extern declarations.
 */
export type MissingUnsafeOnExtern = LintLevel | DetailedLint;
/**
 * The `mixed_script_confusables` lint detects visually confusable characters in identifiers between different scripts.
 */
export type MixedScriptConfusables = LintLevel | DetailedLint;
/**
 * The `multiple_supertrait_upcastable` lint detects when a dyn-compatible trait has multiple supertraits.
 */
export type MultipleSupertraitUpcastable = LintLevel | DetailedLint;
/**
 * The `must_not_suspend` lint guards against values that shouldn’t be held across suspend points (`.await`)
 */
export type MustNotSuspend = LintLevel | DetailedLint;
/**
 * The `mutable_transmutes` lint catches transmuting from `&T` to `&mut T` because it is undefined behavior.
 */
export type MutableTransmutes = LintLevel | DetailedLint;
/**
 * The `named_arguments_used_positionally` lint detects cases where named arguments are only used positionally in format strings. This usage is valid but potentially very confusing.
 */
export type NamedArgumentsUsedPositionally = LintLevel | DetailedLint;
/**
 * The `named_asm_labels` lint detects the use of named labels in the inline `asm!` macro.
 */
export type NamedAsmLabels = LintLevel | DetailedLint;
/**
 * The `never_type_fallback_flowing_into_unsafe` lint detects cases where never type fallback affects unsafe function calls.
 */
export type NeverTypeFallbackFlowingIntoUnsafe = LintLevel | DetailedLint;
/**
 * The `no_mangle_const_items` lint detects any `const` items with the `no_mangle` attribute.
 */
export type NoMangleConstItems = LintLevel | DetailedLint;
/**
 * The `no_mangle_generic_items` lint detects generic items that must be mangled.
 */
export type NoMangleGenericItems = LintLevel | DetailedLint;
/**
 * The `non_ascii_idents` lint detects non-ASCII identifiers.
 */
export type NonAsciiIdents = LintLevel | DetailedLint;
/**
 * The `non_camel_case_types` lint detects types, variants, traits and type parameters that don’t have camel case names.
 */
export type NonCamelCaseTypes = LintLevel | DetailedLint;
/**
 * The `non_contiguous_range_endpoints` lint detects likely off-by-one errors when using exclusive range patterns.
 */
export type NonContiguousRangeEndpoints = LintLevel | DetailedLint;
/**
 * The `non_exhaustive_omitted_patterns` lint aims to help consumers of a `#[non_exhaustive]` struct or enum who want to match all of its fields/variants explicitly.
 */
export type NonExhaustiveOmittedPatterns = LintLevel | DetailedLint;
/**
 * The `non_fmt_panics` lint detects `panic!(..)` invocations where the first argument is not a formatting string.
 */
export type NonFmtPanics = LintLevel | DetailedLint;
/**
 * The `non_local_definitions` lint checks for `impl` blocks and `#[macro_export]` macro inside bodies (functions, enum discriminant, …).
 */
export type NonLocalDefinitions = LintLevel | DetailedLint;
/**
 * The `non_shorthand_field_patterns` lint detects using `Struct { x: x }` instead of `Struct { x }` in a pattern.
 */
export type NonShorthandFieldPatterns = LintLevel | DetailedLint;
/**
 * The `non_snake_case` lint detects variables, methods, functions, lifetime parameters and modules that don’t have snake case names.
 */
export type NonSnakeCase = LintLevel | DetailedLint;
/**
 * The `non_upper_case_globals` lint detects static items that don’t have uppercase identifiers.
 */
export type NonUpperCaseGlobals = LintLevel | DetailedLint;
/**
 * The `noop_method_call` lint detects specific calls to noop methods such as a calling ` ::clone` where `T: !Clone`.
 */
export type NoopMethodCall = LintLevel | DetailedLint;
/**
 * The `opaque_hidden_inferred_bound` lint detects cases in which nested `impl Trait` in associated type bounds are not written generally enough to satisfy the bounds of the associated type.
 */
export type OpaqueHiddenInferredBound = LintLevel | DetailedLint;
/**
 * The `out_of_scope_macro_calls` lint detects `macro_rules` called when they are not in scope, above their definition, which may happen in key-value attributes.
 */
export type OutOfScopeMacroCalls = LintLevel | DetailedLint;
/**
 * The `overflowing_literals` lint detects literals out of range for their type.
 */
export type OverflowingLiterals = LintLevel | DetailedLint;
/**
 * The `overlapping_range_endpoints` lint detects `match` arms that have range patterns that overlap on their endpoints.
 */
export type OverlappingRangeEndpoints = LintLevel | DetailedLint;
/**
 * The `path_statements` lint detects path statements with no effect.
 */
export type PathStatements = LintLevel | DetailedLint;
/**
 * The `patterns_in_fns_without_body` lint detects `mut` identifier patterns as a parameter in functions without a body.
 */
export type PatternsInFnsWithoutBody = LintLevel | DetailedLint;
/**
 * The `private_bounds` lint detects types in a secondary interface of an item, that are more private than the item itself. Secondary interface of an item consists of bounds on generic parameters and where clauses, including supertraits for trait items.
 */
export type PrivateBounds = LintLevel | DetailedLint;
/**
 * The `private_interfaces` lint detects types in a primary interface of an item, that are more private than the item itself. Primary interface of an item is all its interface except for bounds on generic parameters and where clauses.
 */
export type PrivateInterfaces = LintLevel | DetailedLint;
/**
 * The `proc_macro_derive_resolution_fallback` lint detects proc macro derives using inaccessible names from parent modules.
 */
export type ProcMacroDeriveResolutionFallback = LintLevel | DetailedLint;
/**
 * The `ptr_to_integer_transmute_in_consts` lint detects pointer to integer transmute in const functions and associated constants.
 */
export type PtrToIntegerTransmuteInConsts = LintLevel | DetailedLint;
/**
 * The `pub_use_of_private_extern_crate` lint detects a specific situation of re-exporting a private `extern crate`.
 */
export type PubUseOfPrivateExternCrate = LintLevel | DetailedLint;
/**
 * The `redundant_imports` lint detects imports that are redundant due to being imported already; either through a previous import, or being present in the prelude.
 */
export type RedundantImports = LintLevel | DetailedLint;
/**
 * The `redundant_lifetimes` lint detects lifetime parameters that are redundant because they are equal to another named lifetime.
 */
export type RedundantLifetimes = LintLevel | DetailedLint;
/**
 * The `redundant_semicolons` lint detects unnecessary trailing semicolons.
 */
export type RedundantSemicolons = LintLevel | DetailedLint;
/**
 * The `refining_impl_trait_internal` lint detects `impl Trait` return types in method signatures that are refined by a trait implementation, meaning the implementation adds information about the return type that is not present in the trait.
 */
export type RefiningImplTraitInternal = LintLevel | DetailedLint;
/**
 * The `refining_impl_trait_reachable` lint detects `impl Trait` return types in method signatures that are refined by a publicly reachable trait implementation, meaning the implementation adds information about the return type that is not present in the trait.
 */
export type RefiningImplTraitReachable = LintLevel | DetailedLint;
/**
 * The `renamed_and_removed_lints` lint detects lints that have been renamed or removed.
 */
export type RenamedAndRemovedLints = LintLevel | DetailedLint;
/**
 * transparent type contains an external ZST that is marked #[non_exhaustive] or contains private fields.
 */
export type ReprTransparentExternalPrivateFields = LintLevel | DetailedLint;
/**
 * The `rust_2021_incompatible_closure_captures` lint detects variables that aren’t completely captured in Rust 2021, such that the `Drop` order of their fields may differ between Rust 2018 and 2021.
 */
export type Rust2021IncompatibleClosureCaptures = LintLevel | DetailedLint;
/**
 * The `rust_2021_incompatible_or_patterns` lint detects usage of old versions of or-patterns.
 */
export type Rust2021IncompatibleOrPatterns = LintLevel | DetailedLint;
/**
 * The `rust_2021_prefixes_incompatible_syntax` lint detects identifiers that will be parsed as a prefix instead in Rust 2021.
 */
export type Rust2021PrefixesIncompatibleSyntax = LintLevel | DetailedLint;
/**
 * The `rust_2021_prelude_collisions` lint detects the usage of trait methods which are ambiguous with traits added to the prelude in future editions.
 */
export type Rust2021PreludeCollisions = LintLevel | DetailedLint;
/**
 * The `rust_2024_guarded_string_incompatible_syntax` lint detects `#` tokens that will be parsed as part of a guarded string literal in Rust 2024.
 */
export type Rust2024GuardedStringIncompatibleSyntax = LintLevel | DetailedLint;
/**
 * The `rust_2024_incompatible_pat` lint detects patterns whose meaning will change in the Rust 2024 edition.
 */
export type Rust2024IncompatiblePat = LintLevel | DetailedLint;
/**
 * The `rust_2024_prelude_collisions` lint detects the usage of trait methods which are ambiguous with traits added to the prelude in future editions.
 */
export type Rust2024PreludeCollisions = LintLevel | DetailedLint;
/**
 * The `self_constructor_from_outer_item` lint detects cases where the `Self` constructor was silently allowed due to a bug in the resolver, and which may produce surprising and unintended behavior.
 */
export type SelfConstructorFromOuterItem = LintLevel | DetailedLint;
/**
 * The `semicolon_in_expressions_from_macros` lint detects trailing semicolons in macro bodies when the macro is invoked in expression position. This was previous accepted, but is being phased out.
 */
export type SemicolonInExpressionsFromMacros = LintLevel | DetailedLint;
/**
 * The `single_use_lifetimes` lint detects lifetimes that are only used once.
 */
export type SingleUseLifetimes = LintLevel | DetailedLint;
/**
 * The `soft_unstable` lint detects unstable features that were unintentionally allowed on stable. This is a future-incompatible lint to transition this to a hard error in the future. See issue #64266 for more details.
 */
export type SoftUnstable = LintLevel | DetailedLint;
/**
 * The `special_module_name` lint detects module declarations for files that have a special meaning.
 */
export type SpecialModuleName = LintLevel | DetailedLint;
/**
 * The `stable_features` lint detects a `feature` attribute that has since been made stable.
 */
export type StableFeatures = LintLevel | DetailedLint;
/**
 * The `static_mut_refs` lint checks for shared or mutable references of mutable static inside `unsafe` blocks and `unsafe` functions.
 */
export type StaticMutRefs = LintLevel | DetailedLint;
/**
 * detects when a supertrait item is shadowed by a subtrait item.
 */
export type SupertraitItemShadowingDefinition = LintLevel | DetailedLint;
/**
 * detects when a supertrait item is shadowed by a subtrait item.
 */
export type SupertraitItemShadowingUsage = LintLevel | DetailedLint;
/**
 * The `suspicious_double_ref_op` lint checks for usage of `.clone()`/`.borrow()`/`.deref()` on an `&&T` when `T: !Deref/Borrow/Clone`, which means the call will return the inner `&T`, instead of performing the operation on the underlying `T` and can be confusing.
 */
export type SuspiciousDoubleRefOp = LintLevel | DetailedLint;
/**
 * The `tail_expr_drop_order` lint looks for those values generated at the tail expression location, that runs a custom `Drop` destructor. Some of them may be dropped earlier in Edition 2024 that they used to in Edition 2021 and prior. This lint detects those cases and provides you information on those values and their custom destructor implementations. Your discretion on this information is required.
 */
export type TailExprDropOrder = LintLevel | DetailedLint;
/**
 * The `test_unstable_lint` lint tests unstable lints and is perma-unstable.
 */
export type TestUnstableLint = LintLevel | DetailedLint;
/**
 * The `text_direction_codepoint_in_comment` lint detects Unicode codepoints in comments that change the visual representation of text on screen in a way that does not correspond to their on memory representation.
 */
export type TextDirectionCodepointInComment = LintLevel | DetailedLint;
/**
 * The `text_direction_codepoint_in_literal` lint detects Unicode codepoints that change the visual representation of text on screen in a way that does not correspond to their on memory representation.
 */
export type TextDirectionCodepointInLiteral = LintLevel | DetailedLint;
/**
 * The `trivial_bounds` lint detects trait bounds that don’t depend on any type parameters.
 */
export type TrivialBounds = LintLevel | DetailedLint;
/**
 * The `trivial_casts` lint detects trivial casts which could be replaced with coercion, which may require a temporary variable.
 */
export type TrivialCasts = LintLevel | DetailedLint;
/**
 * The `trivial_numeric_casts` lint detects trivial numeric casts of types which could be removed.
 */
export type TrivialNumericCasts = LintLevel | DetailedLint;
/**
 * The `type_alias_bounds` lint detects bounds in type aliases.
 */
export type TypeAliasBounds = LintLevel | DetailedLint;
/**
 * The `tyvar_behind_raw_pointer` lint detects raw pointer to an inference variable.
 */
export type TyvarBehindRawPointer = LintLevel | DetailedLint;
/**
 * The `uncommon_codepoints` lint detects uncommon Unicode codepoints in identifiers.
 */
export type UncommonCodepoints = LintLevel | DetailedLint;
/**
 * The `unconditional_panic` lint detects an operation that will cause a panic at runtime.
 */
export type UnconditionalPanic = LintLevel | DetailedLint;
/**
 * The `unconditional_recursion` lint detects functions that cannot return without calling themselves.
 */
export type UnconditionalRecursion = LintLevel | DetailedLint;
/**
 * The `uncovered_param_in_projection` lint detects a violation of one of Rust’s orphan rules for foreign trait implementations that concerns the use of type parameters inside trait associated type paths (“projections”) whose output may not be a local type that is mistakenly considered to “cover” said parameters which is unsound and which may be rejected by a future version of the compiler.
 */
export type UncoveredParamInProjection = LintLevel | DetailedLint;
/**
 * The `undropped_manually_drops` lint check for calls to `std::mem::drop` with a value of `std::mem::ManuallyDrop` which doesn’t drop.
 */
export type UndroppedManuallyDrops = LintLevel | DetailedLint;
/**
 * The `unexpected_cfgs` lint detects unexpected conditional compilation conditions.
 */
export type UnexpectedCfgs = LintLevel | DetailedLint;
/**
 * The `unfulfilled_lint_expectations` lint detects when a lint expectation is unfulfilled.
 */
export type UnfulfilledLintExpectations = LintLevel | DetailedLint;
/**
 * The `ungated_async_fn_track_caller` lint warns when the `#[track_caller]` attribute is used on an async function without enabling the corresponding unstable feature flag.
 */
export type UngatedAsyncFnTrackCaller = LintLevel | DetailedLint;
/**
 * The `uninhabited_static` lint detects uninhabited statics.
 */
export type UninhabitedStatic = LintLevel | DetailedLint;
/**
 * The `unit_bindings` lint detects cases where bindings are useless because they have the unit type `()` as their inferred type. The lint is suppressed if the user explicitly annotates the let binding with the unit type `()`, or if the let binding uses an underscore wildcard pattern, i.e. `let _ = expr`, or if the binding is produced from macro expansions.
 */
export type UnitBindings = LintLevel | DetailedLint;
/**
 * The `unknown_crate_types` lint detects an unknown crate type found in a `crate_type` attribute.
 */
export type UnknownCrateTypes = LintLevel | DetailedLint;
/**
 * The `unknown_diagnostic_attributes` lint detects unknown diagnostic attributes.
 */
export type UnknownDiagnosticAttributes = LintLevel | DetailedLint;
/**
 * The `unknown_lints` lint detects unrecognized lint attributes.
 */
export type UnknownLints = LintLevel | DetailedLint;
/**
 * The `unnameable_test_items` lint detects `#[test]` functions that are not able to be run by the test harness because they are in a position where they are not nameable.
 */
export type UnnameableTestItems = LintLevel | DetailedLint;
/**
 * The `unnameable_types` lint detects types for which you can get objects of that type, but cannot name the type itself.
 */
export type UnnameableTypes = LintLevel | DetailedLint;
/**
 * The `unnecessary_transmutes` lint detects transmutations that have safer alternatives.
 */
export type UnnecessaryTransmutes = LintLevel | DetailedLint;
/**
 * The `unpredictable_function_pointer_comparisons` lint checks comparison of function pointer as the operands.
 */
export type UnpredictableFunctionPointerComparisons = LintLevel | DetailedLint;
/**
 * The `unqualified_local_imports` lint checks for `use` items that import a local item using a path that does not start with `self::`, `super::`, or `crate::`.
 */
export type UnqualifiedLocalImports = LintLevel | DetailedLint;
/**
 * The `unreachable_code` lint detects unreachable code paths.
 */
export type UnreachableCode = LintLevel | DetailedLint;
/**
 * The `unreachable_patterns` lint detects unreachable patterns.
 */
export type UnreachablePatterns = LintLevel | DetailedLint;
/**
 * The `unreachable_pub` lint triggers for `pub` items not reachable from other crates - that means neither directly accessible, nor reexported (with `pub use`), nor leaked through things like return types (which the `unnameable_types` lint can detect if desired).
 */
export type UnreachablePub = LintLevel | DetailedLint;
/**
 * The `unsafe_attr_outside_unsafe` lint detects a missing unsafe keyword on attributes considered unsafe.
 */
export type UnsafeAttrOutsideUnsafe = LintLevel | DetailedLint;
/**
 * The `unsafe_code` lint catches usage of `unsafe` code and other potentially unsound constructs like `no_mangle`, `export_name`, and `link_section`.
 */
export type UnsafeCode = LintLevel | DetailedLint;
/**
 * The `unsafe_op_in_unsafe_fn` lint detects unsafe operations in unsafe functions without an explicit unsafe block.
 */
export type UnsafeOpInUnsafeFn = LintLevel | DetailedLint;
/**
 * The `unstable_features` lint detects uses of `#![feature]`.
 */
export type UnstableFeatures = LintLevel | DetailedLint;
/**
 * The `unstable_name_collisions` lint detects that you have used a name that the standard library plans to add in the future.
 */
export type UnstableNameCollisions = LintLevel | DetailedLint;
/**
 * The `unstable_syntax_pre_expansion` lint detects the use of unstable syntax that is discarded during attribute expansion.
 */
export type UnstableSyntaxPreExpansion = LintLevel | DetailedLint;
/**
 * The `unsupported_calling_conventions` lint is output whenever there is a use of the `stdcall`, `fastcall`, and `cdecl` calling conventions (or their unwind variants) on targets that cannot meaningfully be supported for the requested target.
 */
export type UnsupportedCallingConventions = LintLevel | DetailedLint;
/**
 * The `unused_allocation` lint detects unnecessary allocations that can be eliminated.
 */
export type UnusedAllocation = LintLevel | DetailedLint;
/**
 * The `unused_assignments` lint detects assignments that will never be read.
 */
export type UnusedAssignments = LintLevel | DetailedLint;
/**
 * The `unused_associated_type_bounds` lint is emitted when an associated type bound is added to a trait object, but the associated type has a `where Self: Sized` bound, and is thus unavailable on the trait object anyway.
 */
export type UnusedAssociatedTypeBounds = LintLevel | DetailedLint;
/**
 * The `unused_attributes` lint detects attributes that were not used by the compiler.
 */
export type UnusedAttributes = LintLevel | DetailedLint;
/**
 * The `unused_braces` lint detects unnecessary braces around an expression.
 */
export type UnusedBraces = LintLevel | DetailedLint;
/**
 * The `unused_comparisons` lint detects comparisons made useless by limits of the types involved.
 */
export type UnusedComparisons = LintLevel | DetailedLint;
/**
 * The `unused_crate_dependencies` lint detects crate dependencies that are never used.
 */
export type UnusedCrateDependencies = LintLevel | DetailedLint;
/**
 * The `unused_doc_comments` lint detects doc comments that aren’t used by `rustdoc`.
 */
export type UnusedDocComments = LintLevel | DetailedLint;
/**
 * The `unused_extern_crates` lint guards against `extern crate` items that are never used.
 */
export type UnusedExternCrates = LintLevel | DetailedLint;
/**
 * The `unused_features` lint detects unused or unknown features found in crate-level `feature` attributes.
 */
export type UnusedFeatures = LintLevel | DetailedLint;
/**
 * The `unused_import_braces` lint catches unnecessary braces around an imported item.
 */
export type UnusedImportBraces = LintLevel | DetailedLint;
/**
 * The `unused_imports` lint detects imports that are never used.
 */
export type UnusedImports = LintLevel | DetailedLint;
/**
 * The `unused_labels` lint detects labels that are never used.
 */
export type UnusedLabels = LintLevel | DetailedLint;
/**
 * The `unused_lifetimes` lint detects lifetime parameters that are never used.
 */
export type UnusedLifetimes = LintLevel | DetailedLint;
/**
 * The `unused_macro_rules` lint detects macro rules that were not used.
 */
export type UnusedMacroRules = LintLevel | DetailedLint;
/**
 * The `unused_macros` lint detects macros that were not used.
 */
export type UnusedMacros = LintLevel | DetailedLint;
/**
 * The `unused_must_use` lint detects unused result of a type flagged as `#[must_use]`.
 */
export type UnusedMustUse = LintLevel | DetailedLint;
/**
 * The `unused_mut` lint detects mut variables which don’t need to be mutable.
 */
export type UnusedMut = LintLevel | DetailedLint;
/**
 * The `unused_parens` lint detects `if`, `match`, `while` and `return` with parentheses; they do not need them.
 */
export type UnusedParens = LintLevel | DetailedLint;
/**
 * The `unused_qualifications` lint detects unnecessarily qualified names.
 */
export type UnusedQualifications = LintLevel | DetailedLint;
/**
 * The `unused_results` lint checks for the unused result of an expression in a statement.
 */
export type UnusedResults = LintLevel | DetailedLint;
/**
 * The `unused_unsafe` lint detects unnecessary use of an `unsafe` block.
 */
export type UnusedUnsafe = LintLevel | DetailedLint;
/**
 * The `unused_variables` lint detects variables which are not used in any way.
 */
export type UnusedVariables = LintLevel | DetailedLint;
/**
 * The `useless_deprecated` lint detects deprecation attributes with no effect.
 */
export type UselessDeprecated = LintLevel | DetailedLint;
/**
 * The `useless_ptr_null_checks` lint checks for useless null checks against pointers obtained from non-null types.
 */
export type UselessPtrNullChecks = LintLevel | DetailedLint;
/**
 * The `uses_power_alignment` lint detects specific `repr(C)` aggregates on AIX. In its platform C ABI, AIX uses the “power” (as in PowerPC) alignment rule (detailed in https://www.ibm.com/docs/en/xl-c-and-cpp-aix/16.1?topic=data-using-alignment-modes#alignment), which can also be set for XLC by `#pragma align(power)` or `-qalign=power`. Aggregates with a floating-point type as the recursively first field (as in “at offset 0”) modify the layout of subsequent fields of the associated structs to use an alignment value where the floating-point type is aligned on a 4-byte boundary.
 */
export type UsesPowerAlignment = LintLevel | DetailedLint;
/**
 * The `variant_size_differences` lint detects enums with widely varying variant sizes.
 */
export type VariantSizeDifferences = LintLevel | DetailedLint;
/**
 * All lints that are set to issue warnings
 */
export type Warnings = LintLevel | DetailedLint;
/**
 * The `while_true` lint detects `while true { }`.
 */
export type WhileTrue = LintLevel | DetailedLint;
/**
 * Deprecated alias for `nonstandard-style`.
 */
export type BadStyle = LintLevel | DetailedLint;
/**
 * Lints for functions which were erroneously marked as safe in the past
 */
export type DeprecatedSafe = LintLevel | DetailedLint;
/**
 * Lints that detect code that has future-compatibility problems
 */
export type FutureIncompatible = LintLevel | DetailedLint;
/**
 * Lints that detect identifiers which will be come keywords in later editions
 */
export type KeywordIdents = LintLevel | DetailedLint;
/**
 * Lints that detect wildcard let bindings that are likely to be invalid
 */
export type LetUnderscore = LintLevel | DetailedLint;
/**
 * Violation of standard naming conventions
 */
export type NonstandardStyle = LintLevel | DetailedLint;
/**
 * Detects refinement of `impl Trait` return types by trait implementations
 */
export type RefiningImplTrait = LintLevel | DetailedLint;
/**
 * Lints used to transition code from the 2015 edition to 2018
 */
export type Rust2018Compatibility = LintLevel | DetailedLint;
/**
 * Lints to nudge you toward idiomatic features of Rust 2018
 */
export type Rust2018Idioms = LintLevel | DetailedLint;
/**
 * Lints used to transition code from the 2018 edition to 2021
 */
export type Rust2021Compatibility = LintLevel | DetailedLint;
/**
 * Lints used to transition code from the 2021 edition to 2024
 */
export type Rust2024Compatibility = LintLevel | DetailedLint;
/**
 * detects unknown or malformed diagnostic attributes
 */
export type UnknownOrMalformedDiagnosticAttributes = LintLevel | DetailedLint;
/**
 * Lints that detect things being declared but not used, or excess syntax
 */
export type Unused = LintLevel | DetailedLint;
export type Lint = (LintLevel | DetailedLint) | undefined;

/**
 * Lint settings for Rust compiler individual lints and lint groups.
 */
export interface RustCompilerLints {
  aarch64_softfloat_neon?: Aarch64SoftfloatNeon;
  absolute_paths_not_starting_with_crate?: AbsolutePathsNotStartingWithCrate;
  ambiguous_associated_items?: AmbiguousAssociatedItems;
  ambiguous_glob_imports?: AmbiguousGlobImports;
  ambiguous_glob_reexports?: AmbiguousGlobReexports;
  ambiguous_negative_literals?: AmbiguousNegativeLiterals;
  ambiguous_wide_pointer_comparisons?: AmbiguousWidePointerComparisons;
  anonymous_parameters?: AnonymousParameters;
  arithmetic_overflow?: ArithmeticOverflow;
  array_into_iter?: ArrayIntoIter;
  asm_sub_register?: AsmSubRegister;
  async_fn_in_trait?: AsyncFnInTrait;
  bad_asm_style?: BadAsmStyle;
  bare_trait_objects?: BareTraitObjects;
  binary_asm_labels?: BinaryAsmLabels;
  bindings_with_variant_name?: BindingsWithVariantName;
  boxed_slice_into_iter?: BoxedSliceIntoIter;
  break_with_label_and_loop?: BreakWithLabelAndLoop;
  clashing_extern_declarations?: ClashingExternDeclarations;
  closure_returning_async_block?: ClosureReturningAsyncBlock;
  coherence_leak_check?: CoherenceLeakCheck;
  conflicting_repr_hints?: ConflictingReprHints;
  confusable_idents?: ConfusableIdents;
  const_evaluatable_unchecked?: ConstEvaluatableUnchecked;
  const_item_mutation?: ConstItemMutation;
  dangerous_implicit_autorefs?: DangerousImplicitAutorefs;
  dangling_pointers_from_temporaries?: DanglingPointersFromTemporaries;
  dead_code?: DeadCode;
  default_overrides_default_fields?: DefaultOverridesDefaultFields;
  dependency_on_unit_never_type_fallback?: DependencyOnUnitNeverTypeFallback;
  deprecated?: Deprecated;
  deprecated_in_future?: DeprecatedInFuture;
  deprecated_safe_2024?: DeprecatedSafe;
  deprecated_where_clause_location?: DeprecatedWhereClauseLocation;
  deref_into_dyn_supertrait?: DerefIntoDynSupertrait;
  deref_nullptr?: DerefNullptr;
  double_negations?: DoubleNegations;
  drop_bounds?: DropBounds;
  dropping_copy_types?: DroppingCopyTypes;
  dropping_references?: DroppingReferences;
  duplicate_macro_attributes?: DuplicateMacroAttributes;
  dyn_drop?: DynDrop;
  edition_2024_expr_fragment_specifier?: Edition2024ExprFragmentSpecifier;
  elided_lifetimes_in_associated_constant?: ElidedLifetimesInAssociatedConstant;
  elided_lifetimes_in_paths?: ElidedLifetimesInPaths;
  ellipsis_inclusive_range_patterns?: EllipsisInclusiveRangePatterns;
  enum_intrinsics_non_enums?: EnumIntrinsicsNonEnums;
  explicit_builtin_cfgs_in_flags?: ExplicitBuiltinCfgsInFlags;
  explicit_outlives_requirements?: ExplicitOutlivesRequirements;
  exported_private_dependencies?: ExportedPrivateDependencies;
  ffi_unwind_calls?: FfiUnwindCalls;
  for_loops_over_fallibles?: ForLoopsOverFallibles;
  forbidden_lint_groups?: ForbiddenLintGroups;
  forgetting_copy_types?: ForgettingCopyTypes;
  forgetting_references?: ForgettingReferences;
  function_item_references?: FunctionItemReferences;
  fuzzy_provenance_casts?: FuzzyProvenanceCasts;
  hidden_glob_reexports?: HiddenGlobReexports;
  if_let_rescope?: IfLetRescope;
  ill_formed_attribute_input?: IllFormedAttributeInput;
  impl_trait_overcaptures?: ImplTraitOvercaptures;
  impl_trait_redundant_captures?: ImplTraitRedundantCaptures;
  improper_ctypes?: ImproperCtypes;
  improper_ctypes_definitions?: ImproperCtypesDefinitions;
  incomplete_features?: IncompleteFeatures;
  incomplete_include?: IncompleteInclude;
  ineffective_unstable_trait_impl?: IneffectiveUnstableTraitImpl;
  inline_no_sanitize?: InlineNoSanitize;
  internal_features?: InternalFeatures;
  invalid_atomic_ordering?: InvalidAtomicOrdering;
  invalid_doc_attributes?: InvalidDocAttributes;
  invalid_from_utf8?: InvalidFromUtf8;
  invalid_from_utf8_unchecked?: InvalidFromUtf8Unchecked;
  invalid_macro_export_arguments?: InvalidMacroExportArguments;
  invalid_nan_comparisons?: InvalidNanComparisons;
  invalid_null_arguments?: InvalidNullArguments;
  invalid_reference_casting?: InvalidReferenceCasting;
  invalid_type_param_default?: InvalidTypeParamDefault;
  invalid_value?: InvalidValue;
  irrefutable_let_patterns?: IrrefutableLetPatterns;
  keyword_idents_2018?: KeywordIdents;
  keyword_idents_2024?: KeywordIdents;
  large_assignments?: LargeAssignments;
  late_bound_lifetime_arguments?: LateBoundLifetimeArguments;
  legacy_derive_helpers?: LegacyDeriveHelpers;
  let_underscore_drop?: LetUnderscoreDrop;
  let_underscore_lock?: LetUnderscoreLock;
  linker_messages?: LinkerMessages;
  long_running_const_eval?: LongRunningConstEval;
  lossy_provenance_casts?: LossyProvenanceCasts;
  macro_expanded_macro_exports_accessed_by_absolute_paths?: MacroExpandedMacroExportsAccessedByAbsolutePaths;
  macro_use_extern_crate?: MacroUseExternCrate;
  malformed_diagnostic_attributes?: MalformedDiagnosticAttributes;
  malformed_diagnostic_format_literals?: MalformedDiagnosticFormatLiterals;
  map_unit_fn?: MapUnitFn;
  meta_variable_misuse?: MetaVariableMisuse;
  mismatched_lifetime_syntaxes?: MismatchedLifetimeSyntaxes;
  misplaced_diagnostic_attributes?: MisplacedDiagnosticAttributes;
  missing_abi?: MissingAbi;
  missing_copy_implementations?: MissingCopyImplementations;
  missing_debug_implementations?: MissingDebugImplementations;
  missing_docs?: MissingDocs;
  missing_unsafe_on_extern?: MissingUnsafeOnExtern;
  mixed_script_confusables?: MixedScriptConfusables;
  multiple_supertrait_upcastable?: MultipleSupertraitUpcastable;
  must_not_suspend?: MustNotSuspend;
  mutable_transmutes?: MutableTransmutes;
  named_arguments_used_positionally?: NamedArgumentsUsedPositionally;
  named_asm_labels?: NamedAsmLabels;
  never_type_fallback_flowing_into_unsafe?: NeverTypeFallbackFlowingIntoUnsafe;
  no_mangle_const_items?: NoMangleConstItems;
  no_mangle_generic_items?: NoMangleGenericItems;
  non_ascii_idents?: NonAsciiIdents;
  non_camel_case_types?: NonCamelCaseTypes;
  non_contiguous_range_endpoints?: NonContiguousRangeEndpoints;
  non_exhaustive_omitted_patterns?: NonExhaustiveOmittedPatterns;
  non_fmt_panics?: NonFmtPanics;
  non_local_definitions?: NonLocalDefinitions;
  non_shorthand_field_patterns?: NonShorthandFieldPatterns;
  non_snake_case?: NonSnakeCase;
  non_upper_case_globals?: NonUpperCaseGlobals;
  noop_method_call?: NoopMethodCall;
  opaque_hidden_inferred_bound?: OpaqueHiddenInferredBound;
  out_of_scope_macro_calls?: OutOfScopeMacroCalls;
  overflowing_literals?: OverflowingLiterals;
  overlapping_range_endpoints?: OverlappingRangeEndpoints;
  path_statements?: PathStatements;
  patterns_in_fns_without_body?: PatternsInFnsWithoutBody;
  private_bounds?: PrivateBounds;
  private_interfaces?: PrivateInterfaces;
  proc_macro_derive_resolution_fallback?: ProcMacroDeriveResolutionFallback;
  ptr_to_integer_transmute_in_consts?: PtrToIntegerTransmuteInConsts;
  pub_use_of_private_extern_crate?: PubUseOfPrivateExternCrate;
  redundant_imports?: RedundantImports;
  redundant_lifetimes?: RedundantLifetimes;
  redundant_semicolons?: RedundantSemicolons;
  refining_impl_trait_internal?: RefiningImplTraitInternal;
  refining_impl_trait_reachable?: RefiningImplTraitReachable;
  renamed_and_removed_lints?: RenamedAndRemovedLints;
  repr_transparent_external_private_fields?: ReprTransparentExternalPrivateFields;
  rust_2021_incompatible_closure_captures?: Rust2021IncompatibleClosureCaptures;
  rust_2021_incompatible_or_patterns?: Rust2021IncompatibleOrPatterns;
  rust_2021_prefixes_incompatible_syntax?: Rust2021PrefixesIncompatibleSyntax;
  rust_2021_prelude_collisions?: Rust2021PreludeCollisions;
  rust_2024_guarded_string_incompatible_syntax?: Rust2024GuardedStringIncompatibleSyntax;
  rust_2024_incompatible_pat?: Rust2024IncompatiblePat;
  rust_2024_prelude_collisions?: Rust2024PreludeCollisions;
  self_constructor_from_outer_item?: SelfConstructorFromOuterItem;
  semicolon_in_expressions_from_macros?: SemicolonInExpressionsFromMacros;
  single_use_lifetimes?: SingleUseLifetimes;
  soft_unstable?: SoftUnstable;
  special_module_name?: SpecialModuleName;
  stable_features?: StableFeatures;
  static_mut_refs?: StaticMutRefs;
  supertrait_item_shadowing_definition?: SupertraitItemShadowingDefinition;
  supertrait_item_shadowing_usage?: SupertraitItemShadowingUsage;
  suspicious_double_ref_op?: SuspiciousDoubleRefOp;
  tail_expr_drop_order?: TailExprDropOrder;
  test_unstable_lint?: TestUnstableLint;
  text_direction_codepoint_in_comment?: TextDirectionCodepointInComment;
  text_direction_codepoint_in_literal?: TextDirectionCodepointInLiteral;
  trivial_bounds?: TrivialBounds;
  trivial_casts?: TrivialCasts;
  trivial_numeric_casts?: TrivialNumericCasts;
  type_alias_bounds?: TypeAliasBounds;
  tyvar_behind_raw_pointer?: TyvarBehindRawPointer;
  uncommon_codepoints?: UncommonCodepoints;
  unconditional_panic?: UnconditionalPanic;
  unconditional_recursion?: UnconditionalRecursion;
  uncovered_param_in_projection?: UncoveredParamInProjection;
  undropped_manually_drops?: UndroppedManuallyDrops;
  unexpected_cfgs?: UnexpectedCfgs;
  unfulfilled_lint_expectations?: UnfulfilledLintExpectations;
  ungated_async_fn_track_caller?: UngatedAsyncFnTrackCaller;
  uninhabited_static?: UninhabitedStatic;
  unit_bindings?: UnitBindings;
  unknown_crate_types?: UnknownCrateTypes;
  unknown_diagnostic_attributes?: UnknownDiagnosticAttributes;
  unknown_lints?: UnknownLints;
  unnameable_test_items?: UnnameableTestItems;
  unnameable_types?: UnnameableTypes;
  unnecessary_transmutes?: UnnecessaryTransmutes;
  unpredictable_function_pointer_comparisons?: UnpredictableFunctionPointerComparisons;
  unqualified_local_imports?: UnqualifiedLocalImports;
  unreachable_code?: UnreachableCode;
  unreachable_patterns?: UnreachablePatterns;
  unreachable_pub?: UnreachablePub;
  unsafe_attr_outside_unsafe?: UnsafeAttrOutsideUnsafe;
  unsafe_code?: UnsafeCode;
  unsafe_op_in_unsafe_fn?: UnsafeOpInUnsafeFn;
  unstable_features?: UnstableFeatures;
  unstable_name_collisions?: UnstableNameCollisions;
  unstable_syntax_pre_expansion?: UnstableSyntaxPreExpansion;
  unsupported_calling_conventions?: UnsupportedCallingConventions;
  unused_allocation?: UnusedAllocation;
  unused_assignments?: UnusedAssignments;
  unused_associated_type_bounds?: UnusedAssociatedTypeBounds;
  unused_attributes?: UnusedAttributes;
  unused_braces?: UnusedBraces;
  unused_comparisons?: UnusedComparisons;
  unused_crate_dependencies?: UnusedCrateDependencies;
  unused_doc_comments?: UnusedDocComments;
  unused_extern_crates?: UnusedExternCrates;
  unused_features?: UnusedFeatures;
  unused_import_braces?: UnusedImportBraces;
  unused_imports?: UnusedImports;
  unused_labels?: UnusedLabels;
  unused_lifetimes?: UnusedLifetimes;
  unused_macro_rules?: UnusedMacroRules;
  unused_macros?: UnusedMacros;
  unused_must_use?: UnusedMustUse;
  unused_mut?: UnusedMut;
  unused_parens?: UnusedParens;
  unused_qualifications?: UnusedQualifications;
  unused_results?: UnusedResults;
  unused_unsafe?: UnusedUnsafe;
  unused_variables?: UnusedVariables;
  useless_deprecated?: UselessDeprecated;
  useless_ptr_null_checks?: UselessPtrNullChecks;
  uses_power_alignment?: UsesPowerAlignment;
  variant_size_differences?: VariantSizeDifferences;
  warnings?: Warnings;
  while_true?: WhileTrue;
  'bad-style'?: BadStyle;
  'deprecated-safe'?: DeprecatedSafe;
  'future-incompatible'?: FutureIncompatible;
  'keyword-idents'?: KeywordIdents;
  'let-underscore'?: LetUnderscore;
  'nonstandard-style'?: NonstandardStyle;
  'refining-impl-trait'?: RefiningImplTrait;
  'rust-2018-compatibility'?: Rust2018Compatibility;
  'rust-2018-idioms'?: Rust2018Idioms;
  'rust-2021-compatibility'?: Rust2021Compatibility;
  'rust-2024-compatibility'?: Rust2024Compatibility;
  'unknown-or-malformed-diagnostic-attributes'?: UnknownOrMalformedDiagnosticAttributes;
  unused?: Unused;
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
