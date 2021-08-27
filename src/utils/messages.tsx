interface Namespace {
  [key: string]: string;
}

export namespace Message {
  export const navigation: Namespace = {
    welcome: 'Welcome',
    new: 'NEW',
    project: 'Foundation Project',
    feedback: 'Leave Feedback',
    header_text: 'Foundation Header',
    home: 'Home',
    path_1: 'Page 1',
    path_2: 'Page 2',
  };
  export const pages: Namespace = {
    feedback_form: 'Feedback Form',
    page1_content: 'Page 1 Content',
    page2_content: 'Page 2 Content',
    admin: 'Admin Page',
    page_not_found_content: '|| 404 | Page Not Found ||',
  };
  export const common: Namespace = {
    loading: 'Loading...',
  };
}
