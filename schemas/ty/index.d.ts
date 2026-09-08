/* eslint-disable */

export type String = string;
/**
 * A possibly relative path in a configuration file.
 *
 * Relative paths in configuration files or from CLI options
 * require different anchoring:
 *
 * * CLI: The path is relative to the current working directory
 * * Configuration file: The path is relative to the project's root.
 */
export type RelativePathBuf = SystemPathBuf;
/**
 * An owned, mutable path on [`System`](`super::System`) (akin to [`String`]).
 *
 * The path is guaranteed to be valid UTF-8.
 */
export type SystemPathBuf = string;
/**
 * The target platform to assume when resolving types.
 *
 */
export type PythonPlatform = string | 'all' | 'darwin' | 'linux' | 'win32';
/**
 * A Python version explicitly supported by ty configuration and CLI parsing.
 */
export type SupportedPythonVersion = '3.7' | '3.8' | '3.9' | '3.10' | '3.11' | '3.12' | '3.13' | '3.14' | '3.15';
export type ArrayOfString = String[];
/**
 * ## What it does
 *
 * Checks for methods decorated with both `@abstractmethod` and `@final`.
 *
 * ## Why is this bad?
 *
 * An abstract method must be overridden for a subclass to become concrete, but a final
 * method cannot be overridden. Combining the decorators therefore makes it impossible
 * for a subclass to provide a concrete implementation.
 *
 * ## Example
 *
 * ```python
 * from abc import ABC, abstractmethod
 * from typing import final
 *
 *
 * class Base(ABC):
 *     @final
 *     @abstractmethod
 *     def method(self) -> None: ...  # error
 * ```
 */
export type DetectsMethodsThatAreBothAbstractAndFinal = Level;
export type Level = Ignore | Warn | Error;
/**
 * The lint is disabled and should not run.
 */
export type Ignore = 'ignore';
/**
 * The lint is enabled and diagnostic should have a warning severity.
 */
export type Warn = 'warn';
/**
 * The lint is enabled and diagnostics have an error severity.
 */
export type Error = 'error';
/**
 * ## What it does
 *
 * Checks for `@final` classes that have unimplemented abstract methods.
 *
 * ## Why is this bad?
 *
 * A class decorated with `@final` cannot be subclassed. If such a class has abstract
 * methods that are not implemented, the class can never be properly instantiated, as
 * the abstract methods can never be implemented (since subclassing is prohibited).
 *
 * At runtime, instantiation of classes with unimplemented abstract methods is only
 * prevented for classes that have `ABCMeta` (or a subclass of it) as their metaclass.
 * However, type checkers also enforce this for classes that do not use `ABCMeta`, since
 * the intent for the class to be abstract is clear from the use of `@abstractmethod`.
 *
 * ## Example
 *
 * ```python
 * from abc import ABC, abstractmethod
 * from typing import final
 *
 *
 * class Base(ABC):
 *     @abstractmethod
 *     def method(self) -> int: ...
 *
 *
 * @final
 * # `Derived` does not implement `method`
 * class Derived(Base):  # error
 *     pass
 * ```
 */
export type DetectsFinalClassesWithUnimplementedAbstractMethods = Level;
/**
 * Configure a default severity level for all rules. Individual rule settings override this default.
 */
export type SetTheDefaultSeverityLevelForAllRules = Level;
/**
 * ## What it does
 *
 * Checks for protocol classes with members that will lead to ambiguous interfaces.
 *
 * ## Why is this bad?
 *
 * Assigning to an undeclared variable in a protocol class, or to an undeclared attribute
 * through a protocol method's `self` or `cls` receiver, leads to an ambiguous interface
 * which may lead to the type checker inferring unexpected things. It's recommended to
 * ensure that all members of a protocol class are explicitly declared.
 *
 * ## Examples
 *
 * ```py
 * from typing import ClassVar, Protocol
 *
 *
 * class BaseProto(Protocol):
 *     a: int  # fine (explicitly declared as `int`)
 *     instance_member: str
 *     class_member: ClassVar[str]
 *
 *     # fine: a method definition using `def` is considered a declaration
 *     def method_member(self) -> int: ...
 *
 *     def method(self) -> None:
 *         self.instance_member = "value"  # fine (declared in the class body)
 *         self.implicit = "value"  # error: [ambiguous-protocol-member]
 *
 *     @classmethod
 *     def class_method(cls) -> None:
 *         cls.class_member = "value"  # fine (declared in the class body)
 *         cls.implicit_class = "value"  # error: [ambiguous-protocol-member]
 *
 *     # no explicit declaration, leading to ambiguity
 *     c = "some variable"  # error
 *     # no explicit declaration, leading to ambiguity
 *     b = method_member  # error
 *
 *     # This creates implicit assignments of `d` and `e` in the protocol class body.
 *     # Were they really meant to be considered protocol members?
 *     # error: "`d` is not declared as a protocol member"
 *     # error: "`e` is not declared as a protocol member"
 *     for d, e in enumerate(range(42)):
 *         pass
 *
 *
 * class SubProto(BaseProto, Protocol):
 *     a = 42  # fine (declared in superclass)
 * ```
 */
export type DetectsProtocolClassesWithAmbiguousInterfaces = Level;
/**
 * ## What it does
 *
 * Checks for `assert_type()` calls where the actual type
 * is an unspellable subtype of the asserted type.
 *
 * ## Why is this bad?
 *
 * `assert_type()` is intended to ensure that the inferred type of a value
 * is exactly the same as the asserted type. But in some situations, ty
 * has nonstandard extensions to the type system that allow it to infer
 * more precise types than can be expressed in user annotations. ty emits a
 * different error code to `type-assertion-failure` in these situations so
 * that users can easily differentiate between the two cases.
 *
 * ## Example
 *
 * ```toml
 * [environment]
 * python-version = "3.11"
 * ```
 *
 * ```python
 * from typing import assert_type
 *
 *
 * def _(x: int):
 *     assert_type(x, int)  # fine
 *     if x:
 *         # the actual type is `int & ~AlwaysFalsy`,
 *         # which excludes types like `Literal[0]`
 *         # error: [assert-type-unspellable-subtype]
 *         assert_type(x, int)
 * ```
 */
export type DetectsFailedTypeAssertions = Level;
/**
 * ## What it does
 *
 * Checks for `ty: ignore` comments that don't specify which rules to ignore.
 *
 * ## Why is this bad?
 *
 * A blanket `ty: ignore` comment suppresses every type-checking diagnostic on the
 * applicable line or file. Specifying rule codes documents which diagnostics are
 * expected and prevents the comment from silencing unrelated errors.
 *
 * ## Examples
 *
 * ```py
 * # error
 * value = unknown  # ty: ignore
 * ```
 *
 * Use instead:
 *
 * ```py
 * value = unknown  # ty: ignore[unresolved-reference]
 * ```
 */
export type DetectsBlanketTyIgnoreComments = Level;
/**
 * ## What it does
 *
 * Checks for calls to abstract `@classmethod`s or `@staticmethod`s
 * with "trivial bodies" when accessed on the class object itself.
 *
 * "Trivial bodies" are bodies that solely consist of `...`, `pass`,
 * a docstring, and/or `raise NotImplementedError`.
 *
 * ## Why is this bad?
 *
 * An abstract method with a trivial body has no concrete implementation
 * to execute, so calling such a method directly on the class will probably
 * not have the desired effect.
 *
 * It is also unsound to call these methods directly on the class. Unlike
 * other methods, ty permits abstract methods with trivial bodies to have
 * non-`None` return types even though they always return `None` at runtime.
 * This is because it is expected that these methods will always be
 * overridden rather than being called directly. As a result of this
 * exception to the normal rule, ty may infer an incorrect type if one of
 * these methods is called directly, which may then mean that type errors
 * elsewhere in your code go undetected by ty.
 *
 * Calling abstract classmethods or staticmethods via `type[X]` is allowed,
 * since the actual runtime type could be a concrete subclass with an implementation.
 *
 * ## Example
 *
 * ```python
 * from abc import ABC, abstractmethod
 *
 *
 * class Foo(ABC):
 *     @classmethod
 *     @abstractmethod
 *     def method(cls) -> int: ...
 *
 *
 * # cannot call abstract classmethod
 * Foo.method()  # error
 * ```
 */
export type DetectsCallsToAbstractMethodsWithTrivialBodiesOnClassObjects = Level;
/**
 * ## What it does
 *
 * Checks for calls to non-callable objects.
 *
 * ## Why is this bad?
 *
 * Calling a non-callable object will raise a `TypeError` at runtime.
 *
 * ## Examples
 *
 * ```python
 * # TypeError: 'int' object is not callable
 * 4()  # error
 * ```
 */
export type DetectsCallsToNonCallableObjects = Level;
/**
 * ## What it does
 *
 * Checks for calls to objects typed as `Top[Callable[..., T]]` (the infinite union of all
 * callable types with return type `T`).
 *
 * ## Why is this bad?
 *
 * When an object is narrowed to `Top[Callable[..., object]]` (e.g., via `callable(x)` or
 * `isinstance(x, Callable)`), we know the object is callable, but we don't know its
 * precise signature. This type represents the set of all possible callable types
 * (including, e.g., functions that take no arguments and functions that require arguments),
 * so no specific set of arguments can be guaranteed to be valid.
 *
 * ## Examples
 *
 * ```python
 * def f(x: object):
 *     if callable(x):
 *         # We know `x` is callable, but not what arguments it accepts
 *         x()  # error
 * ```
 */
export type DetectsCallsToTheTopCallableType = Level;
/**
 * ## What it does
 *
 * Checks whether a variable has been declared as two conflicting types.
 *
 * ## Why is this bad
 *
 * A variable with two conflicting declarations likely indicates a mistake.
 * Moreover, it could lead to incorrect or ill-defined type inference for
 * other code that relies on these variables.
 *
 * ## Examples
 *
 * ```python
 * if __name__ == "__main__":
 *     a: int
 * else:
 *     a: str
 *
 * a = 1  # error
 * ```
 */
export type DetectsConflictingDeclarations = Level;
/**
 * ## What it does
 *
 * Checks for class definitions where the metaclass of the class
 * being created would not be a subclass of the metaclasses of
 * all the class's bases.
 *
 * ## Why is it bad?
 *
 * Such a class definition raises a `TypeError` at runtime.
 *
 * ## Examples
 *
 * ```pyi
 * class M1(type): ...
 * class M2(type): ...
 * class A(metaclass=M1): ...
 * class B(metaclass=M2): ...
 *
 * # TypeError: metaclass conflict
 * class C(A, B): ...  # error
 * ```
 */
export type DetectsConflictingMetaclasses = Level;
/**
 * ## What it does
 *
 * Checks for class definitions in stub files that inherit
 * (directly or indirectly) from themselves.
 *
 * ## Why is it bad?
 *
 * Although forward references are natively supported in stub files,
 * inheritance cycles are still disallowed, as it is impossible to
 * resolve a consistent [method resolution order] for a class that
 * inherits from itself.
 *
 * ## Examples
 *
 * `foo.pyi`:
 *
 * ```pyi
 * class A(B): ...  # error
 * class B(A): ...  # error
 * ```
 *
 * [method resolution order]: https://docs.python.org/3/glossary.html#term-method-resolution-order
 */
export type DetectsCyclicClassDefinitions = Level;
/**
 * ## What it does
 *
 * Checks for type alias definitions that (directly or mutually) refer to themselves.
 *
 * ## Why is it bad?
 *
 * Although it is permitted to define a recursive type alias, it is not meaningful
 * to have a type alias whose expansion can only result in itself, and is therefore not allowed.
 *
 * ## Examples
 *
 * ```toml
 * [environment]
 * python-version = "3.12"
 * ```
 *
 * ```python
 * type Itself = Itself  # error
 *
 * type A = B  # error
 * type B = A  # error
 * ```
 */
export type DetectsCyclicTypeAliasDefinitions = Level;
/**
 * ## What it does
 *
 * Checks for dataclass definitions where required fields are defined after
 * fields with default values.
 *
 * ## Why is this bad?
 *
 * In dataclasses, all required fields (fields without default values) must be
 * defined before fields with default values. This is a Python requirement that
 * will raise a `TypeError` at runtime if violated.
 *
 * ## Example
 *
 * ```python
 * from dataclasses import dataclass
 *
 *
 * @dataclass
 * class Example:
 *     x: int = 1  # Field with default value
 *     # Required field after field with default
 *     y: str  # error
 * ```
 */
export type DetectsDataclassDefinitionsWithRequiredFieldsAfterFieldsWithDefaultValues = Level;
/**
 * ## What it does
 *
 * Checks for uses of deprecated items
 *
 * ## Why is this bad?
 *
 * Deprecated items should no longer be used.
 *
 * ## Examples
 *
 * ```toml
 * [environment]
 * python-version = "3.13"
 * ```
 *
 * ```python
 * import warnings
 *
 *
 * @warnings.deprecated("use new_func instead")
 * def old_func(): ...
 *
 *
 * old_func()  # error: [deprecated]
 * ```
 */
export type DetectsUsesOfDeprecatedItems = Level;
/**
 * ## What it does
 *
 * It detects division by zero.
 *
 * ## Why is this bad?
 *
 * Dividing by zero raises a `ZeroDivisionError` at runtime.
 *
 * ## Rule status
 *
 * This rule is currently disabled by default because of the number of
 * false positives it can produce.
 *
 * ## Examples
 *
 * ```python
 * 5 / 0  # error
 * ```
 */
export type DetectsDivisionByZero = Level;
/**
 * ## What it does
 *
 * Checks for class definitions with duplicate bases.
 *
 * ## Why is this bad?
 *
 * Class definitions with duplicate bases raise `TypeError` at runtime.
 *
 * ## Examples
 *
 * ```python
 * class A: ...
 *
 *
 * # TypeError: duplicate base class
 * class B(A, A): ...  # error
 * ```
 */
export type DetectsClassDefinitionsWithDuplicateBases = Level;
/**
 * ## What it does
 *
 * Checks for dataclass definitions with more than one field
 * annotated with `KW_ONLY`.
 *
 * ## Why is this bad?
 *
 * `dataclasses.KW_ONLY` is a special marker used to
 * emulate the `*` syntax in normal signatures.
 * It can only be used once per dataclass.
 *
 * Attempting to annotate two different fields with
 * it will lead to a runtime error.
 *
 * ## Examples
 *
 * ```python
 * from dataclasses import dataclass, KW_ONLY
 *
 *
 * # Crash at runtime
 * @dataclass
 * class A:  # error
 *     b: int
 *     _1: KW_ONLY
 *     c: str
 *     _2: KW_ONLY
 *     d: bytes
 * ```
 */
export type DetectsDataclassDefinitionsWithMoreThanOneUsageOfKW_ONLY = Level;
/**
 * ## What it does
 *
 * Detects functions with empty bodies that have a non-`None` return type annotation.
 *
 * The errors reported by this rule have the same motivation as the `invalid-return-type`
 * rule. The diagnostic exists as a separate error code to allow users to disable this
 * rule while prototyping code. While we strongly recommend enabling this rule if
 * possible, users migrating from other type checkers may also find it useful to
 * temporarily disable this rule on some or all of their codebase if they find it
 * results in a large number of diagnostics.
 *
 * ## Why is this bad?
 *
 * A function with an empty body (containing only `...`, `pass`, or a docstring) will
 * implicitly return `None` at runtime. Returning `None` when the return type is non-`None`
 * is unsound, and will lead to ty inferring incorrect types elsewhere.
 *
 * Functions with empty bodies are permitted in certain contexts where they serve as
 * declarations rather than implementations:
 *
 * - Functions in stub files (`.pyi`)
 * - Methods in Protocol classes
 * - Abstract methods decorated with `@abstractmethod`
 * - Overload declarations decorated with `@overload`
 * - Functions in `if TYPE_CHECKING` blocks
 *
 * ## Examples
 *
 * ```python
 * def foo() -> int: ...  # error: [empty-body]
 *
 *
 * def bar() -> str:  # error: [empty-body]
 *     """A function that does nothing."""
 *     pass
 * ```
 */
export type DetectsFunctionsWithEmptyBodiesThatHaveANonNoneReturnTypeAnnotation = Level;
/**
 * ## What it does
 *
 * Checks for forward annotations that contain escape characters.
 *
 * ## Why is this bad?
 *
 * Static analysis tools like ty can't analyze type annotations that contain escape characters.
 *
 * ## Example
 *
 * ```python
 * def foo() -> "intt\b": ...  # error
 * ```
 */
export type DetectsForwardTypeAnnotationsWithEscapeCharacters = Level;
/**
 * ## What it does
 *
 * Checks for experimental syntax that is not part of the Python typing specification.
 *
 * ## Why is this bad?
 *
 * Experimental syntax is specific to ty. It may be rejected by other type checkers and may never be
 * standardized, or be subject to breaking changes.
 *
 * ## Examples
 *
 * ```toml
 * [environment]
 * python-version = "3.14"
 * ```
 *
 * ```python
 * class A: ...
 *
 *
 * class B: ...
 *
 *
 * def f(value: A & B) -> None: ...  # error: [experimental-syntax]
 * def g(value: ~A) -> None: ...  # error: [experimental-syntax]
 * ```
 */
export type DetectsExperimentalSyntax = Level;
/**
 * ## What it does
 *
 * Checks for `@final` decorators applied to non-method functions.
 *
 * ## Why is this bad?
 *
 * The `@final` decorator is only meaningful on methods and classes.
 * Applying it to a module-level function or a nested function has no
 * effect and is likely a mistake.
 *
 * ## Example
 *
 * ```python
 * from typing import final
 *
 *
 * # @final is not allowed on non-method functions
 * @final  # error
 * def my_function() -> int:
 *     return 0
 * ```
 */
export type DetectsFinalAppliedToNonMethodFunctions = Level;
/**
 * ## What it does
 *
 * Checks for `Final` symbols that are declared without a value and are never
 * assigned a value in their scope.
 *
 * ## Why is this bad?
 *
 * A `Final` symbol must be initialized with a value at the time of declaration
 * or in a subsequent assignment. At module or function scope, the assignment must
 * occur in the same scope. In a class body, the assignment may occur in `__init__`.
 * Protocol members are declarations of an interface and do not require a value.
 *
 * ## Examples
 *
 * ```python
 * from typing import Final
 *
 * # `Final` symbol without a value
 * MY_CONSTANT: Final[int]  # error
 *
 * # OK: `Final` symbol with a value
 * INITIALIZED_CONSTANT: Final[int] = 1
 * ```
 */
