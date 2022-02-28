import React, { Component } from "react";
import styles from "./Button.module.scss"; // Import css modules stylesheet as styles
import "./another-stylesheet.scss"; // Import regular stylesheet

class Button extends Component {
    render() {
        // reference as a js object
        return <button className={styles.error}>Error Button</button>;
    }
}
