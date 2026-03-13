/* eslint-disable */

/**
 * artifact로 지정된 .apk/.ipa 파일을 appcenter로 릴리즈
 */
export type AppCenterReleases = {
  /**
   * App ID
   */
  'app-id': string;
  /**
   * 릴리즈 그룹에 대한 Tag들을 지정
   */
  tags?: string[];
}[];

/**
 * KoDE/CI 빌드 스펙에 사용되는 yaml의 스키마를 정의
 */
export interface KoDECIBuildSpec {
  on?: BuildCondition;
  /**
   * 실행할 작업들: 독립적으로 병렬 실행됨
   */
  jobs: Job[];
  /**
   * 환경변수
   */
  environment?: Env[];
}
/**
 * 실행 조건
 */
export interface BuildCondition {
  /**
   * Push 이벤트에 의한 조건
   */
  push?: {
    /**
     * Push 빌드의 branch 조건
     *
     * @minItems 1
     */
    branches?: [string, ...string[]];
    /**
     * Push 빌드의 tag 조건
     *
     * @minItems 1
     */
    tags?: [string, ...string[]];
    commit?: {
      /**
       * commit message에 주어진 문자열을 포함한 경우만 빌드
       */
      'message-contain'?: string;
      [k: string]: unknown | undefined;
    };
    /**
     * Push 빌드의 paths 조건
     *
     * @minItems 1
     */
    paths?: [string, ...string[]];
  };
  /**
   * PullRequest 이벤트에 의한 조건
   */
  'pull-request'?: {
    /**
     * PR빌드의 target 브랜치 조건
     *
     * @minItems 1
     */
    branches?: [string, ...string[]];
    /**
     * PR 이벤트 타입
     *
     * @minItems 1
     */
    types?: [
      (
        | 'assigned'
        | 'unassigned'
        | 'labeled'
        | 'unlabeled'
        | 'opened'
        | 'edited'
        | 'closed'
        | 'reopened'
        | 'synchronize'
        | 'converted_to_draft'
        | 'ready_for_review'
        | 'locked'
        | 'unlocked'
        | 'review_requested'
        | 'review_request_removed'
        | 'auto_merge_enabled'
        | 'auto_merge_disabled'
      ),
      ...(
        | 'assigned'
        | 'unassigned'
        | 'labeled'
        | 'unlabeled'
        | 'opened'
        | 'edited'
        | 'closed'
        | 'reopened'
        | 'synchronize'
        | 'converted_to_draft'
        | 'ready_for_review'
        | 'locked'
        | 'unlocked'
        | 'review_requested'
        | 'review_request_removed'
        | 'auto_merge_enabled'
        | 'auto_merge_disabled'
      )[]
    ];
    /**
     * PullRequest 빌드의 paths 조건
     *
     * @minItems 1
     */
    paths?: [string, ...string[]];
  };
  /**
   * 수동빌드 대상을 위한 조건
   */
  manual?: {
    /**
     * 수동빌드의 대상이 되는 브랜치 조건
     *
     * @minItems 1
     */
    branches?: [string, ...string[]];
    /**
     * 수동빌드의 대상이 되는 태그 조건
     *
     * @minItems 1
     */
    tags?: [string, ...string[]];
  };
  /**
   * 스케줄에 의한 조건
   */
  schedule?: {
    /**
     * cron 표현식. unix 표현식과 quartz 표현식 사용가능
     */
    cron: string;
    /**
     * 스케줄 빌드의 branch 조건
     *
     * @minItems 1
     */
    branches: [string, ...string[]];
    /**
     * 스케줄 빌드 zone
     */
    zone?: string;
    /**
     * 변경된 파일이 있을때만 빌드
     */
    'build-if-changed'?: boolean;
  };
  [k: string]: unknown | undefined;
}
export interface Job {
  /**
   * 작업 이름
   */
  name: string;
  /**
   * 실행할 명령 목록(순차실행)
   *
   * @minItems 1
   */
  execute: [string, ...string[]];
  /**
   * 선행 작업 및 조건 정의
   */
  needs?: {
    /**
     * 선행 작업의 이름
     */
    job: string;
    /**
     * 선행 작업의 결과 조건
     */
    when: 'success' | 'failure' | 'done' | 'skipped' | 'always';
  }[];
  /**
   * 사내 Proxy 설정
   */
  'set-proxy'?: ('shell' | 'gradle' | 'npm' | 'docker' | 'yarn' | 'maven' | 'java' | 'sbt')[];
  /**
   * proxy 예외할 host 목록 (ip, ip/mask, domain)
   */
  'no-proxy-hosts'?: string[];
  'run-on'?: RunOn;
  /**
   * artifact로 지정할 파일 혹은 디렉토리 경로
   */
  artifacts?: string[];
  /**
   * 다음 빌드의 속도 향상을 위한 캐시 설정
   */
  caches?: {
    /**
     * 캐시 식별키 (repo scope)
     */
    key: string;
    /**
     * 캐시할 파일 혹은 디렉토리 경로
     */
    path: string;
    /**
     * 캐시 업로드 여부
     */
    upload?: boolean;
    /**
     * 캐시 다운로드 여부
     */
    download?: boolean;
  }[];
  /**
   * git clone시 depth를 주기위한 옵션
   */
  'git-clone'?: string;
  /**
   * 최대 실행시간 (e.g. '1h', '100m')
   */
  'max-execution-time'?: string;
  /**
   * 빌드 후처리기 설정
   */
  'post-process'?: {
    'app-center-releases'?: AppCenterReleases;
    'git-ops'?: GitOps;
    [k: string]: unknown | undefined;
  };
  /**
   * html report 설정. path 경로의 html 파일을 업로드
   */
  'html-reports'?: {
    /**
     * report 이름
     */
    name: string;
    /**
     * report 경로. html 확장자만 지정 가능
     */
    path: string;
  }[];
  /**
   * 다음 job으로 전달할 파일 및 환경변수를 지정합니다. 해당 job 의 성공/실패 상관없이 export 됩니다.
   */
  export?: {
    /**
     * 다음 job으로 전달할 파일 이름 목록
     */
    artifacts?: string[];
    /**
     * 다음 job으로 전달할 환경변수 이름 목록
     */
    environment?: string[];
  };
  /**
   * 선행 job의 export.artifacts를 현재 job으로 가져옵니다.
   */
  downloads?: {
    /**
     * artifacts를 가져올 job 이름
     */
    from: string;
    /**
     * 다운로드된 파일을 저장할 경로 (작업 디렉토리 기준)
     */
    path: string;
  }[];
  [k: string]: unknown | undefined;
}
/**
 * 실행환경 설정
 */
