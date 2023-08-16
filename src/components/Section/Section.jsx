import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { Box, CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";

const Section = ({ data, type, title }) => {
  let [show, setShow] = useState(false);
  function handleToggle() {
    setShow(!show);
  }
  return (
    <div className={styles.sectionwrapper}>
      <div className={styles.heading}>
        <div className={styles.title}>{title}</div>
        <div className={styles.toggle} onClick={handleToggle}>
          {!show ? "Show all" : "Collapse"}
        </div>
      </div>
      <div className={styles.datawrapper}>
        {!data.length ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "80px",
            }}
          >
            <CircularProgress sx={{ color: "#34c94b" }} />
          </Box>
        ) : show ? (
          <div className={styles.showdata}>
            {data.map((item) => {
              return <Card data={item} type={type} />;
            })}
          </div>
        ) : (
          <div className={styles.noshowdata}>
            <Carousel
              data={data}
              component={(item) => <Card data={item} type={type} />}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