export type DetectsFinalDeclarationsWithoutAValue = Level;
/**
 * ## What it does
 *
 * Checks for `ty: ignore[code]` or `type: ignore[ty:code]` comments where `code` isn't a known lint rule.
 *
 * ## Why is this bad?
 *
 * A `ty: ignore[code]` or a `type: ignore[ty:code]` directive with a `code` that doesn't match
 * any known rule will not suppress any type errors, and is probably a mistake.
 *
 * ## Examples
 *
 * ```py
 * # error
 * a = 20 / 1  # ty: ignore[division-by-zer]
 * ```
 *
 * Use instead:
 *
 * ```py
 * a = 20 / 0  # ty: ignore[division-by-zero]
 * ```
 */
export type DetectsTyIgnoreCommentsThatReferenceUnknownRules = Level;
/**
 * ## What it does
 *
 * Checks for implicit concatenated strings in type annotation positions.
 *
 * ## Why is this bad?
 *
 * Static analysis tools like ty can't analyze type annotations that use implicit concatenated strings.
 *
 * ## Examples
 *
 * <!-- fmt:off -->
 *
 * ```python
 * from typing import Literal
 *
 * def test() -> "Literal[" "5" "]":  # error
 *     return 5
 * ```
 *
 * <!-- fmt:on -->
 *
 * Use instead:
 *
 * ```python
 * from typing import Literal
 *
 *
 * def test() -> "Literal[5]":
 *     return 5
 * ```
 */
export type DetectsImplicitConcatenatedStringsInTypeAnnotations = Level;
/**
 * ## What it does
 *
 * Checks for classes with an inconsistent [method resolution order] (MRO).
 *
 * ## Why is this bad?
 *
 * Classes with an inconsistent MRO will raise a `TypeError` at runtime.
 *
 * ## Examples
 *
 * ```python
 * class A: ...
 *
 *
 * class B(A): ...
 *
 *
 * # TypeError: Cannot create a consistent method resolution order
 * class C(A, B): ...  # error
 * ```
 *
 * [method resolution order]: https://docs.python.org/3/glossary.html#term-method-resolution-order
 */
export type DetectsClassDefinitionsWithAnInconsistentMRO = Level;
/**
 * ## What it does
 *
 * Checks for attempts to use an out of bounds index to get an item from
 * a container.
 *
 * ## Why is this bad?
 *
 * Using an out of bounds index will raise an `IndexError` at runtime.
 *
 * ## Examples
 *
 * ```python
 * t = (0, 1, 2)
 * # IndexError: tuple index out of range
 * t[3]  # error
 * ```
 */
export type DetectsIndexOutOfBoundsErrors = Level;
/**
 * ## What it does
 *
 * Checks for calls to `final()` that type checkers cannot interpret.
 *
 * ## Why is this bad?
 *
 * The `final()` function is designed to be used as a decorator. When called directly
 * as a function (e.g., `final(type(...))`), type checkers will not understand the
 * application of `final` and will not prevent subclassing.
 *
 * ## Example
 *
 * ```python
 * from typing import final
 *
 * # Incorrect: type checkers will not prevent subclassing
 * MyClass = final(type("MyClass", (), {}))  # error
 *
 *
 * # Correct: use `final` as a decorator
 * @final
 * class MyClass: ...
 * ```
 */
export type DetectsCallsToFinalThatTypeCheckersCannotInterpret = Level;
/**
 * ## What it does
 *
 * Checks for classes definitions which will fail at runtime due to
 * "instance memory layout conflicts".
 *
 * This error is usually caused by attempting to combine multiple classes
 * that define non-empty `__slots__` in a class's [Method Resolution Order][method-resolution-order]
 * (MRO), or by attempting to combine multiple builtin classes in a class's
 * MRO.
 *
 * ## Why is this bad?
 *
 * Inheriting from bases with conflicting instance memory layouts
 * will lead to a `TypeError` at runtime.
 *
 * An instance memory layout conflict occurs when CPython cannot determine
 * the memory layout instances of a class should have, because the instance
 * memory layout of one of its bases conflicts with the instance memory layout
 * of one or more of its other bases.
 *
 * For example, if a Python class defines non-empty `__slots__`, this will
 * impact the memory layout of instances of that class. Multiple inheritance
 * from more than one different class defining non-empty `__slots__` is not
 * allowed:
 *
 * ```python
 * class A:
 *     __slots__ = ("a", "b")
 *
 *
 * class B:
 *     __slots__ = ("a", "b")  # Even if the values are the same
 *
 *
 * # TypeError: multiple bases have instance lay-out conflict
 * class C(A, B): ...  # error
 * ```
 *
 * An instance layout conflict can also be caused by attempting to use
 * multiple inheritance with two builtin classes, due to the way that these
 * classes are implemented in a CPython C extension:
 *
 * ```python
 * # TypeError: multiple bases have instance lay-out conflict
 * class A(int, float): ...  # error
 * ```
 *
 * Note that pure-Python classes with no `__slots__`, or pure-Python classes
 * with empty `__slots__`, are always compatible:
 *
 * ```python
 * class A: ...
 *
 *
 * class B:
 *     __slots__ = ()
 *
 *
 * class C:
 *     __slots__ = ("a", "b")
 *
 *
 * # fine
 * class D(A, B, C): ...
 * ```
 *
 * ## Known problems
 *
 * Classes that have "dynamic" definitions of `__slots__` (definitions do not consist
 * of string literals, or tuples of string literals) are not currently considered disjoint
 * bases by ty.
 *
 * Additionally, this check is not exhaustive: many C extensions (including several in
 * the standard library) define classes that use extended memory layouts and thus cannot
 * coexist in a single MRO. Since it is currently not possible to represent this fact in
 * stub files, having a full knowledge of these classes is also impossible. When it comes
 * to classes that do not define `__slots__` at the Python level, therefore, ty, currently
 * only hard-codes a number of cases where it knows that a class will produce instances with
 * an atypical memory layout.
 *
 * ## Further reading
 *
 * - [CPython documentation: `__slots__`](https://docs.python.org/3/reference/datamodel.html#slots)
 * - [CPython documentation: Method Resolution Order](https://docs.python.org/3/glossary.html#term-method-resolution-order)
 *
 * [method-resolution-order]: https://docs.python.org/3/glossary.html#term-method-resolution-order
 */
export type DetectsClassDefinitionsThatRaiseTypeErrorDueToInstanceLayoutConflict = Level;
/**
 * ## What it does
 *
 * Detects call arguments whose type is not assignable to the corresponding typed parameter.
 *
 * ## Why is this bad?
 *
 * Passing an argument of a type the function (or callable object) does not accept violates
 * the expectations of the function author and may cause unexpected runtime errors within the
 * body of the function.
 *
 * ## Examples
 *
 * ```python
 * def func(x: int): ...
 *
 *
 * func("foo")  # error: [invalid-argument-type]
 * ```
 */
export type DetectsCallArgumentsWhoseTypeIsNotAssignableToTheCorrespondingTypedParameter = Level;
/**
 * ## What it does
 *
 * Checks for assignments where the type of the value
 * is not [assignable to] the type of the assignee.
 *
 * ## Why is this bad?
 *
 * Such assignments break the rules of the type system and
 * weaken a type checker's ability to accurately reason about your code.
 *
 * ## Examples
 *
 * ```python
 * a: int = ""  # error
 * ```
 *
 * [assignable to]: https://typing.python.org/en/latest/spec/glossary.html#term-assignable
 */
export type DetectsInvalidAssignments = Level;
/**
 * ## What it does
 *
 * Checks for assignments to class variables from instances
 * and assignments to instance-only attributes from their class.
 *
 * An "instance-only" variable is one which is only ever assigned to or declared
 * when accessed via `self` in an instance method.
 *
 * ## Why is this bad?
 *
 * Incorrect assignments break the rules of the type system and
 * weaken a type checker's ability to accurately reason about your code.
 *
 * ## Examples
 *
 * ```python
 * from typing import ClassVar
 *
 *
 * class C:
 *     instance_var: int
 *     class_var: ClassVar[int] = 1
 *
 *     def __init__(self):
 *         # instance variable declared in the class body
 *         self.instance_var = 42
 *
 *         # instance-only variable not declared in the class body
 *         self.instance_only_var: int = 42
 *
 *
 * C.class_var = 3  # okay
 *
 * C.instance_var = 56  # okay
 * C().instance_var = 72  # okay
 *
 * C().instance_only_var = 100  # okay
 *
 * # Cannot assign to class variable from instance
 * C().class_var = 3  # error
 *
 * # Cannot assign to instance-only variable from class
 * C.instance_only_var = 56  # error
 * ```
 */
export type InvalidAttributeAccess = Level;
/**
 * ## What it does
 *
 * Detects attribute overrides that change whether an inherited attribute
 * is a class variable or an instance variable.
 *
 * This rule currently only covers class-variable and instance-variable
 * category changes.
 *
 * ## Why is this bad?
 *
 * Pure class variables and instance variables have different access and
 * assignment behavior. Overriding one with the other violates the
 * [Liskov Substitution Principle][liskov-substitution-principle] ("LSP"), because code that is valid for
 * the superclass may no longer be valid for the subclass.
 *
 * ## Example
 *
 * ```python
 * from typing import ClassVar
 *
 *
 * class Base:
 *     instance_attr: int
 *     class_attr: ClassVar[int]
 *
 *
 * class Sub(Base):
 *     instance_attr: ClassVar[int]  # error: [invalid-attribute-override]
 *     class_attr: int  # error: [invalid-attribute-override]
 * ```
 *
 * [liskov-substitution-principle]: https://en.wikipedia.org/wiki/Liskov_substitution_principle
 */
export type DetectsAttributeOverridesThatChangeClassVariableOrInstanceVariableBehavior = Level;
/**
 * ## What it does
 *
 * Checks for `await` being used with types that are not [Awaitable][awaitable-abc].
 *
 * ## Why is this bad?
 *
 * Such expressions will lead to `TypeError` being raised at runtime.
 *
 * ## Examples
 *
 * ```python
 * import asyncio
 *
 *
 * class InvalidAwait:
 *     def __await__(self) -> int:
 *         return 5
 *
 *
 * async def main() -> None:
 *     await InvalidAwait()  # error: [invalid-await]
 *     await 42  # error: [invalid-await]
 *
 *
 * asyncio.run(main())
 * ```
 *
 * [awaitable-abc]: https://docs.python.org/3/library/collections.abc.html#collections.abc.Awaitable
 */
export type DetectsAwaitingOnTypesThatDonTSupportIt = Level;
/**
 * ## What it does
 *
 * Checks for class definitions that have bases which are not instances of `type`.
 *
 * ## Why is this bad?
 *
 * Class definitions with bases like this will lead to `TypeError` being raised at runtime.
 *
 * ## Examples
 *
 * ```python
 * class A(42): ...  # error: [invalid-base]
 * ```
 */
export type DetectsClassBasesThatWillCauseTheClassDefinitionToRaiseAnExceptionAtRuntime = Level;
/**
 * ## What it does
 *
 * Checks for expressions used in `with` statements
 * that do not implement the context manager protocol.
 *
 * ## Why is this bad?
 *
 * Such a statement will raise `TypeError` at runtime.
 *
 * ## Examples
 *
 * ```python
 * # TypeError: 'int' object does not support the context manager protocol
 * with 1:  # error
 *     print(2)
 * ```
 */
export type DetectsExpressionsUsedInWithStatementsThatDonTImplementTheContextManagerProtocol = Level;
/**
 * ## What it does
 *
 * Checks for invalid applications of the `@dataclass` decorator.
 *
 * ## Why is this bad?
 *
 * Applying `@dataclass` with incompatible arguments raises an exception while creating the
 * class:
 *
 * - `order=True` with `eq=False`
 * - `weakref_slot=True` with `slots=False`
 *
 * Applying `@dataclass` to a class that inherits from `NamedTuple`, `TypedDict`,
 * `Enum`, or `Protocol` is also invalid:
 *
 * - `NamedTuple` and `TypedDict` classes will raise an exception at runtime when
 *     instantiating the class.
 * - `Enum` classes with `@dataclass` are [explicitly not supported].
 * - `Protocol` classes define interfaces and cannot be instantiated.
 *
 * ## Examples
 *
 * ```python
 * from dataclasses import dataclass
 * from typing import NamedTuple
 *
 *
 * @dataclass(order=True, eq=False)  # error: [invalid-dataclass]
 * class Ordered: ...
 *
 *
 * @dataclass
 * class Foo(NamedTuple):  # error: [invalid-dataclass]
 *     x: int
 * ```
 *
 * See: <https://docs.python.org/3/library/dataclasses.html#dataclasses.dataclass>
 *
 * [explicitly not supported]: https://docs.python.org/3/howto/enum.html#dataclass-support
 */
export type DetectsInvalidDataclassApplications = Level;
/**
 * ## What it does
 *
 * Checks for dataclass definitions that have both `frozen=True` and a custom `__setattr__` or
 * `__delattr__` method defined.
 *
 * ## Why is this bad?
 *
 * Frozen dataclasses synthesize `__setattr__` and `__delattr__` methods which raise a
 * `FrozenInstanceError` to emulate immutability.
 *
 * Overriding either of these methods raises a runtime error.
 *
 * ## Examples
 *
 * ```python
 * from dataclasses import dataclass
 *
 *
 * @dataclass(frozen=True)
 * class A:
 *     def __setattr__(self, name: str, value: object) -> None: ...  # error
 * ```
 */
export type DetectsDataclassesWithFrozenTrueThatHaveACustom_Setattr__Or_Delattr__Implementation = Level;
/**
 * ## What it does
 *
 * Checks for declarations where the inferred type of an existing symbol
 * is not [assignable to] its post-hoc declared type.
 *
 * ## Why is this bad?
 *
 * Such declarations break the rules of the type system and
 * weaken a type checker's ability to accurately reason about your code.
 *
 * ## Examples
 *
 * ```python
 * a = 1
 * a: str  # error
 * ```
 *
 * [assignable to]: https://typing.python.org/en/latest/spec/glossary.html#term-assignable
 */
export type DetectsInvalidDeclarations = Level;
/**
 * ## What it does
 *
 * Checks for enum members that have explicit type annotations.
 *
 * ## Why is this bad?
 *
 * The [typing spec] states that type checkers should infer a literal type
 * for all enum members. An explicit type annotation on an enum member is
 * misleading because the annotated type will be incorrect — the actual
 * runtime type is the enum class itself, not the annotated type.
 *
 * In CPython's `enum` module, annotated assignments with values are still
 * treated as members at runtime, but the annotation will confuse readers of the code.
 *
 * ## Examples
 *
 * ```python
 * from enum import Enum
 *
 *
 * class Pet(Enum):
 *     CAT = 1  # OK
 *     # enum members should not be annotated
 *     DOG: int = 2  # error
 * ```
 *
 * Use instead:
 *
 * ```python
 * from enum import Enum
 *
 *
 * class Pet(Enum):
 *     CAT = 1
 *     DOG = 2
 * ```
 *
 * ## References
 *
 * - [Typing spec: Enum members](https://typing.python.org/en/latest/spec/enums.html#enum-members)
 *
 * [typing spec]: https://typing.python.org/en/latest/spec/enums.html#enum-members
 */
export type DetectsTypeAnnotationsOnEnumMembers = Level;
/**
 * ## What it does
 *
 * Checks for exception handlers that catch non-exception classes.
 *
 * ## Why is this bad?
 *
 * Catching classes that do not inherit from `BaseException` will raise a `TypeError` at runtime.
 *
 * ## Example
 *
 * ```python
 * import random
 *
 *
 * def might_raise() -> float:
 *     return 1 / random.choice([0, 1, 2, 3, 4, 5])
 *
 *
 * try:
 *     might_raise()
 * except 1:  # error
 *     ...
 * ```
 *
 * Use instead:
 *
 * ```python
 * import random
 *
 *
 * def might_raise() -> float:
 *     return 1 / random.choice([0, 1, 2, 3, 4, 5])
 *
 *
 * try:
 *     might_raise()
 * except ZeroDivisionError:
 *     ...
 * ```
 *
 * ## References
 *
 * - [Python documentation: except clause](https://docs.python.org/3/reference/compound_stmts.html#except-clause)
 * - [Python documentation: Built-in Exceptions](https://docs.python.org/3/library/exceptions.html#built-in-exceptions)
 *
 * ## Ruff rule
 *
 * This rule corresponds to Ruff's [`except-with-non-exception-classes` (`B030`)](https://docs.astral.sh/ruff/rules/except-with-non-exception-classes)
 */
export type DetectsExceptionHandlersThatCatchClassesThatDoNotInheritFromBaseException = Level;
/**
 * ## What it does
 *
 * Checks for methods that are decorated with `@override` but do not override any method in a superclass.
 *
 * ## Why is this bad?
 *
 * Decorating a method with `@override` declares to the type checker that the intention is that it should
 * override a method from a superclass.
 *
 * ## Example
 *
 * ```toml
 * [environment]
 * python-version = "3.12"
 * ```
 *
 * ```python
 * from typing import override
 *
 *
 * class A:
 *     @override
 *     def foo(self): ...  # error
 *
 *
 * class B(A):
 *     @override
 *     def ffooo(self): ...  # error
 *
 *
 * class C:
 *     @override
 *     def __repr__(self): ...  # fine: overrides `object.__repr__`
 *
 *
 * class D(A):
 *     @override
 *     def foo(self): ...  # fine: overrides `A.foo`
 * ```
 */
export type DetectsMethodsThatAreDecoratedWithOverrideButDoNotOverrideAnyMethodInASuperclass = Level;
/**
 * ## What it does
 *
 * Checks for dataclasses with invalid frozen inheritance:
 *
 * - A frozen dataclass cannot inherit from a non-frozen dataclass.
 * - A non-frozen dataclass cannot inherit from a frozen dataclass.
 *
 * ## Why is this bad?
 *
 * Python raises a `TypeError` at runtime when either of these inheritance
 * patterns occurs.
 *
 * ## Example
 *
 * ```python
 * from dataclasses import dataclass
 *
 *
 * @dataclass
 * class Base:
 *     x: int
 *
 *
 * @dataclass(frozen=True)
 * class Child(Base):  # error
 *     y: int
 *
 *
 * @dataclass(frozen=True)
 * class FrozenBase:
 *     x: int
 *
 *
 * @dataclass
 * class NonFrozenChild(FrozenBase):  # error
 *     y: int
 * ```
 */
