/* eslint-disable */

/**
 * Your configuration can extend an existing configuration(s) (whether your own or a third-party config)
 */
export type SimpleStringOrArrayStringRule = (string | SimpleArrayStringRule) &
  (((string | SimpleArrayStringRule) & string) | ((string | SimpleArrayStringRule) & unknown[]));
export type SimpleArrayStringRule = string[];
export type AllRules = AtRule &
  Block &
  Color &
  Comment &
  CustomMedia &
  CustomProperty &
  Declaration &
  DeclarationBlock &
  Font &
  Function &
  GeneralSheet &
  KeyframeDeclaration &
  Length &
  Lightness &
  MediaFeature &
  MediaQuery &
  MediaQueryList &
  Number &
  Property &
  RootRule &
  Rule &
  Selector &
  SelectorList &
  ShorthandProperty &
  String &
  StylelintDisableComment &
  Time &
  Unit &
  Value &
  ValueList;
/**
 * Specify a blacklist of disallowed at-rules
 */
export type ArrayStringRule = (
  | (null | string)
  | [
      (([] | {}) | SimpleArrayStringRule | CoreRule) &
        (
          | ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
          | ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
          | (([] | {}) | SimpleArrayStringRule | CoreRule)
        ) &
        (([] | {}) | SimpleArrayStringRule | CoreRule) &
        (
          | ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
          | ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
          | (([] | {}) | SimpleArrayStringRule | CoreRule)
        ),
      ...((([] | {}) | SimpleArrayStringRule | CoreRule) &
        (
          | ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
          | ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
          | (([] | {}) | SimpleArrayStringRule | CoreRule)
        ) &
        (([] | {}) | SimpleArrayStringRule | CoreRule) &
        (
          | ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
          | ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
          | (([] | {}) | SimpleArrayStringRule | CoreRule)
        ))[]
    ]
) &
  (
    | (null &
        (
          | (null | string)
          | [
              (([] | {}) | SimpleArrayStringRule | CoreRule) &
                (
                  | ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
                  | ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
                  | (([] | {}) | SimpleArrayStringRule | CoreRule)
                ) &
                (([] | {}) | SimpleArrayStringRule | CoreRule) &
                (
                  | ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
                  | ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
                  | (([] | {}) | SimpleArrayStringRule | CoreRule)
                ),
              ...((([] | {}) | SimpleArrayStringRule | CoreRule) &
                (
                  | ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
                  | ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
                  | (([] | {}) | SimpleArrayStringRule | CoreRule)
                ) &
                (([] | {}) | SimpleArrayStringRule | CoreRule) &
                (
                  | ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
                  | ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
                  | (([] | {}) | SimpleArrayStringRule | CoreRule)
                ))[]
            ]
        ))
    | ((
        | (null | string)
        | [
            (([] | {}) | SimpleArrayStringRule | CoreRule) &
              (
                | ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
                | ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
                | (([] | {}) | SimpleArrayStringRule | CoreRule)
              ) &
              (([] | {}) | SimpleArrayStringRule | CoreRule) &
              (
                | ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
                | ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
                | (([] | {}) | SimpleArrayStringRule | CoreRule)
              ),
            ...((([] | {}) | SimpleArrayStringRule | CoreRule) &
              (
                | ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
                | ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
                | (([] | {}) | SimpleArrayStringRule | CoreRule)
              ) &
              (([] | {}) | SimpleArrayStringRule | CoreRule) &
              (
                | ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
                | ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
                | (([] | {}) | SimpleArrayStringRule | CoreRule)
              ))[]
          ]
      ) &
        string)
    | ((
        | (null | string)
        | [
            (([] | {}) | SimpleArrayStringRule | CoreRule) &
              (
                | ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
                | ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
                | (([] | {}) | SimpleArrayStringRule | CoreRule)
              ) &
              (([] | {}) | SimpleArrayStringRule | CoreRule) &
              (
                | ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
                | ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
                | (([] | {}) | SimpleArrayStringRule | CoreRule)
              ),
            ...((([] | {}) | SimpleArrayStringRule | CoreRule) &
              (
                | ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
                | ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
                | (([] | {}) | SimpleArrayStringRule | CoreRule)
              ) &
              (([] | {}) | SimpleArrayStringRule | CoreRule) &
              (
                | ((([] | {}) | SimpleArrayStringRule | CoreRule) & string)
                | ((([] | {}) | SimpleArrayStringRule | CoreRule) & unknown[])
                | (([] | {}) | SimpleArrayStringRule | CoreRule)
              ))[]
          ]
      ) &
        unknown[])
  );
/**
 * Specify lowercase or uppercase for at-rules names
 */
export type LowerUpperRule = (
  | null
  | ('lower' | 'upper' | [])
  | [
      (('lower' | 'upper' | {}) | CoreRule) &
        (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
        (('lower' | 'upper' | {}) | CoreRule) &
        (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)),
      (('lower' | 'upper' | {}) | CoreRule) &
        (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
        (('lower' | 'upper' | {}) | CoreRule) &
        (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule))
    ]
) &
  (
    | (null &
        (
          | null
          | ('lower' | 'upper' | [])
          | [
              (('lower' | 'upper' | {}) | CoreRule) &
                (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
                (('lower' | 'upper' | {}) | CoreRule) &
                (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)),
              (('lower' | 'upper' | {}) | CoreRule) &
                (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
                (('lower' | 'upper' | {}) | CoreRule) &
                (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule))
            ]
        ))
    | ((
        | null
        | ('lower' | 'upper' | [])
        | [
            (('lower' | 'upper' | {}) | CoreRule) &
              (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
              (('lower' | 'upper' | {}) | CoreRule) &
              (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)),
            (('lower' | 'upper' | {}) | CoreRule) &
              (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
              (('lower' | 'upper' | {}) | CoreRule) &
              (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule))
          ]
      ) &
        string)
    | ((
        | null
        | ('lower' | 'upper' | [])
        | [
            (('lower' | 'upper' | {}) | CoreRule) &
              (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
              (('lower' | 'upper' | {}) | CoreRule) &
              (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)),
            (('lower' | 'upper' | {}) | CoreRule) &
              (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
              (('lower' | 'upper' | {}) | CoreRule) &
              (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule))
          ]
      ) &
        unknown[])
  );
/**
 * Require a newline after at-rule names
 */
export type AlwaysMultiLineRule = (
  | null
  | ('always' | 'always-multi-line' | [])
  | [
      (('always' | 'always-multi-line' | {}) | CoreRule) &
        (
          | ((('always' | 'always-multi-line' | {}) | CoreRule) & string)
          | (('always' | 'always-multi-line' | {}) | CoreRule)
        ) &
        (('always' | 'always-multi-line' | {}) | CoreRule) &
        (
          | ((('always' | 'always-multi-line' | {}) | CoreRule) & string)
          | (('always' | 'always-multi-line' | {}) | CoreRule)
        ),
      (('always' | 'always-multi-line' | {}) | CoreRule) &
        (
          | ((('always' | 'always-multi-line' | {}) | CoreRule) & string)
          | (('always' | 'always-multi-line' | {}) | CoreRule)
        ) &
        (('always' | 'always-multi-line' | {}) | CoreRule) &
        (
          | ((('always' | 'always-multi-line' | {}) | CoreRule) & string)
          | (('always' | 'always-multi-line' | {}) | CoreRule)
        )
    ]
) &
  (
    | (null &
        (
          | null
          | ('always' | 'always-multi-line' | [])
          | [
              (('always' | 'always-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'always-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'always-multi-line' | {}) | CoreRule)
                ) &
                (('always' | 'always-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'always-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'always-multi-line' | {}) | CoreRule)
                ),
              (('always' | 'always-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'always-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'always-multi-line' | {}) | CoreRule)
                ) &
                (('always' | 'always-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'always-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'always-multi-line' | {}) | CoreRule)
                )
            ]
        ))
    | ((
        | null
        | ('always' | 'always-multi-line' | [])
        | [
            (('always' | 'always-multi-line' | {}) | CoreRule) &
              (
                | ((('always' | 'always-multi-line' | {}) | CoreRule) & string)
                | (('always' | 'always-multi-line' | {}) | CoreRule)
              ) &
              (('always' | 'always-multi-line' | {}) | CoreRule) &
              (
                | ((('always' | 'always-multi-line' | {}) | CoreRule) & string)
                | (('always' | 'always-multi-line' | {}) | CoreRule)
              ),
            (('always' | 'always-multi-line' | {}) | CoreRule) &
              (
                | ((('always' | 'always-multi-line' | {}) | CoreRule) & string)
                | (('always' | 'always-multi-line' | {}) | CoreRule)
              ) &
              (('always' | 'always-multi-line' | {}) | CoreRule) &
              (
                | ((('always' | 'always-multi-line' | {}) | CoreRule) & string)
                | (('always' | 'always-multi-line' | {}) | CoreRule)
              )
          ]
      ) &
        string)
    | ((
        | null
        | ('always' | 'always-multi-line' | [])
        | [
            (('always' | 'always-multi-line' | {}) | CoreRule) &
              (
                | ((('always' | 'always-multi-line' | {}) | CoreRule) & string)
                | (('always' | 'always-multi-line' | {}) | CoreRule)
              ) &
              (('always' | 'always-multi-line' | {}) | CoreRule) &
              (
                | ((('always' | 'always-multi-line' | {}) | CoreRule) & string)
                | (('always' | 'always-multi-line' | {}) | CoreRule)
              ),
            (('always' | 'always-multi-line' | {}) | CoreRule) &
              (
                | ((('always' | 'always-multi-line' | {}) | CoreRule) & string)
                | (('always' | 'always-multi-line' | {}) | CoreRule)
              ) &
              (('always' | 'always-multi-line' | {}) | CoreRule) &
              (
                | ((('always' | 'always-multi-line' | {}) | CoreRule) & string)
                | (('always' | 'always-multi-line' | {}) | CoreRule)
              )
          ]
      ) &
        unknown[])
  );
/**
 * Disallow vendor prefixes for at-rules
 */
export type BooleanRule = (
  | null
  | boolean
  | [
      (boolean | CoreRule) &
        (((boolean | CoreRule) & boolean) | (boolean | CoreRule)) &
        (boolean | CoreRule) &
        (((boolean | CoreRule) & boolean) | (boolean | CoreRule)),
      (boolean | CoreRule) &
        (((boolean | CoreRule) & boolean) | (boolean | CoreRule)) &
        (boolean | CoreRule) &
        (((boolean | CoreRule) & boolean) | (boolean | CoreRule))
    ]
) &
  (
    | (null &
        (
          | null
          | boolean
          | [
              (boolean | CoreRule) &
                (((boolean | CoreRule) & boolean) | (boolean | CoreRule)) &
                (boolean | CoreRule) &
                (((boolean | CoreRule) & boolean) | (boolean | CoreRule)),
              (boolean | CoreRule) &
                (((boolean | CoreRule) & boolean) | (boolean | CoreRule)) &
                (boolean | CoreRule) &
                (((boolean | CoreRule) & boolean) | (boolean | CoreRule))
            ]
        ))
    | (boolean &
        (
          | null
          | boolean
          | [
              (boolean | CoreRule) &
                (((boolean | CoreRule) & boolean) | (boolean | CoreRule)) &
                (boolean | CoreRule) &
                (((boolean | CoreRule) & boolean) | (boolean | CoreRule)),
              (boolean | CoreRule) &
                (((boolean | CoreRule) & boolean) | (boolean | CoreRule)) &
                (boolean | CoreRule) &
                (((boolean | CoreRule) & boolean) | (boolean | CoreRule))
            ]
        ))
    | ((
        | null
        | boolean
        | [
            (boolean | CoreRule) &
              (((boolean | CoreRule) & boolean) | (boolean | CoreRule)) &
              (boolean | CoreRule) &
              (((boolean | CoreRule) & boolean) | (boolean | CoreRule)),
            (boolean | CoreRule) &
              (((boolean | CoreRule) & boolean) | (boolean | CoreRule)) &
              (boolean | CoreRule) &
              (((boolean | CoreRule) & boolean) | (boolean | CoreRule))
          ]
      ) &
        unknown[])
  );
/**
 * Require a newline or disallow whitespace after the closing brace of blocks
 */
