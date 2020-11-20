import React from "react";
import ArticleImage from "./ArticleImage";

describe("ArticleImage tests", () => {
  const title = "The Statue of Liberty's torch heads to new museum";  
  const url =  "https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg";

  it("renders correctly", () => {
    const { container } = render(<ArticleImage title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});