export type DetectsDataclassesWithInvalidFrozenNonFrozenSubclassing = Level;
/**
 * ## What it does
 *
 * Checks for the creation of invalid generic classes
 *
 * ## Why is this bad?
 *
 * There are several requirements that you must follow when defining a generic class.
 * Many of these result in `TypeError` being raised at runtime if they are violated.
 *
 * ## Examples
 *
 * ```toml
 * [environment]
 * python-version = "3.12"
 * ```
 *
 * ```python
 * from typing_extensions import Generic, TypeVar
 *
 * T = TypeVar("T")
 * U = TypeVar("U", default=int)
 *
 *
 * # class uses both PEP-695 syntax and legacy syntax
 * class C[U](Generic[T]): ...  # error
 *
 *
 * # type parameter with default comes before type parameter without default
 * class D(Generic[U, T]): ...  # error
 * ```
 *
 * ## References
 *
 * - [Typing spec: Generics](https://typing.python.org/en/latest/spec/generics.html#introduction)
 */
export type DetectsInvalidGenericClasses = Level;
/**
 * ## What it does
 *
 * Checks for enum classes that are also generic.
 *
 * ## Why is this bad?
 *
 * Enum classes cannot be generic. Python does not support generic enums:
 * attempting to create one will either result in an immediate `TypeError`
 * at runtime, or will create a class that cannot be specialized in the way
 * that a normal generic class can.
 *
 * ## Examples
 *
 * ```toml
 * [environment]
 * python-version = "3.12"
 * ```
 *
 * ```python
 * from enum import Enum
 * from typing import Generic, TypeVar
 *
 * T = TypeVar("T")
 *
 *
 * # enum class cannot be generic (class creation fails with `TypeError`)
 * class E[T](Enum):  # error
 *     A = 1
 *
 *
 * # enum class cannot be generic (class creation fails with `TypeError`)
 * class F(Enum, Generic[T]):  # error
 *     A = 1
 *
 *
 * # enum class cannot be generic -- the class creation does not immediately fail...
 * class G(Generic[T], Enum):  # error
 *     A = 1
 *
 *
 * # ...but this raises `KeyError`:
 * x: G[int]
 * ```
 *
 * ## References
 *
 * - [Python documentation: Enum](https://docs.python.org/3/library/enum.html)
 */
export type DetectsGenericEnumClasses = Level;
/**
 * ## What it does
 *
 * Checks for `type: ignore` and `ty: ignore` comments that are syntactically incorrect.
 *
 * ## Why is this bad?
 *
 * A syntactically incorrect ignore comment is probably a mistake and is useless.
 *
 * ## Examples
 *
 * ```py
 * # error
 * a = 20 / 1  # type: ignoree
 * ```
 *
 * Use instead:
 *
 * ```py
 * a = 20 / 0  # type: ignore
 * ```
 */
export type DetectsIgnoreCommentsThatUseInvalidSyntax = Level;
/**
 * ## What it does
 *
 * Checks for subscript accesses with invalid keys and `TypedDict` construction with an
 * unknown key.
 *
 * ## Why is this bad?
 *
 * Subscripting with an invalid key will raise a `KeyError` at runtime.
 *
 * Creating a `TypedDict` with an unknown key is likely a mistake; if the `TypedDict` is
 * `closed=true` it also violates the expectations of the type.
 *
 * ## Examples
 *
 * ```python
 * from typing import TypedDict
 * from typing_extensions import NotRequired
 *
 *
 * class Person(TypedDict):
 *     name: NotRequired[str]
 *     age: NotRequired[int]
 *
 *
 * alice = Person(name="Alice", age=30)
 * # KeyError: 'height'
 * alice["height"]  # error
 *
 * # error
 * bob: Person = {"nickname": "Bob", "age": 30}  # typo!
 *
 * # error
 * carol = Person(name="Carol", aeg=25)  # typo!
 * ```
 */
export type DetectsInvalidSubscriptAccessesOrTypedDictLiteralKeys = Level;
/**
 * ## What it does
 *
 * Checks for parameters that appear to be attempting to use the legacy convention
 * to specify that a parameter is positional-only, but do so incorrectly.
 *
 * The "legacy convention" for specifying positional-only parameters was
 * specified in [PEP 484][pep-484]. It states that parameters with names starting with
 * `__` should be considered positional-only by type checkers. [PEP 570][pep-570], introduced
 * in Python 3.8, added dedicated syntax for specifying positional-only parameters,
 * rendering the legacy convention obsolete. However, some codebases may still
 * use the legacy convention for compatibility with older Python versions.
 *
 * ## Why is this bad?
 *
 * In most cases, a type checker will not consider a parameter to be positional-only
 * if it comes after a positional-or-keyword parameter, even if its name starts with
 * `__`. This may be unexpected to the author of the code.
 *
 * ## Example
 *
 * ```python
 * # `__y` is not considered positional-only
 * def f(x, __y):  # error
 *     pass
 * ```
 *
 * Use instead:
 *
 * ```python
 * def f(__x, __y):  # If you need compatibility with Python <=3.7
 *     pass
 * ```
 *
 * or:
 *
 * ```python
 * def f(x, y, /):  # Python 3.8+ syntax
 *     pass
 * ```
 *
 * ## References
 *
 * - [Typing spec: positional-only parameters (legacy syntax)](https://typing.python.org/en/latest/spec/historical.html#pos-only-double-underscore)
 * - [Python glossary: parameters](https://docs.python.org/3/glossary.html#term-parameter)
 *
 * [pep-484]: https://peps.python.org/pep-0484/#positional-only-arguments
 * [pep-570]: https://peps.python.org/pep-0570/
 */
export type DetectsIncorrectUsageOfTheLegacyConventionForSpecifyingPositionalOnlyParameters = Level;
/**
 * ## What it does
 *
 * Checks for the creation of invalid legacy `TypeVar`s
 *
 * ## Why is this bad?
 *
 * There are several requirements that you must follow when creating a legacy `TypeVar`.
 *
 * ## Examples
 *
 * ```python
 * from typing import TypeVar
 *
 * T = TypeVar("T")  # okay
 * T = TypeVar("T")  # error: "Cannot redefine `T` as a type variable"
 *
 *
 * # TypeVar must be immediately assigned to a variable
 * # error
 * def f(t: TypeVar("U")): ...  # ty: ignore[invalid-type-form]
 * ```
 *
 * ## References
 *
 * - [Typing spec: Generics](https://typing.python.org/en/latest/spec/generics.html#introduction)
 */
export type DetectsInvalidLegacyTypeVariables = Level;
/**
 * ## What it does
 *
 * Checks for invalid match patterns.
 *
 * ## Why is this bad?
 *
 * Invalid match patterns can cause a `TypeError` at runtime. This includes:
 *
 * - Using a non-type object in a class pattern.
 * - Providing positional subpatterns when `__match_args__` is missing or has an invalid static type.
 * - Matching against `collections.abc.Callable` with positional subpatterns.
 * - Matching against a non-runtime-checkable protocol.
 * - Matching against a `TypedDict`.
 *
 * ## Examples
 *
 * ```python
 * class Point:
 *     __match_args__ = ("x", "y")
 *
 *
 * def describe(p: Point) -> None:
 *     match p:
 *         # TypeError at runtime: Point() accepts 2 positional sub-patterns (3 given)
 *         case Point(x, y, z):  # error: [invalid-match-pattern]
 *             ...
 * ```
 *
 * ```python
 * NotAClass = 42
 *
 * match object():
 *     # TypeError at runtime: called match pattern must be a class
 *     case NotAClass():  # error: [invalid-match-pattern]
 *         ...
 * ```
 */
export type DetectInvalidMatchPatterns = Level;
/**
 * ## What it does
 *
 * Checks for arguments to `metaclass=` that are invalid.
 *
 * ## Why is this bad?
 *
 * Python allows arbitrary expressions to be used as the argument to `metaclass=`.
 * These expressions, however, need to be callable and accept the same arguments
 * as `type.__new__`.
 *
 * ## Example
 *
 * ```python
 * # TypeError: 'int' object is not callable
 * class B(metaclass=42): ...  # error
 * ```
 *
 * ## References
 *
 * - [Python documentation: Metaclasses](https://docs.python.org/3/reference/datamodel.html#metaclasses)
 */
export type DetectsInvalidMetaclassArguments = Level;
/**
 * ## What it does
 *
 * Detects method overrides that violate the [Liskov Substitution Principle][liskov-substitution-principle] ("LSP").
 *
 * The LSP states that an instance of a subtype should be substitutable for an instance of its supertype.
 * Applied to Python, this means:
 *
 * 1. All argument combinations a superclass method accepts
 *     must also be accepted by an overriding subclass method.
 * 1. The return type of an overriding subclass method must be a subtype
 *     of the return type of the superclass method.
 *
 * ## Why is this bad?
 *
 * Violating the Liskov Substitution Principle will lead to many of ty's assumptions and
 * inferences being incorrect, which will mean that it will fail to catch many possible
 * type errors in your code.
 *
 * ## Example
 *
 * ```python
 * class Super:
 *     def method(self, x) -> int:
 *         return 42
 *
 *
 * class Sub(Super):
 *     # Liskov violation: `str` is not a subtype of `int`,
 *     # but the supertype method promises to return an `int`.
 *     def method(self, x) -> str:  # error: [invalid-method-override]
 *         return "foo"
 *
 *
 * def accepts_super(s: Super) -> int:
 *     return s.method(x=42)
 *
 *
 * # The result of this call is a string, but ty will infer it to be an `int`
 * # due to the violation of the Liskov Substitution Principle.
 * accepts_super(Sub())
 *
 *
 * class Sub2(Super):
 *     # Liskov violation: the superclass method can be called with a `x=`
 *     # keyword argument, but the subclass method does not accept it.
 *     def method(self, y) -> int:  # error: [invalid-method-override]
 *         return 42
 *
 *
 * # TypeError at runtime: method() got an unexpected keyword argument 'x'
 * # ty cannot catch this error due to the violation of the Liskov Substitution Principle.
 * accepts_super(Sub2())
 * ```
 *
 * ## Common issues
 *
 * ### Why does ty complain about my `__eq__` method?
 *
 * `__eq__` and `__ne__` methods in Python are generally expected to accept arbitrary
 * objects as their second argument, for example:
 *
 * ```python
 * class A:
 *     x: int
 *
 *     def __eq__(self, other: object) -> bool:
 *         # gracefully handle an object of an unexpected type
 *         # without raising an exception
 *         if not isinstance(other, A):
 *             return False
 *         return self.x == other.x
 * ```
 *
 * If `A.__eq__` here were annotated as only accepting `A` instances for its second argument,
 * it would imply that you wouldn't be able to use `==` between instances of `A` and
 * instances of unrelated classes without an exception possibly being raised. While some
 * classes in Python do indeed behave this way, the strongly held convention is that it should
 * be avoided wherever possible. As part of this check, therefore, ty enforces that `__eq__`
 * and `__ne__` methods accept `object` as their second argument.
 *
 * ### Why does ty disagree with Ruff about how to write my method?
 *
 * Ruff has several rules that will encourage you to rename a parameter, or change its type
 * signature, if it thinks you're falling into a certain anti-pattern. For example, Ruff's
 * [ARG002](https://docs.astral.sh/ruff/rules/unused-method-argument/) rule recommends that an
 * unused parameter should either be removed or renamed to start with `_`. Applying either of
 * these suggestions can cause ty to start reporting an `invalid-method-override` error if
 * the function in question is a method on a subclass that overrides a method on a superclass,
 * and the change would cause the subclass method to no longer accept all argument combinations
 * that the superclass method accepts.
 *
 * This can usually be resolved by adding [`@typing.override`][override] to your method
 * definition. Ruff knows that a method decorated with `@typing.override` is intended to
 * override a method by the same name on a superclass, and avoids reporting rules like ARG002
 * for such methods; it knows that the changes recommended by ARG002 would violate the Liskov
 * Substitution Principle.
 *
 * Correct use of `@override` is enforced by ty's `invalid-explicit-override` rule.
 *
 * [liskov-substitution-principle]: https://en.wikipedia.org/wiki/Liskov_substitution_principle
 * [override]: https://docs.python.org/3/library/typing.html#typing.override
 */
export type DetectsMethodDefinitionsThatViolateTheLiskovSubstitutionPrinciple = Level;
/**
 * ## What it does
 *
 * Checks for invalidly defined `NamedTuple` classes.
 *
 * ## Why is this bad?
 *
 * An invalidly defined `NamedTuple` class may lead to the type checker
 * drawing incorrect conclusions. It may also lead to `TypeError`s or
 * `AttributeError`s at runtime.
 *
 * ## Examples
 *
 * A class definition cannot combine `NamedTuple` with other base classes
 * in multiple inheritance; doing so raises a `TypeError` at runtime. The sole
 * exception to this rule is `Generic[]`, which can be used alongside `NamedTuple`
 * in a class's bases list.
 *
 * ```pycon
 * >>> from typing import NamedTuple
 * >>> class Foo(NamedTuple, object): ...
 * TypeError: can only inherit from a NamedTuple type and Generic
 * ```
 *
 * Further, `NamedTuple` field names cannot start with an underscore:
 *
 * ```pycon
 * >>> from typing import NamedTuple
 * >>> class Foo(NamedTuple):
 * ...     _bar: int
 * ValueError: Field names cannot start with an underscore: '_bar'
 * ```
 *
 * `NamedTuple` classes also have certain synthesized attributes (like `_asdict`, `_make`,
 * `_replace`, etc.) that cannot be overwritten. Attempting to assign to these attributes
 * without a type annotation will raise an `AttributeError` at runtime.
 *
 * ```pycon
 * >>> from typing import NamedTuple
 * >>> class Foo(NamedTuple):
 * ...     x: int
 * ...     _asdict = 42
 * AttributeError: Cannot overwrite NamedTuple attribute _asdict
 * ```
 *
 * Finally, `NamedTuple` field annotations cannot use the `ClassVar` or `Final` type
 * qualifiers. These qualifiers also cause a runtime error when annotations are evaluated eagerly:
 *
 * ```pycon
 * >>> from typing import ClassVar, NamedTuple
 * >>> class Foo(NamedTuple):
 * ...     x: ClassVar[int]
 * TypeError: typing.ClassVar[int] is not valid as type argument
 * ```
 */
export type DetectsInvalidNamedTupleClassDefinitions = Level;
/**
 * ## What it does
 *
 * Checks for subclass members that override inherited `NamedTuple` fields.
 *
 * ## Why is this bad?
 *
 * Reusing an inherited `NamedTuple` field name in a subclass creates a
 * class where tuple indexing and `repr()` still reflect the original
 * field, while attribute access follows the subclass member.
 *
 * ## Default level
 *
 * This rule is a warning by default because these overrides do not make
 * the class invalid at runtime.
 *
 * ## Examples
 *
 * ```python
 * from typing import NamedTuple
 *
 *
 * class User(NamedTuple):
 *     name: str
 *
 *
 * class Admin(User):
 *     name = "shadowed"  # error: [invalid-named-tuple-override]
 *
 *
 * admin = Admin("Alice")
 * admin.name  # "shadowed"
 * admin[0]  # "Alice"
 * ```
 */
export type DetectsSubclassMembersThatOverrideInheritedNamedTupleFields = Level;
/**
 * ## What it does
 *
 * Checks for the creation of invalid `NewType`s
 *
 * ## Why is this bad?
 *
 * There are several requirements that you must follow when creating a `NewType`.
 *
 * ## Examples
 *
 * ```python
 * from typing import NewType
 *
 *
 * def get_name() -> str:
 *     return "name"
 *
 *
 * Foo = NewType("Foo", int)  # okay
 * # The first argument to `NewType` must be a string literal
 * Bar = NewType(get_name(), int)  # error
 * # invalid base for `typing.NewType`
 * Baz = NewType("Baz", int | str)  # error
 * ```
 */
export type DetectsInvalidNewTypeDefinitions = Level;
/**
 * ## What it does
 *
 * Checks for various invalid `@overload` usages.
 *
 * ## Why is this bad?
 *
 * The `@overload` decorator is used to define functions and methods that accepts different
 * combinations of arguments and return different types based on the arguments passed. This is
 * mainly beneficial for type checkers. But, if the `@overload` usage is invalid, the type
 * checker may not be able to provide correct type information.
 *
 * ## Examples
 *
 * ### Single overload
 *
 * ```py
 * from typing import overload
 *
 *
 * @overload
 * def foo(x: int) -> int: ...  # error
 * def foo(x: int | None) -> int | None:
 *     return x
 * ```
 *
 * ### Missing implementation
 *
 * ```py
 * from typing import overload
 *
 *
 * @overload
 * def foo() -> None: ...  # error
 * @overload
 * def foo(x: int) -> int: ...
 * ```
 *
 * ## References
 *
 * - [Python documentation: `@overload`](https://docs.python.org/3/library/typing.html#typing.overload)
 */
export type DetectsInvalidOverloadUsages = Level;
/**
 * ## What it does
 *
 * Checks for default values that can't be
 * assigned to the parameter's annotated type.
 *
 * ## Why is this bad?
 *
 * This breaks the rules of the type system and
 * weakens a type checker's ability to accurately reason about your code.
 *
 * ## Examples
 *
 * ```python
 * def f(a: int = ""): ...  # error
 * ```
 */
export type DetectsDefaultValuesThatCanTBeAssignedToTheParameterSAnnotatedType = Level;
/**
 * ## What it does
 *
 * Checks for the creation of invalid `ParamSpec`s
 *
 * ## Why is this bad?
 *
 * There are several requirements that you must follow when creating a `ParamSpec`.
 *
 * ## Examples
 *
 * ```python
 * from typing import ParamSpec
 *
 * P1 = ParamSpec("P1")  # okay
 * # ParamSpec requires a name
 * P2 = ParamSpec()  # error
 * ```
 *
 * ## References
 *
 * - [Typing spec: ParamSpec](https://typing.python.org/en/latest/spec/generics.html#paramspec)
 */
