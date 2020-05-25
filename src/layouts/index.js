import styles from './index.less';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      {props.children}
    </div>
  );
}

export default BasicLayout;
