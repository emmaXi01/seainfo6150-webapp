import React from "react";
import ArticleListItem from "./ArticleListItem";
import { fireEvent } from "@testing-library/react";

describe("ArticleListItem tests", () => {
    const article = {
        "title": "The Statue of Liberty's torch heads to new museum",
        "slug": "181122102925-statue-of-liberty-crown",
        "shortText": "The Statue of Liberty's original torch is getting a new home",
        "timeStamp": "2018-11-22T15:12:24.000Z",
        "displayDate": "November 22nd 2018, 7:12 am"
    };

    it("renders correctly", () => {  
        const { container } = render(<ArticleListItem article={article}/>);
        expect(container).toMatchSnapshot();
    });

    it("display details correctly when click button", () => {     
        const { container, getByText } = render(<ArticleListItem article={article}/>);
        const button = getByText("Show more");
        fireEvent.click(button);
        expect(container).toMatchSnapshot();
    });

    it("hide details correctly when click button", () => {   
        const { container, getByText } = render(<ArticleListItem article={article}/>);
        const showMoreButton = getByText("Show more");
        fireEvent.click(showMoreButton);
        const showLessButton = getByText("Show less");
        fireEvent.click(showLessButton);
        expect(container).toMatchSnapshot();
    });
});