export type DetectsInvalidParamSpecUsage = Level;
/**
 * ## What it does
 *
 * Checks for protocol classes that will raise `TypeError` at runtime.
 *
 * ## Why is this bad?
 *
 * An invalidly defined protocol class may lead to the type checker inferring
 * unexpected things. It may also lead to `TypeError`s at runtime.
 *
 * ## Examples
 *
 * A `Protocol` class cannot inherit from a non-`Protocol` class;
 * this raises a `TypeError` at runtime:
 *
 * ```pycon
 * >>> from typing import Protocol
 * >>> class Foo(int, Protocol): ...
 * Traceback (most recent call last):
 *   File "<python-input-1>", line 1, in <module>
 *     class Foo(int, Protocol): ...
 * TypeError: Protocols can only inherit from other protocols, got <class 'int'>
 * ```
 */
export type DetectsInvalidProtocolClassDefinitions = Level;
/**
 * Checks for `raise` statements that raise non-exceptions or use invalid
 * causes for their raised exceptions.
 *
 * ## Why is this bad?
 *
 * Only subclasses or instances of `BaseException` can be raised.
 * For an exception's cause, the same rules apply, except that `None` is also
 * permitted. Violating these rules results in a `TypeError` at runtime.
 *
 * ## Examples
 *
 * ```python
 * def something():
 *     raise NameError
 *
 *
 * def cause() -> None:
 *     pass
 *
 *
 * def f():
 *     try:
 *         something()
 *     except NameError:
 *         # error: "Cannot raise object of type `Literal["oops!"]`"
 *         # error: "Cannot use object of type `def cause() -> None` as an exception cause"
 *         raise "oops!" from cause
 *
 *
 * def g():
 *     # error: "Cannot raise `NotImplemented`"
 *     # error: "Cannot use object of type `Literal[42]` as an exception cause"
 *     raise NotImplemented from 42
 * ```
 *
 * Use instead:
 *
 * ```python
 * def something():
 *     raise NameError
 *
 *
 * def f():
 *     try:
 *         something()
 *     except NameError as e:
 *         raise RuntimeError("oops!") from e
 *
 *
 * def g():
 *     raise NotImplementedError from None
 * ```
 *
 * ## References
 *
 * - [Python documentation: The `raise` statement](https://docs.python.org/3/reference/simple_stmts.html#raise)
 * - [Python documentation: Built-in Exceptions](https://docs.python.org/3/library/exceptions.html#built-in-exceptions)
 */
export type DetectsRaiseStatementsThatRaiseInvalidExceptionsOrUseInvalidCauses = Level;
/**
 * ## What it does
 *
 * Detects returned values that can't be assigned to the function's annotated return type.
 *
 * Note that the special case of a function with a non-`None` return type and an empty body
 * is handled by the separate `empty-body` error code.
 *
 * ## Why is this bad?
 *
 * Returning an object of a type incompatible with the annotated return type
 * is unsound, and will lead to ty inferring incorrect types elsewhere.
 *
 * ## Examples
 *
 * ```python
 * def func() -> int:
 *     return "a"  # error: [invalid-return-type]
 * ```
 */
export type DetectsReturnedValuesThatCanTBeAssignedToTheFunctionSAnnotatedReturnType = Level;
/**
 * ## What it does
 *
 * Detects `super()` calls where:
 *
 * - the first argument is not a valid class literal, or
 * - the second argument is not an instance or subclass of the first argument.
 *
 * ## Why is this bad?
 *
 * `super(type, obj)` expects:
 *
 * - the first argument to be a class,
 * - and the second argument to satisfy one of the following:
 *     - `isinstance(obj, type)` is `True`
 *     - `issubclass(obj, type)` is `True`
 *
 * Violating this relationship will raise a `TypeError` at runtime.
 *
 * ## Examples
 *
 * ```python
 * class A: ...
 *
 *
 * class B(A): ...
 *
 *
 * super(A, B())  # it's okay! `A` satisfies `isinstance(B(), A)`
 *
 * # `A()` is not a class
 * super(A(), B())  # error
 *
 * # `A()` does not satisfy `isinstance(A(), B)`
 * super(B, A())  # error
 * # `A` does not satisfy `issubclass(A, B)`
 * super(B, A)  # error
 * ```
 *
 * ## References
 *
 * - [Python documentation: super()](https://docs.python.org/3/library/functions.html#super)
 */
export type DetectsInvalidArgumentsForSuper = Level;
/**
 * ## What it does
 *
 * Checks for string-literal annotations where the string cannot be
 * parsed as a Python expression.
 *
 * ## Why is this bad?
 *
 * Type annotations are expected to be Python expressions that
 * describe the expected type of a variable, parameter, attribute or
 * `return` statement.
 *
 * Type annotations are permitted to be string-literal expressions, in
 * order to enable forward references to names not yet defined.
 * However, it must be possible to parse the contents of that string
 * literal as a normal Python expression.
 *
 * ## Example
 *
 * ```python
 * def foo() -> "instance of C":  # error
 *     return 42
 *
 *
 * class C: ...
 * ```
 *
 * Use instead:
 *
 * ```python
 * def foo() -> "C":
 *     return C()
 *
 *
 * class C: ...
 * ```
 *
 * ## References
 *
 * - [Typing spec: The meaning of annotations](https://typing.python.org/en/latest/spec/annotations.html#the-meaning-of-annotations)
 * - [Typing spec: String annotations](https://typing.python.org/en/latest/spec/annotations.html#string-annotations)
 */
export type DetectsInvalidSyntaxInForwardAnnotations = Level;
/**
 * ## What it does
 *
 * Checks for classes decorated with `@functools.total_ordering` that don't
 * define any ordering method (`__lt__`, `__le__`, `__gt__`, or `__ge__`).
 *
 * ## Why is this bad?
 *
 * The `@total_ordering` decorator requires the class to define at least one
 * ordering method. If none is defined, Python raises a `ValueError` at runtime.
 *
 * ## Example
 *
 * ```python
 * from functools import total_ordering
 *
 *
 * # no ordering method defined
 * @total_ordering  # error
 * class MyClass:
 *     def __eq__(self, other: object) -> bool:
 *         return True
 * ```
 *
 * Use instead:
 *
 * ```python
 * from functools import total_ordering
 *
 *
 * @total_ordering
 * class MyClass:
 *     def __eq__(self, other: object) -> bool:
 *         return True
 *
 *     def __lt__(self, other: "MyClass") -> bool:
 *         return True
 * ```
 */
export type DetectsTotalOrderingClassesWithoutAnOrderingMethod = Level;
/**
 * ## What it does
 *
 * Checks for the creation of invalid `TypeAliasType`s
 *
 * ## Why is this bad?
 *
 * There are several requirements that you must follow when creating a `TypeAliasType`.
 *
 * ## Examples
 *
 * ```toml
 * [environment]
 * python-version = "3.12"
 * ```
 *
 * ```python
 * from typing import TypeAliasType, TypeVar
 *
 *
 * def get_name() -> str:
 *     return "NewAlias"
 *
 *
 * IntOrStr = TypeAliasType("IntOrStr", int | str)  # okay
 * # TypeAliasType name must be a string literal
 * NewAlias = TypeAliasType(get_name(), int)  # error
 *
 * T = TypeVar("T")
 * GenericAlias = TypeAliasType("GenericAlias", list[T], type_params=(T,))  # okay
 * # TypeAliasType type parameters must be type variables
 * InvalidAlias = TypeAliasType("InvalidAlias", list[T], type_params=(list[T],))  # error
 * ```
 */
export type DetectsInvalidTypeAliasTypeDefinitions = Level;
/**
 * ## What it does
 *
 * Checks for invalid type arguments in explicit type specialization.
 *
 * ## Why is this bad?
 *
 * Providing the wrong number of type arguments or type arguments that don't
 * satisfy the type variable's bounds or constraints will lead to incorrect
 * type inference and may indicate a misunderstanding of the generic type's
 * interface.
 *
 * ## Examples
 *
 * Using legacy type variables:
 *
 * ```toml
 * [environment]
 * python-version = "3.12"
 * ```
 *
 * ```python
 * from typing import Generic, TypeVar
 *
 * T1 = TypeVar("T1", int, str)
 * T2 = TypeVar("T2", bound=int)
 *
 *
 * class Foo1(Generic[T1]): ...
 *
 *
 * class Foo2(Generic[T2]): ...
 *
 *
 * # bytes does not satisfy T1's constraints
 * Foo1[bytes]  # error
 * # str does not satisfy T2's bound
 * Foo2[str]  # error
 * ```
 *
 * Using PEP 695 type variables:
 *
 * ```python
 * class Foo[T]: ...
 *
 *
 * class Bar[T, U]: ...
 *
 *
 * # too many arguments
 * Foo[int, str]  # error
 * # too few arguments
 * Bar[int]  # error
 * ```
 */
export type DetectsInvalidTypeArgumentsInGenericSpecialization = Level;
/**
 * ## What it does
 *
 * Checks for a value other than `False` assigned to the `TYPE_CHECKING` variable, or an
 * annotation not assignable from `bool`.
 *
 * ## Why is this bad?
 *
 * The name `TYPE_CHECKING` is reserved for a flag that can be used to provide conditional
 * code seen only by the type checker, and not at runtime. Normally this flag is imported from
 * `typing` or `typing_extensions`, but it can also be defined locally. If defined locally, it
 * must be assigned the value `False` at runtime; the type checker will consider its value to
 * be `True`. If annotated, it must be annotated as a type that can accept `bool` values.
 *
 * ## Examples
 *
 * ```python
 * TYPE_CHECKING: str  # error
 * TYPE_CHECKING = ""  # error
 * ```
 */
export type DetectsInvalidTYPE_CHECKINGConstantAssignments = Level;
/**
 * ## What it does
 *
 * Checks for expressions that are used as [type expressions]
 * but cannot validly be interpreted as such.
 *
 * ## Why is this bad?
 *
 * Such expressions cannot be understood by ty.
 * In some cases, they might raise errors at runtime.
 *
 * ## Examples
 *
 * ```python
 * from typing import Annotated
 *
 * # Int literals are not allowed in this context in type expressions
 * a: list[1]  # error
 * # `Annotated` expects at least two arguments
 * b: Annotated[int]  # error
 * ```
 *
 * [type expressions]: https://typing.python.org/en/latest/spec/annotations.html#type-and-annotation-expressions
 */
export type DetectsInvalidTypeForms = Level;
/**
 * ## What it does
 *
 * Checks for type guard functions without
 * a first non-self-like non-keyword-only non-variadic parameter.
 *
 * ## Why is this bad?
 *
 * Type narrowing functions must accept at least one positional argument
 * (non-static methods must accept another in addition to `self`/`cls`).
 *
 * Extra parameters/arguments are allowed but do not affect narrowing.
 *
 * ## Examples
 *
 * ```toml
 * [environment]
 * python-version = "3.13"
 * ```
 *
 * ```python
 * from typing import TypeIs
 *
 *
 * # no parameter
 * def f() -> TypeIs[int]:  # error
 *     return True
 *
 *
 * # no positional arguments allowed
 * def f(*, v: object) -> TypeIs[int]:  # error
 *     return True
 *
 *
 * # expected variadic arguments
 * def f(*args: object) -> TypeIs[int]:  # error
 *     return True
 *
 *
 * class C:
 *     # only positional argument is `self`
 *     def f(self) -> TypeIs[int]:  # error
 *         return True
 * ```
 */
export type DetectsMalformedTypeGuardFunctions = Level;
/**
 * ## What it does
 *
 * Checks for [type variables][type variable] whose bounds reference type variables.
 *
 * ## Why is this bad?
 *
 * The bound of a type variable must be a concrete type.
 *
 * ## Examples
 *
 * ```toml
 * [environment]
 * python-version = "3.12"
 * ```
 *
 * ```python
 * from typing import TypeVar
 *
 * # error: [invalid-type-variable-bound]
 * RecursiveT = TypeVar("RecursiveT", bound=list["RecursiveT"])
 * U = TypeVar("U")
 * # error: [invalid-type-variable-bound]
 * BoundT = TypeVar("BoundT", bound=U)
 *
 *
 * def f[T: list[T]](): ...  # error: [invalid-type-variable-bound]
 * def g[U, T: U](): ...  # error: [invalid-type-variable-bound]
 * ```
 *
 * [type variable]: https://docs.python.org/3/library/typing.html#typing.TypeVar
 */
export type DetectsInvalidTypeVariableBounds = Level;
/**
 * ## What it does
 *
 * Checks for constrained [type variables] with only one constraint,
 * or that those constraints reference type variables.
 *
 * ## Why is this bad?
 *
 * A constrained type variable must have at least two constraints.
 *
 * ## Examples
 *
 * ```toml
 * [environment]
 * python-version = "3.12"
 * ```
 *
 * ```python
 * from typing import TypeVar
 *
 * I = TypeVar("I", bound=int)
 * # constraint references `I`
 * S = TypeVar("S", list[I], int)  # error
 *
 *
 * # a constrained type variable needs at least two constraints
 * def f[T: (int,)](): ...  # error
 * ```
 *
 * Use instead:
 *
 * ```python
 * from typing import TypeVar
 *
 * U = TypeVar("U", str, int)  # valid constrained TypeVar
 *
 * # or
 *
 * T = TypeVar("T", bound=str)  # valid bound TypeVar
 *
 * V = TypeVar("V", list[int], int)  # valid constrained Type
 * ```
 *
 * [type variables]: https://docs.python.org/3/library/typing.html#typing.TypeVar
 */
export type DetectsInvalidTypeVariableConstraints = Level;
/**
 * ## What it does
 *
 * Checks for [type variables] whose default type is not compatible with
 * the type variable's bound or constraints.
 *
 * ## Why is this bad?
 *
 * If a type variable has a bound, the default must be assignable to that
 * bound (see: [bound rules]). If a type variable has constraints, the default
 * must be one of the constraints (see: [constraint rules]).
 *
 * ## Examples
 *
 * ```toml
 * [environment]
 * python-version = "3.13"
 * ```
 *
 * ```python
 * from typing import TypeVar
 *
 * T = TypeVar("T", bound=str, default=int)  # error: [invalid-type-variable-default]
 * U = TypeVar("U", int, str, default=bytes)  # error: [invalid-type-variable-default]
 * ```
 *
 * [bound rules]: https://typing.python.org/en/latest/spec/generics.html#bound-rules
 * [constraint rules]: https://typing.python.org/en/latest/spec/generics.html#constraint-rules
 * [type variables]: https://docs.python.org/3/library/typing.html#typing.TypeVar
 */
export type DetectsInvalidTypeVariableDefaults = Level;
/**
 * ## What it does
 *
 * Detects invalid `TypedDict` field declarations.
 *
 * ## Why is this bad?
 *
 * `TypedDict` subclasses cannot redefine inherited fields incompatibly. Doing so breaks the
 * subtype guarantees that `TypedDict` inheritance is meant to preserve.
 *
 * ## Example
 *
 * ```python
 * from typing import TypedDict
 *
 *
 * class Base(TypedDict):
 *     x: int
 *
 *
 * class Child(Base):
 *     x: str  # error: [invalid-typed-dict-field]
 * ```
 */
export type DetectsInvalidTypedDictFieldDeclarations = Level;
/**
 * ## What it does
 *
 * Detects errors in `TypedDict` class headers, such as unexpected arguments
 * or invalid base classes.
 *
 * ## Why is this bad?
 *
 * The typing spec states that `TypedDict`s are not permitted to have
 * custom metaclasses. Using `**` unpacking in a `TypedDict` header
 * is also prohibited by ty, as it means that ty cannot statically determine
 * whether keys in the `TypedDict` are intended to be required or optional.
 *
 * ## Example
 *
 * ```python
 * from typing import TypedDict
 *
 *
 * class Meta(type): ...
 *
 *
 * class Foo(TypedDict, metaclass=Meta):  # error: [invalid-typed-dict-header]
 *     ...
 *
 *
 * def f(options: dict[str, object]):
 *     class Bar(TypedDict, **options):  # error: [invalid-typed-dict-header]
 *         ...
 * ```
 */
export type DetectsInvalidStatementsInTypedDictClassHeaders = Level;
/**
 * ## What it does
 *
 * Detects statements other than annotated declarations in `TypedDict` class bodies.
 *
 * ## Why is this bad?
 *
 * `TypedDict` class bodies aren't allowed to contain any other types of statements. For
 * example, method definitions and field values aren't allowed. None of these will be
 * available on "instances of the `TypedDict`" at runtime (as `dict` is the runtime class of
 * all "`TypedDict` instances").
 *
 * ## Example
 *
 * ```python
 * from typing import TypedDict
 *
 *
 * class Foo(TypedDict):
 *     def bar(self):  # error: [invalid-typed-dict-statement]
 *         pass
 * ```
 */
export type DetectsInvalidStatementsInTypedDictClassBodies = Level;
/**
 * ## What it does
 *
 * Detects `yield` and `yield from` expressions where the "yield" or "send" type
 * is incompatible with the generator function's annotated return type.
 *
 * ## Why is this bad?
 *
 * Yielding a value of a type that doesn't match the generator's declared yield type,
 * or using `yield from` with a sub-iterator whose yield or send type is incompatible,
 * is a type error that may cause downstream consumers of the generator to receive
 * values of an unexpected type.
 *
 * ## Examples
 *
 * ```python
 * from typing import Iterator
 *
 *
 * def gen() -> Iterator[int]:
 *     yield "not an int"  # error: [invalid-yield]
 * ```
 */
