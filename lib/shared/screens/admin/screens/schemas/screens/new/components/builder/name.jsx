import bind from 'decorators/bind';
import cx from 'classnames';
import Component from 'components/component';
import Input from 'components/modal-input';
import React, {PropTypes} from 'react';

import styles from './name.less';

export default class SchemaName extends Component {
  static propTypes = {
    schema: PropTypes.object.isRequired,
    schemaStepBack: PropTypes.func.isRequired,
    schemaStepForward: PropTypes.func.isRequired,
    changeSchemaTitle: PropTypes.func.isRequired
  };

  @bind
  onSubmit (event) {
    event.preventDefault();
    this.props.schemaStepForward();
  }

  render () {
    const {schema, schemaStepBack, schemaStepForward, changeSchemaTitle} = this.props;
    return (
      <div className={styles.root}>
        <div>
          {this.renderSchemaType(schema.type)}
        </div>
        <form className={styles.holder} onSubmit={this.onSubmit}>
          <div className={styles.header}>Let's give it a name!</div>
          <Input
            value={schema.title}
            onChange={changeSchemaTitle}
            focus
            placeholder='Content type name'
          />
          <div className={styles.buttons}>
            <div className={styles.button} onClick={schemaStepBack}>
              Back
            </div>
            <div className={cx(styles.button, styles.primary)} onClick={schemaStepForward}>
              Next
            </div>
          </div>
        </form>
      </div>
    );
  }

  renderSchemaType (type) {
    let result;
    if (type === 'single') {
      result = (
        <div className={styles.option}>
          <i className={'nc-icon-outline design_webpage'} />
          <div className={styles.title}>With URL</div>
          <div className={styles.subTitle}>Single Page</div>
        </div>
      );
    } else if (type === 'data') {
      result = (
        <div className={styles.option}>
          <i className={'nc-icon-outline files_single-copy-04'} />
          <div className={styles.title}>Without URL</div>
          <div className={styles.subTitle}>Multiple Table Entries</div>
        </div>
      );
    }
    return result;
  }
}
