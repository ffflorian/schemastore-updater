/* eslint-disable */

export type Vega30VisualizationSpecificationLanguage = Scope & {
  $schema?: string;
  config?: {
    [k: string]: unknown | undefined;
  };
  description?: string;
  width?: number;
  height?: number;
  padding?:
    | number
    | {
        top: number;
        bottom: number;
        left: number;
        right: number;
      };
  autosize?:
    | ('pad' | 'fit' | 'none')
    | {
        type: 'pad' | 'fit' | 'none';
        resize?: boolean;
        contains?: 'content' | 'padding';
      };
  background?: string;
  [k: string]: unknown | undefined;
};
export type FieldRef =
  | string
  | (
      | SignalRef
      | {
          datum: FieldRef;
        }
      | {
          group: FieldRef;
          level?: number;
        }
      | {
          parent: FieldRef;
          level?: number;
        }
    );
export type ColorRef =
  | (
      | (Rule &
          (StringModifiers &
            (
              | (
                  | SignalRef
                  | {
                      value: string | null;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      field: FieldRef;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      range: number | boolean;
                      [k: string]: unknown | undefined;
                    }
                )
              | {
                  [k: string]: unknown | undefined;
                }
            )))[]
      | (StringModifiers &
          (
            | (
                | SignalRef
                | {
                    value: string | null;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
          ))
    )
  | {
      gradient: FieldRef;
    }
  | {
      color: ColorRGB | ColorHSL | ColorLAB | ColorHCL;
    };
export type EventSelectorString = string;
export type InputEventStreamDefinition = StreamParams &
  (
    | StreamEvents
    | {
        stream: InputEventStreamDefinition;
        [k: string]: unknown | undefined;
      }
    | {
        /**
         * @minItems 1
         */
        merge: [InputEventStreamDefinition, ...InputEventStreamDefinition[]];
        [k: string]: unknown | undefined;
      }
  );
export type ExpressionString = string;
export type OnEvents = ({
  events:
    | EventSelectorString
    | (
        | SignalRef
        | {
            scale: string;
            [k: string]: unknown | undefined;
          }
        | InputEventStreamDefinition
      )
    | [
        (
          | SignalRef
          | {
              scale: string;
              [k: string]: unknown | undefined;
            }
          | InputEventStreamDefinition
        ),
        ...(
          | SignalRef
          | {
              scale: string;
              [k: string]: unknown | undefined;
            }
          | InputEventStreamDefinition
        )[]
      ];
  force?: boolean;
  [k: string]: unknown | undefined;
} & (
  | {
      encode: string;
      [k: string]: unknown | undefined;
    }
  | {
      update:
        | ExpressionString
        | ExpressionRef
        | SignalRef
        | {
            value: unknown;
            [k: string]: unknown | undefined;
          };
      [k: string]: unknown | undefined;
    }
))[];
export type InputDataSetDefinition = {
  name: string;
  transform?: (
    | AggregateTransform
    | BinTransform
    | CollectTransform
    | CountpatternTransform
    | CrossTransform
    | DensityTransform
    | ExtentTransform
    | FilterTransform
    | FoldTransform
    | FormulaTransform
    | ImputeTransform
    | JoinaggregateTransform
    | LookupTransform
    | ProjectTransform
    | SampleTransform
    | SequenceTransform
    | WindowTransform
    | IdentifierTransform
    | LinkpathTransform
    | PieTransform
    | StackTransform
    | ContourTransform
    | GeojsonTransform
    | GeopathTransform
    | GeopointTransform
    | GeoshapeTransform
    | GraticuleTransform
    | ForceTransform
    | NestTransform
    | PackTransform
    | PartitionTransform
    | StratifyTransform
    | TreeTransform
    | TreelinksTransform
    | TreemapTransform
    | VoronoiTransform
    | WordcloudTransform
    | CrossfilterTransform
    | ResolvefilterTransform
  )[];
  on?: OnTrigger;
  format?:
    | {
        type?: 'json';
        parse?:
          | 'auto'
          | {
              [k: string]: (('boolean' | 'number' | 'date' | 'string') | string) | undefined;
            };
        property?: string;
        copy?: boolean;
      }
    | {
        type?: 'csv' | 'tsv';
        parse?:
          | 'auto'
          | {
              [k: string]: (('boolean' | 'number' | 'date' | 'string') | string) | undefined;
            };
      }
    | {
        type?: 'dsv';
        delimiter?: string;
        parse?:
          | 'auto'
          | {
              [k: string]: (('boolean' | 'number' | 'date' | 'string') | string) | undefined;
            };
      }
    | (
        | {
            type?: 'topojson';
            feature?: string;
            property?: string;
          }
        | {
            type?: 'topojson';
            mesh?: string;
            property?: string;
          }
      );
  [k: string]: unknown | undefined;
} & (
  | {
      [k: string]: unknown | undefined;
    }
  | (
      | {
          source: string | [string, ...string[]];
          [k: string]: unknown | undefined;
        }
      | {
          values: unknown[];
          [k: string]: unknown | undefined;
        }
      | {
          url: string;
          [k: string]: unknown | undefined;
        }
    )
);
export type OnTrigger = {
  trigger: ExpressionString;
  insert?: ExpressionString;
  remove?: boolean | ExpressionString;
  toggle?: ExpressionString;
  modify?: ExpressionString;
  values?: ExpressionString;
  [k: string]: unknown | undefined;
}[];
export type ScaleMapping = {
  name: string;
  type?: string;
  domain?:
    | (null | string | number | boolean | SignalRef)[]
    | (
        | {
            data: string;
            field: string | SignalRef;
            sort?:
              | boolean
              | {
                  field?: string | SignalRef;
                  op?: string | SignalRef;
                  order?: ('ascending' | 'descending') | SignalRef;
                };
          }
        | {
            data: string;
            /**
             * @minItems 1
             */
            fields: [string | SignalRef, ...(string | SignalRef)[]];
            sort?:
              | boolean
              | {
                  op?: 'count';
                  order?: ('ascending' | 'descending') | SignalRef;
                };
          }
        | {
            /**
             * @minItems 1
             */
            fields: [
              (
                | {
                    data: string;
                    field: string | SignalRef;
                  }
                | (string | number | boolean)[]
                | SignalRef
              ),
              ...(
                | {
                    data: string;
                    field: string | SignalRef;
                  }
                | (string | number | boolean)[]
                | SignalRef
              )[]
            ];
            sort?:
              | boolean
              | {
                  op?: 'count';
                  order?: ('ascending' | 'descending') | SignalRef;
                };
          }
      )
    | SignalRef;
  domainMin?: number | SignalRef;
  domainMax?: number | SignalRef;
  domainMid?: number | SignalRef;
  domainRaw?: null | unknown[] | SignalRef;
  reverse?: boolean | SignalRef;
  round?: boolean | SignalRef;
  [k: string]: unknown | undefined;
} & (
  | {
      type: 'ordinal';
      range?:
        | ('width' | 'height' | 'symbol' | 'category' | 'ordinal' | 'ramp' | 'diverging' | 'heatmap')
        | (null | boolean | string | number | SignalRef)[]
        | SignalRef
        | {
            scheme: string | SignalRef;
            count?: number | SignalRef;
            extent?: (number | SignalRef)[] | SignalRef;
          }
        | (
            | {
                data: string;
                field: string | SignalRef;
                sort?:
                  | boolean
                  | {
                      field?: string | SignalRef;
                      op?: string | SignalRef;
                      order?: ('ascending' | 'descending') | SignalRef;
                    };
              }
            | {
                data: string;
                /**
                 * @minItems 1
                 */
                fields: [string | SignalRef, ...(string | SignalRef)[]];
                sort?:
                  | boolean
                  | {
                      op?: 'count';
                      order?: ('ascending' | 'descending') | SignalRef;
                    };
              }
            | {
                /**
                 * @minItems 1
                 */
                fields: [
                  (
                    | {
                        data: string;
                        field: string | SignalRef;
                      }
                    | (string | number | boolean)[]
                    | SignalRef
                  ),
                  ...(
                    | {
                        data: string;
                        field: string | SignalRef;
                      }
                    | (string | number | boolean)[]
                    | SignalRef
                  )[]
                ];
                sort?:
                  | boolean
                  | {
                      op?: 'count';
                      order?: ('ascending' | 'descending') | SignalRef;
                    };
              }
          );
      [k: string]: unknown | undefined;
    }
  | {
      type: 'band';
      range?:
        | ('width' | 'height' | 'symbol' | 'category' | 'ordinal' | 'ramp' | 'diverging' | 'heatmap')
        | (null | boolean | string | number | SignalRef)[]
        | SignalRef
        | {
            step: number | SignalRef;
          };
      padding?: number | SignalRef;
      paddingInner?: number | SignalRef;
      paddingOuter?: number | SignalRef;
      align?: number | SignalRef;
      [k: string]: unknown | undefined;
    }
  | {
      type: 'point';
      range?:
        | ('width' | 'height' | 'symbol' | 'category' | 'ordinal' | 'ramp' | 'diverging' | 'heatmap')
        | (null | boolean | string | number | SignalRef)[]
        | SignalRef
        | {
            step: number | SignalRef;
          };
      padding?: number | SignalRef;
      paddingOuter?: number | SignalRef;
      align?: number | SignalRef;
      [k: string]: unknown | undefined;
    }
  | {
      type: 'sequential';
      range:
        | ('width' | 'height' | 'symbol' | 'category' | 'ordinal' | 'ramp' | 'diverging' | 'heatmap')
        | (null | boolean | string | number | SignalRef)[]
        | SignalRef
        | {
            scheme: string | SignalRef;
            count?: number | SignalRef;
            extent?: (number | SignalRef)[] | SignalRef;
          };
      clamp?: boolean | SignalRef;
      [k: string]: unknown | undefined;
    }
  | {
      type: 'time' | 'utc';
      range?:
        | ('width' | 'height' | 'symbol' | 'category' | 'ordinal' | 'ramp' | 'diverging' | 'heatmap')
        | (null | boolean | string | number | SignalRef)[]
        | SignalRef
        | {
            scheme: string | SignalRef;
            count?: number | SignalRef;
            extent?: (number | SignalRef)[] | SignalRef;
          };
      clamp?: boolean | SignalRef;
      padding?: number;
      nice?:
        | boolean
        | ('millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year')
        | {
            interval: ('millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year') | SignalRef;
            step?: number | SignalRef;
            [k: string]: unknown | undefined;
          }
        | SignalRef;
      [k: string]: unknown | undefined;
    }
  | {
      type: 'identity';
      nice?: boolean | SignalRef;
      [k: string]: unknown | undefined;
    }
  | {
      type: 'quantile' | 'quantize' | 'threshold' | 'bin-ordinal';
      range?:
        | ('width' | 'height' | 'symbol' | 'category' | 'ordinal' | 'ramp' | 'diverging' | 'heatmap')
        | (null | boolean | string | number | SignalRef)[]
        | SignalRef
        | {
            scheme: string | SignalRef;
            count?: number | SignalRef;
            extent?: (number | SignalRef)[] | SignalRef;
          };
      nice?: boolean | number | SignalRef;
      zero?: boolean | SignalRef;
      [k: string]: unknown | undefined;
    }
  | {
      range?:
        | ('width' | 'height' | 'symbol' | 'category' | 'ordinal' | 'ramp' | 'diverging' | 'heatmap')
        | (null | boolean | string | number | SignalRef)[]
        | SignalRef
        | {
            scheme: string | SignalRef;
            count?: number | SignalRef;
            extent?: (number | SignalRef)[] | SignalRef;
          };
      interpolate?:
        | string
        | SignalRef
        | {
            type: string | SignalRef;
            gamma?: number | SignalRef;
            [k: string]: unknown | undefined;
          };
      clamp?: boolean | SignalRef;
      padding?: number;
      nice?: boolean | number | SignalRef;
      zero?: boolean | SignalRef;
      [k: string]: unknown | undefined;
    }
  | {
      type: 'log';
      range?:
        | ('width' | 'height' | 'symbol' | 'category' | 'ordinal' | 'ramp' | 'diverging' | 'heatmap')
        | (null | boolean | string | number | SignalRef)[]
        | SignalRef
        | {
            scheme: string | SignalRef;
            count?: number | SignalRef;
            extent?: (number | SignalRef)[] | SignalRef;
          };
      interpolate?:
        | string
        | SignalRef
        | {
            type: string | SignalRef;
            gamma?: number | SignalRef;
            [k: string]: unknown | undefined;
          };
      base?: number | SignalRef;
      clamp?: boolean | SignalRef;
      padding?: number;
      nice?: boolean | number | SignalRef;
      zero?: boolean | SignalRef;
      [k: string]: unknown | undefined;
    }
  | {
      type: 'pow';
      range?:
        | ('width' | 'height' | 'symbol' | 'category' | 'ordinal' | 'ramp' | 'diverging' | 'heatmap')
        | (null | boolean | string | number | SignalRef)[]
        | SignalRef
        | {
            scheme: string | SignalRef;
            count?: number | SignalRef;
            extent?: (number | SignalRef)[] | SignalRef;
          };
      interpolate?:
        | string
        | SignalRef
        | {
            type: string | SignalRef;
            gamma?: number | SignalRef;
            [k: string]: unknown | undefined;
          };
      clamp?: boolean | SignalRef;
      exponent?: number | SignalRef;
      padding?: number;
      nice?: boolean | number | SignalRef;
      zero?: boolean | SignalRef;
      [k: string]: unknown | undefined;
    }
  | {
      type: 'bin-linear';
      range?:
        | ('width' | 'height' | 'symbol' | 'category' | 'ordinal' | 'ramp' | 'diverging' | 'heatmap')
        | (null | boolean | string | number | SignalRef)[]
        | SignalRef
        | {
            scheme: string | SignalRef;
            count?: number | SignalRef;
            extent?: (number | SignalRef)[] | SignalRef;
          };
      interpolate?:
        | string
        | SignalRef
        | {
            type: string | SignalRef;
            gamma?: number | SignalRef;
            [k: string]: unknown | undefined;
          };
      [k: string]: unknown | undefined;
    }
);
export type Legend = {
  [k: string]: unknown | undefined;
} & {
  size?: string;
  shape?: string;
  fill?: string;
  stroke?: string;
  opacity?: string;
  strokeDash?: string;
  type?: 'gradient' | 'symbol';
  orient?: 'none' | 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  title?: string | SignalRef;
  zindex?: number;
  offset?:
    | number
    | (
        | (Rule &
            (NumberModifiers &
              (
                | (
                    | SignalRef
                    | {
                        value: number;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        field: FieldRef;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        range: number | boolean;
                        [k: string]: unknown | undefined;
                      }
                  )
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
              )))[]
        | (NumberModifiers &
            (
              | (
                  | SignalRef
                  | {
                      value: number;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      field: FieldRef;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      range: number | boolean;
                      [k: string]: unknown | undefined;
                    }
                )
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
            ))
      );
  padding?:
    | number
    | (
        | (Rule &
            (NumberModifiers &
              (
                | (
                    | SignalRef
                    | {
                        value: number;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        field: FieldRef;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        range: number | boolean;
                        [k: string]: unknown | undefined;
                      }
                  )
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
              )))[]
        | (NumberModifiers &
            (
              | (
                  | SignalRef
                  | {
                      value: number;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      field: FieldRef;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      range: number | boolean;
                      [k: string]: unknown | undefined;
                    }
                )
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
            ))
      );
  titlePadding?:
    | number
    | (
        | (Rule &
            (NumberModifiers &
              (
                | (
                    | SignalRef
                    | {
                        value: number;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        field: FieldRef;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        range: number | boolean;
                        [k: string]: unknown | undefined;
                      }
                  )
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
              )))[]
        | (NumberModifiers &
            (
              | (
                  | SignalRef
                  | {
                      value: number;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      field: FieldRef;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      range: number | boolean;
                      [k: string]: unknown | undefined;
                    }
                )
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
            ))
      );
  entryPadding?:
    | number
    | (
        | (Rule &
            (NumberModifiers &
              (
                | (
                    | SignalRef
                    | {
                        value: number;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        field: FieldRef;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        range: number | boolean;
                        [k: string]: unknown | undefined;
                      }
                  )
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
              )))[]
        | (NumberModifiers &
            (
              | (
                  | SignalRef
                  | {
                      value: number;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      field: FieldRef;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      range: number | boolean;
                      [k: string]: unknown | undefined;
                    }
                )
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
            ))
      );
  tickCount?:
    | number
    | ('millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year')
    | {
        interval: ('millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year') | SignalRef;
        step?: number | SignalRef;
        [k: string]: unknown | undefined;
      }
    | SignalRef;
  format?: string | SignalRef;
  values?: unknown[] | SignalRef;
  encode?: {
    title?: GuideEncode;
    labels?: GuideEncode;
    legend?: GuideEncode;
    symbols?: GuideEncode;
    gradient?: GuideEncode;
  };
};
export type MarkTypeDefinition = string;
export type OnMarkTrigger = {
  trigger: ExpressionString;
  modify?: ExpressionString;
  values?: ExpressionString;
  [k: string]: unknown | undefined;
}[];

export interface Scope {
  encode?: Encode;
  layout?:
    | {
        align?:
          | (('all' | 'each' | 'none') | SignalRef)
          | {
              row?: ('all' | 'each' | 'none') | SignalRef;
              column?: ('all' | 'each' | 'none') | SignalRef;
            };
        bounds?: ('full' | 'flush') | SignalRef;
        columns?: number | SignalRef;
        padding?:
          | (number | SignalRef)
          | {
              row?: number | SignalRef;
              column?: number | SignalRef;
            };
        offset?:
          | (number | SignalRef)
          | {
              rowHeader?: number | SignalRef;
              rowFooter?: number | SignalRef;
              rowTitle?: number | SignalRef;
              columnHeader?: number | SignalRef;
              columnFooter?: number | SignalRef;
              columnTitle?: number | SignalRef;
            };
        headerBand?:
          | (number | SignalRef)
          | null
          | {
              row?: number | SignalRef;
              column?: number | SignalRef;
            };
        footerBand?:
          | (number | SignalRef)
          | null
          | {
              row?: number | SignalRef;
              column?: number | SignalRef;
            };
        titleBand?:
          | (number | SignalRef)
          | null
          | {
              row?: number | SignalRef;
              column?: number | SignalRef;
            };
        [k: string]: unknown | undefined;
      }
    | SignalRef;
  signals?: (SignalPush | SignalNew)[];
  data?: InputDataSetDefinition[];
  scales?: ScaleMapping[];
  projections?: Projection[];
  axes?: Axis[];
  legends?: Legend[];
  title?:
    | string
    | {
        name?: string;
        orient?: 'none' | 'left' | 'right' | 'top' | 'bottom';
        anchor?: 'start' | 'middle' | 'end';
        style?: string | string[];
        text: string | SignalRef;
        zindex?: number;
        interactive?: boolean;
        offset?:
          | number
          | (
              | (Rule &
                  (NumberModifiers &
                    (
                      | (
                          | SignalRef
                          | {
                              value: number;
                              [k: string]: unknown | undefined;
                            }
                          | {
                              field: FieldRef;
                              [k: string]: unknown | undefined;
                            }
                          | {
                              range: number | boolean;
                              [k: string]: unknown | undefined;
                            }
                        )
                      | {
                          [k: string]: unknown | undefined;
                        }
                      | {
                          [k: string]: unknown | undefined;
                        }
                      | {
                          [k: string]: unknown | undefined;
                        }
                    )))[]
              | (NumberModifiers &
                  (
                    | (
                        | SignalRef
                        | {
                            value: number;
                            [k: string]: unknown | undefined;
                          }
                        | {
                            field: FieldRef;
                            [k: string]: unknown | undefined;
                          }
                        | {
                            range: number | boolean;
                            [k: string]: unknown | undefined;
                          }
                      )
                    | {
                        [k: string]: unknown | undefined;
                      }
                    | {
                        [k: string]: unknown | undefined;
                      }
                    | {
                        [k: string]: unknown | undefined;
                      }
                  ))
            );
        encode?: TitleEncode;
      };
  marks?: (
    | ({
        type: 'group';
        [k: string]: unknown | undefined;
      } & Mark &
        Scope & {
          from?: From | Facet;
          [k: string]: unknown | undefined;
        })
    | ({
        [k: string]: unknown | undefined;
      } & Mark & {
          from?: From;
          [k: string]: unknown | undefined;
        })
  )[];
  [k: string]: unknown | undefined;
}
export interface Encode {
  [k: string]: MarkEncodePropertySet;
}
/**
 * This interface was referenced by `Encode`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 *
 * This interface was referenced by `GuideEncode`'s JSON-Schema definition
 * via the `patternProperty` "^(?!interactive|name|style).+$".
 *
 * This interface was referenced by `TitleEncode`'s JSON-Schema definition
 * via the `patternProperty` "^(?!interactive|name|style).+$".
 */
export interface MarkEncodePropertySet {
  x?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  x2?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  xc?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  width?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  y?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  y2?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  yc?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  height?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  opacity?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  fill?: ColorRef;
  fillOpacity?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  stroke?: ColorRef;
  strokeWidth?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  strokeOpacity?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  strokeDash?:
    | (Rule &
        (StringModifiers &
          (
            | (
                | SignalRef
                | {
                    value: unknown[];
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (StringModifiers &
        (
          | (
              | SignalRef
              | {
                  value: unknown[];
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
        ));
  strokeDashOffset?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  cursor?:
    | (Rule &
        (StringModifiers &
          (
            | (
                | SignalRef
                | {
                    value: string;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (StringModifiers &
        (
          | (
              | SignalRef
              | {
                  value: string;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
        ));
  clip?:
    | (Rule &
        (StringModifiers &
          (
            | (
                | SignalRef
                | {
                    value: boolean;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (StringModifiers &
        (
          | (
              | SignalRef
              | {
                  value: boolean;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
        ));
  size?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  shape?:
    | string
    | (
        | (Rule &
            (StringModifiers &
              (
                | (
                    | SignalRef
                    | {
                        value: string;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        field: FieldRef;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        range: number | boolean;
                        [k: string]: unknown | undefined;
                      }
                  )
                | {
                    [k: string]: unknown | undefined;
                  }
              )))[]
        | (StringModifiers &
            (
              | (
                  | SignalRef
                  | {
                      value: string;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      field: FieldRef;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      range: number | boolean;
                      [k: string]: unknown | undefined;
                    }
                )
              | {
                  [k: string]: unknown | undefined;
                }
            ))
      );
  path?:
    | (Rule &
        (StringModifiers &
          (
            | (
                | SignalRef
                | {
                    value: string;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (StringModifiers &
        (
          | (
              | SignalRef
              | {
                  value: string;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
        ));
  innerRadius?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  outerRadius?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  startAngle?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  endAngle?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  interpolate?:
    | (Rule &
        (StringModifiers &
          (
            | (
                | SignalRef
                | {
                    value: string;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (StringModifiers &
        (
          | (
              | SignalRef
              | {
                  value: string;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
        ));
  tension?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  orient?:
    | (Rule &
        (StringModifiers &
          (
            | (
                | SignalRef
                | {
                    value: 'horizontal' | 'vertical';
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (StringModifiers &
        (
          | (
              | SignalRef
              | {
                  value: 'horizontal' | 'vertical';
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
        ));
  url?:
    | (Rule &
        (StringModifiers &
          (
            | (
                | SignalRef
                | {
                    value: string;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (StringModifiers &
        (
          | (
              | SignalRef
              | {
                  value: string;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
        ));
  align?:
    | (Rule &
        (StringModifiers &
          (
            | (
                | SignalRef
                | {
                    value: 'left' | 'right' | 'center';
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (StringModifiers &
        (
          | (
              | SignalRef
              | {
                  value: 'left' | 'right' | 'center';
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
        ));
  baseline?:
    | (Rule &
        (StringModifiers &
          (
            | (
                | SignalRef
                | {
                    value: 'top' | 'middle' | 'bottom' | 'alphabetic';
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (StringModifiers &
        (
          | (
              | SignalRef
              | {
                  value: 'top' | 'middle' | 'bottom' | 'alphabetic';
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
        ));
  text?:
    | (Rule &
        (StringModifiers &
          (
            | (
                | SignalRef
                | {
                    value: string;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (StringModifiers &
        (
          | (
              | SignalRef
              | {
                  value: string;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
        ));
  dir?:
    | (Rule &
        (StringModifiers &
          (
            | (
                | SignalRef
                | {
                    value: string;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (StringModifiers &
        (
          | (
              | SignalRef
              | {
                  value: string;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
        ));
  ellipsis?:
    | (Rule &
        (StringModifiers &
          (
            | (
                | SignalRef
                | {
                    value: string;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (StringModifiers &
        (
          | (
              | SignalRef
              | {
                  value: string;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
        ));
  limit?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  dx?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  dy?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  radius?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  theta?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  angle?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  font?:
    | (Rule &
        (StringModifiers &
          (
            | (
                | SignalRef
                | {
                    value: string;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (StringModifiers &
        (
          | (
              | SignalRef
              | {
                  value: string;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
        ));
  fontSize?:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  fontWeight?:
    | (Rule &
        (StringModifiers &
          (
            | (
                | SignalRef
                | {
                    value: string | null;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (StringModifiers &
        (
          | (
              | SignalRef
              | {
                  value: string | null;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
        ));
  fontStyle?:
    | (Rule &
        (StringModifiers &
          (
            | (
                | SignalRef
                | {
                    value: string;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (StringModifiers &
        (
          | (
              | SignalRef
              | {
                  value: string;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
        ));
  [k: string]: unknown | undefined;
}
export interface Rule {
  test?: string;
  [k: string]: unknown | undefined;
}
export interface NumberModifiers {
  exponent?:
    | number
    | (
        | (Rule &
            (NumberModifiers &
              (
                | (
                    | SignalRef
                    | {
                        value: number;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        field: FieldRef;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        range: number | boolean;
                        [k: string]: unknown | undefined;
                      }
                  )
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
              )))[]
        | (NumberModifiers &
            (
              | (
                  | SignalRef
                  | {
                      value: number;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      field: FieldRef;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      range: number | boolean;
                      [k: string]: unknown | undefined;
                    }
                )
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
            ))
      );
  mult?:
    | number
    | (
        | (Rule &
            (NumberModifiers &
              (
                | (
                    | SignalRef
                    | {
                        value: number;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        field: FieldRef;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        range: number | boolean;
                        [k: string]: unknown | undefined;
                      }
                  )
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
              )))[]
        | (NumberModifiers &
            (
              | (
                  | SignalRef
                  | {
                      value: number;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      field: FieldRef;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      range: number | boolean;
                      [k: string]: unknown | undefined;
                    }
                )
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
            ))
      );
  offset?:
    | number
    | (
        | (Rule &
            (NumberModifiers &
              (
                | (
                    | SignalRef
                    | {
                        value: number;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        field: FieldRef;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        range: number | boolean;
                        [k: string]: unknown | undefined;
                      }
                  )
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
              )))[]
        | (NumberModifiers &
            (
              | (
                  | SignalRef
                  | {
                      value: number;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      field: FieldRef;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      range: number | boolean;
                      [k: string]: unknown | undefined;
                    }
                )
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
            ))
      );
  round?: boolean;
  scale?: FieldRef;
  band?: number | boolean;
  extra?: boolean;
  [k: string]: unknown | undefined;
}
export interface SignalRef {
  signal: string;
  [k: string]: unknown | undefined;
}
export interface StringModifiers {
  scale?: FieldRef;
  [k: string]: unknown | undefined;
}
export interface ColorRGB {
  r:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  g:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  b:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  [k: string]: unknown | undefined;
}
export interface ColorHSL {
  h:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  s:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  l:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  [k: string]: unknown | undefined;
}
export interface ColorLAB {
  l:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  a:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  b:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  [k: string]: unknown | undefined;
}
export interface ColorHCL {
  h:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  c:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  l:
    | (Rule &
        (NumberModifiers &
          (
            | (
                | SignalRef
                | {
                    value: number;
                    [k: string]: unknown | undefined;
                  }
                | {
                    field: FieldRef;
                    [k: string]: unknown | undefined;
                  }
                | {
                    range: number | boolean;
                    [k: string]: unknown | undefined;
                  }
              )
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
            | {
                [k: string]: unknown | undefined;
              }
          )))[]
    | (NumberModifiers &
        (
          | (
              | SignalRef
              | {
                  value: number;
                  [k: string]: unknown | undefined;
                }
              | {
                  field: FieldRef;
                  [k: string]: unknown | undefined;
                }
              | {
                  range: number | boolean;
                  [k: string]: unknown | undefined;
                }
            )
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }
        ));
  [k: string]: unknown | undefined;
}
export interface SignalPush {
  name: string;
  push: 'outer';
  description?: string;
  on?: OnEvents;
}
export interface StreamParams {
  /**
   * @minItems 2
   * @maxItems 2
   */
  between?: [InputEventStreamDefinition, InputEventStreamDefinition];
  marktype?: string;
  markname?: string;
  filter?: ExpressionString | [ExpressionString, ...ExpressionString[]];
  throttle?: number;
  debounce?: number;
  consume?: boolean;
  [k: string]: unknown | undefined;
}
export interface StreamEvents {
  source?: string;
  type: string;
  [k: string]: unknown | undefined;
}
export interface ExpressionRef {
  expr: string;
  [k: string]: unknown | undefined;
}
export interface SignalNew {
  name: string;
  description?: string;
  value?: unknown;
  react?: boolean;
  update?: ExpressionString;
  on?: OnEvents;
  bind?:
    | {
        input: 'checkbox';
        element?: string;
        debounce?: number;
        [k: string]: unknown | undefined;
      }
    | {
        input: 'radio' | 'select';
        element?: string;
        options: unknown[];
        debounce?: number;
      }
    | {
        input: 'range';
        element?: string;
        min?: number;
        max?: number;
        step?: number;
        debounce?: number;
      }
    | {
        input?: {
          [k: string]: unknown | undefined;
        };
        element?: string;
        debounce?: number;
        [k: string]: unknown | undefined;
      };
}
export interface AggregateTransform {
  type: 'aggregate';
  signal?: string;
  groupby?: ((string | SignalRef) | ParamField | ExpressionRef)[] | SignalRef;
  ops?:
    | (
        | (
            | 'values'
            | 'count'
            | 'missing'
            | 'valid'
            | 'sum'
            | 'mean'
            | 'average'
            | 'variance'
            | 'variancep'
            | 'stdev'
            | 'stdevp'
            | 'stderr'
            | 'distinct'
            | 'ci0'
            | 'ci1'
            | 'median'
            | 'q1'
            | 'q3'
            | 'argmin'
            | 'argmax'
            | 'min'
            | 'max'
          )
        | SignalRef
      )[]
    | SignalRef;
  fields?: ((string | SignalRef) | ParamField | ExpressionRef | null)[] | SignalRef;
  as?: (string | SignalRef | null)[] | SignalRef;
  drop?: boolean | SignalRef;
  cross?: boolean | SignalRef;
  key?: (string | SignalRef) | ParamField | ExpressionRef;
}
export interface ParamField {
  field: string;
}
export interface BinTransform {
  type: 'bin';
  signal?: string;
  field: (string | SignalRef) | ParamField | ExpressionRef;
  anchor?: number | SignalRef;
  maxbins?: number | SignalRef;
  base?: number | SignalRef;
  divide?: (number | SignalRef)[] | SignalRef;
  extent: (number | SignalRef)[] | SignalRef;
  step?: number | SignalRef;
  steps?: (number | SignalRef)[] | SignalRef;
  minstep?: number | SignalRef;
  nice?: boolean | SignalRef;
  name?: string | SignalRef;
  as?: (string | SignalRef)[] | SignalRef;
}
export interface CollectTransform {
  type: 'collect';
  signal?: string;
  sort?:
    | {
        field?: string | SignalRef;
        order?: ('ascending' | 'descending') | SignalRef;
        [k: string]: unknown | undefined;
      }
    | {
        field?: (string | SignalRef)[];
        order?: (('ascending' | 'descending') | SignalRef)[];
        [k: string]: unknown | undefined;
      };
}
export interface CountpatternTransform {
  type: 'countpattern';
  signal?: string;
  field: (string | SignalRef) | ParamField | ExpressionRef;
  case?: ('upper' | 'lower' | 'mixed') | SignalRef;
  pattern?: string | SignalRef;
  stopwords?: string | SignalRef;
  as?: (string | SignalRef)[] | SignalRef;
}
export interface CrossTransform {
  type: 'cross';
  signal?: string;
  filter?: ExpressionString;
  as?: (string | SignalRef)[] | SignalRef;
}
export interface DensityTransform {
  type: 'density';
  signal?: string;
  extent?: (number | SignalRef)[] | SignalRef;
  steps?: number | SignalRef;
  method?: string | SignalRef;
  distribution?:
    | {
        function: 'normal';
        mean?: number | SignalRef;
        stdev?: number | SignalRef;
      }
    | {
        function: 'uniform';
        min?: number | SignalRef;
        max?: number | SignalRef;
      }
    | {
        function: 'kde';
        field: (string | SignalRef) | ParamField | ExpressionRef;
        from?: string;
        bandwidth?: number | SignalRef;
      }
    | {
        function: 'mixture';
        distributions?: unknown[] | SignalRef;
        weights?: (number | SignalRef)[] | SignalRef;
      };
  as?: (string | SignalRef)[] | SignalRef;
}
export interface ExtentTransform {
  type: 'extent';
  signal?: string;
  field: (string | SignalRef) | ParamField | ExpressionRef;
}
export interface FilterTransform {
  type: 'filter';
  signal?: string;
  expr: ExpressionString;
}
export interface FoldTransform {
  type: 'fold';
  signal?: string;
  fields: ((string | SignalRef) | ParamField | ExpressionRef)[] | SignalRef;
  as?: (string | SignalRef)[] | SignalRef;
}
export interface FormulaTransform {
  type: 'formula';
  signal?: string;
  expr: ExpressionString;
  as: string | SignalRef;
  initonly?: boolean | SignalRef;
}
export interface ImputeTransform {
  type: 'impute';
  signal?: string;
  field: (string | SignalRef) | ParamField | ExpressionRef;
  key: (string | SignalRef) | ParamField | ExpressionRef;
  keyvals?: unknown[] | SignalRef;
  groupby?: ((string | SignalRef) | ParamField | ExpressionRef)[] | SignalRef;
  method?: ('value' | 'mean' | 'median' | 'max' | 'min') | SignalRef;
  value?: unknown;
}
export interface JoinaggregateTransform {
  type: 'joinaggregate';
  signal?: string;
  groupby?: ((string | SignalRef) | ParamField | ExpressionRef)[] | SignalRef;
  fields?: ((string | SignalRef) | ParamField | ExpressionRef | null)[] | SignalRef;
  ops?:
    | (
        | (
            | 'values'
            | 'count'
            | 'missing'
            | 'valid'
            | 'sum'
            | 'mean'
            | 'average'
            | 'variance'
            | 'variancep'
            | 'stdev'
            | 'stdevp'
            | 'stderr'
            | 'distinct'
            | 'ci0'
            | 'ci1'
            | 'median'
            | 'q1'
            | 'q3'
            | 'argmin'
            | 'argmax'
            | 'min'
            | 'max'
          )
        | SignalRef
      )[]
    | SignalRef;
  as?: (string | SignalRef | null)[] | SignalRef;
  key?: (string | SignalRef) | ParamField | ExpressionRef;
}
export interface LookupTransform {
  type: 'lookup';
  signal?: string;
  from: string;
  key: (string | SignalRef) | ParamField | ExpressionRef;
  values?: ((string | SignalRef) | ParamField | ExpressionRef)[] | SignalRef;
  fields: ((string | SignalRef) | ParamField | ExpressionRef)[] | SignalRef;
  as?: (string | SignalRef)[] | SignalRef;
  default?: unknown;
}
export interface ProjectTransform {
  type: 'project';
  signal?: string;
  fields?: ((string | SignalRef) | ParamField | ExpressionRef)[] | SignalRef;
  as?: (string | SignalRef | null)[] | SignalRef;
}
export interface SampleTransform {
  type: 'sample';
  signal?: string;
  size?: number | SignalRef;
}
export interface SequenceTransform {
  type: 'sequence';
  signal?: string;
  start: number | SignalRef;
  stop: number | SignalRef;
  step?: number | SignalRef;
}
export interface WindowTransform {
  type: 'window';
  signal?: string;
  sort?:
    | {
        field?: string | SignalRef;
        order?: ('ascending' | 'descending') | SignalRef;
        [k: string]: unknown | undefined;
      }
    | {
        field?: (string | SignalRef)[];
        order?: (('ascending' | 'descending') | SignalRef)[];
        [k: string]: unknown | undefined;
      };
  groupby?: ((string | SignalRef) | ParamField | ExpressionRef)[] | SignalRef;
  ops?:
    | (
        | (
            | 'row_number'
            | 'rank'
            | 'dense_rank'
            | 'percent_rank'
            | 'cume_dist'
            | 'ntile'
            | 'lag'
            | 'lead'
            | 'first_value'
            | 'last_value'
            | 'nth_value'
            | 'values'
            | 'count'
            | 'missing'
            | 'valid'
            | 'sum'
            | 'mean'
            | 'average'
            | 'variance'
            | 'variancep'
            | 'stdev'
            | 'stdevp'
            | 'stderr'
            | 'distinct'
            | 'ci0'
            | 'ci1'
            | 'median'
            | 'q1'
            | 'q3'
            | 'argmin'
            | 'argmax'
            | 'min'
            | 'max'
          )
        | SignalRef
      )[]
    | SignalRef;
  params?: (number | SignalRef | null)[] | SignalRef;
  fields?: ((string | SignalRef) | ParamField | ExpressionRef | null)[] | SignalRef;
  as?: (string | SignalRef | null)[] | SignalRef;
  frame?: (number | SignalRef | null)[] | SignalRef;
  ignorePeers?: boolean | SignalRef;
}
export interface IdentifierTransform {
  type: 'identifier';
  signal?: string;
  as: string | SignalRef;
}
export interface LinkpathTransform {
  type: 'linkpath';
  signal?: string;
  sourceX?: (string | SignalRef) | ParamField | ExpressionRef;
  sourceY?: (string | SignalRef) | ParamField | ExpressionRef;
  targetX?: (string | SignalRef) | ParamField | ExpressionRef;
  targetY?: (string | SignalRef) | ParamField | ExpressionRef;
  orient?: ('horizontal' | 'vertical' | 'radial') | SignalRef;
  shape?: ('line' | 'arc' | 'curve' | 'diagonal' | 'orthogonal') | SignalRef;
  as?: string | SignalRef;
}
export interface PieTransform {
  type: 'pie';
  signal?: string;
  field?: (string | SignalRef) | ParamField | ExpressionRef;
  startAngle?: number | SignalRef;
  endAngle?: number | SignalRef;
  sort?: boolean | SignalRef;
  as?: (string | SignalRef)[] | SignalRef;
}
export interface StackTransform {
  type: 'stack';
  signal?: string;
  field?: (string | SignalRef) | ParamField | ExpressionRef;
  groupby?: ((string | SignalRef) | ParamField | ExpressionRef)[] | SignalRef;
  sort?:
    | {
        field?: string | SignalRef;
        order?: ('ascending' | 'descending') | SignalRef;
        [k: string]: unknown | undefined;
      }
    | {
        field?: (string | SignalRef)[];
        order?: (('ascending' | 'descending') | SignalRef)[];
        [k: string]: unknown | undefined;
      };
  offset?: ('zero' | 'center' | 'normalize') | SignalRef;
  as?: (string | SignalRef)[] | SignalRef;
}
export interface ContourTransform {
  type: 'contour';
  signal?: string;
  size: (number | SignalRef)[] | SignalRef;
  values?: (number | SignalRef)[] | SignalRef;
  x?: (string | SignalRef) | ParamField | ExpressionRef;
  y?: (string | SignalRef) | ParamField | ExpressionRef;
  cellSize?: number | SignalRef;
  bandwidth?: number | SignalRef;
  count?: number | SignalRef;
  nice?: number | SignalRef;
  thresholds?: (number | SignalRef)[] | SignalRef;
}
export interface GeojsonTransform {
  type: 'geojson';
  signal?: string;
  fields?: ((string | SignalRef) | ParamField | ExpressionRef)[] | SignalRef;
  geojson?: (string | SignalRef) | ParamField | ExpressionRef;
}
export interface GeopathTransform {
  type: 'geopath';
  signal?: string;
  projection?: string;
  field?: (string | SignalRef) | ParamField | ExpressionRef;
  as?: string | SignalRef;
}
export interface GeopointTransform {
  type: 'geopoint';
  signal?: string;
  projection: string;
  fields: ((string | SignalRef) | ParamField | ExpressionRef)[] | SignalRef;
  as?: (string | SignalRef)[] | SignalRef;
}
export interface GeoshapeTransform {
  type: 'geoshape';
  signal?: string;
  projection?: string;
  field?: (string | SignalRef) | ParamField | ExpressionRef;
  as?: string | SignalRef;
}
export interface GraticuleTransform {
  type: 'graticule';
  signal?: string;
  extent?: unknown[] | SignalRef;
  extentMajor?: unknown[] | SignalRef;
  extentMinor?: unknown[] | SignalRef;
  step?: (number | SignalRef)[] | SignalRef;
  stepMajor?: (number | SignalRef)[] | SignalRef;
  stepMinor?: (number | SignalRef)[] | SignalRef;
  precision?: number | SignalRef;
}
export interface ForceTransform {
  type: 'force';
  signal?: string;
  static?: boolean | SignalRef;
  restart?: boolean | SignalRef;
  iterations?: number | SignalRef;
  alpha?: number | SignalRef;
  alphaMin?: number | SignalRef;
  alphaTarget?: number | SignalRef;
  velocityDecay?: number | SignalRef;
  forces?: (
    | {
        force: 'center';
        x?: number | SignalRef;
        y?: number | SignalRef;
      }
    | {
        force: 'collide';
        radius?: number | SignalRef | ExpressionRef | ParamField;
        strength?: number | SignalRef;
        iterations?: number | SignalRef;
      }
    | {
        force: 'nbody';
        strength?: number | SignalRef;
        theta?: number | SignalRef;
        distanceMin?: number | SignalRef;
        distanceMax?: number | SignalRef;
      }
    | {
        force: 'link';
        links?: string;
        id?: (string | SignalRef) | ParamField | ExpressionRef;
        distance?: number | SignalRef | ExpressionRef | ParamField;
        strength?: number | SignalRef | ExpressionRef | ParamField;
        iterations?: number | SignalRef;
      }
    | {
        force: 'x';
        strength?: number | SignalRef;
        x?: (string | SignalRef) | ParamField | ExpressionRef;
      }
    | {
        force: 'y';
        strength?: number | SignalRef;
        y?: (string | SignalRef) | ParamField | ExpressionRef;
      }
  )[];
  as?: (string | SignalRef)[] | SignalRef;
}
export interface NestTransform {
  type: 'nest';
  signal?: string;
  keys?: ((string | SignalRef) | ParamField | ExpressionRef)[] | SignalRef;
  key?: (string | SignalRef) | ParamField | ExpressionRef;
  generate?: boolean | SignalRef;
}
export interface PackTransform {
  type: 'pack';
  signal?: string;
  field?: (string | SignalRef) | ParamField | ExpressionRef;
  sort?:
    | {
        field?: string | SignalRef;
        order?: ('ascending' | 'descending') | SignalRef;
        [k: string]: unknown | undefined;
      }
    | {
        field?: (string | SignalRef)[];
        order?: (('ascending' | 'descending') | SignalRef)[];
        [k: string]: unknown | undefined;
      };
  padding?: number | SignalRef;
  radius?: (string | SignalRef) | ParamField | ExpressionRef;
  size?: (number | SignalRef)[] | SignalRef;
  as?: (string | SignalRef)[] | SignalRef;
}
export interface PartitionTransform {
  type: 'partition';
  signal?: string;
  field?: (string | SignalRef) | ParamField | ExpressionRef;
  sort?:
    | {
        field?: string | SignalRef;
        order?: ('ascending' | 'descending') | SignalRef;
        [k: string]: unknown | undefined;
      }
    | {
        field?: (string | SignalRef)[];
        order?: (('ascending' | 'descending') | SignalRef)[];
        [k: string]: unknown | undefined;
      };
  padding?: number | SignalRef;
  round?: boolean | SignalRef;
  size?: (number | SignalRef)[] | SignalRef;
  as?: (string | SignalRef)[] | SignalRef;
}
export interface StratifyTransform {
  type: 'stratify';
  signal?: string;
  key: (string | SignalRef) | ParamField | ExpressionRef;
  parentKey: (string | SignalRef) | ParamField | ExpressionRef;
}
export interface TreeTransform {
  type: 'tree';
  signal?: string;
  field?: (string | SignalRef) | ParamField | ExpressionRef;
  sort?:
    | {
        field?: string | SignalRef;
        order?: ('ascending' | 'descending') | SignalRef;
        [k: string]: unknown | undefined;
      }
    | {
        field?: (string | SignalRef)[];
        order?: (('ascending' | 'descending') | SignalRef)[];
        [k: string]: unknown | undefined;
      };
  method?: ('tidy' | 'cluster') | SignalRef;
  size?: (number | SignalRef)[] | SignalRef;
  nodeSize?: (number | SignalRef)[] | SignalRef;
  as?: (string | SignalRef)[] | SignalRef;
}
export interface TreelinksTransform {
  type: 'treelinks';
  signal?: string;
  key?: (string | SignalRef) | ParamField | ExpressionRef;
}
export interface TreemapTransform {
  type: 'treemap';
  signal?: string;
  field?: (string | SignalRef) | ParamField | ExpressionRef;
  sort?:
    | {
        field?: string | SignalRef;
        order?: ('ascending' | 'descending') | SignalRef;
        [k: string]: unknown | undefined;
      }
    | {
        field?: (string | SignalRef)[];
        order?: (('ascending' | 'descending') | SignalRef)[];
        [k: string]: unknown | undefined;
      };
  method?: ('squarify' | 'resquarify' | 'binary' | 'dice' | 'slice' | 'slicedice') | SignalRef;
  padding?: number | SignalRef;
  paddingInner?: number | SignalRef;
  paddingOuter?: number | SignalRef;
  paddingTop?: number | SignalRef;
  paddingRight?: number | SignalRef;
  paddingBottom?: number | SignalRef;
  paddingLeft?: number | SignalRef;
  ratio?: number | SignalRef;
  round?: boolean | SignalRef;
  size?: (number | SignalRef)[] | SignalRef;
  as?: (string | SignalRef)[] | SignalRef;
}
export interface VoronoiTransform {
  type: 'voronoi';
  signal?: string;
  x: (string | SignalRef) | ParamField | ExpressionRef;
  y: (string | SignalRef) | ParamField | ExpressionRef;
  size?: (number | SignalRef)[] | SignalRef;
  extent?: unknown[] | SignalRef;
  as?: string | SignalRef;
}
export interface WordcloudTransform {
  type: 'wordcloud';
  signal?: string;
  size?: (number | SignalRef)[] | SignalRef;
  font?: string | SignalRef | ExpressionRef | ParamField;
  fontStyle?: string | SignalRef | ExpressionRef | ParamField;
  fontWeight?: string | SignalRef | ExpressionRef | ParamField;
  fontSize?: number | SignalRef | ExpressionRef | ParamField;
  fontSizeRange?: (number | SignalRef)[] | SignalRef | null;
  rotate?: number | SignalRef | ExpressionRef | ParamField;
  text?: (string | SignalRef) | ParamField | ExpressionRef;
  spiral?: string | SignalRef;
  padding?: number | SignalRef | ExpressionRef | ParamField;
  as?: (string | SignalRef)[] | SignalRef;
}
export interface CrossfilterTransform {
  type: 'crossfilter';
  signal?: string;
  fields: ((string | SignalRef) | ParamField | ExpressionRef)[] | SignalRef;
  query: unknown[] | SignalRef;
}
export interface ResolvefilterTransform {
  type: 'resolvefilter';
  signal?: string;
  ignore: number | SignalRef;
  filter: unknown;
}
export interface Projection {
  name: string;
  type: string | SignalRef;
  clipAngle?: number | SignalRef;
  clipExtent?: SignalRef | (SignalRef | [number | SignalRef, number | SignalRef])[];
  scale?: number | SignalRef;
  translate?: SignalRef | [number | SignalRef, number | SignalRef];
  center?: SignalRef | [number | SignalRef, number | SignalRef];
  rotate?:
    | SignalRef
    | [number | SignalRef, number | SignalRef]
    | [number | SignalRef, number | SignalRef, number | SignalRef];
  parallels?: SignalRef | [number | SignalRef, number | SignalRef];
  precision?: number | SignalRef;
  pointRadius?: number | SignalRef;
  fit?:
    | {
        [k: string]: unknown | undefined;
      }
    | unknown[];
  extent?:
    | SignalRef
    | [SignalRef | [number | SignalRef, number | SignalRef], SignalRef | [number | SignalRef, number | SignalRef]];
  size?: SignalRef | [number | SignalRef, number | SignalRef];
  [k: string]: unknown | undefined;
}
export interface Axis {
  orient: 'top' | 'bottom' | 'left' | 'right';
  scale: string;
  title?: string | SignalRef;
  zindex?: number;
  ticks?: boolean;
  labels?: boolean;
  domain?: boolean;
  grid?: boolean;
  gridScale?: string;
  tickSize?: number;
  labelPadding?: number;
  labelFlush?: boolean | number;
  labelFlushOffset?: number;
  labelOverlap?: boolean | ('parity' | 'greedy');
  labelBound?: boolean | number;
  tickCount?:
    | number
    | ('millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year')
    | {
        interval: ('millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year') | SignalRef;
        step?: number | SignalRef;
        [k: string]: unknown | undefined;
      }
    | SignalRef;
  format?: string | SignalRef;
  values?: unknown[] | SignalRef;
  offset?:
    | number
    | (
        | (Rule &
            (NumberModifiers &
              (
                | (
                    | SignalRef
                    | {
                        value: number;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        field: FieldRef;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        range: number | boolean;
                        [k: string]: unknown | undefined;
                      }
                  )
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
              )))[]
        | (NumberModifiers &
            (
              | (
                  | SignalRef
                  | {
                      value: number;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      field: FieldRef;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      range: number | boolean;
                      [k: string]: unknown | undefined;
                    }
                )
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
            ))
      );
  position?:
    | number
    | (
        | (Rule &
            (NumberModifiers &
              (
                | (
                    | SignalRef
                    | {
                        value: number;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        field: FieldRef;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        range: number | boolean;
                        [k: string]: unknown | undefined;
                      }
                  )
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
              )))[]
        | (NumberModifiers &
            (
              | (
                  | SignalRef
                  | {
                      value: number;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      field: FieldRef;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      range: number | boolean;
                      [k: string]: unknown | undefined;
                    }
                )
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
            ))
      );
  titlePadding?:
    | number
    | (
        | (Rule &
            (NumberModifiers &
              (
                | (
                    | SignalRef
                    | {
                        value: number;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        field: FieldRef;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        range: number | boolean;
                        [k: string]: unknown | undefined;
                      }
                  )
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
              )))[]
        | (NumberModifiers &
            (
              | (
                  | SignalRef
                  | {
                      value: number;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      field: FieldRef;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      range: number | boolean;
                      [k: string]: unknown | undefined;
                    }
                )
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
            ))
      );
  minExtent?:
    | number
    | (
        | (Rule &
            (NumberModifiers &
              (
                | (
                    | SignalRef
                    | {
                        value: number;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        field: FieldRef;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        range: number | boolean;
                        [k: string]: unknown | undefined;
                      }
                  )
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
              )))[]
        | (NumberModifiers &
            (
              | (
                  | SignalRef
                  | {
                      value: number;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      field: FieldRef;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      range: number | boolean;
                      [k: string]: unknown | undefined;
                    }
                )
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
            ))
      );
  maxExtent?:
    | number
    | (
        | (Rule &
            (NumberModifiers &
              (
                | (
                    | SignalRef
                    | {
                        value: number;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        field: FieldRef;
                        [k: string]: unknown | undefined;
                      }
                    | {
                        range: number | boolean;
                        [k: string]: unknown | undefined;
                      }
                  )
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
                | {
                    [k: string]: unknown | undefined;
                  }
              )))[]
        | (NumberModifiers &
            (
              | (
                  | SignalRef
                  | {
                      value: number;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      field: FieldRef;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      range: number | boolean;
                      [k: string]: unknown | undefined;
                    }
                )
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
              | {
                  [k: string]: unknown | undefined;
                }
            ))
      );
  encode?: {
    axis?: GuideEncode;
    ticks?: GuideEncode;
    labels?: GuideEncode;
    title?: GuideEncode;
    grid?: GuideEncode;
    domain?: GuideEncode;
  };
}
export interface GuideEncode {
  name?: string;
  interactive?: boolean;
  style?: string | string[];
  [k: string]: MarkEncodePropertySet;
}
export interface TitleEncode {
  [k: string]: MarkEncodePropertySet;
}
export interface Mark {
  type: MarkTypeDefinition;
  role?: string;
  name?: string;
  style?: string | string[];
  key?: string;
  clip?: boolean;
  sort?:
    | {
        field?: string | SignalRef;
        order?: ('ascending' | 'descending') | SignalRef;
        [k: string]: unknown | undefined;
      }
    | {
        field?: (string | SignalRef)[];
        order?: (('ascending' | 'descending') | SignalRef)[];
        [k: string]: unknown | undefined;
      };
  interactive?: boolean;
  encode?: Encode;
  transform?: (
    | BinTransform
    | CollectTransform
    | ExtentTransform
    | FormulaTransform
    | JoinaggregateTransform
    | LookupTransform
    | WindowTransform
    | IdentifierTransform
    | LinkpathTransform
    | PieTransform
    | StackTransform
    | GeojsonTransform
    | GeopathTransform
    | GeopointTransform
    | GeoshapeTransform
    | ForceTransform
    | PackTransform
    | PartitionTransform
    | StratifyTransform
    | TreeTransform
    | TreemapTransform
    | VoronoiTransform
    | WordcloudTransform
    | CrossfilterTransform
    | ResolvefilterTransform
  )[];
  on?: OnMarkTrigger;
  [k: string]: unknown | undefined;
}
export interface From {
  data?: string;
}
export interface Facet {
  data?: string;
  facet:
    | {
        name: string;
        data: string;
        field: string;
      }
    | {
        name: string;
        data: string;
        groupby: string | string[];
        aggregate?: {
          cross?: boolean;
          fields?: string[];
          ops?: string[];
          as?: string[];
          [k: string]: unknown | undefined;
        };
      };
}