export interface RunOn {
  /**
   * docker image
   */
  image?: string;
  /**
   * 실행에 사용할 리소스 크기 설정
   */
  resources?:
    | ('small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge')
    | {
        /**
         * cpu (e.g. '1.0')
         */
        cpu: string | number;
        /**
         * memory (e.g. '500Mi', '2Gi').
         */
        memory: string;
        [k: string]: unknown | undefined;
      };
  /**
   * 실행환경에서 사용할 기능 설정
   */
  use?: 'docker'[];
  /**
   * 실행환경 플랫폼
   */
  platform?: 'k8s' | 'macos';
  /**
   * platform: macos 일때 사용할 agent를 선택
   */
  selectors?: {
    /**
     * agent label 값
     */
    name: string;
    /**
     * agent value를 pattern 으로 지정
     */
    pattern?: string;
    [k: string]: unknown | undefined;
  }[];
}
/**
 * GitOps 방식의 K8S Deploy를 위한 manifest repo 업데이트
 */
export interface GitOps {
  /**
   * K8S manifest repo 정보
   */
  manifest: {
    /**
     * repo('owner/repo')
     */
    repo: string;
    /**
     * branch
     */
    branch: string;
  };
  /**
   * manifest repo를 업데이트하기 위한 명령
   *
   * @minItems 1
   */
  update: [string, ...string[]];
  /**
   * 빌드 작업에서 manifest reop로 전달할 artifacts
   */
  'with-artifacts'?: string[];
  /**
   * manifest repo에 git tag를 동기화할지 여부. push tag 빌드일때만 동작
   */
  'sync-git-tag'?: boolean;
}
export interface Env {
  /**
   * 환경변수 이름
   */
  name: string;
  /**
   * 환경변수 값
   */
  value: string;
  /**
   * 환경변수를 적용할 브랜치
   */
  branch?: string;
}