export type DetectsYieldExpressionsWhereTheYieldOrSendTypeIsIncompatibleWithTheAnnotatedReturnType = Level;
/**
 * ## What it does
 *
 * Reports invalid runtime checks against `Protocol` classes.
 * This includes explicit calls `isinstance()`/`issubclass()` against
 * non-runtime-checkable protocols, `issubclass()` calls against protocols
 * that have non-method members, and implicit `isinstance()` checks against
 * non-runtime-checkable protocols via pattern matching.
 *
 * ## Why is this bad?
 *
 * These calls (implicit or explicit) raise `TypeError` at runtime.
 *
 * ## Examples
 *
 * ```python
 * from typing_extensions import Protocol, runtime_checkable
 *
 *
 * class HasX(Protocol):
 *     x: int
 *
 *
 * @runtime_checkable
 * class HasY(Protocol):
 *     y: int
 *
 *
 * def f(arg: object, arg2: type):
 *     # not runtime-checkable
 *     isinstance(arg, HasX)  # error: [isinstance-against-protocol]
 *     # not runtime-checkable
 *     issubclass(arg2, HasX)  # error: [isinstance-against-protocol]
 *
 *
 * def g(arg: object):
 *     match arg:
 *         # not runtime-checkable
 *         case HasX():  # error: [isinstance-against-protocol]
 *             pass
 *
 *
 * def h(arg2: type):
 *     isinstance(arg2, HasY)  # fine (runtime-checkable)
 *
 *     # `HasY` is runtime-checkable, but has non-method members,
 *     # so it still can't be used in `issubclass` checks)
 *     issubclass(arg2, HasY)  # error: [isinstance-against-protocol]
 * ```
 *
 * ## References
 *
 * - [Typing documentation: `@runtime_checkable`](https://docs.python.org/3/library/typing.html#typing.runtime_checkable)
 */
export type ReportsInvalidRuntimeChecksAgainstProtocolClasses = Level;
/**
 * ## What it does
 *
 * Reports runtime checks against `TypedDict` classes.
 * This includes explicit calls to `isinstance()`/`issubclass()` and implicit
 * checks performed by `match` class patterns.
 *
 * ## Why is this bad?
 *
 * Using a `TypedDict` class in these contexts raises `TypeError` at runtime.
 *
 * ## Examples
 *
 * ```python
 * from typing_extensions import TypedDict
 *
 *
 * class Movie(TypedDict):
 *     name: str
 *     director: str
 *
 *
 * def f(arg: object, arg2: type):
 *     isinstance(arg, Movie)  # error: [isinstance-against-typed-dict]
 *     issubclass(arg2, Movie)  # error: [isinstance-against-typed-dict]
 *
 *
 * def g(arg: object):
 *     match arg:
 *         case Movie():  # error: [isinstance-against-typed-dict]
 *             pass
 * ```
 *
 * ## References
 *
 * - [Typing specification: `TypedDict`](https://typing.python.org/en/latest/spec/typeddict.html)
 */
export type ReportsRuntimeChecksAgainstTypedDictClasses = Level;
/**
 * ## What it does
 *
 * Checks for functional typing definitions whose declared name does not match
 * the variable they are assigned to.
 *
 * ## Why is this bad?
 *
 * Constructors like `TypeVar`, `ParamSpec`, `NewType`, `NamedTuple`,
 * `TypedDict`, and `TypeAliasType` all take a name argument that is
 * normally expected to match the assigned variable. A mismatch is usually a
 * typo and makes later diagnostics harder to understand.
 *
 * ## Default level
 *
 * This rule is a warning by default because ty can usually recover and
 * continue understanding the resulting type.
 *
 * ## Examples
 *
 * ```python
 * from typing import NewType, ParamSpec, TypeVar
 * from typing_extensions import TypedDict
 *
 * T = TypeVar("U")  # error: [mismatched-type-name]
 * P = ParamSpec("Q")  # error: [mismatched-type-name]
 * UserId = NewType("Id", int)  # error: [mismatched-type-name]
 * Movie = TypedDict("Film", {"title": str})  # error: [mismatched-type-name]
 * ```
 */
export type DetectsFunctionalTypingDefinitionsWhoseDeclaredNameDoesNotMatchTheAssignedVariable = Level;
/**
 * ## What it does
 *
 * Checks for missing required arguments in a call.
 *
 * ## Why is this bad?
 *
 * Failing to provide a required argument will raise a `TypeError` at runtime.
 *
 * ## Examples
 *
 * ```python
 * def func(x: int): ...
 *
 *
 * # TypeError: func() missing 1 required positional argument: 'x'
 * func()  # error
 * ```
 */
export type DetectsMissingRequiredArgumentsInACall = Level;
/**
 * ## What it does
 *
 * Checks for methods that override a method or attribute in a superclass but are not decorated with `@override`.
 *
 * This rule is disabled by default. Enable it to opt in to strict `@override` enforcement for a project.
 *
 * ## Exemptions
 *
 * Overriding `__init__`, `__new__`, `__init_subclass__`, or `__post_init__` does not require
 * `@override`, even if the method is explicitly declared by a superclass.
 *
 * ## Why is this bad?
 *
 * Without an `@override` annotation, refactors can silently change whether a method is an override.
 * Requiring `@override` on every override lets ty report when an intended override stops overriding
 * anything, and when a method unexpectedly starts overriding a superclass member.
 *
 * ## Example
 *
 * ```toml
 * [environment]
 * python-version = "3.12"
 * ```
 *
 * ```python
 * from typing import override
 *
 *
 * class Parent:
 *     def method(self) -> int:
 *         return 1
 *
 *
 * class Child(Parent):
 *     # when the rule is enabled
 *     def method(self) -> int:  # error
 *         return 2
 *
 *
 * class ExplicitChild(Parent):
 *     @override
 *     def method(self) -> int:  # fine
 *         return 2
 * ```
 */
export type DetectsMethodsThatOverrideASuperclassMemberWithoutAnOverrideAnnotation = Level;
/**
 * ## What it does
 *
 * Checks for generic types used without type parameters in type expressions.
 *
 * ## Why is this bad?
 *
 * Using a generic type without specifying its type parameters results in the
 * type parameters being implicitly filled with `Unknown`, reducing the
 * precision of type checking. Explicit type parameters make the intended types
 * clear and enable the type checker to catch more errors.
 *
 * ## Examples
 *
 * ```python
 * import re
 *
 *
 * def handle(m: re.Match) -> str:  # error: [missing-type-argument]
 *     return m.string
 *
 *
 * # Use explicit type parameters instead:
 * def handle(m: re.Match[str]) -> str:
 *     return m.string
 * ```
 */
export type DetectsGenericTypesUsedWithoutExplicitTypeParametersInTypeExpressions = Level;
/**
 * ## What it does
 *
 * Detects missing required keys in `TypedDict` constructor calls.
 *
 * ## Why is this bad?
 *
 * `TypedDict` requires all non-optional keys to be provided during construction.
 * Missing items can lead to a `KeyError` at runtime.
 *
 * ## Example
 *
 * ```python
 * from typing import TypedDict
 *
 *
 * class Person(TypedDict):
 *     name: str
 *     age: int
 *
 *
 * # missing required key 'age'
 * alice: Person = {"name": "Alice"}  # error
 *
 * alice["age"]  # KeyError
 * ```
 */
export type DetectsMissingRequiredKeysInTypedDictConstructors = Level;
/**
 * ## What it does
 *
 * Checks for calls to an overloaded function that do not match any of the overloads.
 *
 * ## Why is this bad?
 *
 * Failing to provide the correct arguments to one of the overloads will raise a `TypeError`
 * at runtime.
 *
 * ## Examples
 *
 * ```python
 * from typing import overload
 *
 *
 * @overload
 * def func(x: int): ...
 * @overload
 * def func(x: bool): ...
 * def func(x: int | bool): ...
 *
 *
 * func("string")  # error: [no-matching-overload]
 * ```
 */
export type DetectsCallsThatDoNotMatchAnyOverload = Level;
/**
 * ## What it does
 *
 * Checks for class definitions that will fail due to non-callable `__init_subclass__`
 * methods.
 *
 * ## Why is this bad?
 *
 * If a class defines a non-callable `__init_subclass__` method/attribute, any attempt
 * to subclass that class will raise a `TypeError` at runtime.
 *
 * ## Examples
 *
 * ```python
 * class Super:
 *     __init_subclass__ = None
 *
 *
 * class Sub(Super): ...  # error: [non-callable-init-subclass]
 * ```
 *
 * ## References
 *
 * - [Python data model: Customizing class creation](https://docs.python.org/3/reference/datamodel.html#customizing-class-creation)
 */
export type DetectsClassDefinitionsThatWillFailDueToNonCallable_InitSubclass__ = Level;
/**
 * ## What it does
 *
 * Checks for objects that are not iterable but are used in a context that requires them to be.
 *
 * ## Why is this bad?
 *
 * Iterating over an object that is not iterable will raise a `TypeError` at runtime.
 *
 * ## Examples
 *
 * ```python
 * # TypeError: 'int' object is not iterable
 * for i in 34:  # error
 *     pass
 * ```
 */
export type DetectsIterationOverAnObjectThatIsNotIterable = Level;
/**
 * ## What it does
 *
 * Checks for subscripting objects that do not support subscripting.
 *
 * ## Why is this bad?
 *
 * Subscripting an object that does not support it will raise a `TypeError` at runtime.
 *
 * ## Examples
 *
 * ```python
 * # TypeError: 'int' object is not subscriptable
 * 4[1]  # error
 * ```
 */
export type DetectsSubscriptingObjectsThatDoNotSupportSubscripting = Level;
/**
 * ## What it does
 *
 * Checks for methods on subclasses that override superclass methods decorated with `@final`.
 *
 * ## Why is this bad?
 *
 * Decorating a method with `@final` declares to the type checker that it should not be
 * overridden on any subclass.
 *
 * ## Example
 *
 * ```python
 * from typing import final
 *
 *
 * class A:
 *     @final
 *     def foo(self): ...
 *
 *
 * class B(A):
 *     def foo(self): ...  # error
 * ```
 */
export type DetectsOverridesOfFinalMethods = Level;
/**
 * ## What it does
 *
 * Checks for class variables on subclasses that override a superclass variable
 * that has been declared as `Final`.
 *
 * ## Why is this bad?
 *
 * Declaring a variable as `Final` indicates to the type checker that it should not be
 * overridden on any subclass.
 *
 * ## Example
 *
 * ```python
 * from typing import Final
 *
 *
 * class A:
 *     X: Final[int] = 1
 *
 *
 * class B(A):
 *     X = 2  # error
 * ```
 */
export type DetectsOverridesOfFinalClassVariables = Level;
/**
 * ## What it does
 *
 * Checks for calls which provide more than one argument for a single parameter.
 *
 * ## Why is this bad?
 *
 * Providing multiple values for a single parameter will raise a `TypeError` at runtime.
 *
 * ## Examples
 *
 * ```python
 * def f(x: int) -> int:
 *     return x
 *
 *
 * f(1, x=2)  # error
 * ```
 */
export type DetectsMultipleArgumentsForTheSameParameter = Level;
/**
 * ## What it does
 *
 * Checks for keyword arguments in calls that match positional-only parameters of the callable.
 *
 * ## Why is this bad?
 *
 * Providing a positional-only parameter as a keyword argument will raise `TypeError` at runtime.
 *
 * ## Example
 *
 * ```python
 * def f(x: int, /) -> int:
 *     return x
 *
 *
 * f(x=1)  # error
 * ```
 */
export type DetectsPositionalOnlyParametersPassedAsKeywordArguments = Level;
/**
 * ## What it does
 *
 * Checks for possibly missing attributes.
 *
 * ## Why is this bad?
 *
 * Attempting to access a missing attribute will raise an `AttributeError` at runtime.
 *
 * ## Rule status
 *
 * This rule is currently disabled by default because of the number of
 * false positives it can produce.
 *
 * ## Examples
 *
 * ```python
 * class A:
 *     if __name__ == "__main__":
 *         c = 0
 *
 *
 * # AttributeError: type object 'A' has no attribute 'c'
 * A.c  # error
 * ```
 */
export type DetectsReferencesToPossiblyMissingAttributes = Level;
/**
 * ## What it does
 *
 * Checks for implicit calls to possibly missing methods.
 *
 * ## Why is this bad?
 *
 * Expressions such as `x[y]` and `x * y` call methods
 * under the hood (`__getitem__` and `__mul__` respectively).
 * Calling a missing method will raise an `AttributeError` at runtime.
 *
 * ## Examples
 *
 * ```python
 * import datetime
 *
 *
 * class A:
 *     if datetime.date.today().weekday() != 6:
 *
 *         def __getitem__(self, v): ...
 *
 *
 * # TypeError: 'A' object is not subscriptable
 * A()[0]  # error
 * ```
 */
export type DetectsImplicitCallsToPossiblyMissingMethods = Level;
/**
 * ## What it does
 *
 * Checks for imports of symbols that may be missing.
 *
 * ## Why is this bad?
 *
 * Importing a missing module or name will raise a `ModuleNotFoundError`
 * or `ImportError` at runtime.
 *
 * ## Rule status
 *
 * This rule is currently disabled by default because of the number of
 * false positives it can produce.
 *
 * ## Examples
 *
 * `module.py`:
 *
 * ```python
 * import datetime
 *
 * if datetime.date.today().weekday() != 6:
 *     a = 1
 * ```
 *
 * `main.py`:
 *
 * ```python
 * # ImportError: cannot import name 'a' from 'module'
 * from module import a  # error
 * ```
 */
export type DetectsPossiblyMissingImports = Level;
/**
 * ## What it does
 *
 * Checks for accesses of submodules that might not've been imported.
 *
 * ## Why is this bad?
 *
 * When module `a` has a submodule `b`, `import a` isn't generally enough to let you access
 * `a.b.` You either need to explicitly `import a.b`, or else you need the `__init__.py` file
 * of `a` to include `from . import b`. Without one of those, `a.b` is an `AttributeError`.
 *
 * ## Examples
 *
 * ```python
 * import html
 *
 * # AttributeError: module 'html' has no attribute 'parser'
 * html.parser  # error
 * ```
 */
export type DetectsAccessesOfSubmodulesThatMayNotBeAvailableAsAttributesOnTheirParentModule = Level;
/**
 * ## What it does
 *
 * Checks for references to names that are possibly not defined.
 *
 * ## Why is this bad?
 *
 * Using an undefined variable will raise a `NameError` at runtime.
 *
 * ## Rule status
 *
 * This rule is currently disabled by default because of the number of
 * false positives it can produce.
 *
 * ## Example
 *
 * ```python
 * for i in range(int(input())):
 *     x = i
 *
 * # NameError: name 'x' is not defined
 * print(x)  # error
 * ```
 */
export type DetectsReferencesToPossiblyUndefinedNames = Level;
/**
 * ## What it does
 *
 * Checks for extra keyword arguments that Pydantic silently discards when a model uses
 * `extra="ignore"`, either implicitly or explicitly.
 *
 * ## Why is this bad?
 *
 * A discarded argument has no effect on the constructed model, but it may indicate a misspelled field
 * name or an incorrect assumption about the model's schema.
 *
 * ## Example
 *
 * ```python {data-mdtest="ignore"}
 * from pydantic import BaseModel
 *
 *
 * class User(BaseModel):
 *     name: str
 *     admin: bool = False
 *
 *
 * user = User(name="Alice", admni=True)  # error: [pydantic-discarded-extra-argument]
 * ```
 *
 * If the field name has been misspelled, fix the typo. Otherwise, consider removing the extra argument,
 * or explicitly configure the model with `extra="allow"`.
 */
export type DetectsExtraConstructorArgumentsThatPydanticSilentlyDiscards = Level;
/**
 * ## What it does
 *
 * Checks for raw-strings in type annotation positions.
 *
 * ## Why is this bad?
 *
 * Static analysis tools like ty can't analyze type annotations that use raw-string notation.
 *
 * ## Examples
 *
 * ```python
 * def test() -> r"int":  # error
 *     return 1
 * ```
 *
 * Use instead:
 *
 * ```python
 * def test() -> "int":
 *     return 1
 * ```
 */
export type DetectsRawStringsInTypeAnnotationPositions = Level;
/**
 * ## What it does
 *
 * Detects redundant `cast` calls where the value already has the target type.
 *
 * ## Why is this bad?
 *
 * These casts have no effect and can be removed.
 *
 * ## Example
 *
 * ```python
 * from typing import cast
 *
 *
 * def f() -> int:
 *     return 10
 *
 *
 * # Redundant
 * cast(int, f())  # error
 * ```
 */
export type DetectsRedundantCastCalls = Level;
/**
 * ## What it does
 *
 * Checks for redundant combinations of the `ClassVar` and `Final` type qualifiers.
 *
 * ## Why is this bad?
 *
 * An attribute that is marked `Final` in a class body is implicitly a class variable.
 * Marking it as `ClassVar` is therefore redundant.
 *
 * Note that this diagnostic is not emitted for dataclass fields or protocol members,
 * where `ClassVar[Final[int]]` has a distinct meaning from `Final[int]`.
 *
 * ## Examples
 *
 * ```python
 * from typing import ClassVar, Final
 *
 *
 * class C:
 *     # redundant
 *     x: ClassVar[Final[int]] = 1  # error
 *     # redundant
 *     y: Final[ClassVar[int]] = 1  # error
 * ```
 */
export type DetectsRedundantCombinationsOfClassVarAndFinal = Level;
/**
 * ## What it does
 *
 * Checks for type variables in nested generic classes or functions that shadow type variables
 * from an enclosing scope.
 *
 * ## Why is this bad?
 *
 * Shadowing type variables makes the code confusing and is disallowed by the typing spec.
 *
 * ## Examples
 *
 * ```toml
 * [environment]
 * python-version = "3.12"
 * ```
 *
 * ```python
 * class Outer[T]:
 *     # `T` is already used by `Outer`
 *     class Inner[T]: ...  # error
 *
 *     # `T` is already used by `Outer`
 *     def method[T](self, x: T) -> T:  # error
 *         return x
 * ```
 *
 * ## References
 *
 * - [Typing spec: Generics](https://typing.python.org/en/latest/spec/generics.html#introduction)
 */
export type DetectsTypeVariablesThatShadowTypeVariablesFromOuterScopes = Level;
/**
 * ## What it does
 *
 * Makes sure that the argument of `static_assert` is statically known to be true.
 *
 * ## Why is this bad?
 *
 * A `static_assert` call represents an explicit request from the user
 * for the type checker to emit an error if the argument cannot be verified
 * to evaluate to `True` in a boolean context.
 *
 * ## Examples
 *
 * ```python
 * from ty_extensions import static_assert
 *
 * # evaluates to `False`
 * static_assert(1 + 1 == 3)  # error
 *
 * # does not have a statically known truthiness
 * static_assert(int(2.0 * 3.0) == 6)  # error
 * ```
 */
