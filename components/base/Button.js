import { useMemo } from 'react';

function createStyles({ color }) {
  return {
    myButton: {
      backgroundColor: color ?? 'green',
      margin: {
        top: 5,
        right: 0,
        bottom: 0,
        left: '1rem',
      },
    },
  };
}

export default function Button({ color, label, onClick }) {
  const styles = useMemo(() => createStyles({ color }), [color]);
  return <button style={styles.myButton}>{label}</button>;
}
