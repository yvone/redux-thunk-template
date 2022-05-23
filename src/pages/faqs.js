import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  createFaq,
  updateFaq,
  removeFaq,
  removeAll,
} from '../actions';

import { QuestionCard, QuestionInput } from '../components';

function Faqs() {
  const dispatcher = useDispatch();
  const faqs = useSelector((state) => {
    return state.faqs.arr;
  })
  const [status, setStatus] = useState('READY');

  const handleCreate = async (newFaq) => {
    setStatus('LOADING');
    await dispatcher(createFaq(newFaq));
    setStatus('READY');
  }

  const handleUpdate = async (updatedFaq) => {
    setStatus('LOADING');
    await dispatcher(updateFaq(updatedFaq));
    setStatus('READY');
  }

  const handleRemove = async (id) => {
    setStatus('LOADING');
    dispatcher(removeFaq(id));
    setStatus('READY');
  }

  const handleRemoveAll = async () => {
    setStatus('LOADING');
    await dispatcher(removeAll());
    setStatus('READY');
  }

  const renderActions = () => {
    if (status === 'READY') {
      return (
        <div style={{ display: 'flex', flex: 3, alignItems: 'center', justifyContent: 'flex-end', gap: '1rem', marginRight: '1rem' }}>
          <button onClick={handleRemoveAll} className="danger">
            Remove all
          </button>
        </div>
      )
    }

    return null;
  }

  const renderContent = () => {
    if (status === 'IDLE' || status === 'LOADING') {
      return (
        <p>Loading...</p>
      )
    };
  
    if (status === 'ERROR') {
      return (
        <p>
          Something went wrong, try again later
        </p>
      )
    };

    return (
      <>
        {faqs.length > 0 ? (
          faqs.map(faq => {
            return (
              <li key={faq.id} style={{ listStyleType: 'decimal' }}>
                <QuestionCard
                  initialValues={faq}
                  onUpdate={handleUpdate}
                  onRemove={handleRemove}
                />
              </li>
            )
          })
        ) : (
          <p>
            Start by adding some FAQs
          </p>
        )}
      </>
    )
  }

  return (
    <div
      className="Faqs"
      style={{
        border: '4px solid #3a86ff',
        width: '90vw',
        height: 'calc(85vh - 10px)',
        overflowY: 'scroll',
        overscrollBehavior: 'contain'
      }}
    >
      <header
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <h2 style={{ display: 'flex', flex: 1, margin: '1rem' }}>
          FAQs
        </h2>

        {renderActions()}
      </header>

      <ul style={{
        height: 'calc(100% - 312px)',
        minHeight: '300px',
        overflowY: 'scroll',
        margin: 0
      }}>
        {renderContent()}
      </ul>

      <footer style={{
        position: 'sticky',
        boxShadow: '0px 0px 60px -30px rgba(0,0,0,0.75)'
      }}>
        <QuestionInput onSubmit={handleCreate} disabled={status !== 'READY'} />
      </footer>
    </div>
  );
}

export default Faqs;