export type FailedStaticAssertion = Level;
/**
 * ## What it does
 *
 * Checks for classes that inherit from a dataclass with `order=True`.
 *
 * ## Why is this bad?
 *
 * When a dataclass has `order=True`, comparison methods (`__lt__`, `__le__`, `__gt__`, `__ge__`)
 * are generated that compare instances as tuples of their fields. These methods raise a
 * `TypeError` at runtime when comparing instances of different classes in the inheritance
 * hierarchy, even if one is a subclass of the other.
 *
 * This violates the [Liskov Substitution Principle][liskov-substitution-principle] because child class instances cannot be
 * used in all contexts where parent class instances are expected.
 *
 * ## Example
 *
 * ```python
 * from dataclasses import dataclass
 *
 *
 * @dataclass(order=True)
 * class Parent:
 *     value: int
 *
 *
 * class Child(Parent):  # error
 *     pass
 *
 *
 * # At runtime, this raises TypeError:
 * # Child(1) < Parent(2)
 * ```
 *
 * Consider using [`functools.total_ordering`][total_ordering] instead, which does not have this limitation.
 *
 * [liskov-substitution-principle]: https://en.wikipedia.org/wiki/Liskov_substitution_principle
 * [total_ordering]: https://docs.python.org/3/library/functools.html#functools.total_ordering
 */
export type DetectsSubclassesOfDataclassesWithOrderTrue = Level;
/**
 * ## What it does
 *
 * Checks for classes that subclass final classes.
 *
 * ## Why is this bad?
 *
 * Decorating a class with `@final` declares to the type checker that it should not be subclassed.
 *
 * ## Example
 *
 * ```python
 * from typing import final
 *
 *
 * @final
 * class A: ...
 *
 *
 * class B(A): ...  # error
 * ```
 */
export type DetectsSubclassesOfFinalClasses = Level;
/**
 * ## What it does
 *
 * Checks for calls to `super()` inside methods of `NamedTuple` classes.
 *
 * ## Why is this bad?
 *
 * Using `super()` in a method of a `NamedTuple` class will raise an exception at runtime.
 *
 * ## Examples
 *
 * ```python
 * from typing import NamedTuple
 *
 *
 * class F(NamedTuple):
 *     x: int
 *
 *     def method(self):
 *         # super() is not supported in methods of NamedTuple classes
 *         super()  # error
 * ```
 *
 * ## References
 *
 * - [Python documentation: super()](https://docs.python.org/3/library/functions.html#super)
 */
export type DetectsSuperCallsInMethodsOfNamedTupleClasses = Level;
/**
 * ## What it does
 *
 * Checks for calls that pass more positional arguments than the callable can accept.
 *
 * ## Why is this bad?
 *
 * Passing too many positional arguments will raise `TypeError` at runtime.
 *
 * ## Example
 *
 * ```python
 * def f(): ...
 *
 *
 * f("foo")  # error
 * ```
 */
export type DetectsCallsPassingTooManyPositionalArguments = Level;
/**
 * ## What it does
 *
 * Detects invalid `super()` calls where implicit arguments like the enclosing class or first method argument are unavailable.
 *
 * ## Why is this bad?
 *
 * When `super()` is used without arguments, Python tries to find two things:
 * the nearest enclosing class and the first argument of the immediately enclosing function (typically self or cls).
 * If either of these is missing, the call will fail at runtime with a `RuntimeError`.
 *
 * ## Examples
 *
 * ```python
 * # no enclosing class or function found
 * super()  # error
 *
 *
 * def func():
 *     # no enclosing class or first argument exists
 *     super()  # error
 *
 *
 * class A:
 *     # no enclosing function to provide the first argument
 *     f = super()  # error
 *
 *     def method(self):
 *         def nested():
 *             # first argument does not exist in this nested function
 *             super()  # error
 *
 *         # first argument does not exist in this lambda
 *         lambda: super()  # error
 *
 *         # argument is not available in generator expression
 *         (super() for _ in range(10))  # error
 *
 *         super()  # okay! both enclosing class and first argument are available
 * ```
 *
 * ## References
 *
 * - [Python documentation: super()](https://docs.python.org/3/library/functions.html#super)
 */
export type DetectsInvalidSuperCallsWhereImplicitArgumentsAreUnavailable = Level;
/**
 * ## What it does
 *
 * Checks for type variables that are used in a scope where they are not bound
 * to any enclosing generic context.
 *
 * ## Why is this bad?
 *
 * Using a type variable outside of a scope that binds it has no well-defined meaning.
 *
 * ## Examples
 *
 * ```python
 * from typing import TypeVar, Generic
 *
 * T = TypeVar("T")
 * S = TypeVar("S")
 *
 * # unbound type variable in module scope
 * x: T  # error
 *
 *
 * class C(Generic[T]):
 *     # S is not in this class's generic context
 *     x: list[S] = []  # error
 * ```
 *
 * ## References
 *
 * - [Typing spec: Scoping rules for type variables](https://typing.python.org/en/latest/spec/generics.html#scoping-rules-for-type-variables)
 */
export type DetectsTypeVariablesUsedOutsideOfTheirBoundScope = Level;
/**
 * ## What it does
 *
 * Checks for calls to `reveal_type` without importing it.
 *
 * ## Why is this bad?
 *
 * Using `reveal_type` without importing it will raise a `NameError` at runtime.
 *
 * ## Examples
 *
 * ```python
 * # NameError: name 'reveal_type' is not defined
 * # error
 * reveal_type(1)  # revealed: Literal[1]
 * ```
 */
export type DetectsUsagesOfRevealTypeWithoutImportingIt = Level;
/**
 * ## What it does
 *
 * Checks for keyword arguments in calls that don't match any parameter of the callable.
 *
 * ## Why is this bad?
 *
 * Providing an unknown keyword argument will raise `TypeError` at runtime.
 *
 * ## Example
 *
 * ```python
 * def f(x: int) -> int:
 *     return x
 *
 *
 * f(x=1, y=2)  # error
 * ```
 */
export type DetectsUnknownKeywordArgumentsInCalls = Level;
/**
 * ## What it does
 *
 * Checks for unresolved attributes.
 *
 * ## Why is this bad?
 *
 * Accessing an unbound attribute will raise an `AttributeError` at runtime.
 * An unresolved attribute is not guaranteed to exist from the type alone,
 * so this could also indicate that the object is not of the type that the user expects.
 *
 * ## Examples
 *
 * ```python
 * class A: ...
 *
 *
 * # AttributeError: 'A' object has no attribute 'foo'
 * A().foo  # error
 * ```
 */
export type DetectsReferencesToUnresolvedAttributes = Level;
/**
 * ## What it does
 *
 * Detects variables declared as `global` in an inner scope that have no explicit
 * bindings or declarations in the global scope.
 *
 * ## Why is this bad?
 *
 * Function bodies with `global` statements can run in any order (or not at all), which makes
 * it hard for static analysis tools to infer the types of globals without
 * explicit definitions or declarations.
 *
 * ## Example
 *
 * ### Assigning without a global-scope declaration
 *
 * ```python
 * def f():
 *     # unresolved global
 *     global x  # error
 *     x = 42
 *
 *
 * def g():
 *     print(x)  # unresolved reference
 * ```
 *
 * ### Use instead
 *
 * #### Declare the global
 *
 * ```python
 * x: int
 *
 *
 * def f():
 *     global x
 *     x = 42
 *
 *
 * def g():
 *     print(x)
 * ```
 *
 * #### Initialize the global
 *
 * ```python
 * x: int | None = None
 *
 *
 * def f():
 *     global x
 *     x = 42
 *
 *
 * def g():
 *     print(x)
 * ```
 */
export type DetectsGlobalStatementsWithNoDefinitionInTheGlobalScope = Level;
/**
 * ## What it does
 *
 * Checks for import statements for which the module cannot be resolved.
 *
 * ## Why is this bad?
 *
 * Importing a module that cannot be resolved will raise a `ModuleNotFoundError`
 * at runtime.
 *
 * ## Examples
 *
 * ```python
 * # ModuleNotFoundError: No module named 'foo'
 * import foo  # error
 * ```
 */
export type DetectsUnresolvedImports = Level;
/**
 * ## What it does
 *
 * Checks for references to names that are not defined.
 *
 * ## Why is this bad?
 *
 * Using an undefined variable will raise a `NameError` at runtime.
 *
 * ## Example
 *
 * ```python
 * # NameError: name 'x' is not defined
 * print(x)  # error
 * ```
 */
export type DetectsReferencesToNamesThatAreNotDefined = Level;
/**
 * ## What it does
 *
 * Checks for class definitions that have bases which are unsupported by ty.
 *
 * ## Why is this bad?
 *
 * If a class has a base that is an instance of a complex type such as a union type,
 * ty will not be able to resolve the [method resolution order] (MRO) for the class.
 * This will lead to an inferior understanding of your codebase and unpredictable
 * type-checking behavior.
 *
 * ## Examples
 *
 * ```python
 * import datetime
 *
 *
 * class A: ...
 *
 *
 * class B: ...
 *
 *
 * if datetime.date.today().weekday() != 6:
 *     C = A
 * else:
 *     C = B
 *
 *
 * class D(C): ...  # error: [unsupported-base]
 * ```
 *
 * [method resolution order]: https://docs.python.org/3/glossary.html#term-method-resolution-order
 */
export type DetectsClassBasesThatAreUnsupportedAsTyCouldNotFeasiblyCalculateTheClassSMRO = Level;
/**
 * ## What it does
 *
 * Checks for bool conversions where the object doesn't correctly implement `__bool__`.
 *
 * ## Why is this bad?
 *
 * If an exception is raised when you attempt to evaluate the truthiness of an object,
 * using the object in a boolean context will fail at runtime.
 *
 * ## Examples
 *
 * ```python
 * class NotBoolable:
 *     __bool__ = None
 *
 *     def __lt__(self, other: object) -> "NotBoolable":
 *         return self
 *
 *
 * b1 = NotBoolable()
 * b2 = NotBoolable()
 *
 * # exception raised here
 * if b1:  # error
 *     pass
 *
 * # exception raised here
 * b1 and b2  # error
 * # exception raised here
 * not b1  # error
 *
 * # A chained comparison converts the result of `b1 < b2` to bool.
 * # exception raised here
 * b1 < b2 < b1  # error
 * ```
 */
export type DetectsBooleanConversionWhereTheObjectIncorrectlyImplements_Bool__ = Level;
/**
 * ## What it does
 *
 * Checks for dynamic class definitions (using `type()`) that have bases
 * which are unsupported by ty.
 *
 * This is equivalent to `unsupported-base` but applies to classes created
 * via `type()` rather than `class` statements.
 *
 * ## Why is this bad?
 *
 * If a dynamically created class has a base that is an unsupported type
 * such as `type[T]`, ty will not be able to resolve the
 * [method resolution order] (MRO) for the class. This may lead to an inferior
 * understanding of your codebase and unpredictable type-checking behavior.
 *
 * ## Default level
 *
 * This rule is disabled by default because it will not cause a runtime error,
 * and may be noisy on codebases that use `type()` in highly dynamic ways.
 *
 * ## Examples
 *
 * ```python
 * class Base: ...
 *
 *
 * def factory(base: type[Base]) -> type:
 *     # `base` has type `type[Base]`, not `type[Base]` itself
 *     return type("Dynamic", (base,), {})  # error: [unsupported-dynamic-base]
 * ```
 *
 * [method resolution order]: https://docs.python.org/3/glossary.html#term-method-resolution-order
 */
export type DetectsDynamicClassBasesThatAreUnsupportedAsTyCouldNotFeasiblyCalculateTheClassSMRO = Level;
/**
 * ## What it does
 *
 * Checks for binary expressions, comparisons, and unary expressions where
 * the operands don't support the operator.
 *
 * ## Why is this bad?
 *
 * Attempting to use an unsupported operator will raise a `TypeError` at
 * runtime.
 *
 * ## Examples
 *
 * ```python
 * class A: ...
 *
 *
 * # TypeError: unsupported operand type(s) for +: 'A' and 'A'
 * A() + A()  # error
 * ```
 */
export type DetectsBinaryUnaryOrComparisonExpressionsWhereTheOperandsDonTSupportTheOperator = Level;
/**
 * ## What it does
 *
 * Checks for awaitable objects (such as coroutines) used as expression
 * statements without being awaited.
 *
 * ## Why is this bad?
 *
 * Calling an `async def` function returns a coroutine object. If the
 * coroutine is never awaited, the body of the async function will never
 * execute, which is almost always a bug. Python emits a
 * `RuntimeWarning: coroutine was never awaited` at runtime in this case.
 *
 * ## Examples
 *
 * ```python
 * async def fetch_data() -> str:
 *     return "data"
 *
 *
 * async def main() -> None:
 *     # Warning: coroutine is not awaited
 *     fetch_data()  # error
 *     await fetch_data()  # OK
 * ```
 */
export type DetectsAwaitableObjectsThatAreUsedAsExpressionStatementsWithoutBeingAwaited = Level;
/**
 * ## What it does
 *
 * Checks for `ty: ignore` directives that are no longer applicable.
 *
 * ## Why is this bad?
 *
 * A `ty: ignore` directive that no longer matches any diagnostic violations is likely
 * included by mistake, and should be removed to avoid confusion.
 *
 * ## Examples
 *
 * ```py
 * # error
 * a = 20 / 2  # ty: ignore[division-by-zero]
 * ```
 *
 * Use instead:
 *
 * ```py
 * a = 20 / 2
 * ```
 *
 * ## Options
 *
 * Set [`analysis.respect-type-ignore-comments`](https://docs.astral.sh/ty/reference/configuration/#respect-type-ignore-comments)
 * to `false` to prevent this rule from reporting unused `type: ignore` comments.
 */
export type DetectsUnusedTyIgnoreComments = Level;
/**
 * ## What it does
 *
 * Checks for `type: ignore` directives that are no longer applicable.
 *
 * ## Why is this bad?
 *
 * A `type: ignore` directive that no longer matches any diagnostic violations is likely
 * included by mistake, and should be removed to avoid confusion.
 *
 * ## Examples
 *
 * ```py
 * # error
 * a = 20 / 2  # type: ignore
 * ```
 *
 * Use instead:
 *
 * ```py
 * a = 20 / 2
 * ```
 *
 * ## Options
 *
 * This rule is skipped if [`analysis.respect-type-ignore-comments`](https://docs.astral.sh/ty/reference/configuration/#respect-type-ignore-comments)
 * to `false`.
 */
export type DetectsUnusedTypeIgnoreComments = Level;
/**
 * ## What it does
 *
 * Checks for various `@overload`-decorated functions that have non-stub bodies.
 *
 * ## Why is this bad?
 *
 * Functions decorated with `@overload` are ignored at runtime; they are overridden
 * by the implementation function that follows the series of overloads. While it is
 * not illegal to provide a body for an `@overload`-decorated function, it may indicate
 * a misunderstanding of how the `@overload` decorator works.
 *
 * ## Example
 *
 * ```toml
 * [environment]
 * python-version = "3.11"
 * ```
 *
 * ```py
 * from typing import overload
 *
 *
 * @overload
 * def foo(x: int) -> int:
 *     # will never be executed
 *     return x + 1  # error
 *
 *
 * @overload
 * def foo(x: str) -> str:
 *     # will never be executed
 *     return "Oh no, got a string"  # error
 *
 *
 * def foo(x: int | str) -> int | str:
 *     raise Exception("unexpected type encountered")
 * ```
 *
 * Use instead:
 *
 * ```py
 * from typing import assert_never, overload
 *
 *
 * @overload
 * def foo(x: int) -> int: ...
 *
 *
 * @overload
 * def foo(x: str) -> str: ...
 *
 *
 * def foo(x: int | str) -> int | str:
 *     if isinstance(x, int):
 *         return x + 1
 *     elif isinstance(x, str):
 *         return "Oh no, got a string"
 *     else:
 *         assert_never(x)
 * ```
 *
 * ## References
 *
 * - [Python documentation: `@overload`](https://docs.python.org/3/library/typing.html#typing.overload)
 */
export type DetectsOverloadDecoratedFunctionsWithNonStubBodies = Level;
/**
 * ## What it does
 *
 * Checks for a step size of zero in slices when the operation is known to fail.
 *
 * ## Why is this bad?
 *
 * Python's built-in sequence types raise a `ValueError` when sliced with a step size of zero.
 *
 * ## Known problems
 *
 * This check is not exhaustive. It reports zero-step slices for certain built-in sequence
 * types where the operation is known to fail. A custom `__getitem__` implementation can
 * accept or reject such a slice, so ty cannot detect every runtime failure.
 *
 * ## Examples
 *
 * ```python
 * values = list(range(10))
 * # ValueError: slice step cannot be zero
 * values[1:10:0]  # error
 *
 * tuple_values = (1, 2, 3)
 * # ValueError: slice step cannot be zero
 * tuple_values[1:10:0]  # error
 * ```
 */
export type DetectsASliceStepSizeOfZero = Level;
/**
 * Configuration override that applies to specific files based on glob patterns.
 *
 * An override allows you to apply different rule configurations to specific
 * files or directories. Multiple overrides can match the same file, with
 * later overrides take precedence. Override rules take precedence over global
 * rules for matching files.
 *
 * For example, to relax enforcement of rules in test files:
 *
 * ```toml
 * [[tool.ty.overrides]]
 * include = ["tests/**", "** /test_*.py"]
 *
 * [tool.ty.overrides.rules]
 * possibly-unresolved-reference = "warn"
 * ```
 *
 * Or, to ignore a rule in generated files but retain enforcement in an important file:
 *
 * ```toml
 * [[tool.ty.overrides]]
 * include = ["generated/**"]
 * exclude = ["generated/important.py"]
 *
 * [tool.ty.overrides.rules]
 * possibly-unresolved-reference = "ignore"
 * ```
 */
export type OverridesOptions = OverrideOptions[];
/**
 * The diagnostic output format.
 */
export type OutputFormat = 'full' | 'concise' | 'gitlab' | 'github' | 'junit';

