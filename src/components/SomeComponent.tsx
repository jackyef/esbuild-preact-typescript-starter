import { h } from 'preact';
import { css } from 'goober';

const Wrapper = css`
  border-radius: 8px;
  background-color: #484c54;
  padding: 1rem;
  margin: 2rem;
  max-width: 400px;
  align-self: center;
`;

export default () => {
  return (
    <div className={Wrapper}>
      <p>This is a lazily loaded component</p>
      <p>When you clicked on the button above, you should see a network request being sent from the browser</p>
    </div>
  )
}