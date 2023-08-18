import { Tooltip, Chip } from "@mui/material";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

export default function Card({ data, type }) {
  let navigate = useNavigate();
  switch (type) {
    case "album": {
      const { image, follows, title, slug, songs } = data;
      return (
        <Tooltip title={`${songs.length} songs`} placement="top" arrow>
          <div
            onClick={() => {
              navigate("./albums", { state: { value: title } });
            }}
            className={styles.wrapper}
          >
            <div className={styles.card}>
              <img
                className={styles.cardimage}
                loading="lazy"
                src={image}
                alt="album_image"
              />
              <div className={styles.banner}>
                <Chip
                  label={`${follows} follows`}
                  size="small"
                  className={styles.chip}
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        </Tooltip>
      );
    }
    case "song": {
      const { image, likes, title } = data;
      return (
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <img
              className={styles.cardimage}
              loading="lazy"
              src={image}
              alt="album_image"
            />
            <div className={styles.banner}>
              <Chip
                label={`${likes} Likes`}
                size="small"
                className={styles.chip}
              />
            </div>
          </div>
          <div className={styles.titleWrapper}>
            <p>{title}</p>
          </div>
        </div>
      );
    }

    default:
      return null;
  }
}