export interface Options {
  analysis?: AnalysisOptions | null;
  /**
   * Configures the type checking environment.
   */
  environment?: EnvironmentOptions | null;
  /**
   * Override configurations for specific file patterns.
   *
   * Each override specifies include/exclude patterns and rule configurations
   * that apply to matching files. Multiple overrides can match the same file,
   * with later overrides taking precedence.
   */
  overrides?: OverridesOptions | null;
  /**
   * Configures the enabled rules and their severity.
   *
   * The keys are either rule names or `all` to set a default severity for all rules.
   * See [the rules documentation](https://ty.dev/rules) for a list of all available rules.
   *
   * Valid severities are:
   *
   * * `ignore`: Disable the rule.
   * * `warn`: Enable the rule and create a warning diagnostic.
   * * `error`: Enable the rule and create an error diagnostic.
   *
   * By default, ty exits with code 1 if it emits any warning or error diagnostics.
   * Set `terminal.error-on-warning` to `false` to exit with code 0 if all diagnostics have `warning` severity.
   */
  rules?: Rules | null;
  src?: SrcOptions | null;
  terminal?: TerminalOptions | null;
}
export interface AnalysisOptions {
  /**
   * A list of module glob patterns for which `unresolved-import` diagnostics should be suppressed.
   *
   * Details on supported glob patterns:
   * - `*` matches zero or more characters except `.`. For example, `foo.*` matches `foo.bar` but
   *   not `foo.bar.baz`; `foo*` matches `foo` and `foobar` but not `foo.bar` or `barfoo`; and `*foo`
   *   matches `foo` and `barfoo` but not `foo.bar` or `foobar`.
   * - `**` matches any number of module components (e.g., `foo.**` matches `foo`, `foo.bar`, etc.)
   * - Prefix a pattern with `!` to exclude matching modules
   *
   * When multiple patterns match, later entries take precedence.
   *
   * Glob patterns can be used in combinations with each other. For example, to suppress errors for
   * any module where the first component contains the substring `test`, use `*test*.**`.
   */
  'allowed-unresolved-imports'?: String[] | null;
  /**
   * A list of module glob patterns whose imports should be replaced with `typing.Any`.
   *
   * Unlike `allowed-unresolved-imports`, this setting replaces the module's type information
   * with `typing.Any` even if the module can be resolved. Import diagnostics are
   * unconditionally suppressed for matching modules.
   *
   * - Prefix a pattern with `!` to exclude matching modules
   *
   * When multiple patterns match, later entries take precedence.
   *
   * Glob patterns can be used in combinations with each other. For example, to suppress errors for
   * any module where the first component contains the substring `test`, use `*test*.**`.
   *
   * When multiple patterns match, later entries take precedence.
   */
  'replace-imports-with-any'?: String[] | null;
  /**
   * Whether ty should respect `type: ignore` comments.
   *
   * When set to `false`, `type: ignore` comments are treated like any other normal
   * comment and can't be used to suppress ty errors (you have to use `ty: ignore` instead).
   *
   * Setting this option can be useful when using ty alongside other type checkers or when
   * you prefer using `ty: ignore` over `type: ignore`.
   *
   * Defaults to `true`.
   */
  'respect-type-ignore-comments'?: boolean | null;
  /**
   * Configure ty's behavior regarding type inference and narrowing of equality
   * checks. Defaults to `false`.
   *
   * By default, ty makes various assumptions about equality checks that match the
   * intuitions of most Python programmers, but may not be fully sound in all situations.
   * Enabling this option makes ty more conservative about these assumptions, making it
   * less likely to infer `Literal[True]` or `Literal[False]` as the result of an
   * equality check. This has various effects on type checking, including fewer type
   * narrowing opportunities and more conservative assumptions regarding control flow.
   *
   * One way in which ty will by default make unsound assumptions is by narrowing an
   * object `x` of type `str` to `Literal["a"]` after an `if x == "a"` check. This is
   * unsound because a subclass of `str` with value `"a"` will (by default) compare equal
   * to `"a"`, but will not be of type `Literal["a"]`:
   *
   * ```pycon
   * >>> # `Literal["a"]` can only be inhabited by instances of exactly `str`, not
   * >>> # subclasses, but str subclasses compare equal by default:
   * >>> class StringSubclass(str): ...
   * ...
   * >>> StringSubclass("a") == "a"
   * True
   * >>>
   * >>> # This also applies to `StrEnum`s:
   * >>> from enum import StrEnum
   * >>> class MyEnum(StrEnum):
   * ...     A = "a"
   * ...
   * >>> MyEnum.A == "a"
   * True
   * ```
   *
   * Enabling this option prevents the unsound narrowing of `x` to `Literal["a"]`,
   * and instead keeps it as `str`:
   *
   * ```python
   * from typing import Literal
   *
   * def parse(value: str) -> Literal["a"] | None:
   *     # with `strict-equality-semantics = true`, no narrowing will occur here,
   *     # and an error will be emitted on the `return` statement.
   *     if value == "a":
   *         return value
   *     return None
   * ```
   *
   * Another assumption ty makes by default is that subclasses will never override `__eq__` or
   * `__ne__`. This allows ty to narrow the following union based on an equality check, despite
   * the fact that an instance of a subclass of `Foo` could compare equal to `None`, and it's
   * perfectly valid to pass an instance of a subclass into the `x` parameter of this function:
   *
   * ```python
   * def narrow(x: Foo | None, other: Foo) -> None:
   *     if x == other:
   *         # with this option enabled, `x` will still have type `Foo | None` here,
   *         # since it is legal to subclass `Foo` and override its `__eq__` method.
   *         reveal_type(x)
   * ```
   *
   * Many operations in Python implicitly call `__eq__` under the hood; enabling this option
   * will also impact those operations. For example, this option will also impact narrowing from
   * `in` checks, and narrowing in `match` statements that use value patterns:
   *
   * ```python
   * def narrow_in(x: Foo | None, other: list[Foo]) -> None:
   *     if x in other:
   *         # with this option enabled, `x` will still have type `Foo | None` here,
   *         # since the `in` operator implicitly calls `__eq__` on each element of `other`.
   *         reveal_type(x)
   *
   *
   * def narrow_match(x: str) -> None:
   *     match x:
   *         case "a":
   *             # with this option enabled, `x` will still have type `str` here,
   *             # since this `case` branch will be taken by any object that compares
   *             # equal to `"a"`, including subclasses of `str`.
   *             reveal_type(x)
   * ```
   */
  'strict-equality-semantics'?: boolean | null;
  /**
   * Whether ty should use strict narrowing for unspecialized generic classes in
   * `isinstance()` and `issubclass()` checks, as well as `match` class patterns.
   *
   * When enabled, ty narrows to the top materialization of the class. For example,
   * `isinstance(value, list)` narrows a value of type `object` to `Top[list[Unknown]]`,
   * representing the (infinite) union of all possible `list` specializations. Iterating
   * over the list would yield values of type `object`.
   *
   * When disabled, ty uses gradual generic narrowing, preserving compatible type
   * arguments from the original type where possible. For example,
   * `isinstance(value, list)` narrows a value of type `Sequence[int]` to `list[int]`.
   * If no specialization is available, the same check narrows a value of type `object`
   * to `list[Unknown]`; items of any type can then be appended to the list. Class
   * patterns such as `case list():` follow the same behavior.
   *
   * Defaults to `false`.
   */
  'strict-generic-narrowing'?: boolean | null;
}
export interface EnvironmentOptions {
  /**
   * User-provided paths that should take first priority in module resolution.
   *
   * This is an advanced option that should usually only be used for first-party or third-party
   * modules that are not installed into your Python environment in a conventional way.
   * Use the `python` option to specify the location of your Python environment.
   *
   * This option is similar to mypy's `MYPYPATH` environment variable and pyright's `stubPath`
   * configuration setting.
   */
  'extra-paths'?: RelativePathBuf[] | null;
  /**
   * Path to your project's Python environment or interpreter.
   *
   * ty uses the `site-packages` directory of your project's Python environment
   * to resolve third-party (and, in some cases, first-party) imports in your code.
   *
   * This can be a path to:
   *
   * - A Python interpreter, e.g. `.venv/bin/python3`
   * - A virtual environment directory, e.g. `.venv`
   * - A system Python [`sys.prefix`] directory, e.g. `/usr`
   *
   * If you're using a project management tool such as uv, you should not generally need to
   * specify this option, as commands such as `uv run` will set the `VIRTUAL_ENV` environment
   * variable to point to your project's virtual environment. ty can also infer the location of
   * your environment from an activated Conda environment, and will look for a `.venv` directory
   * in the project root if none of the above apply. Failing that, ty will look for a `python3`
   * or `python` binary available in `PATH`.
   *
   * [`sys.prefix`]: https://docs.python.org/3/library/sys.html#sys.prefix
   */
  python?: RelativePathBuf | null;
  /**
   * Specifies the target platform that will be used to analyze the source code.
   * If specified, ty will understand conditions based on comparisons with `sys.platform`, such
   * as are commonly found in typeshed to reflect the differing contents of the standard library across platforms.
   * If `all` is specified, ty will assume that the source code can run on any platform.
   *
   * If no platform is specified, ty will use the current platform:
   * - `win32` for Windows
   * - `darwin` for macOS
   * - `android` for Android
   * - `ios` for iOS
   * - `linux` for everything else
   */
  'python-platform'?: PythonPlatform | null;
  /**
   * Specifies the version of Python that will be used to analyze the source code.
   * The version should be specified as a string in the format `M.m` where `M` is the major version
   * and `m` is the minor (e.g. `"3.7"` or `"3.12"`).
   * If a version is provided, ty will generate errors if the source code makes use of language features
   * that are not supported in that version.
   *
   * ty officially supports type checking code that targets Python 3.10 and later. Python 3.7
   * through 3.9 can still be selected, but ty may produce false positives or false negatives for
   * standard-library APIs because its bundled stubs do not fully describe those versions.
   *
   * If a version is not specified, ty will try the following techniques in order of preference
   * to determine a value:
   * 1. Check for the `project.requires-python` setting in a `pyproject.toml` file
   *    and use the minimum version from the specified range
   * 2. Check for an activated or configured Python environment
   *    and attempt to infer the Python version of that environment
   * 3. Fall back to the default value (see below)
   *
   * For some language features, ty can also understand conditionals based on comparisons
   * with `sys.version_info`. These are commonly found in typeshed, for example,
   * to reflect the differing contents of the standard library across Python versions.
   */
  'python-version'?: SupportedPythonVersion | null;
  /**
   * The root paths of the project, used for finding first-party modules.
   *
   * Accepts a list of directory paths searched in priority order (first has highest priority).
   *
   * If left unspecified, ty will try to detect common project layouts and initialize `root` accordingly.
   * The project root (`.`) is always included. Additionally, the following directories are included
   * if they exist and are not packages (i.e. they do not contain `__init__.py` or `__init__.pyi` files):
   *
   * * `./src`
   * * `./<project-name>` (if a `./<project-name>/<project-name>` directory exists)
   * * `./python`
   */
  root?: RelativePathBuf[] | null;
  /**
   * Optional path to a "typeshed" directory on disk for us to use for standard-library types.
   * If this is not provided, we will fallback to our vendored typeshed stubs for the stdlib,
   * bundled as a zip file in the binary
   */
  typeshed?: RelativePathBuf | null;
}
export interface OverrideOptions {
  analysis?: AnalysisOptions | null;
  /**
   * A list of file and directory patterns to exclude from this override.
   *
   * Patterns follow a syntax similar to `.gitignore`.
   * Exclude patterns take precedence over include patterns within the same override.
   *
   * If not specified, defaults to `[]` (excludes no files).
   */
  exclude?: ArrayOfString | null;
  /**
   * A list of file and directory patterns to include for this override.
   *
   * The `include` option follows a similar syntax to `.gitignore` but reversed:
   * Including a file or directory will make it so that it (and its contents)
   * are affected by this override.
   *
   * If not specified, defaults to `["**"]` (matches all files).
   */
  include?: ArrayOfString | null;
  /**
   * Rule overrides for files matching the include/exclude patterns.
   *
   * These rules will be merged with the global rules, with override rules
   * taking precedence for matching files. You can set rules to different
   * severity levels or disable them entirely.
   */
  rules?: Rules | null;
}
export interface Rules {
  'abstract-and-final-method'?: DetectsMethodsThatAreBothAbstractAndFinal;
  'abstract-method-in-final-class'?: DetectsFinalClassesWithUnimplementedAbstractMethods;
  all?: SetTheDefaultSeverityLevelForAllRules;
  'ambiguous-protocol-member'?: DetectsProtocolClassesWithAmbiguousInterfaces;
  'assert-type-unspellable-subtype'?: DetectsFailedTypeAssertions;
  'blanket-ignore-comment'?: DetectsBlanketTyIgnoreComments;
  'call-abstract-method'?: DetectsCallsToAbstractMethodsWithTrivialBodiesOnClassObjects;
  'call-non-callable'?: DetectsCallsToNonCallableObjects;
  'call-top-callable'?: DetectsCallsToTheTopCallableType;
  'conflicting-declarations'?: DetectsConflictingDeclarations;
  'conflicting-metaclass'?: DetectsConflictingMetaclasses;
  'cyclic-class-definition'?: DetectsCyclicClassDefinitions;
  'cyclic-type-alias-definition'?: DetectsCyclicTypeAliasDefinitions;
  'dataclass-field-order'?: DetectsDataclassDefinitionsWithRequiredFieldsAfterFieldsWithDefaultValues;
  deprecated?: DetectsUsesOfDeprecatedItems;
  'division-by-zero'?: DetectsDivisionByZero;
  'duplicate-base'?: DetectsClassDefinitionsWithDuplicateBases;
  'duplicate-kw-only'?: DetectsDataclassDefinitionsWithMoreThanOneUsageOfKW_ONLY;
  'empty-body'?: DetectsFunctionsWithEmptyBodiesThatHaveANonNoneReturnTypeAnnotation;
  'escape-character-in-forward-annotation'?: DetectsForwardTypeAnnotationsWithEscapeCharacters;
  'experimental-syntax'?: DetectsExperimentalSyntax;
  'final-on-non-method'?: DetectsFinalAppliedToNonMethodFunctions;
  'final-without-value'?: DetectsFinalDeclarationsWithoutAValue;
  'ignore-comment-unknown-rule'?: DetectsTyIgnoreCommentsThatReferenceUnknownRules;
  'implicit-concatenated-string-type-annotation'?: DetectsImplicitConcatenatedStringsInTypeAnnotations;
  'inconsistent-mro'?: DetectsClassDefinitionsWithAnInconsistentMRO;
  'index-out-of-bounds'?: DetectsIndexOutOfBoundsErrors;
  'ineffective-final'?: DetectsCallsToFinalThatTypeCheckersCannotInterpret;
  'instance-layout-conflict'?: DetectsClassDefinitionsThatRaiseTypeErrorDueToInstanceLayoutConflict;
  'invalid-argument-type'?: DetectsCallArgumentsWhoseTypeIsNotAssignableToTheCorrespondingTypedParameter;
  'invalid-assignment'?: DetectsInvalidAssignments;
  'invalid-attribute-access'?: InvalidAttributeAccess;
  'invalid-attribute-override'?: DetectsAttributeOverridesThatChangeClassVariableOrInstanceVariableBehavior;
  'invalid-await'?: DetectsAwaitingOnTypesThatDonTSupportIt;
  'invalid-base'?: DetectsClassBasesThatWillCauseTheClassDefinitionToRaiseAnExceptionAtRuntime;
  'invalid-context-manager'?: DetectsExpressionsUsedInWithStatementsThatDonTImplementTheContextManagerProtocol;
  'invalid-dataclass'?: DetectsInvalidDataclassApplications;
  'invalid-dataclass-override'?: DetectsDataclassesWithFrozenTrueThatHaveACustom_Setattr__Or_Delattr__Implementation;
  'invalid-declaration'?: DetectsInvalidDeclarations;
  'invalid-enum-member-annotation'?: DetectsTypeAnnotationsOnEnumMembers;
  'invalid-exception-caught'?: DetectsExceptionHandlersThatCatchClassesThatDoNotInheritFromBaseException;
  'invalid-explicit-override'?: DetectsMethodsThatAreDecoratedWithOverrideButDoNotOverrideAnyMethodInASuperclass;
  'invalid-frozen-dataclass-subclass'?: DetectsDataclassesWithInvalidFrozenNonFrozenSubclassing;
  'invalid-generic-class'?: DetectsInvalidGenericClasses;
  'invalid-generic-enum'?: DetectsGenericEnumClasses;
  'invalid-ignore-comment'?: DetectsIgnoreCommentsThatUseInvalidSyntax;
  'invalid-key'?: DetectsInvalidSubscriptAccessesOrTypedDictLiteralKeys;
  'invalid-legacy-positional-parameter'?: DetectsIncorrectUsageOfTheLegacyConventionForSpecifyingPositionalOnlyParameters;
  'invalid-legacy-type-variable'?: DetectsInvalidLegacyTypeVariables;
  'invalid-match-pattern'?: DetectInvalidMatchPatterns;
  'invalid-metaclass'?: DetectsInvalidMetaclassArguments;
  'invalid-method-override'?: DetectsMethodDefinitionsThatViolateTheLiskovSubstitutionPrinciple;
  'invalid-named-tuple'?: DetectsInvalidNamedTupleClassDefinitions;
  'invalid-named-tuple-override'?: DetectsSubclassMembersThatOverrideInheritedNamedTupleFields;
  'invalid-newtype'?: DetectsInvalidNewTypeDefinitions;
  'invalid-overload'?: DetectsInvalidOverloadUsages;
  'invalid-parameter-default'?: DetectsDefaultValuesThatCanTBeAssignedToTheParameterSAnnotatedType;
  'invalid-paramspec'?: DetectsInvalidParamSpecUsage;
  'invalid-protocol'?: DetectsInvalidProtocolClassDefinitions;
  'invalid-raise'?: DetectsRaiseStatementsThatRaiseInvalidExceptionsOrUseInvalidCauses;
  'invalid-return-type'?: DetectsReturnedValuesThatCanTBeAssignedToTheFunctionSAnnotatedReturnType;
  'invalid-super-argument'?: DetectsInvalidArgumentsForSuper;
  'invalid-syntax-in-forward-annotation'?: DetectsInvalidSyntaxInForwardAnnotations;
  'invalid-total-ordering'?: DetectsTotalOrderingClassesWithoutAnOrderingMethod;
  'invalid-type-alias-type'?: DetectsInvalidTypeAliasTypeDefinitions;
  'invalid-type-arguments'?: DetectsInvalidTypeArgumentsInGenericSpecialization;
  'invalid-type-checking-constant'?: DetectsInvalidTYPE_CHECKINGConstantAssignments;
  'invalid-type-form'?: DetectsInvalidTypeForms;
  'invalid-type-guard-definition'?: DetectsMalformedTypeGuardFunctions;
  'invalid-type-variable-bound'?: DetectsInvalidTypeVariableBounds;
  'invalid-type-variable-constraints'?: DetectsInvalidTypeVariableConstraints;
  'invalid-type-variable-default'?: DetectsInvalidTypeVariableDefaults;
  'invalid-typed-dict-field'?: DetectsInvalidTypedDictFieldDeclarations;
  'invalid-typed-dict-header'?: DetectsInvalidStatementsInTypedDictClassHeaders;
  'invalid-typed-dict-statement'?: DetectsInvalidStatementsInTypedDictClassBodies;
  'invalid-yield'?: DetectsYieldExpressionsWhereTheYieldOrSendTypeIsIncompatibleWithTheAnnotatedReturnType;
  'isinstance-against-protocol'?: ReportsInvalidRuntimeChecksAgainstProtocolClasses;
  'isinstance-against-typed-dict'?: ReportsRuntimeChecksAgainstTypedDictClasses;
  'mismatched-type-name'?: DetectsFunctionalTypingDefinitionsWhoseDeclaredNameDoesNotMatchTheAssignedVariable;
  'missing-argument'?: DetectsMissingRequiredArgumentsInACall;
  'missing-override-decorator'?: DetectsMethodsThatOverrideASuperclassMemberWithoutAnOverrideAnnotation;
  'missing-type-argument'?: DetectsGenericTypesUsedWithoutExplicitTypeParametersInTypeExpressions;
  'missing-typed-dict-key'?: DetectsMissingRequiredKeysInTypedDictConstructors;
  'no-matching-overload'?: DetectsCallsThatDoNotMatchAnyOverload;
  'non-callable-init-subclass'?: DetectsClassDefinitionsThatWillFailDueToNonCallable_InitSubclass__;
  'not-iterable'?: DetectsIterationOverAnObjectThatIsNotIterable;
  'not-subscriptable'?: DetectsSubscriptingObjectsThatDoNotSupportSubscripting;
  'override-of-final-method'?: DetectsOverridesOfFinalMethods;
  'override-of-final-variable'?: DetectsOverridesOfFinalClassVariables;
  'parameter-already-assigned'?: DetectsMultipleArgumentsForTheSameParameter;
  'positional-only-parameter-as-kwarg'?: DetectsPositionalOnlyParametersPassedAsKeywordArguments;
  'possibly-missing-attribute'?: DetectsReferencesToPossiblyMissingAttributes;
  'possibly-missing-implicit-call'?: DetectsImplicitCallsToPossiblyMissingMethods;
  'possibly-missing-import'?: DetectsPossiblyMissingImports;
  'possibly-missing-submodule'?: DetectsAccessesOfSubmodulesThatMayNotBeAvailableAsAttributesOnTheirParentModule;
  'possibly-unresolved-reference'?: DetectsReferencesToPossiblyUndefinedNames;
  'pydantic-discarded-extra-argument'?: DetectsExtraConstructorArgumentsThatPydanticSilentlyDiscards;
  'raw-string-type-annotation'?: DetectsRawStringsInTypeAnnotationPositions;
  'redundant-cast'?: DetectsRedundantCastCalls;
  'redundant-final-classvar'?: DetectsRedundantCombinationsOfClassVarAndFinal;
  'shadowed-type-variable'?: DetectsTypeVariablesThatShadowTypeVariablesFromOuterScopes;
  'static-assert-error'?: FailedStaticAssertion;
  'subclass-of-dataclass-with-order'?: DetectsSubclassesOfDataclassesWithOrderTrue;
  'subclass-of-final-class'?: DetectsSubclassesOfFinalClasses;
  'super-call-in-named-tuple-method'?: DetectsSuperCallsInMethodsOfNamedTupleClasses;
  'too-many-positional-arguments'?: DetectsCallsPassingTooManyPositionalArguments;
  'type-assertion-failure'?: DetectsFailedTypeAssertions;
  'unavailable-implicit-super-arguments'?: DetectsInvalidSuperCallsWhereImplicitArgumentsAreUnavailable;
  'unbound-type-variable'?: DetectsTypeVariablesUsedOutsideOfTheirBoundScope;
  'undefined-reveal'?: DetectsUsagesOfRevealTypeWithoutImportingIt;
  'unknown-argument'?: DetectsUnknownKeywordArgumentsInCalls;
  'unresolved-attribute'?: DetectsReferencesToUnresolvedAttributes;
  'unresolved-global'?: DetectsGlobalStatementsWithNoDefinitionInTheGlobalScope;
  'unresolved-import'?: DetectsUnresolvedImports;
  'unresolved-reference'?: DetectsReferencesToNamesThatAreNotDefined;
  'unsupported-base'?: DetectsClassBasesThatAreUnsupportedAsTyCouldNotFeasiblyCalculateTheClassSMRO;
  'unsupported-bool-conversion'?: DetectsBooleanConversionWhereTheObjectIncorrectlyImplements_Bool__;
  'unsupported-dynamic-base'?: DetectsDynamicClassBasesThatAreUnsupportedAsTyCouldNotFeasiblyCalculateTheClassSMRO;
  'unsupported-operator'?: DetectsBinaryUnaryOrComparisonExpressionsWhereTheOperandsDonTSupportTheOperator;
  'unused-awaitable'?: DetectsAwaitableObjectsThatAreUsedAsExpressionStatementsWithoutBeingAwaited;
  'unused-ignore-comment'?: DetectsUnusedTyIgnoreComments;
  'unused-type-ignore-comment'?: DetectsUnusedTypeIgnoreComments;
  'useless-overload-body'?: DetectsOverloadDecoratedFunctionsWithNonStubBodies;
  'zero-stepsize-in-slice'?: DetectsASliceStepSizeOfZero;
  [k: string]:
    | Level
    | DetectsMethodsThatAreBothAbstractAndFinal
    | DetectsFinalClassesWithUnimplementedAbstractMethods
    | SetTheDefaultSeverityLevelForAllRules
    | DetectsProtocolClassesWithAmbiguousInterfaces
    | DetectsFailedTypeAssertions
    | DetectsBlanketTyIgnoreComments
    | DetectsCallsToAbstractMethodsWithTrivialBodiesOnClassObjects
    | DetectsCallsToNonCallableObjects
    | DetectsCallsToTheTopCallableType
    | DetectsConflictingDeclarations
    | DetectsConflictingMetaclasses
    | DetectsCyclicClassDefinitions
    | DetectsCyclicTypeAliasDefinitions
    | DetectsDataclassDefinitionsWithRequiredFieldsAfterFieldsWithDefaultValues
    | DetectsUsesOfDeprecatedItems
    | DetectsDivisionByZero
    | DetectsClassDefinitionsWithDuplicateBases
    | DetectsDataclassDefinitionsWithMoreThanOneUsageOfKW_ONLY
    | DetectsFunctionsWithEmptyBodiesThatHaveANonNoneReturnTypeAnnotation
    | DetectsForwardTypeAnnotationsWithEscapeCharacters
    | DetectsExperimentalSyntax
    | DetectsFinalAppliedToNonMethodFunctions
    | DetectsFinalDeclarationsWithoutAValue
    | DetectsTyIgnoreCommentsThatReferenceUnknownRules
    | DetectsImplicitConcatenatedStringsInTypeAnnotations
    | DetectsClassDefinitionsWithAnInconsistentMRO
    | DetectsIndexOutOfBoundsErrors
    | DetectsCallsToFinalThatTypeCheckersCannotInterpret
    | DetectsClassDefinitionsThatRaiseTypeErrorDueToInstanceLayoutConflict
    | DetectsCallArgumentsWhoseTypeIsNotAssignableToTheCorrespondingTypedParameter
    | DetectsInvalidAssignments
    | InvalidAttributeAccess
    | DetectsAttributeOverridesThatChangeClassVariableOrInstanceVariableBehavior
    | DetectsAwaitingOnTypesThatDonTSupportIt
    | DetectsClassBasesThatWillCauseTheClassDefinitionToRaiseAnExceptionAtRuntime
    | DetectsExpressionsUsedInWithStatementsThatDonTImplementTheContextManagerProtocol
    | DetectsInvalidDataclassApplications
    | DetectsDataclassesWithFrozenTrueThatHaveACustom_Setattr__Or_Delattr__Implementation
    | DetectsInvalidDeclarations
    | DetectsTypeAnnotationsOnEnumMembers
    | DetectsExceptionHandlersThatCatchClassesThatDoNotInheritFromBaseException
    | DetectsMethodsThatAreDecoratedWithOverrideButDoNotOverrideAnyMethodInASuperclass
    | DetectsDataclassesWithInvalidFrozenNonFrozenSubclassing
    | DetectsInvalidGenericClasses
    | DetectsGenericEnumClasses
    | DetectsIgnoreCommentsThatUseInvalidSyntax
    | DetectsInvalidSubscriptAccessesOrTypedDictLiteralKeys
    | DetectsIncorrectUsageOfTheLegacyConventionForSpecifyingPositionalOnlyParameters
    | DetectsInvalidLegacyTypeVariables
    | DetectInvalidMatchPatterns
    | DetectsInvalidMetaclassArguments
    | DetectsMethodDefinitionsThatViolateTheLiskovSubstitutionPrinciple
    | DetectsInvalidNamedTupleClassDefinitions
    | DetectsSubclassMembersThatOverrideInheritedNamedTupleFields
    | DetectsInvalidNewTypeDefinitions
    | DetectsInvalidOverloadUsages
    | DetectsDefaultValuesThatCanTBeAssignedToTheParameterSAnnotatedType
    | DetectsInvalidParamSpecUsage
    | DetectsInvalidProtocolClassDefinitions
    | DetectsRaiseStatementsThatRaiseInvalidExceptionsOrUseInvalidCauses
    | DetectsReturnedValuesThatCanTBeAssignedToTheFunctionSAnnotatedReturnType
    | DetectsInvalidArgumentsForSuper
    | DetectsInvalidSyntaxInForwardAnnotations
    | DetectsTotalOrderingClassesWithoutAnOrderingMethod
    | DetectsInvalidTypeAliasTypeDefinitions
    | DetectsInvalidTypeArgumentsInGenericSpecialization
    | DetectsInvalidTYPE_CHECKINGConstantAssignments
    | DetectsInvalidTypeForms
    | DetectsMalformedTypeGuardFunctions
    | DetectsInvalidTypeVariableBounds
    | DetectsInvalidTypeVariableConstraints
    | DetectsInvalidTypeVariableDefaults
    | DetectsInvalidTypedDictFieldDeclarations
    | DetectsInvalidStatementsInTypedDictClassHeaders
    | DetectsInvalidStatementsInTypedDictClassBodies
    | DetectsYieldExpressionsWhereTheYieldOrSendTypeIsIncompatibleWithTheAnnotatedReturnType
    | ReportsInvalidRuntimeChecksAgainstProtocolClasses
    | ReportsRuntimeChecksAgainstTypedDictClasses
    | DetectsFunctionalTypingDefinitionsWhoseDeclaredNameDoesNotMatchTheAssignedVariable
    | DetectsMissingRequiredArgumentsInACall
    | DetectsMethodsThatOverrideASuperclassMemberWithoutAnOverrideAnnotation
    | DetectsGenericTypesUsedWithoutExplicitTypeParametersInTypeExpressions
    | DetectsMissingRequiredKeysInTypedDictConstructors
    | DetectsCallsThatDoNotMatchAnyOverload
    | DetectsClassDefinitionsThatWillFailDueToNonCallable_InitSubclass__
    | DetectsIterationOverAnObjectThatIsNotIterable
    | DetectsSubscriptingObjectsThatDoNotSupportSubscripting
    | DetectsOverridesOfFinalMethods
    | DetectsOverridesOfFinalClassVariables
    | DetectsMultipleArgumentsForTheSameParameter
    | DetectsPositionalOnlyParametersPassedAsKeywordArguments
    | DetectsReferencesToPossiblyMissingAttributes
    | DetectsImplicitCallsToPossiblyMissingMethods
    | DetectsPossiblyMissingImports
    | DetectsAccessesOfSubmodulesThatMayNotBeAvailableAsAttributesOnTheirParentModule
    | DetectsReferencesToPossiblyUndefinedNames
    | DetectsExtraConstructorArgumentsThatPydanticSilentlyDiscards
    | DetectsRawStringsInTypeAnnotationPositions
    | DetectsRedundantCastCalls
    | DetectsRedundantCombinationsOfClassVarAndFinal
    | DetectsTypeVariablesThatShadowTypeVariablesFromOuterScopes
    | FailedStaticAssertion
    | DetectsSubclassesOfDataclassesWithOrderTrue
    | DetectsSubclassesOfFinalClasses
    | DetectsSuperCallsInMethodsOfNamedTupleClasses
    | DetectsCallsPassingTooManyPositionalArguments
    | DetectsFailedTypeAssertions
    | DetectsInvalidSuperCallsWhereImplicitArgumentsAreUnavailable
    | DetectsTypeVariablesUsedOutsideOfTheirBoundScope
    | DetectsUsagesOfRevealTypeWithoutImportingIt
    | DetectsUnknownKeywordArgumentsInCalls
    | DetectsReferencesToUnresolvedAttributes
    | DetectsGlobalStatementsWithNoDefinitionInTheGlobalScope
    | DetectsUnresolvedImports
    | DetectsReferencesToNamesThatAreNotDefined
    | DetectsClassBasesThatAreUnsupportedAsTyCouldNotFeasiblyCalculateTheClassSMRO
    | DetectsBooleanConversionWhereTheObjectIncorrectlyImplements_Bool__
    | DetectsDynamicClassBasesThatAreUnsupportedAsTyCouldNotFeasiblyCalculateTheClassSMRO
    | DetectsBinaryUnaryOrComparisonExpressionsWhereTheOperandsDonTSupportTheOperator
    | DetectsAwaitableObjectsThatAreUsedAsExpressionStatementsWithoutBeingAwaited
    | DetectsUnusedTyIgnoreComments
    | DetectsUnusedTypeIgnoreComments
    | DetectsOverloadDecoratedFunctionsWithNonStubBodies
    | DetectsASliceStepSizeOfZero
    | undefined;
}
export interface SrcOptions {
  /**
   * A list of file and directory patterns to exclude from type checking.
   *
   * Patterns follow a syntax similar to `.gitignore`:
   *
   * - `./src/` matches only a directory
   * - `./src` matches both files and directories
   * - `src` matches files or directories named `src`
   * - `*` matches any (possibly empty) sequence of characters (except `/`).
   * - `**` matches zero or more path components.
   *   This sequence **must** form a single path component, so both `**a` and `b**` are invalid and will result in an error.
   *   A sequence of more than two consecutive `*` characters is also invalid.
   * - `?` matches any single character except `/`
   * - `[abc]` matches any character inside the brackets. Character sequences can also specify ranges of characters, as ordered by Unicode,
   *   so e.g. `[0-9]` specifies any character between `0` and `9` inclusive. An unclosed bracket is invalid.
   * - `!pattern` negates a pattern (undoes the exclusion of files that would otherwise be excluded)
   *
   * All paths are anchored relative to the project root (`src` only
   * matches `<project_root>/src` and not `<project_root>/test/src`).
   * To exclude any directory or file named `src`, use `** /src` instead.
   *
   * By default, ty excludes commonly ignored directories:
   *
   * - `** /.bzr/`
   * - `** /.direnv/`
   * - `** /.eggs/`
   * - `** /.git/`
   * - `** /.git-rewrite/`
   * - `** /.hg/`
   * - `** /.mypy_cache/`
   * - `** /.nox/`
   * - `** /.pants.d/`
   * - `** /.pytype/`
   * - `** /.ruff_cache/`
   * - `** /.svn/`
   * - `** /.tox/`
   * - `** /.venv/`
   * - `** /__pypackages__/`
   * - `** /_build/`
   * - `** /buck-out/`
   * - `** /dist/`
   * - `** /node_modules/`
   * - `** /venv/`
   *
   * You can override any default exclude by using a negated pattern. For example,
   * to re-include `dist` use `exclude = ["!dist"]`
   */
  exclude?: ArrayOfString | null;
  /**
   * Whether to exclude files containing PEP 723 inline script metadata unless they are
   * explicitly passed on the command line.
   */
  'exclude-scripts'?: boolean | null;
  /**
   * A list of files and directories to check. The `include` option
   * follows a similar syntax to `.gitignore` but reversed:
   * Including a file or directory will make it so that it (and its contents)
   * are type checked.
   *
   * - `./src/` matches only a directory
   * - `./src` matches both files and directories
   * - `src` matches a file or directory named `src`
   * - `*` matches any (possibly empty) sequence of characters (except `/`).
   * - `**` matches zero or more path components.
   *   This sequence **must** form a single path component, so both `**a` and `b**` are invalid and will result in an error.
   *   A sequence of more than two consecutive `*` characters is also invalid.
   * - `?` matches any single character except `/`
   * - `[abc]` matches any character inside the brackets. Character sequences can also specify ranges of characters, as ordered by Unicode,
   *   so e.g. `[0-9]` specifies any character between `0` and `9` inclusive. An unclosed bracket is invalid.
   *
   * All paths are anchored relative to the project root (`src` only
   * matches `<project_root>/src` and not `<project_root>/test/src`).
   *
   * `exclude` takes precedence over `include`.
   */
  include?: ArrayOfString | null;
  /**
   * Whether to automatically exclude files that are ignored by `.ignore`,
   * `.gitignore`, `.git/info/exclude`, and global `gitignore` files.
   * Enabled by default.
   */
  'respect-ignore-files'?: boolean | null;
}
export interface TerminalOptions {
  /**
   * Use exit code 1, even if all diagnostics only had `warning` severity.
   *
   * Defaults to `true`.
   */
  'error-on-warning'?: boolean | null;
  /**
   * The format to use for printing diagnostic messages.
   *
   * Defaults to `full`.
   */
  'output-format'?: OutputFormat | null;
}
