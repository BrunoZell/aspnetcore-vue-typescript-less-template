// Todo: Get auto generated routes from server
export default <UrlCollection>{
    main: {
        index: "/",
        error: "/error"
    }
};

export interface UrlCollection {
    main: MainUrls;
}

export interface MainUrls {
    index: string;
    error: string;
}
