interface Namespace {
  [key: string]: string;
}

export namespace Message {
  export const navigation: Namespace = {
    new: 'NEW',
    project: 'PROJECT',
    feedback: 'Leave Feedback',
    header_text: 'Header Text',
    home: 'Home',
    path_1: 'Path 1',
    path_2: 'Path 2',
  };
  export const pages: Namespace = {
    feedback_form: 'Feedback Form',
    page1_content: 'Page 1',
    page2_content: 'Page 2',
  };
  export const common: Namespace = {
    loading: 'Loading...',
  };
}
