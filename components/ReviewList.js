import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/CompanyList.module.scss"
import { getAllItems } from "../utils/storyblok"
import SmallCardList from "./SmallCardList"

const ReviewList = ({ data, level, locale }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  const [sortby, setSortby] = useState();

  const [items, setItems] = useState([]);
  getAllItems('review', locale, sortby).then(
    function (result) {
      setItems(result.data.stories);
    });

  return (
    <div className={styles.list}>
      <div>
        {items && items.length > 0 && <SmallCardList items={items} type="review"></SmallCardList>}
      </div>
    </div>

  );
};

export default ReviewList;