export type NewlineSpaceWithIgnoreRule = (
  | null
  | ('always' | 'never' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | [])
  | [
      (
        | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
        | CoreRule
      ) &
        (
          | ((
              | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
              | CoreRule
            ) &
              string)
          | (
              | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
              | CoreRule
            )
        ) &
        (
          | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
          | CoreRule
        ) &
        (
          | ((
              | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
              | CoreRule
            ) &
              string)
          | (
              | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
              | CoreRule
            )
        ),
      (
        | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
        | CoreRule
      ) &
        (
          | ((
              | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
              | CoreRule
            ) &
              string)
          | (
              | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
              | CoreRule
            )
        ) &
        (
          | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
          | CoreRule
        ) &
        (
          | ((
              | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
              | CoreRule
            ) &
              string)
          | (
              | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
              | CoreRule
            )
        )
    ]
) &
  (
    | (null &
        (
          | null
          | (
              | 'always'
              | 'never'
              | 'always-single-line'
              | 'never-single-line'
              | 'always-multi-line'
              | 'never-multi-line'
              | []
            )
          | [
              (
                | (
                    | 'always'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              ) &
                (
                  | ((
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    ) &
                      string)
                  | (
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    )
                ) &
                (
                  | (
                      | 'always'
                      | 'always-single-line'
                      | 'never-single-line'
                      | 'always-multi-line'
                      | 'never-multi-line'
                      | {}
                    )
                  | CoreRule
                ) &
                (
                  | ((
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    ) &
                      string)
                  | (
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    )
                ),
              (
                | (
                    | 'always'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              ) &
                (
                  | ((
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    ) &
                      string)
                  | (
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    )
                ) &
                (
                  | (
                      | 'always'
                      | 'always-single-line'
                      | 'never-single-line'
                      | 'always-multi-line'
                      | 'never-multi-line'
                      | {}
                    )
                  | CoreRule
                ) &
                (
                  | ((
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    ) &
                      string)
                  | (
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    )
                )
            ]
        ))
    | ((
        | null
        | (
            | 'always'
            | 'never'
            | 'always-single-line'
            | 'never-single-line'
            | 'always-multi-line'
            | 'never-multi-line'
            | []
          )
        | [
            (
              | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
              | CoreRule
            ) &
              (
                | ((
                    | (
                        | 'always'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  ) &
                    string)
                | (
                    | (
                        | 'always'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  )
              ) &
              (
                | (
                    | 'always'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              ) &
              (
                | ((
                    | (
                        | 'always'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  ) &
                    string)
                | (
                    | (
                        | 'always'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  )
              ),
            (
              | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
              | CoreRule
            ) &
              (
                | ((
                    | (
                        | 'always'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  ) &
                    string)
                | (
                    | (
                        | 'always'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  )
              ) &
              (
                | (
                    | 'always'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              ) &
              (
                | ((
                    | (
                        | 'always'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  ) &
                    string)
                | (
                    | (
                        | 'always'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  )
              )
          ]
      ) &
        string)
    | ((
        | null
        | (
            | 'always'
            | 'never'
            | 'always-single-line'
            | 'never-single-line'
            | 'always-multi-line'
            | 'never-multi-line'
            | []
          )
        | [
            (
              | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
              | CoreRule
            ) &
              (
                | ((
                    | (
                        | 'always'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  ) &
                    string)
                | (
                    | (
                        | 'always'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  )
              ) &
              (
                | (
                    | 'always'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              ) &
              (
                | ((
                    | (
                        | 'always'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  ) &
                    string)
                | (
                    | (
                        | 'always'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  )
              ),
            (
              | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
              | CoreRule
            ) &
              (
                | ((
                    | (
                        | 'always'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  ) &
                    string)
                | (
                    | (
                        | 'always'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  )
              ) &
              (
                | (
                    | 'always'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              ) &
              (
                | ((
                    | (
                        | 'always'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  ) &
                    string)
                | (
                    | (
                        | 'always'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  )
              )
          ]
      ) &
        unknown[])
  );
/**
 * Require a newline or disallow whitespace before the closing brace of blocks
 */
export type NewlineRule = (
  | null
  | ('always' | 'always-multi-line' | 'never-multi-line' | [])
  | [
      (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
        (
          | ((('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
          | (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
        ) &
        (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
        (
          | ((('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
          | (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
        ),
      (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
        (
          | ((('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
          | (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
        ) &
        (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
        (
          | ((('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
          | (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
        )
    ]
) &
  (
    | (null &
        (
          | null
          | ('always' | 'always-multi-line' | 'never-multi-line' | [])
          | [
              (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                ) &
                (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                ),
              (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                ) &
                (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                )
            ]
        ))
    | ((
        | null
        | ('always' | 'always-multi-line' | 'never-multi-line' | [])
        | [
            (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
              (
                | ((('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                | (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
              ) &
              (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
              (
                | ((('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                | (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
              ),
            (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
              (
                | ((('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                | (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
              ) &
              (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
              (
                | ((('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                | (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
              )
          ]
      ) &
        string)
    | ((
        | null
        | ('always' | 'always-multi-line' | 'never-multi-line' | [])
        | [
            (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
              (
                | ((('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                | (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
              ) &
              (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
              (
                | ((('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                | (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
              ),
            (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
              (
                | ((('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                | (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
              ) &
              (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
              (
                | ((('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                | (('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
              )
          ]
      ) &
        unknown[])
  );
/**
 * Require a single space or disallow whitespace after the closing brace of blocks
 */
export type NewlineSpaceRule = (
  | null
  | ('always' | 'never' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | [])
  | [
      (
        | (
            | 'always'
            | 'never'
            | 'always-single-line'
            | 'never-single-line'
            | 'always-multi-line'
            | 'never-multi-line'
            | {}
          )
        | CoreRule
      ) &
        (
          | ((
              | (
                  | 'always'
                  | 'never'
                  | 'always-single-line'
                  | 'never-single-line'
                  | 'always-multi-line'
                  | 'never-multi-line'
                  | {}
                )
              | CoreRule
            ) &
              string)
          | (
              | (
                  | 'always'
                  | 'never'
                  | 'always-single-line'
                  | 'never-single-line'
                  | 'always-multi-line'
                  | 'never-multi-line'
                  | {}
                )
              | CoreRule
            )
        ) &
        (
          | (
              | 'always'
              | 'never'
              | 'always-single-line'
              | 'never-single-line'
              | 'always-multi-line'
              | 'never-multi-line'
              | {}
            )
          | CoreRule
        ) &
        (
          | ((
              | (
                  | 'always'
                  | 'never'
                  | 'always-single-line'
                  | 'never-single-line'
                  | 'always-multi-line'
                  | 'never-multi-line'
                  | {}
                )
              | CoreRule
            ) &
              string)
          | (
              | (
                  | 'always'
                  | 'never'
                  | 'always-single-line'
                  | 'never-single-line'
                  | 'always-multi-line'
                  | 'never-multi-line'
                  | {}
                )
              | CoreRule
            )
        ),
      (
        | (
            | 'always'
            | 'never'
            | 'always-single-line'
            | 'never-single-line'
            | 'always-multi-line'
            | 'never-multi-line'
            | {}
          )
        | CoreRule
      ) &
        (
          | ((
              | (
                  | 'always'
                  | 'never'
                  | 'always-single-line'
                  | 'never-single-line'
                  | 'always-multi-line'
                  | 'never-multi-line'
                  | {}
                )
              | CoreRule
            ) &
              string)
          | (
              | (
                  | 'always'
                  | 'never'
                  | 'always-single-line'
                  | 'never-single-line'
                  | 'always-multi-line'
                  | 'never-multi-line'
                  | {}
                )
              | CoreRule
            )
        ) &
        (
          | (
              | 'always'
              | 'never'
              | 'always-single-line'
              | 'never-single-line'
              | 'always-multi-line'
              | 'never-multi-line'
              | {}
            )
          | CoreRule
        ) &
        (
          | ((
              | (
                  | 'always'
                  | 'never'
                  | 'always-single-line'
                  | 'never-single-line'
                  | 'always-multi-line'
                  | 'never-multi-line'
                  | {}
                )
              | CoreRule
            ) &
              string)
          | (
              | (
                  | 'always'
                  | 'never'
                  | 'always-single-line'
                  | 'never-single-line'
                  | 'always-multi-line'
                  | 'never-multi-line'
                  | {}
                )
              | CoreRule
            )
        )
    ]
) &
  (
    | (null &
        (
          | null
          | (
              | 'always'
              | 'never'
              | 'always-single-line'
              | 'never-single-line'
              | 'always-multi-line'
              | 'never-multi-line'
              | []
            )
          | [
              (
                | (
                    | 'always'
                    | 'never'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              ) &
                (
                  | ((
                      | (
                          | 'always'
                          | 'never'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    ) &
                      string)
                  | (
                      | (
                          | 'always'
                          | 'never'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    )
                ) &
                (
                  | (
                      | 'always'
                      | 'never'
                      | 'always-single-line'
                      | 'never-single-line'
                      | 'always-multi-line'
                      | 'never-multi-line'
                      | {}
                    )
                  | CoreRule
                ) &
                (
                  | ((
                      | (
                          | 'always'
                          | 'never'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    ) &
                      string)
                  | (
                      | (
                          | 'always'
                          | 'never'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    )
                ),
              (
                | (
                    | 'always'
                    | 'never'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              ) &
                (
                  | ((
                      | (
                          | 'always'
                          | 'never'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    ) &
                      string)
                  | (
                      | (
                          | 'always'
                          | 'never'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    )
                ) &
                (
                  | (
                      | 'always'
                      | 'never'
                      | 'always-single-line'
                      | 'never-single-line'
                      | 'always-multi-line'
                      | 'never-multi-line'
                      | {}
                    )
                  | CoreRule
                ) &
                (
                  | ((
                      | (
                          | 'always'
                          | 'never'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    ) &
                      string)
                  | (
                      | (
                          | 'always'
                          | 'never'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    )
                )
            ]
        ))
    | ((
        | null
        | (
            | 'always'
            | 'never'
            | 'always-single-line'
            | 'never-single-line'
            | 'always-multi-line'
            | 'never-multi-line'
            | []
          )
        | [
            (
              | (
                  | 'always'
                  | 'never'
                  | 'always-single-line'
                  | 'never-single-line'
                  | 'always-multi-line'
                  | 'never-multi-line'
                  | {}
                )
              | CoreRule
            ) &
              (
                | ((
                    | (
                        | 'always'
                        | 'never'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  ) &
                    string)
                | (
                    | (
                        | 'always'
                        | 'never'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  )
              ) &
              (
                | (
                    | 'always'
                    | 'never'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              ) &
              (
                | ((
                    | (
                        | 'always'
                        | 'never'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  ) &
                    string)
                | (
                    | (
                        | 'always'
                        | 'never'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  )
              ),
            (
              | (
                  | 'always'
                  | 'never'
                  | 'always-single-line'
                  | 'never-single-line'
                  | 'always-multi-line'
                  | 'never-multi-line'
                  | {}
                )
              | CoreRule
            ) &
              (
                | ((
                    | (
                        | 'always'
                        | 'never'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  ) &
                    string)
                | (
                    | (
                        | 'always'
                        | 'never'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  )
              ) &
              (
                | (
                    | 'always'
                    | 'never'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              ) &
              (
                | ((
                    | (
                        | 'always'
                        | 'never'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  ) &
                    string)
                | (
                    | (
                        | 'always'
                        | 'never'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  )
              )
          ]
      ) &
        string)
    | ((
        | null
        | (
            | 'always'
            | 'never'
            | 'always-single-line'
            | 'never-single-line'
            | 'always-multi-line'
            | 'never-multi-line'
            | []
          )
        | [
            (
              | (
                  | 'always'
                  | 'never'
                  | 'always-single-line'
                  | 'never-single-line'
                  | 'always-multi-line'
                  | 'never-multi-line'
                  | {}
                )
              | CoreRule
            ) &
              (
                | ((
                    | (
                        | 'always'
                        | 'never'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  ) &
                    string)
                | (
                    | (
                        | 'always'
                        | 'never'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  )
              ) &
              (
                | (
                    | 'always'
                    | 'never'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              ) &
              (
                | ((
                    | (
                        | 'always'
                        | 'never'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  ) &
                    string)
                | (
                    | (
                        | 'always'
                        | 'never'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  )
              ),
            (
              | (
                  | 'always'
                  | 'never'
                  | 'always-single-line'
                  | 'never-single-line'
                  | 'always-multi-line'
                  | 'never-multi-line'
                  | {}
                )
              | CoreRule
            ) &
              (
                | ((
                    | (
                        | 'always'
                        | 'never'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  ) &
                    string)
                | (
                    | (
                        | 'always'
                        | 'never'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  )
              ) &
              (
                | (
                    | 'always'
                    | 'never'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              ) &
              (
                | ((
                    | (
                        | 'always'
                        | 'never'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  ) &
                    string)
                | (
                    | (
                        | 'always'
                        | 'never'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  )
              )
          ]
      ) &
        unknown[])
  );
/**
 * Require or disallow whitespace on the inside of comment markers
 */
export type AlwaysNeverRule = (
  | null
  | ('always' | 'never' | [])
  | [
      (('always' | 'never' | {}) | CoreRule) &
        (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
        (('always' | 'never' | {}) | CoreRule) &
        (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)),
      (('always' | 'never' | {}) | CoreRule) &
        (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
        (('always' | 'never' | {}) | CoreRule) &
        (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule))
    ]
) &
  (
    | (null &
        (
          | null
          | ('always' | 'never' | [])
          | [
              (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)),
              (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule))
            ]
        ))
    | ((
        | null
        | ('always' | 'never' | [])
        | [
            (('always' | 'never' | {}) | CoreRule) &
              (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
              (('always' | 'never' | {}) | CoreRule) &
              (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)),
            (('always' | 'never' | {}) | CoreRule) &
              (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
              (('always' | 'never' | {}) | CoreRule) &
              (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule))
          ]
      ) &
        string)
    | ((
        | null
        | ('always' | 'never' | [])
        | [
            (('always' | 'never' | {}) | CoreRule) &
              (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
              (('always' | 'never' | {}) | CoreRule) &
              (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)),
            (('always' | 'never' | {}) | CoreRule) &
              (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
              (('always' | 'never' | {}) | CoreRule) &
              (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule))
          ]
      ) &
        unknown[])
  );
/**
 * Specify a pattern for custom media query names
 */
export type StringRule = (
  | (null | string)
  | [
      (string | CoreRule) &
        (((string | CoreRule) & string) | (string | CoreRule)) &
        (string | CoreRule) &
        (((string | CoreRule) & string) | (string | CoreRule)),
      (string | CoreRule) &
        (((string | CoreRule) & string) | (string | CoreRule)) &
        (string | CoreRule) &
        (((string | CoreRule) & string) | (string | CoreRule))
    ]
) &
  (
    | (null &
        (
          | (null | string)
          | [
              (string | CoreRule) &
                (((string | CoreRule) & string) | (string | CoreRule)) &
                (string | CoreRule) &
                (((string | CoreRule) & string) | (string | CoreRule)),
              (string | CoreRule) &
                (((string | CoreRule) & string) | (string | CoreRule)) &
                (string | CoreRule) &
                (((string | CoreRule) & string) | (string | CoreRule))
            ]
        ))
    | ((
        | (null | string)
        | [
            (string | CoreRule) &
              (((string | CoreRule) & string) | (string | CoreRule)) &
              (string | CoreRule) &
              (((string | CoreRule) & string) | (string | CoreRule)),
            (string | CoreRule) &
              (((string | CoreRule) & string) | (string | CoreRule)) &
              (string | CoreRule) &
              (((string | CoreRule) & string) | (string | CoreRule))
          ]
      ) &
        string)
    | ((
        | (null | string)
        | [
            (string | CoreRule) &
              (((string | CoreRule) & string) | (string | CoreRule)) &
              (string | CoreRule) &
              (((string | CoreRule) & string) | (string | CoreRule)),
            (string | CoreRule) &
              (((string | CoreRule) & string) | (string | CoreRule)) &
              (string | CoreRule) &
              (((string | CoreRule) & string) | (string | CoreRule))
          ]
      ) &
        unknown[])
  );
export type SimpleStringOrArrayStringRule1 =
  | (SimpleStringOrArrayStringRule2 | (undefined & SimpleStringOrArrayStringRule3) | undefined)
  | undefined;
export type SimpleStringOrArrayStringRule2 = (string | SimpleArrayStringRule) | undefined;
export type SimpleStringOrArrayStringRule3 =
  | (((string | SimpleArrayStringRule) & string) | ((string | SimpleArrayStringRule) & unknown[]))
  | undefined;
/**
 * Require a single space or disallow whitespace after the semicolons of declaration blocks
 */
export type SpaceRule = (
  | null
  | ('always' | 'never' | 'always-single-line' | 'never-single-line' | [])
  | [
      (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) &
        (
          | ((('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) & string)
          | (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule)
        ) &
        (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) &
        (
          | ((('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) & string)
          | (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule)
        ),
      (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) &
        (
          | ((('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) & string)
          | (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule)
        ) &
        (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) &
        (
          | ((('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) & string)
          | (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule)
        )
    ]
) &
  (
    | (null &
        (
          | null
          | ('always' | 'never' | 'always-single-line' | 'never-single-line' | [])
          | [
              (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule)
                ) &
                (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule)
                ),
              (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule)
                ) &
                (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule)
                )
            ]
        ))
    | ((
        | null
        | ('always' | 'never' | 'always-single-line' | 'never-single-line' | [])
        | [
            (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) &
              (
                | ((('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) & string)
                | (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule)
              ) &
              (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) &
              (
                | ((('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) & string)
                | (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule)
              ),
            (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) &
              (
                | ((('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) & string)
                | (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule)
              ) &
              (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) &
              (
                | ((('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) & string)
                | (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule)
              )
          ]
      ) &
        string)
    | ((
        | null
        | ('always' | 'never' | 'always-single-line' | 'never-single-line' | [])
        | [
            (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) &
              (
                | ((('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) & string)
                | (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule)
              ) &
              (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) &
              (
                | ((('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) & string)
                | (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule)
              ),
            (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) &
              (
                | ((('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) & string)
                | (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule)
              ) &
              (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) &
              (
                | ((('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule) & string)
                | (('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule)
              )
          ]
      ) &
        unknown[])
  );
/**
 * Limit the number of declaration within a single line declaration block
 */
export type IntegerRule = (
  | (null | number)
  | [
      ({} | CoreRule) &
        ((({} | CoreRule) & number) | ({} | CoreRule)) &
        ({} | CoreRule) &
        ((({} | CoreRule) & number) | ({} | CoreRule)),
      ({} | CoreRule) &
        ((({} | CoreRule) & number) | ({} | CoreRule)) &
        ({} | CoreRule) &
        ((({} | CoreRule) & number) | ({} | CoreRule))
    ]
) &
  (
    | (null &
        (
          | (null | number)
          | [
              ({} | CoreRule) &
                ((({} | CoreRule) & number) | ({} | CoreRule)) &
                ({} | CoreRule) &
                ((({} | CoreRule) & number) | ({} | CoreRule)),
              ({} | CoreRule) &
                ((({} | CoreRule) & number) | ({} | CoreRule)) &
                ({} | CoreRule) &
                ((({} | CoreRule) & number) | ({} | CoreRule))
            ]
        ))
    | (number &
        (
          | (null | number)
          | [
              ({} | CoreRule) &
                ((({} | CoreRule) & number) | ({} | CoreRule)) &
                ({} | CoreRule) &
                ((({} | CoreRule) & number) | ({} | CoreRule)),
              ({} | CoreRule) &
                ((({} | CoreRule) & number) | ({} | CoreRule)) &
                ({} | CoreRule) &
                ((({} | CoreRule) & number) | ({} | CoreRule))
            ]
        ))
    | ((
        | (null | number)
        | [
            ({} | CoreRule) &
              ((({} | CoreRule) & number) | ({} | CoreRule)) &
              ({} | CoreRule) &
              ((({} | CoreRule) & number) | ({} | CoreRule)),
            ({} | CoreRule) &
              ((({} | CoreRule) & number) | ({} | CoreRule)) &
              ({} | CoreRule) &
              ((({} | CoreRule) & number) | ({} | CoreRule))
          ]
      ) &
        unknown[])
  );
/**
 * Specify single or double colon notation for applicable pseudo-elements
 */
export type SingleDoubleRule = (
  | null
  | ('single' | 'double' | [])
  | [
      (('single' | 'double' | {}) | CoreRule) &
        (((('single' | 'double' | {}) | CoreRule) & string) | (('single' | 'double' | {}) | CoreRule)) &
        (('single' | 'double' | {}) | CoreRule) &
        (((('single' | 'double' | {}) | CoreRule) & string) | (('single' | 'double' | {}) | CoreRule)),
      (('single' | 'double' | {}) | CoreRule) &
        (((('single' | 'double' | {}) | CoreRule) & string) | (('single' | 'double' | {}) | CoreRule)) &
        (('single' | 'double' | {}) | CoreRule) &
        (((('single' | 'double' | {}) | CoreRule) & string) | (('single' | 'double' | {}) | CoreRule))
    ]
) &
  (
    | (null &
        (
          | null
          | ('single' | 'double' | [])
          | [
              (('single' | 'double' | {}) | CoreRule) &
                (((('single' | 'double' | {}) | CoreRule) & string) | (('single' | 'double' | {}) | CoreRule)) &
                (('single' | 'double' | {}) | CoreRule) &
                (((('single' | 'double' | {}) | CoreRule) & string) | (('single' | 'double' | {}) | CoreRule)),
              (('single' | 'double' | {}) | CoreRule) &
                (((('single' | 'double' | {}) | CoreRule) & string) | (('single' | 'double' | {}) | CoreRule)) &
                (('single' | 'double' | {}) | CoreRule) &
                (((('single' | 'double' | {}) | CoreRule) & string) | (('single' | 'double' | {}) | CoreRule))
            ]
        ))
    | ((
        | null
        | ('single' | 'double' | [])
        | [
            (('single' | 'double' | {}) | CoreRule) &
              (((('single' | 'double' | {}) | CoreRule) & string) | (('single' | 'double' | {}) | CoreRule)) &
              (('single' | 'double' | {}) | CoreRule) &
              (((('single' | 'double' | {}) | CoreRule) & string) | (('single' | 'double' | {}) | CoreRule)),
            (('single' | 'double' | {}) | CoreRule) &
              (((('single' | 'double' | {}) | CoreRule) & string) | (('single' | 'double' | {}) | CoreRule)) &
              (('single' | 'double' | {}) | CoreRule) &
              (((('single' | 'double' | {}) | CoreRule) & string) | (('single' | 'double' | {}) | CoreRule))
          ]
      ) &
        string)
    | ((
        | null
        | ('single' | 'double' | [])
        | [
            (('single' | 'double' | {}) | CoreRule) &
              (((('single' | 'double' | {}) | CoreRule) & string) | (('single' | 'double' | {}) | CoreRule)) &
              (('single' | 'double' | {}) | CoreRule) &
              (((('single' | 'double' | {}) | CoreRule) & string) | (('single' | 'double' | {}) | CoreRule)),
            (('single' | 'double' | {}) | CoreRule) &
              (((('single' | 'double' | {}) | CoreRule) & string) | (('single' | 'double' | {}) | CoreRule)) &
              (('single' | 'double' | {}) | CoreRule) &
              (((('single' | 'double' | {}) | CoreRule) & string) | (('single' | 'double' | {}) | CoreRule))
          ]
      ) &
        unknown[])
  );
/**
 * Specify a blacklist of disallowed units
 */
export type UnitRule = (
  | null
  | (
      | 'em'
      | 'ex'
      | 'px'
      | '%'
      | 'rem'
      | 'vw'
      | 'vh'
      | 'vm'
      | 'vmin'
      | 'vmax'
      | 'ch'
      | 'in'
      | 'cm'
      | 'mm'
      | 'q'
      | 'pt'
      | 'pc'
      | 'deg'
      | 'grad'
      | 'rad'
      | 'turn'
      | 'ms'
      | 's'
      | 'Hz'
      | 'kHz'
      | 'dpi'
      | 'dpcm'
      | 'dppx'
      | 'fr'
      | []
    )
  | [
      (
        | (
            | 'em'
            | 'ex'
            | 'px'
            | '%'
            | 'rem'
            | 'vw'
            | 'vh'
            | 'vm'
            | 'vmin'
            | 'vmax'
            | 'ch'
            | 'in'
            | 'cm'
            | 'mm'
            | 'q'
            | 'pt'
            | 'pc'
            | 'deg'
            | 'grad'
            | 'rad'
            | 'turn'
            | 'ms'
            | 's'
            | 'Hz'
            | 'kHz'
            | 'dpi'
            | 'dpcm'
            | 'dppx'
            | 'fr'
            | []
            | {}
          )
        | [
            (
              | 'em'
              | 'ex'
              | 'px'
              | '%'
              | 'rem'
              | 'vw'
              | 'vh'
              | 'vm'
              | 'vmin'
              | 'vmax'
              | 'ch'
              | 'in'
              | 'cm'
              | 'mm'
              | 'q'
              | 'pt'
              | 'pc'
              | 'deg'
              | 'grad'
              | 'rad'
              | 'turn'
              | 'ms'
              | 's'
              | 'Hz'
              | 'kHz'
              | 'dpi'
              | 'dpcm'
              | 'dppx'
              | 'fr'
            ),
            ...(
              | 'em'
              | 'ex'
              | 'px'
              | '%'
              | 'rem'
              | 'vw'
              | 'vh'
              | 'vm'
              | 'vmin'
              | 'vmax'
              | 'ch'
              | 'in'
              | 'cm'
              | 'mm'
              | 'q'
              | 'pt'
              | 'pc'
              | 'deg'
              | 'grad'
              | 'rad'
              | 'turn'
              | 'ms'
              | 's'
              | 'Hz'
              | 'kHz'
              | 'dpi'
              | 'dpcm'
              | 'dppx'
              | 'fr'
            )[]
          ]
        | CoreRule
      ) &
        (
          | ((
              | (
                  | 'em'
                  | 'ex'
                  | 'px'
                  | '%'
                  | 'rem'
                  | 'vw'
                  | 'vh'
                  | 'vm'
                  | 'vmin'
                  | 'vmax'
                  | 'ch'
                  | 'in'
                  | 'cm'
                  | 'mm'
                  | 'q'
                  | 'pt'
                  | 'pc'
                  | 'deg'
                  | 'grad'
                  | 'rad'
                  | 'turn'
                  | 'ms'
                  | 's'
                  | 'Hz'
                  | 'kHz'
                  | 'dpi'
                  | 'dpcm'
                  | 'dppx'
                  | 'fr'
                  | []
                  | {}
                )
              | [
                  (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  ),
                  ...(
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  )[]
                ]
              | CoreRule
            ) &
              string)
          | ((
              | (
                  | 'em'
                  | 'ex'
                  | 'px'
                  | '%'
                  | 'rem'
                  | 'vw'
                  | 'vh'
                  | 'vm'
                  | 'vmin'
                  | 'vmax'
                  | 'ch'
                  | 'in'
                  | 'cm'
                  | 'mm'
                  | 'q'
                  | 'pt'
                  | 'pc'
                  | 'deg'
                  | 'grad'
                  | 'rad'
                  | 'turn'
                  | 'ms'
                  | 's'
                  | 'Hz'
                  | 'kHz'
                  | 'dpi'
                  | 'dpcm'
                  | 'dppx'
                  | 'fr'
                  | []
                  | {}
                )
              | [
                  (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  ),
                  ...(
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  )[]
                ]
              | CoreRule
            ) &
              unknown[])
          | (
              | (
                  | 'em'
                  | 'ex'
                  | 'px'
                  | '%'
                  | 'rem'
                  | 'vw'
                  | 'vh'
                  | 'vm'
                  | 'vmin'
                  | 'vmax'
                  | 'ch'
                  | 'in'
                  | 'cm'
                  | 'mm'
                  | 'q'
                  | 'pt'
                  | 'pc'
                  | 'deg'
                  | 'grad'
                  | 'rad'
                  | 'turn'
                  | 'ms'
                  | 's'
                  | 'Hz'
                  | 'kHz'
                  | 'dpi'
                  | 'dpcm'
                  | 'dppx'
                  | 'fr'
                  | []
                  | {}
                )
              | [
                  (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  ),
                  ...(
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  )[]
                ]
              | CoreRule
            )
        ) &
        (
          | (
              | 'em'
              | 'ex'
              | 'px'
              | '%'
              | 'rem'
              | 'vw'
              | 'vh'
              | 'vm'
              | 'vmin'
              | 'vmax'
              | 'ch'
              | 'in'
              | 'cm'
              | 'mm'
              | 'q'
              | 'pt'
              | 'pc'
              | 'deg'
              | 'grad'
              | 'rad'
              | 'turn'
              | 'ms'
              | 's'
              | 'Hz'
              | 'kHz'
              | 'dpi'
              | 'dpcm'
              | 'dppx'
              | 'fr'
              | []
              | {}
            )
          | [
              (
                | 'em'
                | 'ex'
                | 'px'
                | '%'
                | 'rem'
                | 'vw'
                | 'vh'
                | 'vm'
                | 'vmin'
                | 'vmax'
                | 'ch'
                | 'in'
                | 'cm'
                | 'mm'
                | 'q'
                | 'pt'
                | 'pc'
                | 'deg'
                | 'grad'
                | 'rad'
                | 'turn'
                | 'ms'
                | 's'
                | 'Hz'
                | 'kHz'
                | 'dpi'
                | 'dpcm'
                | 'dppx'
                | 'fr'
              ),
              ...(
                | 'em'
                | 'ex'
                | 'px'
                | '%'
                | 'rem'
                | 'vw'
                | 'vh'
                | 'vm'
                | 'vmin'
                | 'vmax'
                | 'ch'
                | 'in'
                | 'cm'
                | 'mm'
                | 'q'
                | 'pt'
                | 'pc'
                | 'deg'
                | 'grad'
                | 'rad'
                | 'turn'
                | 'ms'
                | 's'
                | 'Hz'
                | 'kHz'
                | 'dpi'
                | 'dpcm'
                | 'dppx'
                | 'fr'
              )[]
            ]
          | CoreRule
        ) &
        (
          | ((
              | (
                  | 'em'
                  | 'ex'
                  | 'px'
                  | '%'
                  | 'rem'
                  | 'vw'
                  | 'vh'
                  | 'vm'
                  | 'vmin'
                  | 'vmax'
                  | 'ch'
                  | 'in'
                  | 'cm'
                  | 'mm'
                  | 'q'
                  | 'pt'
                  | 'pc'
                  | 'deg'
                  | 'grad'
                  | 'rad'
                  | 'turn'
                  | 'ms'
                  | 's'
                  | 'Hz'
                  | 'kHz'
                  | 'dpi'
                  | 'dpcm'
                  | 'dppx'
                  | 'fr'
                  | []
                  | {}
                )
              | [
                  (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  ),
                  ...(
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  )[]
                ]
              | CoreRule
            ) &
              string)
          | ((
              | (
                  | 'em'
                  | 'ex'
                  | 'px'
                  | '%'
                  | 'rem'
                  | 'vw'
                  | 'vh'
                  | 'vm'
                  | 'vmin'
                  | 'vmax'
                  | 'ch'
                  | 'in'
                  | 'cm'
                  | 'mm'
                  | 'q'
                  | 'pt'
                  | 'pc'
                  | 'deg'
                  | 'grad'
                  | 'rad'
                  | 'turn'
                  | 'ms'
                  | 's'
                  | 'Hz'
                  | 'kHz'
                  | 'dpi'
                  | 'dpcm'
                  | 'dppx'
                  | 'fr'
                  | []
                  | {}
                )
              | [
                  (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  ),
                  ...(
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  )[]
                ]
              | CoreRule
            ) &
              unknown[])
          | (
              | (
                  | 'em'
                  | 'ex'
                  | 'px'
                  | '%'
                  | 'rem'
                  | 'vw'
                  | 'vh'
                  | 'vm'
                  | 'vmin'
                  | 'vmax'
                  | 'ch'
                  | 'in'
                  | 'cm'
                  | 'mm'
                  | 'q'
                  | 'pt'
                  | 'pc'
                  | 'deg'
                  | 'grad'
                  | 'rad'
                  | 'turn'
                  | 'ms'
                  | 's'
                  | 'Hz'
                  | 'kHz'
                  | 'dpi'
                  | 'dpcm'
                  | 'dppx'
                  | 'fr'
                  | []
                  | {}
                )
              | [
                  (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  ),
                  ...(
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  )[]
                ]
              | CoreRule
            )
        ),
      ...((
        | (
            | 'em'
            | 'ex'
            | 'px'
            | '%'
            | 'rem'
            | 'vw'
            | 'vh'
            | 'vm'
            | 'vmin'
            | 'vmax'
            | 'ch'
            | 'in'
            | 'cm'
            | 'mm'
            | 'q'
            | 'pt'
            | 'pc'
            | 'deg'
            | 'grad'
            | 'rad'
            | 'turn'
            | 'ms'
            | 's'
            | 'Hz'
            | 'kHz'
            | 'dpi'
            | 'dpcm'
            | 'dppx'
            | 'fr'
            | []
            | {}
          )
        | [
            (
              | 'em'
              | 'ex'
              | 'px'
              | '%'
              | 'rem'
              | 'vw'
              | 'vh'
              | 'vm'
              | 'vmin'
              | 'vmax'
              | 'ch'
              | 'in'
              | 'cm'
              | 'mm'
              | 'q'
              | 'pt'
              | 'pc'
              | 'deg'
              | 'grad'
              | 'rad'
              | 'turn'
              | 'ms'
              | 's'
              | 'Hz'
              | 'kHz'
              | 'dpi'
              | 'dpcm'
              | 'dppx'
              | 'fr'
            ),
            ...(
              | 'em'
              | 'ex'
              | 'px'
              | '%'
              | 'rem'
              | 'vw'
              | 'vh'
              | 'vm'
              | 'vmin'
              | 'vmax'
              | 'ch'
              | 'in'
              | 'cm'
              | 'mm'
              | 'q'
              | 'pt'
              | 'pc'
              | 'deg'
              | 'grad'
              | 'rad'
              | 'turn'
              | 'ms'
              | 's'
              | 'Hz'
              | 'kHz'
              | 'dpi'
              | 'dpcm'
              | 'dppx'
              | 'fr'
            )[]
          ]
        | CoreRule
      ) &
        (
          | ((
              | (
                  | 'em'
                  | 'ex'
                  | 'px'
                  | '%'
                  | 'rem'
                  | 'vw'
                  | 'vh'
                  | 'vm'
                  | 'vmin'
                  | 'vmax'
                  | 'ch'
                  | 'in'
                  | 'cm'
                  | 'mm'
                  | 'q'
                  | 'pt'
                  | 'pc'
                  | 'deg'
                  | 'grad'
                  | 'rad'
                  | 'turn'
                  | 'ms'
                  | 's'
                  | 'Hz'
                  | 'kHz'
                  | 'dpi'
                  | 'dpcm'
                  | 'dppx'
                  | 'fr'
                  | []
                  | {}
                )
              | [
                  (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  ),
                  ...(
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  )[]
                ]
              | CoreRule
            ) &
              string)
          | ((
              | (
                  | 'em'
                  | 'ex'
                  | 'px'
                  | '%'
                  | 'rem'
                  | 'vw'
                  | 'vh'
                  | 'vm'
                  | 'vmin'
                  | 'vmax'
                  | 'ch'
                  | 'in'
                  | 'cm'
                  | 'mm'
                  | 'q'
                  | 'pt'
                  | 'pc'
                  | 'deg'
                  | 'grad'
                  | 'rad'
                  | 'turn'
                  | 'ms'
                  | 's'
                  | 'Hz'
                  | 'kHz'
                  | 'dpi'
                  | 'dpcm'
                  | 'dppx'
                  | 'fr'
                  | []
                  | {}
                )
              | [
                  (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  ),
                  ...(
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  )[]
                ]
              | CoreRule
            ) &
              unknown[])
          | (
              | (
                  | 'em'
                  | 'ex'
                  | 'px'
                  | '%'
                  | 'rem'
                  | 'vw'
                  | 'vh'
                  | 'vm'
                  | 'vmin'
                  | 'vmax'
                  | 'ch'
                  | 'in'
                  | 'cm'
                  | 'mm'
                  | 'q'
                  | 'pt'
                  | 'pc'
                  | 'deg'
                  | 'grad'
                  | 'rad'
                  | 'turn'
                  | 'ms'
                  | 's'
                  | 'Hz'
                  | 'kHz'
                  | 'dpi'
                  | 'dpcm'
                  | 'dppx'
                  | 'fr'
                  | []
                  | {}
                )
              | [
                  (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  ),
                  ...(
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  )[]
                ]
              | CoreRule
            )
        ) &
        (
          | (
              | 'em'
              | 'ex'
              | 'px'
              | '%'
              | 'rem'
              | 'vw'
              | 'vh'
              | 'vm'
              | 'vmin'
              | 'vmax'
              | 'ch'
              | 'in'
              | 'cm'
              | 'mm'
              | 'q'
              | 'pt'
              | 'pc'
              | 'deg'
              | 'grad'
              | 'rad'
              | 'turn'
              | 'ms'
              | 's'
              | 'Hz'
              | 'kHz'
              | 'dpi'
              | 'dpcm'
              | 'dppx'
              | 'fr'
              | []
              | {}
            )
          | [
              (
                | 'em'
                | 'ex'
                | 'px'
                | '%'
                | 'rem'
                | 'vw'
                | 'vh'
                | 'vm'
                | 'vmin'
                | 'vmax'
                | 'ch'
                | 'in'
                | 'cm'
                | 'mm'
                | 'q'
                | 'pt'
                | 'pc'
                | 'deg'
                | 'grad'
                | 'rad'
                | 'turn'
                | 'ms'
                | 's'
                | 'Hz'
                | 'kHz'
                | 'dpi'
                | 'dpcm'
                | 'dppx'
                | 'fr'
              ),
              ...(
                | 'em'
                | 'ex'
                | 'px'
                | '%'
                | 'rem'
                | 'vw'
                | 'vh'
                | 'vm'
                | 'vmin'
                | 'vmax'
                | 'ch'
                | 'in'
                | 'cm'
                | 'mm'
                | 'q'
                | 'pt'
                | 'pc'
                | 'deg'
                | 'grad'
                | 'rad'
                | 'turn'
                | 'ms'
                | 's'
                | 'Hz'
                | 'kHz'
                | 'dpi'
                | 'dpcm'
                | 'dppx'
                | 'fr'
              )[]
            ]
          | CoreRule
        ) &
        (
          | ((
              | (
                  | 'em'
                  | 'ex'
                  | 'px'
                  | '%'
                  | 'rem'
                  | 'vw'
                  | 'vh'
                  | 'vm'
                  | 'vmin'
                  | 'vmax'
                  | 'ch'
                  | 'in'
                  | 'cm'
                  | 'mm'
                  | 'q'
                  | 'pt'
                  | 'pc'
                  | 'deg'
                  | 'grad'
                  | 'rad'
                  | 'turn'
                  | 'ms'
                  | 's'
                  | 'Hz'
                  | 'kHz'
                  | 'dpi'
                  | 'dpcm'
                  | 'dppx'
                  | 'fr'
                  | []
                  | {}
                )
              | [
                  (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  ),
                  ...(
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  )[]
                ]
              | CoreRule
            ) &
              string)
          | ((
              | (
                  | 'em'
                  | 'ex'
                  | 'px'
                  | '%'
                  | 'rem'
                  | 'vw'
                  | 'vh'
                  | 'vm'
                  | 'vmin'
                  | 'vmax'
                  | 'ch'
                  | 'in'
                  | 'cm'
                  | 'mm'
                  | 'q'
                  | 'pt'
                  | 'pc'
                  | 'deg'
                  | 'grad'
                  | 'rad'
                  | 'turn'
                  | 'ms'
                  | 's'
                  | 'Hz'
                  | 'kHz'
                  | 'dpi'
                  | 'dpcm'
                  | 'dppx'
                  | 'fr'
                  | []
                  | {}
                )
              | [
                  (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  ),
                  ...(
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  )[]
                ]
              | CoreRule
            ) &
              unknown[])
          | (
              | (
                  | 'em'
                  | 'ex'
                  | 'px'
                  | '%'
                  | 'rem'
                  | 'vw'
                  | 'vh'
                  | 'vm'
                  | 'vmin'
                  | 'vmax'
                  | 'ch'
                  | 'in'
                  | 'cm'
                  | 'mm'
                  | 'q'
                  | 'pt'
                  | 'pc'
                  | 'deg'
                  | 'grad'
                  | 'rad'
                  | 'turn'
                  | 'ms'
                  | 's'
                  | 'Hz'
                  | 'kHz'
                  | 'dpi'
                  | 'dpcm'
                  | 'dppx'
                  | 'fr'
                  | []
                  | {}
                )
              | [
                  (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  ),
                  ...(
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  )[]
                ]
              | CoreRule
            )
        ))[]
    ]
) &
  (
    | (null &
        (
          | null
          | (
              | 'em'
              | 'ex'
              | 'px'
              | '%'
              | 'rem'
              | 'vw'
              | 'vh'
              | 'vm'
              | 'vmin'
              | 'vmax'
              | 'ch'
              | 'in'
              | 'cm'
              | 'mm'
              | 'q'
              | 'pt'
              | 'pc'
              | 'deg'
              | 'grad'
              | 'rad'
              | 'turn'
              | 'ms'
              | 's'
              | 'Hz'
              | 'kHz'
              | 'dpi'
              | 'dpcm'
              | 'dppx'
              | 'fr'
              | []
            )
          | [
              (
                | (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                    | []
                    | {}
                  )
                | [
                    (
                      | 'em'
                      | 'ex'
                      | 'px'
                      | '%'
                      | 'rem'
                      | 'vw'
                      | 'vh'
                      | 'vm'
                      | 'vmin'
                      | 'vmax'
                      | 'ch'
                      | 'in'
                      | 'cm'
                      | 'mm'
                      | 'q'
                      | 'pt'
                      | 'pc'
                      | 'deg'
                      | 'grad'
                      | 'rad'
                      | 'turn'
                      | 'ms'
                      | 's'
                      | 'Hz'
                      | 'kHz'
                      | 'dpi'
                      | 'dpcm'
                      | 'dppx'
                      | 'fr'
                    ),
                    ...(
                      | 'em'
                      | 'ex'
                      | 'px'
                      | '%'
                      | 'rem'
                      | 'vw'
                      | 'vh'
                      | 'vm'
                      | 'vmin'
                      | 'vmax'
                      | 'ch'
                      | 'in'
                      | 'cm'
                      | 'mm'
                      | 'q'
                      | 'pt'
                      | 'pc'
                      | 'deg'
                      | 'grad'
                      | 'rad'
                      | 'turn'
                      | 'ms'
                      | 's'
                      | 'Hz'
                      | 'kHz'
                      | 'dpi'
                      | 'dpcm'
                      | 'dppx'
                      | 'fr'
                    )[]
                  ]
                | CoreRule
              ) &
                (
                  | ((
                      | (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                          | []
                          | {}
                        )
                      | [
                          (
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          ),
                          ...(
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          )[]
                        ]
                      | CoreRule
                    ) &
                      string)
                  | ((
                      | (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                          | []
                          | {}
                        )
                      | [
                          (
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          ),
                          ...(
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          )[]
                        ]
                      | CoreRule
                    ) &
                      unknown[])
                  | (
                      | (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                          | []
                          | {}
                        )
                      | [
                          (
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          ),
                          ...(
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          )[]
                        ]
                      | CoreRule
                    )
                ) &
                (
                  | (
                      | 'em'
                      | 'ex'
                      | 'px'
                      | '%'
                      | 'rem'
                      | 'vw'
                      | 'vh'
                      | 'vm'
                      | 'vmin'
                      | 'vmax'
                      | 'ch'
                      | 'in'
                      | 'cm'
                      | 'mm'
                      | 'q'
                      | 'pt'
                      | 'pc'
                      | 'deg'
                      | 'grad'
                      | 'rad'
                      | 'turn'
                      | 'ms'
                      | 's'
                      | 'Hz'
                      | 'kHz'
                      | 'dpi'
                      | 'dpcm'
                      | 'dppx'
                      | 'fr'
                      | []
                      | {}
                    )
                  | [
                      (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                      ),
                      ...(
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                      )[]
                    ]
                  | CoreRule
                ) &
                (
                  | ((
                      | (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                          | []
                          | {}
                        )
                      | [
                          (
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          ),
                          ...(
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          )[]
                        ]
                      | CoreRule
                    ) &
                      string)
                  | ((
                      | (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                          | []
                          | {}
                        )
                      | [
                          (
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          ),
                          ...(
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          )[]
                        ]
                      | CoreRule
                    ) &
                      unknown[])
                  | (
                      | (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                          | []
                          | {}
                        )
                      | [
                          (
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          ),
                          ...(
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          )[]
                        ]
                      | CoreRule
                    )
                ),
              ...((
                | (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                    | []
                    | {}
                  )
                | [
                    (
                      | 'em'
                      | 'ex'
                      | 'px'
                      | '%'
                      | 'rem'
                      | 'vw'
                      | 'vh'
                      | 'vm'
                      | 'vmin'
                      | 'vmax'
                      | 'ch'
                      | 'in'
                      | 'cm'
                      | 'mm'
                      | 'q'
                      | 'pt'
                      | 'pc'
                      | 'deg'
                      | 'grad'
                      | 'rad'
                      | 'turn'
                      | 'ms'
                      | 's'
                      | 'Hz'
                      | 'kHz'
                      | 'dpi'
                      | 'dpcm'
                      | 'dppx'
                      | 'fr'
                    ),
                    ...(
                      | 'em'
                      | 'ex'
                      | 'px'
                      | '%'
                      | 'rem'
                      | 'vw'
                      | 'vh'
                      | 'vm'
                      | 'vmin'
                      | 'vmax'
                      | 'ch'
                      | 'in'
                      | 'cm'
                      | 'mm'
                      | 'q'
                      | 'pt'
                      | 'pc'
                      | 'deg'
                      | 'grad'
                      | 'rad'
                      | 'turn'
                      | 'ms'
                      | 's'
                      | 'Hz'
                      | 'kHz'
                      | 'dpi'
                      | 'dpcm'
                      | 'dppx'
                      | 'fr'
                    )[]
                  ]
                | CoreRule
              ) &
                (
                  | ((
                      | (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                          | []
                          | {}
                        )
                      | [
                          (
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          ),
                          ...(
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          )[]
                        ]
                      | CoreRule
                    ) &
                      string)
                  | ((
                      | (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                          | []
                          | {}
                        )
                      | [
                          (
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          ),
                          ...(
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          )[]
                        ]
                      | CoreRule
                    ) &
                      unknown[])
                  | (
                      | (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                          | []
                          | {}
                        )
                      | [
                          (
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          ),
                          ...(
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          )[]
                        ]
                      | CoreRule
                    )
                ) &
                (
                  | (
                      | 'em'
                      | 'ex'
                      | 'px'
                      | '%'
                      | 'rem'
                      | 'vw'
                      | 'vh'
                      | 'vm'
                      | 'vmin'
                      | 'vmax'
                      | 'ch'
                      | 'in'
                      | 'cm'
                      | 'mm'
                      | 'q'
                      | 'pt'
                      | 'pc'
                      | 'deg'
                      | 'grad'
                      | 'rad'
                      | 'turn'
                      | 'ms'
                      | 's'
                      | 'Hz'
                      | 'kHz'
                      | 'dpi'
                      | 'dpcm'
                      | 'dppx'
                      | 'fr'
                      | []
                      | {}
                    )
                  | [
                      (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                      ),
                      ...(
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                      )[]
                    ]
                  | CoreRule
                ) &
                (
                  | ((
                      | (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                          | []
                          | {}
                        )
                      | [
                          (
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          ),
                          ...(
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          )[]
                        ]
                      | CoreRule
                    ) &
                      string)
                  | ((
                      | (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                          | []
                          | {}
                        )
                      | [
                          (
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          ),
                          ...(
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          )[]
                        ]
                      | CoreRule
                    ) &
                      unknown[])
                  | (
                      | (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                          | []
                          | {}
                        )
                      | [
                          (
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          ),
                          ...(
                            | 'em'
                            | 'ex'
                            | 'px'
                            | '%'
                            | 'rem'
                            | 'vw'
                            | 'vh'
                            | 'vm'
                            | 'vmin'
                            | 'vmax'
                            | 'ch'
                            | 'in'
                            | 'cm'
                            | 'mm'
                            | 'q'
                            | 'pt'
                            | 'pc'
                            | 'deg'
                            | 'grad'
                            | 'rad'
                            | 'turn'
                            | 'ms'
                            | 's'
                            | 'Hz'
                            | 'kHz'
                            | 'dpi'
                            | 'dpcm'
                            | 'dppx'
                            | 'fr'
                          )[]
                        ]
                      | CoreRule
                    )
                ))[]
            ]
        ))
    | ((
        | null
        | (
            | 'em'
            | 'ex'
            | 'px'
            | '%'
            | 'rem'
            | 'vw'
            | 'vh'
            | 'vm'
            | 'vmin'
            | 'vmax'
            | 'ch'
            | 'in'
            | 'cm'
            | 'mm'
            | 'q'
            | 'pt'
            | 'pc'
            | 'deg'
            | 'grad'
            | 'rad'
            | 'turn'
            | 'ms'
            | 's'
            | 'Hz'
            | 'kHz'
            | 'dpi'
            | 'dpcm'
            | 'dppx'
            | 'fr'
            | []
          )
        | [
            (
              | (
                  | 'em'
                  | 'ex'
                  | 'px'
                  | '%'
                  | 'rem'
                  | 'vw'
                  | 'vh'
                  | 'vm'
                  | 'vmin'
                  | 'vmax'
                  | 'ch'
                  | 'in'
                  | 'cm'
                  | 'mm'
                  | 'q'
                  | 'pt'
                  | 'pc'
                  | 'deg'
                  | 'grad'
                  | 'rad'
                  | 'turn'
                  | 'ms'
                  | 's'
                  | 'Hz'
                  | 'kHz'
                  | 'dpi'
                  | 'dpcm'
                  | 'dppx'
                  | 'fr'
                  | []
                  | {}
                )
              | [
                  (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  ),
                  ...(
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  )[]
                ]
              | CoreRule
            ) &
              (
                | ((
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  ) &
                    string)
                | ((
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  ) &
                    unknown[])
                | (
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  )
              ) &
              (
                | (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                    | []
                    | {}
                  )
                | [
                    (
                      | 'em'
                      | 'ex'
                      | 'px'
                      | '%'
                      | 'rem'
                      | 'vw'
                      | 'vh'
                      | 'vm'
                      | 'vmin'
                      | 'vmax'
                      | 'ch'
                      | 'in'
                      | 'cm'
                      | 'mm'
                      | 'q'
                      | 'pt'
                      | 'pc'
                      | 'deg'
                      | 'grad'
                      | 'rad'
                      | 'turn'
                      | 'ms'
                      | 's'
                      | 'Hz'
                      | 'kHz'
                      | 'dpi'
                      | 'dpcm'
                      | 'dppx'
                      | 'fr'
                    ),
                    ...(
                      | 'em'
                      | 'ex'
                      | 'px'
                      | '%'
                      | 'rem'
                      | 'vw'
                      | 'vh'
                      | 'vm'
                      | 'vmin'
                      | 'vmax'
                      | 'ch'
                      | 'in'
                      | 'cm'
                      | 'mm'
                      | 'q'
                      | 'pt'
                      | 'pc'
                      | 'deg'
                      | 'grad'
                      | 'rad'
                      | 'turn'
                      | 'ms'
                      | 's'
                      | 'Hz'
                      | 'kHz'
                      | 'dpi'
                      | 'dpcm'
                      | 'dppx'
                      | 'fr'
                    )[]
                  ]
                | CoreRule
              ) &
              (
                | ((
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  ) &
                    string)
                | ((
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  ) &
                    unknown[])
                | (
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  )
              ),
            ...((
              | (
                  | 'em'
                  | 'ex'
                  | 'px'
                  | '%'
                  | 'rem'
                  | 'vw'
                  | 'vh'
                  | 'vm'
                  | 'vmin'
                  | 'vmax'
                  | 'ch'
                  | 'in'
                  | 'cm'
                  | 'mm'
                  | 'q'
                  | 'pt'
                  | 'pc'
                  | 'deg'
                  | 'grad'
                  | 'rad'
                  | 'turn'
                  | 'ms'
                  | 's'
                  | 'Hz'
                  | 'kHz'
                  | 'dpi'
                  | 'dpcm'
                  | 'dppx'
                  | 'fr'
                  | []
                  | {}
                )
              | [
                  (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  ),
                  ...(
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  )[]
                ]
              | CoreRule
            ) &
              (
                | ((
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  ) &
                    string)
                | ((
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  ) &
                    unknown[])
                | (
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  )
              ) &
              (
                | (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                    | []
                    | {}
                  )
                | [
                    (
                      | 'em'
                      | 'ex'
                      | 'px'
                      | '%'
                      | 'rem'
                      | 'vw'
                      | 'vh'
                      | 'vm'
                      | 'vmin'
                      | 'vmax'
                      | 'ch'
                      | 'in'
                      | 'cm'
                      | 'mm'
                      | 'q'
                      | 'pt'
                      | 'pc'
                      | 'deg'
                      | 'grad'
                      | 'rad'
                      | 'turn'
                      | 'ms'
                      | 's'
                      | 'Hz'
                      | 'kHz'
                      | 'dpi'
                      | 'dpcm'
                      | 'dppx'
                      | 'fr'
                    ),
                    ...(
                      | 'em'
                      | 'ex'
                      | 'px'
                      | '%'
                      | 'rem'
                      | 'vw'
                      | 'vh'
                      | 'vm'
                      | 'vmin'
                      | 'vmax'
                      | 'ch'
                      | 'in'
                      | 'cm'
                      | 'mm'
                      | 'q'
                      | 'pt'
                      | 'pc'
                      | 'deg'
                      | 'grad'
                      | 'rad'
                      | 'turn'
                      | 'ms'
                      | 's'
                      | 'Hz'
                      | 'kHz'
                      | 'dpi'
                      | 'dpcm'
                      | 'dppx'
                      | 'fr'
                    )[]
                  ]
                | CoreRule
              ) &
              (
                | ((
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  ) &
                    string)
                | ((
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  ) &
                    unknown[])
                | (
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  )
              ))[]
          ]
      ) &
        string)
    | ((
        | null
        | (
            | 'em'
            | 'ex'
            | 'px'
            | '%'
            | 'rem'
            | 'vw'
            | 'vh'
            | 'vm'
            | 'vmin'
            | 'vmax'
            | 'ch'
            | 'in'
            | 'cm'
            | 'mm'
            | 'q'
            | 'pt'
            | 'pc'
            | 'deg'
            | 'grad'
            | 'rad'
            | 'turn'
            | 'ms'
            | 's'
            | 'Hz'
            | 'kHz'
            | 'dpi'
            | 'dpcm'
            | 'dppx'
            | 'fr'
            | []
          )
        | [
            (
              | (
                  | 'em'
                  | 'ex'
                  | 'px'
                  | '%'
                  | 'rem'
                  | 'vw'
                  | 'vh'
                  | 'vm'
                  | 'vmin'
                  | 'vmax'
                  | 'ch'
                  | 'in'
                  | 'cm'
                  | 'mm'
                  | 'q'
                  | 'pt'
                  | 'pc'
                  | 'deg'
                  | 'grad'
                  | 'rad'
                  | 'turn'
                  | 'ms'
                  | 's'
                  | 'Hz'
                  | 'kHz'
                  | 'dpi'
                  | 'dpcm'
                  | 'dppx'
                  | 'fr'
                  | []
                  | {}
                )
              | [
                  (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  ),
                  ...(
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  )[]
                ]
              | CoreRule
            ) &
              (
                | ((
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  ) &
                    string)
                | ((
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  ) &
                    unknown[])
                | (
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  )
              ) &
              (
                | (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                    | []
                    | {}
                  )
                | [
                    (
                      | 'em'
                      | 'ex'
                      | 'px'
                      | '%'
                      | 'rem'
                      | 'vw'
                      | 'vh'
                      | 'vm'
                      | 'vmin'
                      | 'vmax'
                      | 'ch'
                      | 'in'
                      | 'cm'
                      | 'mm'
                      | 'q'
                      | 'pt'
                      | 'pc'
                      | 'deg'
                      | 'grad'
                      | 'rad'
                      | 'turn'
                      | 'ms'
                      | 's'
                      | 'Hz'
                      | 'kHz'
                      | 'dpi'
                      | 'dpcm'
                      | 'dppx'
                      | 'fr'
                    ),
                    ...(
                      | 'em'
                      | 'ex'
                      | 'px'
                      | '%'
                      | 'rem'
                      | 'vw'
                      | 'vh'
                      | 'vm'
                      | 'vmin'
                      | 'vmax'
                      | 'ch'
                      | 'in'
                      | 'cm'
                      | 'mm'
                      | 'q'
                      | 'pt'
                      | 'pc'
                      | 'deg'
                      | 'grad'
                      | 'rad'
                      | 'turn'
                      | 'ms'
                      | 's'
                      | 'Hz'
                      | 'kHz'
                      | 'dpi'
                      | 'dpcm'
                      | 'dppx'
                      | 'fr'
                    )[]
                  ]
                | CoreRule
              ) &
              (
                | ((
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  ) &
                    string)
                | ((
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  ) &
                    unknown[])
                | (
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  )
              ),
            ...((
              | (
                  | 'em'
                  | 'ex'
                  | 'px'
                  | '%'
                  | 'rem'
                  | 'vw'
                  | 'vh'
                  | 'vm'
                  | 'vmin'
                  | 'vmax'
                  | 'ch'
                  | 'in'
                  | 'cm'
                  | 'mm'
                  | 'q'
                  | 'pt'
                  | 'pc'
                  | 'deg'
                  | 'grad'
                  | 'rad'
                  | 'turn'
                  | 'ms'
                  | 's'
                  | 'Hz'
                  | 'kHz'
                  | 'dpi'
                  | 'dpcm'
                  | 'dppx'
                  | 'fr'
                  | []
                  | {}
                )
              | [
                  (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  ),
                  ...(
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                  )[]
                ]
              | CoreRule
            ) &
              (
                | ((
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  ) &
                    string)
                | ((
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  ) &
                    unknown[])
                | (
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  )
              ) &
              (
                | (
                    | 'em'
                    | 'ex'
                    | 'px'
                    | '%'
                    | 'rem'
                    | 'vw'
                    | 'vh'
                    | 'vm'
                    | 'vmin'
                    | 'vmax'
                    | 'ch'
                    | 'in'
                    | 'cm'
                    | 'mm'
                    | 'q'
                    | 'pt'
                    | 'pc'
                    | 'deg'
                    | 'grad'
                    | 'rad'
                    | 'turn'
                    | 'ms'
                    | 's'
                    | 'Hz'
                    | 'kHz'
                    | 'dpi'
                    | 'dpcm'
                    | 'dppx'
                    | 'fr'
                    | []
                    | {}
                  )
                | [
                    (
                      | 'em'
                      | 'ex'
                      | 'px'
                      | '%'
                      | 'rem'
                      | 'vw'
                      | 'vh'
                      | 'vm'
                      | 'vmin'
                      | 'vmax'
                      | 'ch'
                      | 'in'
                      | 'cm'
                      | 'mm'
                      | 'q'
                      | 'pt'
                      | 'pc'
                      | 'deg'
                      | 'grad'
                      | 'rad'
                      | 'turn'
                      | 'ms'
                      | 's'
                      | 'Hz'
                      | 'kHz'
                      | 'dpi'
                      | 'dpcm'
                      | 'dppx'
                      | 'fr'
                    ),
                    ...(
                      | 'em'
                      | 'ex'
                      | 'px'
                      | '%'
                      | 'rem'
                      | 'vw'
                      | 'vh'
                      | 'vm'
                      | 'vmin'
                      | 'vmax'
                      | 'ch'
                      | 'in'
                      | 'cm'
                      | 'mm'
                      | 'q'
                      | 'pt'
                      | 'pc'
                      | 'deg'
                      | 'grad'
                      | 'rad'
                      | 'turn'
                      | 'ms'
                      | 's'
                      | 'Hz'
                      | 'kHz'
                      | 'dpi'
                      | 'dpcm'
                      | 'dppx'
                      | 'fr'
                    )[]
                  ]
                | CoreRule
              ) &
              (
                | ((
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  ) &
                    string)
                | ((
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  ) &
                    unknown[])
                | (
                    | (
                        | 'em'
                        | 'ex'
                        | 'px'
                        | '%'
                        | 'rem'
                        | 'vw'
                        | 'vh'
                        | 'vm'
                        | 'vmin'
                        | 'vmax'
                        | 'ch'
                        | 'in'
                        | 'cm'
                        | 'mm'
                        | 'q'
                        | 'pt'
                        | 'pc'
                        | 'deg'
                        | 'grad'
                        | 'rad'
                        | 'turn'
                        | 'ms'
                        | 's'
                        | 'Hz'
                        | 'kHz'
                        | 'dpi'
                        | 'dpcm'
                        | 'dppx'
                        | 'fr'
                        | []
                        | {}
                      )
                    | [
                        (
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        ),
                        ...(
                          | 'em'
                          | 'ex'
                          | 'px'
                          | '%'
                          | 'rem'
                          | 'vw'
                          | 'vh'
                          | 'vm'
                          | 'vmin'
                          | 'vmax'
                          | 'ch'
                          | 'in'
                          | 'cm'
                          | 'mm'
                          | 'q'
                          | 'pt'
                          | 'pc'
                          | 'deg'
                          | 'grad'
                          | 'rad'
                          | 'turn'
                          | 'ms'
                          | 's'
                          | 'Hz'
                          | 'kHz'
                          | 'dpi'
                          | 'dpcm'
                          | 'dppx'
                          | 'fr'
                        )[]
                      ]
                    | CoreRule
                  )
              ))[]
          ]
      ) &
        unknown[])
  );

export interface JSONSchemaForTheStylelintConfigurationFiles {
  extends?: SimpleStringOrArrayStringRule;
  plugins?: SimpleArrayStringRule;
  /**
   * Specify a custom syntax to use on your code.
   */
  customSyntax?: string;
  /**
   * Provide rule and behavior overrides for files that match particular glob patterns.
   */
  overrides?: {
    files?: string[];
    customSyntax?: string;
    rules?: AllRules;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Processors are functions that hook into stylelint's pipeline, modifying code on its way into stylelint and modifying results on their way out
   */
  processors?: (
    | string
    | []
    | [
        string,
        ...{
          [k: string]: unknown | undefined;
        }[]
      ]
  )[];
  /**
   * Ignore stylelint-disable (e.g. /* stylelint-disable block-no-empty * /) comments.
   */
  ignoreDisables?: boolean;
  ignoreFiles?: SimpleStringOrArrayStringRule;
  /**
   * The default severity level for all rules that do not have a severity specified in their secondary options
   */
  defaultSeverity?: 'warning' | 'error';
  reportDescriptionlessDisables?: BooleanRule;
  reportInvalidScopeDisables?: BooleanRule;
  reportNeedlessDisables?: BooleanRule;
  rules?: AllRules;
  [k: string]: unknown | undefined;
}
export interface AtRule {
  'at-rule-blacklist'?: ArrayStringRule;
  /**
   * Require or disallow an empty line before at-rules
   */
  'at-rule-empty-line-before'?: (
    | null
    | ('always' | 'never' | [])
    | [
        (('always' | 'never' | {}) | CoreRule) &
          (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
          (('always' | 'never' | {}) | CoreRule) &
          (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)),
        (('always' | 'never' | {}) | CoreRule) &
          (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
          (('always' | 'never' | {}) | CoreRule) &
          (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | ('always' | 'never' | [])
            | [
                (('always' | 'never' | {}) | CoreRule) &
                  (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                  (('always' | 'never' | {}) | CoreRule) &
                  (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)),
                (('always' | 'never' | {}) | CoreRule) &
                  (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                  (('always' | 'never' | {}) | CoreRule) &
                  (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | ('always' | 'never' | [])
          | [
              (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)),
              (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule))
            ]
        ) &
          string)
      | ((
          | null
          | ('always' | 'never' | [])
          | [
              (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)),
              (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  'at-rule-name-case'?: LowerUpperRule;
  'at-rule-name-newline-after'?: AlwaysMultiLineRule;
  /**
   * Require a single space after at-rule names
   */
  'at-rule-name-space-after'?: (
    | null
    | ('always' | 'always-single-line' | [])
    | [
        (('always' | 'always-single-line' | {}) | CoreRule) &
          (
            | ((('always' | 'always-single-line' | {}) | CoreRule) & string)
            | (('always' | 'always-single-line' | {}) | CoreRule)
          ) &
          (('always' | 'always-single-line' | {}) | CoreRule) &
          (
            | ((('always' | 'always-single-line' | {}) | CoreRule) & string)
            | (('always' | 'always-single-line' | {}) | CoreRule)
          ),
        (('always' | 'always-single-line' | {}) | CoreRule) &
          (
            | ((('always' | 'always-single-line' | {}) | CoreRule) & string)
            | (('always' | 'always-single-line' | {}) | CoreRule)
          ) &
          (('always' | 'always-single-line' | {}) | CoreRule) &
          (
            | ((('always' | 'always-single-line' | {}) | CoreRule) & string)
            | (('always' | 'always-single-line' | {}) | CoreRule)
          )
      ]
  ) &
    (
      | (null &
          (
            | null
            | ('always' | 'always-single-line' | [])
            | [
                (('always' | 'always-single-line' | {}) | CoreRule) &
                  (
                    | ((('always' | 'always-single-line' | {}) | CoreRule) & string)
                    | (('always' | 'always-single-line' | {}) | CoreRule)
                  ) &
                  (('always' | 'always-single-line' | {}) | CoreRule) &
                  (
                    | ((('always' | 'always-single-line' | {}) | CoreRule) & string)
                    | (('always' | 'always-single-line' | {}) | CoreRule)
                  ),
                (('always' | 'always-single-line' | {}) | CoreRule) &
                  (
                    | ((('always' | 'always-single-line' | {}) | CoreRule) & string)
                    | (('always' | 'always-single-line' | {}) | CoreRule)
                  ) &
                  (('always' | 'always-single-line' | {}) | CoreRule) &
                  (
                    | ((('always' | 'always-single-line' | {}) | CoreRule) & string)
                    | (('always' | 'always-single-line' | {}) | CoreRule)
                  )
              ]
          ))
      | ((
          | null
          | ('always' | 'always-single-line' | [])
          | [
              (('always' | 'always-single-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'always-single-line' | {}) | CoreRule) & string)
                  | (('always' | 'always-single-line' | {}) | CoreRule)
                ) &
                (('always' | 'always-single-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'always-single-line' | {}) | CoreRule) & string)
                  | (('always' | 'always-single-line' | {}) | CoreRule)
                ),
              (('always' | 'always-single-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'always-single-line' | {}) | CoreRule) & string)
                  | (('always' | 'always-single-line' | {}) | CoreRule)
                ) &
                (('always' | 'always-single-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'always-single-line' | {}) | CoreRule) & string)
                  | (('always' | 'always-single-line' | {}) | CoreRule)
                )
            ]
        ) &
          string)
      | ((
          | null
          | ('always' | 'always-single-line' | [])
          | [
              (('always' | 'always-single-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'always-single-line' | {}) | CoreRule) & string)
                  | (('always' | 'always-single-line' | {}) | CoreRule)
                ) &
                (('always' | 'always-single-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'always-single-line' | {}) | CoreRule) & string)
                  | (('always' | 'always-single-line' | {}) | CoreRule)
                ),
              (('always' | 'always-single-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'always-single-line' | {}) | CoreRule) & string)
                  | (('always' | 'always-single-line' | {}) | CoreRule)
                ) &
                (('always' | 'always-single-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'always-single-line' | {}) | CoreRule) & string)
                  | (('always' | 'always-single-line' | {}) | CoreRule)
                )
            ]
        ) &
          unknown[])
    );
  /**
   * Disallow unknown at-rules
   */
  'at-rule-no-unknown'?: (
    | null
    | (true | [])
    | [
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | (boolean &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | (true | [])
          | [
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  'at-rule-no-vendor-prefix'?: BooleanRule;
  /**
   * Require a newline after the semicolon of at-rules
   */
  'at-rule-semicolon-newline-after'?: (
    | null
    | ('always' | [])
    | [
        (('always' | {}) | CoreRule) &
          (((('always' | {}) | CoreRule) & string) | (('always' | {}) | CoreRule)) &
          (('always' | {}) | CoreRule) &
          (((('always' | {}) | CoreRule) & string) | (('always' | {}) | CoreRule)),
        (('always' | {}) | CoreRule) &
          (((('always' | {}) | CoreRule) & string) | (('always' | {}) | CoreRule)) &
          (('always' | {}) | CoreRule) &
          (((('always' | {}) | CoreRule) & string) | (('always' | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | ('always' | [])
            | [
                (('always' | {}) | CoreRule) &
                  (((('always' | {}) | CoreRule) & string) | (('always' | {}) | CoreRule)) &
                  (('always' | {}) | CoreRule) &
                  (((('always' | {}) | CoreRule) & string) | (('always' | {}) | CoreRule)),
                (('always' | {}) | CoreRule) &
                  (((('always' | {}) | CoreRule) & string) | (('always' | {}) | CoreRule)) &
                  (('always' | {}) | CoreRule) &
                  (((('always' | {}) | CoreRule) & string) | (('always' | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | ('always' | [])
          | [
              (('always' | {}) | CoreRule) &
                (((('always' | {}) | CoreRule) & string) | (('always' | {}) | CoreRule)) &
                (('always' | {}) | CoreRule) &
                (((('always' | {}) | CoreRule) & string) | (('always' | {}) | CoreRule)),
              (('always' | {}) | CoreRule) &
                (((('always' | {}) | CoreRule) & string) | (('always' | {}) | CoreRule)) &
                (('always' | {}) | CoreRule) &
                (((('always' | {}) | CoreRule) & string) | (('always' | {}) | CoreRule))
            ]
        ) &
          string)
      | ((
          | null
          | ('always' | [])
          | [
              (('always' | {}) | CoreRule) &
                (((('always' | {}) | CoreRule) & string) | (('always' | {}) | CoreRule)) &
                (('always' | {}) | CoreRule) &
                (((('always' | {}) | CoreRule) & string) | (('always' | {}) | CoreRule)),
              (('always' | {}) | CoreRule) &
                (((('always' | {}) | CoreRule) & string) | (('always' | {}) | CoreRule)) &
                (('always' | {}) | CoreRule) &
                (((('always' | {}) | CoreRule) & string) | (('always' | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  /**
   * @deprecated
   * Require a single space or disallow whitespace before the semicolons of at-rules
   */
  'at-rule-semicolon-space-before'?: {
    [k: string]: unknown | undefined;
  };
  'at-rule-whitelist'?: ArrayStringRule;
  [k: string]: unknown | undefined;
}
export interface CoreRule {
  disableFix?: boolean;
  /**
   * Custom message that will be used in errors and warnings
   */
  message?: string;
  reportDisables?: boolean;
  /**
   * Message status
   */
  severity?: 'warning' | 'error';
  url?: string;
  [k: string]: unknown | undefined;
}
export interface Block {
  /**
   * Require or disallow an empty line before the closing brace of blocks
   */
  'block-closing-brace-empty-line-before'?: (
    | null
    | ('always-multi-line' | 'never' | [])
    | [
        (('always-multi-line' | 'never' | {}) | CoreRule) &
          (
            | ((('always-multi-line' | 'never' | {}) | CoreRule) & string)
            | (('always-multi-line' | 'never' | {}) | CoreRule)
          ) &
          (('always-multi-line' | 'never' | {}) | CoreRule) &
          (
            | ((('always-multi-line' | 'never' | {}) | CoreRule) & string)
            | (('always-multi-line' | 'never' | {}) | CoreRule)
          ),
        (('always-multi-line' | 'never' | {}) | CoreRule) &
          (
            | ((('always-multi-line' | 'never' | {}) | CoreRule) & string)
            | (('always-multi-line' | 'never' | {}) | CoreRule)
          ) &
          (('always-multi-line' | 'never' | {}) | CoreRule) &
          (
            | ((('always-multi-line' | 'never' | {}) | CoreRule) & string)
            | (('always-multi-line' | 'never' | {}) | CoreRule)
          )
      ]
  ) &
    (
      | (null &
          (
            | null
            | ('always-multi-line' | 'never' | [])
            | [
                (('always-multi-line' | 'never' | {}) | CoreRule) &
                  (
                    | ((('always-multi-line' | 'never' | {}) | CoreRule) & string)
                    | (('always-multi-line' | 'never' | {}) | CoreRule)
                  ) &
                  (('always-multi-line' | 'never' | {}) | CoreRule) &
                  (
                    | ((('always-multi-line' | 'never' | {}) | CoreRule) & string)
                    | (('always-multi-line' | 'never' | {}) | CoreRule)
                  ),
                (('always-multi-line' | 'never' | {}) | CoreRule) &
                  (
                    | ((('always-multi-line' | 'never' | {}) | CoreRule) & string)
                    | (('always-multi-line' | 'never' | {}) | CoreRule)
                  ) &
                  (('always-multi-line' | 'never' | {}) | CoreRule) &
                  (
                    | ((('always-multi-line' | 'never' | {}) | CoreRule) & string)
                    | (('always-multi-line' | 'never' | {}) | CoreRule)
                  )
              ]
          ))
      | ((
          | null
          | ('always-multi-line' | 'never' | [])
          | [
              (('always-multi-line' | 'never' | {}) | CoreRule) &
                (
                  | ((('always-multi-line' | 'never' | {}) | CoreRule) & string)
                  | (('always-multi-line' | 'never' | {}) | CoreRule)
                ) &
                (('always-multi-line' | 'never' | {}) | CoreRule) &
                (
                  | ((('always-multi-line' | 'never' | {}) | CoreRule) & string)
                  | (('always-multi-line' | 'never' | {}) | CoreRule)
                ),
              (('always-multi-line' | 'never' | {}) | CoreRule) &
                (
                  | ((('always-multi-line' | 'never' | {}) | CoreRule) & string)
                  | (('always-multi-line' | 'never' | {}) | CoreRule)
                ) &
                (('always-multi-line' | 'never' | {}) | CoreRule) &
                (
                  | ((('always-multi-line' | 'never' | {}) | CoreRule) & string)
                  | (('always-multi-line' | 'never' | {}) | CoreRule)
                )
            ]
        ) &
          string)
      | ((
          | null
          | ('always-multi-line' | 'never' | [])
          | [
              (('always-multi-line' | 'never' | {}) | CoreRule) &
                (
                  | ((('always-multi-line' | 'never' | {}) | CoreRule) & string)
                  | (('always-multi-line' | 'never' | {}) | CoreRule)
                ) &
                (('always-multi-line' | 'never' | {}) | CoreRule) &
                (
                  | ((('always-multi-line' | 'never' | {}) | CoreRule) & string)
                  | (('always-multi-line' | 'never' | {}) | CoreRule)
                ),
              (('always-multi-line' | 'never' | {}) | CoreRule) &
                (
                  | ((('always-multi-line' | 'never' | {}) | CoreRule) & string)
                  | (('always-multi-line' | 'never' | {}) | CoreRule)
                ) &
                (('always-multi-line' | 'never' | {}) | CoreRule) &
                (
                  | ((('always-multi-line' | 'never' | {}) | CoreRule) & string)
                  | (('always-multi-line' | 'never' | {}) | CoreRule)
                )
            ]
        ) &
          unknown[])
    );
  'block-closing-brace-newline-after'?: NewlineSpaceWithIgnoreRule;
  'block-closing-brace-newline-before'?: NewlineRule;
  'block-closing-brace-space-after'?: NewlineSpaceRule;
  'block-closing-brace-space-before'?: NewlineSpaceRule;
  'block-no-empty'?: BooleanRule;
  'block-no-single-line'?: BooleanRule;
  'block-opening-brace-newline-after'?: NewlineRule;
  /**
   * Require a newline or disallow whitespace before the opening brace of blocks
   */
  'block-opening-brace-newline-before'?: (
    | null
    | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        (
          | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
          | CoreRule
        ) &
          (
            | ((
                | (
                    | 'always'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              ) &
                string)
            | (
                | (
                    | 'always'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              )
          ) &
          (
            | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
            | CoreRule
          ) &
          (
            | ((
                | (
                    | 'always'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              ) &
                string)
            | (
                | (
                    | 'always'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              )
          ),
        (
          | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
          | CoreRule
        ) &
          (
            | ((
                | (
                    | 'always'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              ) &
                string)
            | (
                | (
                    | 'always'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              )
          ) &
          (
            | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
            | CoreRule
          ) &
          (
            | ((
                | (
                    | 'always'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              ) &
                string)
            | (
                | (
                    | 'always'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              )
          )
      ]
  ) &
    (
      | (null &
          (
            | null
            | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | [])
            | [
                (
                  | (
                      | 'always'
                      | 'always-single-line'
                      | 'never-single-line'
                      | 'always-multi-line'
                      | 'never-multi-line'
                      | {}
                    )
                  | CoreRule
                ) &
                  (
                    | ((
                        | (
                            | 'always'
                            | 'always-single-line'
                            | 'never-single-line'
                            | 'always-multi-line'
                            | 'never-multi-line'
                            | {}
                          )
                        | CoreRule
                      ) &
                        string)
                    | (
                        | (
                            | 'always'
                            | 'always-single-line'
                            | 'never-single-line'
                            | 'always-multi-line'
                            | 'never-multi-line'
                            | {}
                          )
                        | CoreRule
                      )
                  ) &
                  (
                    | (
                        | 'always'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  ) &
                  (
                    | ((
                        | (
                            | 'always'
                            | 'always-single-line'
                            | 'never-single-line'
                            | 'always-multi-line'
                            | 'never-multi-line'
                            | {}
                          )
                        | CoreRule
                      ) &
                        string)
                    | (
                        | (
                            | 'always'
                            | 'always-single-line'
                            | 'never-single-line'
                            | 'always-multi-line'
                            | 'never-multi-line'
                            | {}
                          )
                        | CoreRule
                      )
                  ),
                (
                  | (
                      | 'always'
                      | 'always-single-line'
                      | 'never-single-line'
                      | 'always-multi-line'
                      | 'never-multi-line'
                      | {}
                    )
                  | CoreRule
                ) &
                  (
                    | ((
                        | (
                            | 'always'
                            | 'always-single-line'
                            | 'never-single-line'
                            | 'always-multi-line'
                            | 'never-multi-line'
                            | {}
                          )
                        | CoreRule
                      ) &
                        string)
                    | (
                        | (
                            | 'always'
                            | 'always-single-line'
                            | 'never-single-line'
                            | 'always-multi-line'
                            | 'never-multi-line'
                            | {}
                          )
                        | CoreRule
                      )
                  ) &
                  (
                    | (
                        | 'always'
                        | 'always-single-line'
                        | 'never-single-line'
                        | 'always-multi-line'
                        | 'never-multi-line'
                        | {}
                      )
                    | CoreRule
                  ) &
                  (
                    | ((
                        | (
                            | 'always'
                            | 'always-single-line'
                            | 'never-single-line'
                            | 'always-multi-line'
                            | 'never-multi-line'
                            | {}
                          )
                        | CoreRule
                      ) &
                        string)
                    | (
                        | (
                            | 'always'
                            | 'always-single-line'
                            | 'never-single-line'
                            | 'always-multi-line'
                            | 'never-multi-line'
                            | {}
                          )
                        | CoreRule
                      )
                  )
              ]
          ))
      | ((
          | null
          | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | [])
          | [
              (
                | (
                    | 'always'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              ) &
                (
                  | ((
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    ) &
                      string)
                  | (
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    )
                ) &
                (
                  | (
                      | 'always'
                      | 'always-single-line'
                      | 'never-single-line'
                      | 'always-multi-line'
                      | 'never-multi-line'
                      | {}
                    )
                  | CoreRule
                ) &
                (
                  | ((
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    ) &
                      string)
                  | (
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    )
                ),
              (
                | (
                    | 'always'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              ) &
                (
                  | ((
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    ) &
                      string)
                  | (
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    )
                ) &
                (
                  | (
                      | 'always'
                      | 'always-single-line'
                      | 'never-single-line'
                      | 'always-multi-line'
                      | 'never-multi-line'
                      | {}
                    )
                  | CoreRule
                ) &
                (
                  | ((
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    ) &
                      string)
                  | (
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    )
                )
            ]
        ) &
          string)
      | ((
          | null
          | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | [])
          | [
              (
                | (
                    | 'always'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              ) &
                (
                  | ((
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    ) &
                      string)
                  | (
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    )
                ) &
                (
                  | (
                      | 'always'
                      | 'always-single-line'
                      | 'never-single-line'
                      | 'always-multi-line'
                      | 'never-multi-line'
                      | {}
                    )
                  | CoreRule
                ) &
                (
                  | ((
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    ) &
                      string)
                  | (
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    )
                ),
              (
                | (
                    | 'always'
                    | 'always-single-line'
                    | 'never-single-line'
                    | 'always-multi-line'
                    | 'never-multi-line'
                    | {}
                  )
                | CoreRule
              ) &
                (
                  | ((
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    ) &
                      string)
                  | (
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    )
                ) &
                (
                  | (
                      | 'always'
                      | 'always-single-line'
                      | 'never-single-line'
                      | 'always-multi-line'
                      | 'never-multi-line'
                      | {}
                    )
                  | CoreRule
                ) &
                (
                  | ((
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    ) &
                      string)
                  | (
                      | (
                          | 'always'
                          | 'always-single-line'
                          | 'never-single-line'
                          | 'always-multi-line'
                          | 'never-multi-line'
                          | {}
                        )
                      | CoreRule
                    )
                )
            ]
        ) &
          unknown[])
    );
  'block-opening-brace-space-after'?: NewlineSpaceRule;
  'block-opening-brace-space-before'?: NewlineSpaceWithIgnoreRule;
  [k: string]: unknown | undefined;
}
export interface Color {
  'color-hex-case'?: LowerUpperRule;
  /**
   * Specify short or long notation for hex colors
   */
  'color-hex-length'?: (
    | null
    | ('short' | 'long' | [])
    | [
        (('short' | 'long' | {}) | CoreRule) &
          (((('short' | 'long' | {}) | CoreRule) & string) | (('short' | 'long' | {}) | CoreRule)) &
          (('short' | 'long' | {}) | CoreRule) &
          (((('short' | 'long' | {}) | CoreRule) & string) | (('short' | 'long' | {}) | CoreRule)),
        (('short' | 'long' | {}) | CoreRule) &
          (((('short' | 'long' | {}) | CoreRule) & string) | (('short' | 'long' | {}) | CoreRule)) &
          (('short' | 'long' | {}) | CoreRule) &
          (((('short' | 'long' | {}) | CoreRule) & string) | (('short' | 'long' | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | ('short' | 'long' | [])
            | [
                (('short' | 'long' | {}) | CoreRule) &
                  (((('short' | 'long' | {}) | CoreRule) & string) | (('short' | 'long' | {}) | CoreRule)) &
                  (('short' | 'long' | {}) | CoreRule) &
                  (((('short' | 'long' | {}) | CoreRule) & string) | (('short' | 'long' | {}) | CoreRule)),
                (('short' | 'long' | {}) | CoreRule) &
                  (((('short' | 'long' | {}) | CoreRule) & string) | (('short' | 'long' | {}) | CoreRule)) &
                  (('short' | 'long' | {}) | CoreRule) &
                  (((('short' | 'long' | {}) | CoreRule) & string) | (('short' | 'long' | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | ('short' | 'long' | [])
          | [
              (('short' | 'long' | {}) | CoreRule) &
                (((('short' | 'long' | {}) | CoreRule) & string) | (('short' | 'long' | {}) | CoreRule)) &
                (('short' | 'long' | {}) | CoreRule) &
                (((('short' | 'long' | {}) | CoreRule) & string) | (('short' | 'long' | {}) | CoreRule)),
              (('short' | 'long' | {}) | CoreRule) &
                (((('short' | 'long' | {}) | CoreRule) & string) | (('short' | 'long' | {}) | CoreRule)) &
                (('short' | 'long' | {}) | CoreRule) &
                (((('short' | 'long' | {}) | CoreRule) & string) | (('short' | 'long' | {}) | CoreRule))
            ]
        ) &
          string)
      | ((
          | null
          | ('short' | 'long' | [])
          | [
              (('short' | 'long' | {}) | CoreRule) &
                (((('short' | 'long' | {}) | CoreRule) & string) | (('short' | 'long' | {}) | CoreRule)) &
                (('short' | 'long' | {}) | CoreRule) &
                (((('short' | 'long' | {}) | CoreRule) & string) | (('short' | 'long' | {}) | CoreRule)),
              (('short' | 'long' | {}) | CoreRule) &
                (((('short' | 'long' | {}) | CoreRule) & string) | (('short' | 'long' | {}) | CoreRule)) &
                (('short' | 'long' | {}) | CoreRule) &
                (((('short' | 'long' | {}) | CoreRule) & string) | (('short' | 'long' | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  /**
   * Require (where possible) or disallow named colors
   */
  'color-named'?: (
    | null
    | ('always-where-possible' | 'never' | [])
    | [
        (('always-where-possible' | 'never' | {}) | CoreRule) &
          (
            | ((('always-where-possible' | 'never' | {}) | CoreRule) & string)
            | (('always-where-possible' | 'never' | {}) | CoreRule)
          ) &
          (('always-where-possible' | 'never' | {}) | CoreRule) &
          (
            | ((('always-where-possible' | 'never' | {}) | CoreRule) & string)
            | (('always-where-possible' | 'never' | {}) | CoreRule)
          ),
        (('always-where-possible' | 'never' | {}) | CoreRule) &
          (
            | ((('always-where-possible' | 'never' | {}) | CoreRule) & string)
            | (('always-where-possible' | 'never' | {}) | CoreRule)
          ) &
          (('always-where-possible' | 'never' | {}) | CoreRule) &
          (
            | ((('always-where-possible' | 'never' | {}) | CoreRule) & string)
            | (('always-where-possible' | 'never' | {}) | CoreRule)
          )
      ]
  ) &
    (
      | (null &
          (
            | null
            | ('always-where-possible' | 'never' | [])
            | [
                (('always-where-possible' | 'never' | {}) | CoreRule) &
                  (
                    | ((('always-where-possible' | 'never' | {}) | CoreRule) & string)
                    | (('always-where-possible' | 'never' | {}) | CoreRule)
                  ) &
                  (('always-where-possible' | 'never' | {}) | CoreRule) &
                  (
                    | ((('always-where-possible' | 'never' | {}) | CoreRule) & string)
                    | (('always-where-possible' | 'never' | {}) | CoreRule)
                  ),
                (('always-where-possible' | 'never' | {}) | CoreRule) &
                  (
                    | ((('always-where-possible' | 'never' | {}) | CoreRule) & string)
                    | (('always-where-possible' | 'never' | {}) | CoreRule)
                  ) &
                  (('always-where-possible' | 'never' | {}) | CoreRule) &
                  (
                    | ((('always-where-possible' | 'never' | {}) | CoreRule) & string)
                    | (('always-where-possible' | 'never' | {}) | CoreRule)
                  )
              ]
          ))
      | ((
          | null
          | ('always-where-possible' | 'never' | [])
          | [
              (('always-where-possible' | 'never' | {}) | CoreRule) &
                (
                  | ((('always-where-possible' | 'never' | {}) | CoreRule) & string)
                  | (('always-where-possible' | 'never' | {}) | CoreRule)
                ) &
                (('always-where-possible' | 'never' | {}) | CoreRule) &
                (
                  | ((('always-where-possible' | 'never' | {}) | CoreRule) & string)
                  | (('always-where-possible' | 'never' | {}) | CoreRule)
                ),
              (('always-where-possible' | 'never' | {}) | CoreRule) &
                (
                  | ((('always-where-possible' | 'never' | {}) | CoreRule) & string)
                  | (('always-where-possible' | 'never' | {}) | CoreRule)
                ) &
                (('always-where-possible' | 'never' | {}) | CoreRule) &
                (
                  | ((('always-where-possible' | 'never' | {}) | CoreRule) & string)
                  | (('always-where-possible' | 'never' | {}) | CoreRule)
                )
            ]
        ) &
          string)
      | ((
          | null
          | ('always-where-possible' | 'never' | [])
          | [
              (('always-where-possible' | 'never' | {}) | CoreRule) &
                (
                  | ((('always-where-possible' | 'never' | {}) | CoreRule) & string)
                  | (('always-where-possible' | 'never' | {}) | CoreRule)
                ) &
                (('always-where-possible' | 'never' | {}) | CoreRule) &
                (
                  | ((('always-where-possible' | 'never' | {}) | CoreRule) & string)
                  | (('always-where-possible' | 'never' | {}) | CoreRule)
                ),
              (('always-where-possible' | 'never' | {}) | CoreRule) &
                (
                  | ((('always-where-possible' | 'never' | {}) | CoreRule) & string)
                  | (('always-where-possible' | 'never' | {}) | CoreRule)
                ) &
                (('always-where-possible' | 'never' | {}) | CoreRule) &
                (
                  | ((('always-where-possible' | 'never' | {}) | CoreRule) & string)
                  | (('always-where-possible' | 'never' | {}) | CoreRule)
                )
            ]
        ) &
          unknown[])
    );
  'color-no-hex'?: BooleanRule;
  'color-no-invalid-hex'?: BooleanRule;
  [k: string]: unknown | undefined;
}
export interface Comment {
  /**
   * Require or disallow an empty line before comments
   */
  'comment-empty-line-before'?: (
    | null
    | ('always' | 'never' | [])
    | [
        (('always' | 'never' | {}) | CoreRule) &
          (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
          (('always' | 'never' | {}) | CoreRule) &
          (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)),
        (('always' | 'never' | {}) | CoreRule) &
          (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
          (('always' | 'never' | {}) | CoreRule) &
          (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | ('always' | 'never' | [])
            | [
                (('always' | 'never' | {}) | CoreRule) &
                  (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                  (('always' | 'never' | {}) | CoreRule) &
                  (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)),
                (('always' | 'never' | {}) | CoreRule) &
                  (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                  (('always' | 'never' | {}) | CoreRule) &
                  (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | ('always' | 'never' | [])
          | [
              (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)),
              (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule))
            ]
        ) &
          string)
      | ((
          | null
          | ('always' | 'never' | [])
          | [
              (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)),
              (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  'comment-no-empty'?: BooleanRule;
  'comment-whitespace-inside'?: AlwaysNeverRule;
  'comment-word-blacklist'?: ArrayStringRule;
  [k: string]: unknown | undefined;
}
export interface CustomMedia {
  'custom-media-pattern'?: StringRule;
  /**
   * Disallow unknown custom media queries
   */
  'no-unknown-custom-media'?: (true | null) | [true | null] | [true | null, CoreRule1];
  [k: string]: unknown | undefined;
}
export interface CoreRule1 {
  disableFix?: boolean;
  /**
   * Custom message that will be used in errors and warnings
   */
  message?: string;
  reportDisables?: boolean;
  /**
   * Message status
   */
  severity?: 'warning' | 'error';
  url?: string;
}
export interface CustomProperty {
  /**
   * Require or disallow an empty line before custom properties
   */
  'custom-property-empty-line-before'?: (
    | null
    | ('always' | 'never' | [])
    | [
        (('always' | 'never' | {}) | CoreRule) &
          (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
          (('always' | 'never' | {}) | CoreRule) &
          (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)),
        (('always' | 'never' | {}) | CoreRule) &
          (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
          (('always' | 'never' | {}) | CoreRule) &
          (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | ('always' | 'never' | [])
            | [
                (('always' | 'never' | {}) | CoreRule) &
                  (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                  (('always' | 'never' | {}) | CoreRule) &
                  (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)),
                (('always' | 'never' | {}) | CoreRule) &
                  (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                  (('always' | 'never' | {}) | CoreRule) &
                  (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | ('always' | 'never' | [])
          | [
              (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)),
              (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule))
            ]
        ) &
          string)
      | ((
          | null
          | ('always' | 'never' | [])
          | [
              (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)),
              (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  'custom-property-no-outside-root'?: BooleanRule;
  'custom-property-pattern'?: StringRule;
  /**
   * Disallow unknown custom properties
   */
  'no-unknown-custom-properties'?: (true | null) | [true | null] | [true | null, CoreRule2];
  [k: string]: unknown | undefined;
}
export interface CoreRule2 {
  disableFix?: boolean;
  /**
   * Custom message that will be used in errors and warnings
   */
  message?: string;
  reportDisables?: boolean;
  /**
   * Message status
   */
  severity?: 'warning' | 'error';
  url?: string;
}
export interface Declaration {
  'declaration-bang-space-after'?: AlwaysNeverRule;
  'declaration-bang-space-before'?: AlwaysNeverRule;
  'declaration-colon-newline-after'?: AlwaysMultiLineRule;
  /**
   * Require a single space or disallow whitespace after the colon of declarations
   */
  'declaration-colon-space-after'?: (
    | null
    | ('always' | 'never' | 'always-single-line' | [])
    | [
        (('always' | 'never' | 'always-single-line' | {}) | CoreRule) &
          (
            | ((('always' | 'never' | 'always-single-line' | {}) | CoreRule) & string)
            | (('always' | 'never' | 'always-single-line' | {}) | CoreRule)
          ) &
          (('always' | 'never' | 'always-single-line' | {}) | CoreRule) &
          (
            | ((('always' | 'never' | 'always-single-line' | {}) | CoreRule) & string)
            | (('always' | 'never' | 'always-single-line' | {}) | CoreRule)
          ),
        (('always' | 'never' | 'always-single-line' | {}) | CoreRule) &
          (
            | ((('always' | 'never' | 'always-single-line' | {}) | CoreRule) & string)
            | (('always' | 'never' | 'always-single-line' | {}) | CoreRule)
          ) &
          (('always' | 'never' | 'always-single-line' | {}) | CoreRule) &
          (
            | ((('always' | 'never' | 'always-single-line' | {}) | CoreRule) & string)
            | (('always' | 'never' | 'always-single-line' | {}) | CoreRule)
          )
      ]
  ) &
    (
      | (null &
          (
            | null
            | ('always' | 'never' | 'always-single-line' | [])
            | [
                (('always' | 'never' | 'always-single-line' | {}) | CoreRule) &
                  (
                    | ((('always' | 'never' | 'always-single-line' | {}) | CoreRule) & string)
                    | (('always' | 'never' | 'always-single-line' | {}) | CoreRule)
                  ) &
                  (('always' | 'never' | 'always-single-line' | {}) | CoreRule) &
                  (
                    | ((('always' | 'never' | 'always-single-line' | {}) | CoreRule) & string)
                    | (('always' | 'never' | 'always-single-line' | {}) | CoreRule)
                  ),
                (('always' | 'never' | 'always-single-line' | {}) | CoreRule) &
                  (
                    | ((('always' | 'never' | 'always-single-line' | {}) | CoreRule) & string)
                    | (('always' | 'never' | 'always-single-line' | {}) | CoreRule)
                  ) &
                  (('always' | 'never' | 'always-single-line' | {}) | CoreRule) &
                  (
                    | ((('always' | 'never' | 'always-single-line' | {}) | CoreRule) & string)
                    | (('always' | 'never' | 'always-single-line' | {}) | CoreRule)
                  )
              ]
          ))
      | ((
          | null
          | ('always' | 'never' | 'always-single-line' | [])
          | [
              (('always' | 'never' | 'always-single-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-single-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-single-line' | {}) | CoreRule)
                ) &
                (('always' | 'never' | 'always-single-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-single-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-single-line' | {}) | CoreRule)
                ),
              (('always' | 'never' | 'always-single-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-single-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-single-line' | {}) | CoreRule)
                ) &
                (('always' | 'never' | 'always-single-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-single-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-single-line' | {}) | CoreRule)
                )
            ]
        ) &
          string)
      | ((
          | null
          | ('always' | 'never' | 'always-single-line' | [])
          | [
              (('always' | 'never' | 'always-single-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-single-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-single-line' | {}) | CoreRule)
                ) &
                (('always' | 'never' | 'always-single-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-single-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-single-line' | {}) | CoreRule)
                ),
              (('always' | 'never' | 'always-single-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-single-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-single-line' | {}) | CoreRule)
                ) &
                (('always' | 'never' | 'always-single-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-single-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-single-line' | {}) | CoreRule)
                )
            ]
        ) &
          unknown[])
    );
  'declaration-colon-space-before'?: AlwaysNeverRule;
  /**
   * Require or disallow an empty line before declarations
   */
  'declaration-empty-line-before'?: (
    | null
    | ('always' | 'never' | [])
    | [
        (('always' | 'never' | {}) | CoreRule) &
          (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
          (('always' | 'never' | {}) | CoreRule) &
          (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)),
        (('always' | 'never' | {}) | CoreRule) &
          (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
          (('always' | 'never' | {}) | CoreRule) &
          (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | ('always' | 'never' | [])
            | [
                (('always' | 'never' | {}) | CoreRule) &
                  (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                  (('always' | 'never' | {}) | CoreRule) &
                  (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)),
                (('always' | 'never' | {}) | CoreRule) &
                  (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                  (('always' | 'never' | {}) | CoreRule) &
                  (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | ('always' | 'never' | [])
          | [
              (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)),
              (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule))
            ]
        ) &
          string)
      | ((
          | null
          | ('always' | 'never' | [])
          | [
              (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)),
              (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule)) &
                (('always' | 'never' | {}) | CoreRule) &
                (((('always' | 'never' | {}) | CoreRule) & string) | (('always' | 'never' | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  'declaration-no-important'?: BooleanRule;
  /**
   * Specify a blacklist of disallowed property and unit pairs within declarations
   */
  'declaration-property-unit-blacklist'?:
    | null
    | {
        [k: string]: SimpleStringOrArrayStringRule1 | undefined;
      }
    | [
        {
          [k: string]: SimpleStringOrArrayStringRule1 | undefined;
        },
        CoreRule
      ];
  /**
   * Specify a whitelist of allowed property and unit pairs within declarations
   */
  'declaration-property-unit-whitelist'?:
    | null
    | {
        [k: string]: SimpleStringOrArrayStringRule1 | undefined;
      }
    | [
        {
          [k: string]: SimpleStringOrArrayStringRule1 | undefined;
        },
        CoreRule
      ];
  /**
   * Specify a blacklist of disallowed property and value pairs within declarations
   */
  'declaration-property-value-blacklist'?:
    | null
    | {
        [k: string]: SimpleStringOrArrayStringRule1 | undefined;
      }
    | [
        {
          [k: string]: SimpleStringOrArrayStringRule1 | undefined;
        },
        CoreRule
      ];
  /**
   * Disallow unknown values for properties within declarations
   */
  'declaration-property-value-no-unknown'?: (true | null) | [true | null] | [true | null, CoreRule];
  /**
   * Specify a whitelist of allowed property and value pairs within declarations
   */
  'declaration-property-value-whitelist'?:
    | null
    | {
        [k: string]: SimpleStringOrArrayStringRule1 | undefined;
      }
    | [
        {
          [k: string]: SimpleStringOrArrayStringRule1 | undefined;
        },
        CoreRule
      ];
  [k: string]: unknown | undefined;
}
export interface DeclarationBlock {
  /**
   * Disallow duplicate properties within declaration blocks
   */
  'declaration-block-no-duplicate-properties'?: (
    | null
    | (true | [])
    | [
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | (boolean &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | (true | [])
          | [
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  'declaration-block-no-ignored-properties'?: BooleanRule;
  /**
   * Disallow longhand properties that can be combined into one shorthand property
   */
  'declaration-block-no-redundant-longhand-properties'?: (
    | null
    | (true | [])
    | [
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | (boolean &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | (true | [])
          | [
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  'declaration-block-no-shorthand-property-overrides'?: BooleanRule;
  /**
   * Specify the order of properties within declaration blocks
   */
  'declaration-block-properties-order'?: (
    | null
    | ('alphabetical' | [])
    | [
        (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
          (
            | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
            | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
            | (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule)
          ) &
          (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
          (
            | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
            | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
            | (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule)
          ),
        ...((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
          (
            | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
            | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
            | (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule)
          ) &
          (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
          (
            | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
            | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
            | (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule)
          ))[]
      ]
  ) &
    (
      | (null &
          (
            | null
            | ('alphabetical' | [])
            | [
                (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
                  (
                    | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
                    | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
                    | (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule)
                  ) &
                  (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
                  (
                    | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
                    | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
                    | (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule)
                  ),
                ...((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
                  (
                    | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
                    | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
                    | (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule)
                  ) &
                  (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
                  (
                    | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
                    | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
                    | (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule)
                  ))[]
              ]
          ))
      | ((
          | null
          | ('alphabetical' | [])
          | [
              (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
                (
                  | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
                  | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
                  | (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule)
                ) &
                (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
                (
                  | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
                  | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
                  | (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule)
                ),
              ...((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
                (
                  | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
                  | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
                  | (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule)
                ) &
                (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
                (
                  | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
                  | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
                  | (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule)
                ))[]
            ]
        ) &
          string)
      | ((
          | null
          | ('alphabetical' | [])
          | [
              (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
                (
                  | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
                  | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
                  | (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule)
                ) &
                (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
                (
                  | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
                  | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
                  | (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule)
                ),
              ...((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
                (
                  | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
                  | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
                  | (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule)
                ) &
                (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) &
                (
                  | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & string)
                  | ((('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule) & unknown[])
                  | (('alphabetical' | [] | {}) | string | SimpleArrayStringRule | CoreRule)
                ))[]
            ]
        ) &
          unknown[])
    );
  'declaration-block-semicolon-newline-after'?: NewlineRule;
  'declaration-block-semicolon-newline-before'?: NewlineRule;
  'declaration-block-semicolon-space-after'?: SpaceRule;
  'declaration-block-semicolon-space-before'?: SpaceRule;
  'declaration-block-single-line-max-declarations'?: IntegerRule;
  'declaration-block-trailing-semicolon'?: AlwaysNeverRule;
  [k: string]: unknown | undefined;
}
export interface Font {
  /**
   * Specify whether or not quotation marks should be used around font family names
   */
  'font-family-name-quotes'?: (
    | null
    | ('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | [])
    | [
        (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule) &
          (
            | ((('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule) &
                string)
            | (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule)
          ) &
          (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule) &
          (
            | ((('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule) &
                string)
            | (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule)
          ),
        (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule) &
          (
            | ((('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule) &
                string)
            | (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule)
          ) &
          (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule) &
          (
            | ((('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule) &
                string)
            | (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule)
          )
      ]
  ) &
    (
      | (null &
          (
            | null
            | ('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | [])
            | [
                (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule) &
                  (
                    | ((
                        | ('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {})
                        | CoreRule
                      ) &
                        string)
                    | (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule)
                  ) &
                  (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule) &
                  (
                    | ((
                        | ('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {})
                        | CoreRule
                      ) &
                        string)
                    | (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule)
                  ),
                (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule) &
                  (
                    | ((
                        | ('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {})
                        | CoreRule
                      ) &
                        string)
                    | (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule)
                  ) &
                  (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule) &
                  (
                    | ((
                        | ('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {})
                        | CoreRule
                      ) &
                        string)
                    | (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule)
                  )
              ]
          ))
      | ((
          | null
          | ('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | [])
          | [
              (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule) &
                (
                  | ((
                      | ('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {})
                      | CoreRule
                    ) &
                      string)
                  | (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule)
                ) &
                (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule) &
                (
                  | ((
                      | ('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {})
                      | CoreRule
                    ) &
                      string)
                  | (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule)
                ),
              (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule) &
                (
                  | ((
                      | ('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {})
                      | CoreRule
                    ) &
                      string)
                  | (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule)
                ) &
                (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule) &
                (
                  | ((
                      | ('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {})
                      | CoreRule
                    ) &
                      string)
                  | (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule)
                )
            ]
        ) &
          string)
      | ((
          | null
          | ('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | [])
          | [
              (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule) &
                (
                  | ((
                      | ('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {})
                      | CoreRule
                    ) &
                      string)
                  | (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule)
                ) &
                (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule) &
                (
                  | ((
                      | ('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {})
                      | CoreRule
                    ) &
                      string)
                  | (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule)
                ),
              (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule) &
                (
                  | ((
                      | ('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {})
                      | CoreRule
                    ) &
                      string)
                  | (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule)
                ) &
                (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule) &
                (
                  | ((
                      | ('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {})
                      | CoreRule
                    ) &
                      string)
                  | (('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule)
                )
            ]
        ) &
          unknown[])
    );
  /**
   * Require numeric or named (where possible) `font-weight` values. Also, when named values are expected, require only valid names
   */
  'font-weight-notation'?: (
    | null
    | ('numeric' | 'named-where-possible' | [])
    | [
        (('numeric' | 'named-where-possible' | {}) | CoreRule) &
          (
            | ((('numeric' | 'named-where-possible' | {}) | CoreRule) & string)
            | (('numeric' | 'named-where-possible' | {}) | CoreRule)
          ) &
          (('numeric' | 'named-where-possible' | {}) | CoreRule) &
          (
            | ((('numeric' | 'named-where-possible' | {}) | CoreRule) & string)
            | (('numeric' | 'named-where-possible' | {}) | CoreRule)
          ),
        (('numeric' | 'named-where-possible' | {}) | CoreRule) &
          (
            | ((('numeric' | 'named-where-possible' | {}) | CoreRule) & string)
            | (('numeric' | 'named-where-possible' | {}) | CoreRule)
          ) &
          (('numeric' | 'named-where-possible' | {}) | CoreRule) &
          (
            | ((('numeric' | 'named-where-possible' | {}) | CoreRule) & string)
            | (('numeric' | 'named-where-possible' | {}) | CoreRule)
          )
      ]
  ) &
    (
      | (null &
          (
            | null
            | ('numeric' | 'named-where-possible' | [])
            | [
                (('numeric' | 'named-where-possible' | {}) | CoreRule) &
                  (
                    | ((('numeric' | 'named-where-possible' | {}) | CoreRule) & string)
                    | (('numeric' | 'named-where-possible' | {}) | CoreRule)
                  ) &
                  (('numeric' | 'named-where-possible' | {}) | CoreRule) &
                  (
                    | ((('numeric' | 'named-where-possible' | {}) | CoreRule) & string)
                    | (('numeric' | 'named-where-possible' | {}) | CoreRule)
                  ),
                (('numeric' | 'named-where-possible' | {}) | CoreRule) &
                  (
                    | ((('numeric' | 'named-where-possible' | {}) | CoreRule) & string)
                    | (('numeric' | 'named-where-possible' | {}) | CoreRule)
                  ) &
                  (('numeric' | 'named-where-possible' | {}) | CoreRule) &
                  (
                    | ((('numeric' | 'named-where-possible' | {}) | CoreRule) & string)
                    | (('numeric' | 'named-where-possible' | {}) | CoreRule)
                  )
              ]
          ))
      | ((
          | null
          | ('numeric' | 'named-where-possible' | [])
          | [
              (('numeric' | 'named-where-possible' | {}) | CoreRule) &
                (
                  | ((('numeric' | 'named-where-possible' | {}) | CoreRule) & string)
                  | (('numeric' | 'named-where-possible' | {}) | CoreRule)
                ) &
                (('numeric' | 'named-where-possible' | {}) | CoreRule) &
                (
                  | ((('numeric' | 'named-where-possible' | {}) | CoreRule) & string)
                  | (('numeric' | 'named-where-possible' | {}) | CoreRule)
                ),
              (('numeric' | 'named-where-possible' | {}) | CoreRule) &
                (
                  | ((('numeric' | 'named-where-possible' | {}) | CoreRule) & string)
                  | (('numeric' | 'named-where-possible' | {}) | CoreRule)
                ) &
                (('numeric' | 'named-where-possible' | {}) | CoreRule) &
                (
                  | ((('numeric' | 'named-where-possible' | {}) | CoreRule) & string)
                  | (('numeric' | 'named-where-possible' | {}) | CoreRule)
                )
            ]
        ) &
          string)
      | ((
          | null
          | ('numeric' | 'named-where-possible' | [])
          | [
              (('numeric' | 'named-where-possible' | {}) | CoreRule) &
                (
                  | ((('numeric' | 'named-where-possible' | {}) | CoreRule) & string)
                  | (('numeric' | 'named-where-possible' | {}) | CoreRule)
                ) &
                (('numeric' | 'named-where-possible' | {}) | CoreRule) &
                (
                  | ((('numeric' | 'named-where-possible' | {}) | CoreRule) & string)
                  | (('numeric' | 'named-where-possible' | {}) | CoreRule)
                ),
              (('numeric' | 'named-where-possible' | {}) | CoreRule) &
                (
                  | ((('numeric' | 'named-where-possible' | {}) | CoreRule) & string)
                  | (('numeric' | 'named-where-possible' | {}) | CoreRule)
                ) &
                (('numeric' | 'named-where-possible' | {}) | CoreRule) &
                (
                  | ((('numeric' | 'named-where-possible' | {}) | CoreRule) & string)
                  | (('numeric' | 'named-where-possible' | {}) | CoreRule)
                )
            ]
        ) &
          unknown[])
    );
  [k: string]: unknown | undefined;
}
export interface Function {
  'function-blacklist'?: ArrayStringRule;
  'function-calc-no-unspaced-operator'?: BooleanRule;
  'function-comma-newline-after'?: NewlineRule;
  'function-comma-newline-before'?: NewlineRule;
  'function-comma-space-after'?: SpaceRule;
  'function-comma-space-before'?: SpaceRule;
  'function-linear-gradient-no-nonstandard-direction'?: BooleanRule;
  'function-max-empty-lines'?: IntegerRule;
  /**
   * Specify lowercase or uppercase for function names
   */
  'function-name-case'?: (
    | null
    | ('lower' | 'upper' | [])
    | [
        (('lower' | 'upper' | {}) | CoreRule) &
          (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
          (('lower' | 'upper' | {}) | CoreRule) &
          (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)),
        (('lower' | 'upper' | {}) | CoreRule) &
          (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
          (('lower' | 'upper' | {}) | CoreRule) &
          (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | ('lower' | 'upper' | [])
            | [
                (('lower' | 'upper' | {}) | CoreRule) &
                  (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
                  (('lower' | 'upper' | {}) | CoreRule) &
                  (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)),
                (('lower' | 'upper' | {}) | CoreRule) &
                  (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
                  (('lower' | 'upper' | {}) | CoreRule) &
                  (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | ('lower' | 'upper' | [])
          | [
              (('lower' | 'upper' | {}) | CoreRule) &
                (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
                (('lower' | 'upper' | {}) | CoreRule) &
                (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)),
              (('lower' | 'upper' | {}) | CoreRule) &
                (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
                (('lower' | 'upper' | {}) | CoreRule) &
                (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule))
            ]
        ) &
          string)
      | ((
          | null
          | ('lower' | 'upper' | [])
          | [
              (('lower' | 'upper' | {}) | CoreRule) &
                (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
                (('lower' | 'upper' | {}) | CoreRule) &
                (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)),
              (('lower' | 'upper' | {}) | CoreRule) &
                (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
                (('lower' | 'upper' | {}) | CoreRule) &
                (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  'function-parentheses-newline-inside'?: NewlineRule;
  'function-parentheses-space-inside'?: SpaceRule;
  'function-url-data-uris'?: AlwaysNeverRule;
  'function-url-no-scheme-relative'?: BooleanRule;
  'function-url-quotes'?: AlwaysNeverRule;
  'function-url-scheme-whitelist'?: ArrayStringRule;
  'function-whitelist'?: ArrayStringRule;
  'function-whitespace-after'?: AlwaysNeverRule;
  [k: string]: unknown | undefined;
}
export interface GeneralSheet {
  /**
   * Specify indentation
   */
  indentation?: (
    | (null | number)
    | ('tab' | [])
    | [number, ...number[]]
    | [
        (number | ('tab' | {}) | CoreRule) &
          (
            | ((number | ('tab' | {}) | CoreRule) & number)
            | ((number | ('tab' | {}) | CoreRule) & string)
            | (number | ('tab' | {}) | CoreRule)
          ) &
          (number | ('tab' | {}) | CoreRule) &
          (
            | ((number | ('tab' | {}) | CoreRule) & number)
            | ((number | ('tab' | {}) | CoreRule) & string)
            | (number | ('tab' | {}) | CoreRule)
          ),
        (number | ('tab' | {}) | CoreRule) &
          (
            | ((number | ('tab' | {}) | CoreRule) & number)
            | ((number | ('tab' | {}) | CoreRule) & string)
            | (number | ('tab' | {}) | CoreRule)
          ) &
          (number | ('tab' | {}) | CoreRule) &
          (
            | ((number | ('tab' | {}) | CoreRule) & number)
            | ((number | ('tab' | {}) | CoreRule) & string)
            | (number | ('tab' | {}) | CoreRule)
          )
      ]
  ) &
    (
      | (null &
          (
            | (null | number)
            | ('tab' | [])
            | [number, ...number[]]
            | [
                (number | ('tab' | {}) | CoreRule) &
                  (
                    | ((number | ('tab' | {}) | CoreRule) & number)
                    | ((number | ('tab' | {}) | CoreRule) & string)
                    | (number | ('tab' | {}) | CoreRule)
                  ) &
                  (number | ('tab' | {}) | CoreRule) &
                  (
                    | ((number | ('tab' | {}) | CoreRule) & number)
                    | ((number | ('tab' | {}) | CoreRule) & string)
                    | (number | ('tab' | {}) | CoreRule)
                  ),
                (number | ('tab' | {}) | CoreRule) &
                  (
                    | ((number | ('tab' | {}) | CoreRule) & number)
                    | ((number | ('tab' | {}) | CoreRule) & string)
                    | (number | ('tab' | {}) | CoreRule)
                  ) &
                  (number | ('tab' | {}) | CoreRule) &
                  (
                    | ((number | ('tab' | {}) | CoreRule) & number)
                    | ((number | ('tab' | {}) | CoreRule) & string)
                    | (number | ('tab' | {}) | CoreRule)
                  )
              ]
          ))
      | (number &
          (
            | (null | number)
            | ('tab' | [])
            | [number, ...number[]]
            | [
                (number | ('tab' | {}) | CoreRule) &
                  (
                    | ((number | ('tab' | {}) | CoreRule) & number)
                    | ((number | ('tab' | {}) | CoreRule) & string)
                    | (number | ('tab' | {}) | CoreRule)
                  ) &
                  (number | ('tab' | {}) | CoreRule) &
                  (
                    | ((number | ('tab' | {}) | CoreRule) & number)
                    | ((number | ('tab' | {}) | CoreRule) & string)
                    | (number | ('tab' | {}) | CoreRule)
                  ),
                (number | ('tab' | {}) | CoreRule) &
                  (
                    | ((number | ('tab' | {}) | CoreRule) & number)
                    | ((number | ('tab' | {}) | CoreRule) & string)
                    | (number | ('tab' | {}) | CoreRule)
                  ) &
                  (number | ('tab' | {}) | CoreRule) &
                  (
                    | ((number | ('tab' | {}) | CoreRule) & number)
                    | ((number | ('tab' | {}) | CoreRule) & string)
                    | (number | ('tab' | {}) | CoreRule)
                  )
              ]
          ))
      | ((
          | (null | number)
          | ('tab' | [])
          | [number, ...number[]]
          | [
              (number | ('tab' | {}) | CoreRule) &
                (
                  | ((number | ('tab' | {}) | CoreRule) & number)
                  | ((number | ('tab' | {}) | CoreRule) & string)
                  | (number | ('tab' | {}) | CoreRule)
                ) &
                (number | ('tab' | {}) | CoreRule) &
                (
                  | ((number | ('tab' | {}) | CoreRule) & number)
                  | ((number | ('tab' | {}) | CoreRule) & string)
                  | (number | ('tab' | {}) | CoreRule)
                ),
              (number | ('tab' | {}) | CoreRule) &
                (
                  | ((number | ('tab' | {}) | CoreRule) & number)
                  | ((number | ('tab' | {}) | CoreRule) & string)
                  | (number | ('tab' | {}) | CoreRule)
                ) &
                (number | ('tab' | {}) | CoreRule) &
                (
                  | ((number | ('tab' | {}) | CoreRule) & number)
                  | ((number | ('tab' | {}) | CoreRule) & string)
                  | (number | ('tab' | {}) | CoreRule)
                )
            ]
        ) &
          string)
      | ((
          | (null | number)
          | ('tab' | [])
          | [number, ...number[]]
          | [
              (number | ('tab' | {}) | CoreRule) &
                (
                  | ((number | ('tab' | {}) | CoreRule) & number)
                  | ((number | ('tab' | {}) | CoreRule) & string)
                  | (number | ('tab' | {}) | CoreRule)
                ) &
                (number | ('tab' | {}) | CoreRule) &
                (
                  | ((number | ('tab' | {}) | CoreRule) & number)
                  | ((number | ('tab' | {}) | CoreRule) & string)
                  | (number | ('tab' | {}) | CoreRule)
                ),
              (number | ('tab' | {}) | CoreRule) &
                (
                  | ((number | ('tab' | {}) | CoreRule) & number)
                  | ((number | ('tab' | {}) | CoreRule) & string)
                  | (number | ('tab' | {}) | CoreRule)
                ) &
                (number | ('tab' | {}) | CoreRule) &
                (
                  | ((number | ('tab' | {}) | CoreRule) & number)
                  | ((number | ('tab' | {}) | CoreRule) & string)
                  | (number | ('tab' | {}) | CoreRule)
                )
            ]
        ) &
          unknown[])
    );
  /**
   * @deprecated
   * Specify unix or windows linebreaks
   */
  linebreaks?: {
    [k: string]: unknown | undefined;
  };
  'max-empty-lines'?: IntegerRule;
  /**
   * Limit the length of a line
   */
  'max-line-length'?: (
    | (null | number)
    | [
        (number | CoreRule) &
          (((number | CoreRule) & number) | (number | CoreRule)) &
          (number | CoreRule) &
          (((number | CoreRule) & number) | (number | CoreRule)),
        (number | CoreRule) &
          (((number | CoreRule) & number) | (number | CoreRule)) &
          (number | CoreRule) &
          (((number | CoreRule) & number) | (number | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | (null | number)
            | [
                (number | CoreRule) &
                  (((number | CoreRule) & number) | (number | CoreRule)) &
                  (number | CoreRule) &
                  (((number | CoreRule) & number) | (number | CoreRule)),
                (number | CoreRule) &
                  (((number | CoreRule) & number) | (number | CoreRule)) &
                  (number | CoreRule) &
                  (((number | CoreRule) & number) | (number | CoreRule))
              ]
          ))
      | (number &
          (
            | (null | number)
            | [
                (number | CoreRule) &
                  (((number | CoreRule) & number) | (number | CoreRule)) &
                  (number | CoreRule) &
                  (((number | CoreRule) & number) | (number | CoreRule)),
                (number | CoreRule) &
                  (((number | CoreRule) & number) | (number | CoreRule)) &
                  (number | CoreRule) &
                  (((number | CoreRule) & number) | (number | CoreRule))
              ]
          ))
      | ((
          | (null | number)
          | [
              (number | CoreRule) &
                (((number | CoreRule) & number) | (number | CoreRule)) &
                (number | CoreRule) &
                (((number | CoreRule) & number) | (number | CoreRule)),
              (number | CoreRule) &
                (((number | CoreRule) & number) | (number | CoreRule)) &
                (number | CoreRule) &
                (((number | CoreRule) & number) | (number | CoreRule))
            ]
        ) &
          unknown[])
    );
  /**
   * Limit the allowed nesting depth
   */
  'max-nesting-depth'?: (
    | (null | number)
    | [
        (number | CoreRule) &
          (((number | CoreRule) & number) | (number | CoreRule)) &
          (number | CoreRule) &
          (((number | CoreRule) & number) | (number | CoreRule)),
        (number | CoreRule) &
          (((number | CoreRule) & number) | (number | CoreRule)) &
          (number | CoreRule) &
          (((number | CoreRule) & number) | (number | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | (null | number)
            | [
                (number | CoreRule) &
                  (((number | CoreRule) & number) | (number | CoreRule)) &
                  (number | CoreRule) &
                  (((number | CoreRule) & number) | (number | CoreRule)),
                (number | CoreRule) &
                  (((number | CoreRule) & number) | (number | CoreRule)) &
                  (number | CoreRule) &
                  (((number | CoreRule) & number) | (number | CoreRule))
              ]
          ))
      | (number &
          (
            | (null | number)
            | [
                (number | CoreRule) &
                  (((number | CoreRule) & number) | (number | CoreRule)) &
                  (number | CoreRule) &
                  (((number | CoreRule) & number) | (number | CoreRule)),
                (number | CoreRule) &
                  (((number | CoreRule) & number) | (number | CoreRule)) &
                  (number | CoreRule) &
                  (((number | CoreRule) & number) | (number | CoreRule))
              ]
          ))
      | ((
          | (null | number)
          | [
              (number | CoreRule) &
                (((number | CoreRule) & number) | (number | CoreRule)) &
                (number | CoreRule) &
                (((number | CoreRule) & number) | (number | CoreRule)),
              (number | CoreRule) &
                (((number | CoreRule) & number) | (number | CoreRule)) &
                (number | CoreRule) &
                (((number | CoreRule) & number) | (number | CoreRule))
            ]
        ) &
          unknown[])
    );
  /**
   * Disallow browser hacks that are irrelevant to the browsers you are targeting
   */
  'no-browser-hacks'?: (
    | null
    | (true | [])
    | [
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | (boolean &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | (true | [])
          | [
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  'no-descending-specificity'?: BooleanRule;
  'no-duplicate-selectors'?: BooleanRule;
  /**
   * @deprecated
   * Disallow empty first lines
   */
  'no-empty-first-line'?: {
    [k: string]: unknown | undefined;
  };
  'no-empty-source'?: BooleanRule;
  /**
   * Disallow end-of-line whitespace
   */
  'no-eol-whitespace'?: (
    | null
    | (true | [])
    | [
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | (boolean &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | (true | [])
          | [
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  'no-extra-semicolons'?: BooleanRule;
  /**
   * Disallow colors that are suspiciously close to being identical
   */
  'no-indistinguishable-colors'?: (
    | null
    | (true | [])
    | [
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | (boolean &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | (true | [])
          | [
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  'no-invalid-double-slash-comments'?: BooleanRule;
  'no-missing-end-of-source-newline'?: BooleanRule;
  'no-unknown-animations'?: BooleanRule;
  'unicode-bom'?: AlwaysNeverRule;
  /**
   * Disallow features that are unsupported by the browsers that you are targeting
   */
  'no-unsupported-browser-features'?: (
    | null
    | (true | [])
    | [
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | (boolean &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | (true | [])
          | [
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  [k: string]: unknown | undefined;
}
export interface KeyframeDeclaration {
  'keyframe-declaration-no-important'?: BooleanRule;
  [k: string]: unknown | undefined;
}
export interface Length {
  'length-zero-no-unit'?: BooleanRule;
  [k: string]: unknown | undefined;
}
export interface Lightness {
  /**
   * Specify number or percentage notation for lightness
   */
  'lightness-notation'?:
    | (('percentage' | 'number') | null)
    | [('percentage' | 'number') | null]
    | [('percentage' | 'number') | null, CoreRule3];
  [k: string]: unknown | undefined;
}
export interface CoreRule3 {
  disableFix?: boolean;
  /**
   * Custom message that will be used in errors and warnings
   */
  message?: string;
  reportDisables?: boolean;
  /**
   * Message status
   */
  severity?: 'warning' | 'error';
  url?: string;
}
export interface MediaFeature {
  'media-feature-colon-space-after'?: AlwaysNeverRule;
  'media-feature-colon-space-before'?: AlwaysNeverRule;
  'media-feature-name-case'?: LowerUpperRule;
  /**
   * Disallow unknown media feature names
   */
  'media-feature-name-no-unknown'?: (
    | null
    | (true | [])
    | [
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | (boolean &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | (true | [])
          | [
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  /**
   * Disallow unknown values for media features
   */
  'media-feature-name-value-no-unknown'?: (true | null) | [true | null] | [true | null, CoreRule4];
  'media-feature-name-no-vendor-prefix'?: BooleanRule;
  /**
   * Specify a list of allowed name and unit pairs within media features
   */
  'media-feature-name-unit-allowed-list'?:
    | ({
        [k: string]: (string | string[]) | undefined;
      } | null)
    | [
        {
          [k: string]: (string | string[]) | undefined;
        } | null
      ]
    | [
        {
          [k: string]: (string | string[]) | undefined;
        } | null,
        CoreRule5
      ];
  'media-feature-no-missing-punctuation'?: BooleanRule;
  'media-feature-parentheses-space-inside'?: AlwaysNeverRule;
  /**
   * Specify context or prefix notation for media feature ranges
   */
  'media-feature-range-notation'?:
    | (('prefix' | 'context') | null)
    | [('prefix' | 'context') | null]
    | [('prefix' | 'context') | null, CoreRule6];
  'media-feature-range-operator-space-after'?: AlwaysNeverRule;
  'media-feature-range-operator-space-before'?: AlwaysNeverRule;
  [k: string]: unknown | undefined;
}
export interface CoreRule4 {
  disableFix?: boolean;
  /**
   * Custom message that will be used in errors and warnings
   */
  message?: string;
  reportDisables?: boolean;
  /**
   * Message status
   */
  severity?: 'warning' | 'error';
  url?: string;
}
export interface CoreRule5 {
  disableFix?: boolean;
  /**
   * Custom message that will be used in errors and warnings
   */
  message?: string;
  reportDisables?: boolean;
  /**
   * Message status
   */
  severity?: 'warning' | 'error';
  url?: string;
}
export interface CoreRule6 {
  disableFix?: boolean;
  /**
   * Custom message that will be used in errors and warnings
   */
  message?: string;
  reportDisables?: boolean;
  /**
   * Message status
   */
  severity?: 'warning' | 'error';
  url?: string;
}
export interface MediaQuery {
  /**
   * Disallow invalid media queries
   */
  'media-query-no-invalid'?: (true | null) | [true | null] | [true | null, CoreRule7];
  [k: string]: unknown | undefined;
}
export interface CoreRule7 {
  disableFix?: boolean;
  /**
   * Custom message that will be used in errors and warnings
   */
  message?: string;
  reportDisables?: boolean;
  /**
   * Message status
   */
  severity?: 'warning' | 'error';
  url?: string;
}
export interface MediaQueryList {
  'media-query-list-comma-newline-after'?: NewlineRule;
  'media-query-list-comma-newline-before'?: NewlineRule;
  'media-query-list-comma-space-after'?: SpaceRule;
  'media-query-list-comma-space-before'?: SpaceRule;
  [k: string]: unknown | undefined;
}
export interface Number {
  'number-leading-zero'?: AlwaysNeverRule;
  'number-max-precision'?: IntegerRule;
  'number-no-trailing-zeros'?: BooleanRule;
  [k: string]: unknown | undefined;
}
export interface Property {
  'property-blacklist'?: ArrayStringRule;
  'property-case'?: LowerUpperRule;
  /**
   * Disallow unknown properties
   */
  'property-no-unknown'?: (
    | null
    | (true | [])
    | [
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | (boolean &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | (true | [])
          | [
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  'property-no-vendor-prefix'?: BooleanRule;
  'property-whitelist'?: ArrayStringRule;
  [k: string]: unknown | undefined;
}
export interface RootRule {
  'root-no-standard-properties'?: BooleanRule;
  [k: string]: unknown | undefined;
}
export interface Rule {
  /**
   * Require or disallow an empty line before nested rules
   */
  'rule-nested-empty-line-before'?: (
    | null
    | ('always' | 'never' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
          (
            | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
            | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
          ) &
          (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
          (
            | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
            | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
          ),
        (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
          (
            | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
            | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
          ) &
          (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
          (
            | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
            | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
          )
      ]
  ) &
    (
      | (null &
          (
            | null
            | ('always' | 'never' | 'always-multi-line' | 'never-multi-line' | [])
            | [
                (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                  (
                    | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                    | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                  ) &
                  (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                  (
                    | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                    | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                  ),
                (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                  (
                    | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                    | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                  ) &
                  (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                  (
                    | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                    | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                  )
              ]
          ))
      | ((
          | null
          | ('always' | 'never' | 'always-multi-line' | 'never-multi-line' | [])
          | [
              (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                ) &
                (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                ),
              (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                ) &
                (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                )
            ]
        ) &
          string)
      | ((
          | null
          | ('always' | 'never' | 'always-multi-line' | 'never-multi-line' | [])
          | [
              (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                ) &
                (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                ),
              (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                ) &
                (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                )
            ]
        ) &
          unknown[])
    );
  /**
   * Require or disallow an empty line before non-nested rules
   */
  'rule-non-nested-empty-line-before'?: (
    | null
    | ('always' | 'never' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
          (
            | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
            | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
          ) &
          (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
          (
            | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
            | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
          ),
        (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
          (
            | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
            | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
          ) &
          (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
          (
            | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
            | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
          )
      ]
  ) &
    (
      | (null &
          (
            | null
            | ('always' | 'never' | 'always-multi-line' | 'never-multi-line' | [])
            | [
                (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                  (
                    | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                    | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                  ) &
                  (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                  (
                    | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                    | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                  ),
                (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                  (
                    | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                    | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                  ) &
                  (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                  (
                    | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                    | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                  )
              ]
          ))
      | ((
          | null
          | ('always' | 'never' | 'always-multi-line' | 'never-multi-line' | [])
          | [
              (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                ) &
                (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                ),
              (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                ) &
                (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                )
            ]
        ) &
          string)
      | ((
          | null
          | ('always' | 'never' | 'always-multi-line' | 'never-multi-line' | [])
          | [
              (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                ) &
                (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                ),
              (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                ) &
                (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) &
                (
                  | ((('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule) & string)
                  | (('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule)
                )
            ]
        ) &
          unknown[])
    );
  [k: string]: unknown | undefined;
}
export interface Selector {
  /**
   * Disallow unmatchable An+B selectors
   */
  'selector-anb-no-unmatchable'?: (true | null) | [true | null] | [true | null, CoreRule8];
  'selector-attribute-brackets-space-inside'?: AlwaysNeverRule;
  'selector-attribute-operator-blacklist'?: ArrayStringRule;
  'selector-attribute-operator-space-after'?: AlwaysNeverRule;
  'selector-attribute-operator-space-before'?: AlwaysNeverRule;
  'selector-attribute-operator-whitelist'?: ArrayStringRule;
  'selector-attribute-quotes'?: AlwaysNeverRule;
  /**
   * Specify a pattern for class selectors
   */
  'selector-class-pattern'?: (
    | (null | string)
    | [
        (string | CoreRule) &
          (((string | CoreRule) & string) | (string | CoreRule)) &
          (string | CoreRule) &
          (((string | CoreRule) & string) | (string | CoreRule)),
        (string | CoreRule) &
          (((string | CoreRule) & string) | (string | CoreRule)) &
          (string | CoreRule) &
          (((string | CoreRule) & string) | (string | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | (null | string)
            | [
                (string | CoreRule) &
                  (((string | CoreRule) & string) | (string | CoreRule)) &
                  (string | CoreRule) &
                  (((string | CoreRule) & string) | (string | CoreRule)),
                (string | CoreRule) &
                  (((string | CoreRule) & string) | (string | CoreRule)) &
                  (string | CoreRule) &
                  (((string | CoreRule) & string) | (string | CoreRule))
              ]
          ))
      | ((
          | (null | string)
          | [
              (string | CoreRule) &
                (((string | CoreRule) & string) | (string | CoreRule)) &
                (string | CoreRule) &
                (((string | CoreRule) & string) | (string | CoreRule)),
              (string | CoreRule) &
                (((string | CoreRule) & string) | (string | CoreRule)) &
                (string | CoreRule) &
                (((string | CoreRule) & string) | (string | CoreRule))
            ]
        ) &
          string)
      | ((
          | (null | string)
          | [
              (string | CoreRule) &
                (((string | CoreRule) & string) | (string | CoreRule)) &
                (string | CoreRule) &
                (((string | CoreRule) & string) | (string | CoreRule)),
              (string | CoreRule) &
                (((string | CoreRule) & string) | (string | CoreRule)) &
                (string | CoreRule) &
                (((string | CoreRule) & string) | (string | CoreRule))
            ]
        ) &
          unknown[])
    );
  'selector-combinator-space-after'?: AlwaysNeverRule;
  'selector-combinator-space-before'?: AlwaysNeverRule;
  'selector-descendant-combinator-no-non-space'?: BooleanRule;
  'selector-id-pattern'?: StringRule;
  'selector-max-compound-selectors'?: IntegerRule;
  'selector-max-specificity'?: StringRule;
  'selector-nested-pattern'?: StringRule;
  'selector-no-attribute'?: BooleanRule;
  'selector-no-combinator'?: BooleanRule;
  'selector-no-id'?: BooleanRule;
  /**
   * Disallow qualifying a selector by type
   */
  'selector-no-qualifying-type'?: (
    | null
    | (true | [])
    | [
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | (boolean &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | (true | [])
          | [
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  /**
   * Disallow type selectors
   */
  'selector-no-type'?: (
    | null
    | (true | [])
    | [
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | (boolean &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | (true | [])
          | [
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  'selector-no-universal'?: BooleanRule;
  'selector-no-vendor-prefix'?: BooleanRule;
  'selector-pseudo-class-case'?: LowerUpperRule;
  /**
   * Disallow unknown pseudo-class selectors
   */
  'selector-pseudo-class-no-unknown'?: (
    | null
    | (true | [])
    | [
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | (boolean &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | (true | [])
          | [
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  'selector-pseudo-class-parentheses-space-inside'?: AlwaysNeverRule;
  'selector-pseudo-class-whitelist'?: ArrayStringRule;
  'selector-pseudo-element-case'?: LowerUpperRule;
  'selector-pseudo-element-colon-notation'?: SingleDoubleRule;
  /**
   * Disallow unknown pseudo-element selectors
   */
  'selector-pseudo-element-no-unknown'?: (
    | null
    | (true | [])
    | [
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | (boolean &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | (true | [])
          | [
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  'selector-root-no-composition'?: BooleanRule;
  'selector-type-case'?: LowerUpperRule;
  /**
   * Disallow unknown type selectors
   */
  'selector-type-no-unknown'?: (
    | null
    | (true | [])
    | [
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | (boolean &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | (true | [])
          | [
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  'selector-max-empty-lines'?: IntegerRule;
  [k: string]: unknown | undefined;
}
export interface CoreRule8 {
  disableFix?: boolean;
  /**
   * Custom message that will be used in errors and warnings
   */
  message?: string;
  reportDisables?: boolean;
  /**
   * Message status
   */
  severity?: 'warning' | 'error';
  url?: string;
}
export interface SelectorList {
  'selector-list-comma-newline-after'?: NewlineRule;
  'selector-list-comma-newline-before'?: NewlineRule;
  'selector-list-comma-space-after'?: SpaceRule;
  'selector-list-comma-space-before'?: SpaceRule;
  [k: string]: unknown | undefined;
}
export interface ShorthandProperty {
  'shorthand-property-no-redundant-values'?: BooleanRule;
  [k: string]: unknown | undefined;
}
export interface String {
  'string-no-newline'?: BooleanRule;
  'string-quotes'?: SingleDoubleRule;
  [k: string]: unknown | undefined;
}
export interface StylelintDisableComment {
  /**
   * Require a reason comment before or after `stylelint-disable` comments
   */
  'stylelint-disable-reason'?: (
    | null
    | ('always-before' | 'always-after' | [])
    | [
        (('always-before' | 'always-after' | {}) | CoreRule) &
          (
            | ((('always-before' | 'always-after' | {}) | CoreRule) & string)
            | (('always-before' | 'always-after' | {}) | CoreRule)
          ) &
          (('always-before' | 'always-after' | {}) | CoreRule) &
          (
            | ((('always-before' | 'always-after' | {}) | CoreRule) & string)
            | (('always-before' | 'always-after' | {}) | CoreRule)
          ),
        (('always-before' | 'always-after' | {}) | CoreRule) &
          (
            | ((('always-before' | 'always-after' | {}) | CoreRule) & string)
            | (('always-before' | 'always-after' | {}) | CoreRule)
          ) &
          (('always-before' | 'always-after' | {}) | CoreRule) &
          (
            | ((('always-before' | 'always-after' | {}) | CoreRule) & string)
            | (('always-before' | 'always-after' | {}) | CoreRule)
          )
      ]
  ) &
    (
      | (null &
          (
            | null
            | ('always-before' | 'always-after' | [])
            | [
                (('always-before' | 'always-after' | {}) | CoreRule) &
                  (
                    | ((('always-before' | 'always-after' | {}) | CoreRule) & string)
                    | (('always-before' | 'always-after' | {}) | CoreRule)
                  ) &
                  (('always-before' | 'always-after' | {}) | CoreRule) &
                  (
                    | ((('always-before' | 'always-after' | {}) | CoreRule) & string)
                    | (('always-before' | 'always-after' | {}) | CoreRule)
                  ),
                (('always-before' | 'always-after' | {}) | CoreRule) &
                  (
                    | ((('always-before' | 'always-after' | {}) | CoreRule) & string)
                    | (('always-before' | 'always-after' | {}) | CoreRule)
                  ) &
                  (('always-before' | 'always-after' | {}) | CoreRule) &
                  (
                    | ((('always-before' | 'always-after' | {}) | CoreRule) & string)
                    | (('always-before' | 'always-after' | {}) | CoreRule)
                  )
              ]
          ))
      | ((
          | null
          | ('always-before' | 'always-after' | [])
          | [
              (('always-before' | 'always-after' | {}) | CoreRule) &
                (
                  | ((('always-before' | 'always-after' | {}) | CoreRule) & string)
                  | (('always-before' | 'always-after' | {}) | CoreRule)
                ) &
                (('always-before' | 'always-after' | {}) | CoreRule) &
                (
                  | ((('always-before' | 'always-after' | {}) | CoreRule) & string)
                  | (('always-before' | 'always-after' | {}) | CoreRule)
                ),
              (('always-before' | 'always-after' | {}) | CoreRule) &
                (
                  | ((('always-before' | 'always-after' | {}) | CoreRule) & string)
                  | (('always-before' | 'always-after' | {}) | CoreRule)
                ) &
                (('always-before' | 'always-after' | {}) | CoreRule) &
                (
                  | ((('always-before' | 'always-after' | {}) | CoreRule) & string)
                  | (('always-before' | 'always-after' | {}) | CoreRule)
                )
            ]
        ) &
          string)
      | ((
          | null
          | ('always-before' | 'always-after' | [])
          | [
              (('always-before' | 'always-after' | {}) | CoreRule) &
                (
                  | ((('always-before' | 'always-after' | {}) | CoreRule) & string)
                  | (('always-before' | 'always-after' | {}) | CoreRule)
                ) &
                (('always-before' | 'always-after' | {}) | CoreRule) &
                (
                  | ((('always-before' | 'always-after' | {}) | CoreRule) & string)
                  | (('always-before' | 'always-after' | {}) | CoreRule)
                ),
              (('always-before' | 'always-after' | {}) | CoreRule) &
                (
                  | ((('always-before' | 'always-after' | {}) | CoreRule) & string)
                  | (('always-before' | 'always-after' | {}) | CoreRule)
                ) &
                (('always-before' | 'always-after' | {}) | CoreRule) &
                (
                  | ((('always-before' | 'always-after' | {}) | CoreRule) & string)
                  | (('always-before' | 'always-after' | {}) | CoreRule)
                )
            ]
        ) &
          unknown[])
    );
  [k: string]: unknown | undefined;
}
export interface Time {
  'time-no-imperceptible'?: BooleanRule;
  [k: string]: unknown | undefined;
}
export interface Unit {
  'unit-blacklist'?: UnitRule;
  'unit-case'?: LowerUpperRule;
  /**
   * Disallow unknown units
   */
  'unit-no-unknown'?: (
    | null
    | (true | [])
    | [
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
        ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
          ((true | {}) | CoreRule) &
          ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | (boolean &
          (
            | null
            | (true | [])
            | [
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
                ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                  ((true | {}) | CoreRule) &
                  ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | (true | [])
          | [
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)),
              ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule)) &
                ((true | {}) | CoreRule) &
                ((((true | {}) | CoreRule) & boolean) | ((true | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  'unit-whitelist'?: UnitRule;
  [k: string]: unknown | undefined;
}
export interface Value {
  /**
   * Specify lowercase or uppercase for keywords values
   */
  'value-keyword-case'?: (
    | null
    | ('lower' | 'upper' | [])
    | [
        (('lower' | 'upper' | {}) | CoreRule) &
          (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
          (('lower' | 'upper' | {}) | CoreRule) &
          (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)),
        (('lower' | 'upper' | {}) | CoreRule) &
          (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
          (('lower' | 'upper' | {}) | CoreRule) &
          (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule))
      ]
  ) &
    (
      | (null &
          (
            | null
            | ('lower' | 'upper' | [])
            | [
                (('lower' | 'upper' | {}) | CoreRule) &
                  (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
                  (('lower' | 'upper' | {}) | CoreRule) &
                  (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)),
                (('lower' | 'upper' | {}) | CoreRule) &
                  (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
                  (('lower' | 'upper' | {}) | CoreRule) &
                  (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule))
              ]
          ))
      | ((
          | null
          | ('lower' | 'upper' | [])
          | [
              (('lower' | 'upper' | {}) | CoreRule) &
                (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
                (('lower' | 'upper' | {}) | CoreRule) &
                (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)),
              (('lower' | 'upper' | {}) | CoreRule) &
                (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
                (('lower' | 'upper' | {}) | CoreRule) &
                (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule))
            ]
        ) &
          string)
      | ((
          | null
          | ('lower' | 'upper' | [])
          | [
              (('lower' | 'upper' | {}) | CoreRule) &
                (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
                (('lower' | 'upper' | {}) | CoreRule) &
                (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)),
              (('lower' | 'upper' | {}) | CoreRule) &
                (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule)) &
                (('lower' | 'upper' | {}) | CoreRule) &
                (((('lower' | 'upper' | {}) | CoreRule) & string) | (('lower' | 'upper' | {}) | CoreRule))
            ]
        ) &
          unknown[])
    );
  'value-no-vendor-prefix'?: BooleanRule;
  [k: string]: unknown | undefined;
}
export interface ValueList {
  'value-list-comma-newline-after'?: NewlineRule;
  'value-list-comma-newline-before'?: NewlineRule;
  'value-list-comma-space-after'?: SpaceRule;
  'value-list-comma-space-before'?: SpaceRule;
  'value-list-max-empty-lines'?: IntegerRule;
  [k: string]: unknown | undefined;
}
