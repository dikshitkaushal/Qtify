import { Tooltip, Chip } from "@mui/material";
import styles from "./Card.module.css";

export default function Card({ data, type }) {
  switch (type) {
    case "album":
      const { image, follows, title, slug, songs } = data;
      return (
        <Tooltip title={`${songs.length} songs`} placement="top" arrow>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img loading="lazy" src={image} alt="album_image" />
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

    default:
      return null;
  }
}
