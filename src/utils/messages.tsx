interface Namespace {
  [key: string]: string;
}

export namespace Message {
  export const navigation: Namespace = {
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
    no_match: 'Sorry, the page you requested could not be found!',
    not_allowed: 'Access is not allowed!',
  };
  export const common: Namespace = {
    loading: 'Loading...',
    btn_1_text: 'Ant Button',
  };
  export const auth: Namespace = {
    login: 'Login',
    logout: 'Logout',
  };
  export const welcome: Namespace = {
    text: 'Welcome Page',
    hello: 'Hello ',
    anonymous: 'Anonymous',
    auth_text: 'Please authenticate yourself!',
  };
}
