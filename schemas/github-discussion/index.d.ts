/* eslint-disable */

export interface HttpsJsonSchemastoreOrgGithubDiscussionJson {
  /**
   * A default title that will be pre-populated in the discussion submission form.
   */
  title?: string;
  /**
   * Labels that will automatically be added to discussions created with this template.
   */
  labels?: string | string[];
  /**
   * Definition of the input types in the discussion form
   */
  body: {
    type?: 'markdown' | 'textarea' | 'input' | 'dropdown' | 'checkboxes';
    attributes?: {
      label?: string;
      description?: string;
      placeholder?: string;
      [k: string]: unknown | undefined;
    };
    validations?: {
      required?: boolean;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  }[];
}
