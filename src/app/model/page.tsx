'use client';

import { useState, useEffect } from 'react';

export default function ModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button className="trigger-button" onClick={openModal}>
          Open Modal
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button className="trigger-button" onClick={openModal}>
        Open Modal
      </button>

      {isModalOpen && (
        <div className="modal-overlay active" onClick={handleOverlayClick}>
          <div className="modal">
            <div className="modal-header">
              <div className="modal-title">
                <div className="modal-icon">S</div>
                <div>
                  <h2 className="modal-section-title">SECTION 1</h2>
                  <p className="modal-section-subtitle">Heading here</p>
                </div>
              </div>
              <button className="modal-close" onClick={closeModal}>
              </button>
            </div>
            
            <div className="modal-body-scrollable">
              <div className="modal-body">
                <h3 className="section-title">SECTION 2</h3>
                <div className="columns-container">
                  <div className="column">
                    <div className="column-header">
                      <span>Section 2 column 1</span>
                    </div>
                    <div className="column-content" text-align="justify">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt, lorem ac tincidunt aliquam, sapien est ullamcorper neque, molestie ornare augue magna vel tortor. Vestibulum elit justo, vulputate condimentum velit et, egestas hendrerit felis. Etiam egestas lorem id purus semper vestibulum. Etiam viverra sapien ac tellus dignissim, eu pretium tellus semper. Pellentesque finibus leo a ultricies efficitur. Duis cursus mollis vestibulum. Mauris eleifend quis mauris sed venenatis. Aliquam tempor tellus non laoreet pretium. In at urna non enim posuere venenatis. Morbi in lectus quis orci ullamcorper imperdiet at a nunc. Quisque non orci finibus, hendrerit orci in, ornare lorem. Donec porttitor risus at dolor dignissim interdum. Morbi ac posuere tellus. Curabitur nec metus ullamcorper, tristique mi at, pretium tellus. Curabitur feugiat ut libero et condimentum.</p>
                      <p>Fusce iaculis, metus lobortis congue blandit, nulla ex dictum risus, vitae finibus ante metus vel augue. Phasellus nec nibh eget felis consectetur euismod. Maecenas eleifend augue faucibus nunc hendrerit aliquam. Integer auctor vehicula ultrices. Fusce ornare, sem quis commodo molestie, orci purus tristique ex, ac bibendum mi erat ac libero. In vitae ligula turpis. Cras sem ipsum, varius eu consequat a, commodo id augue. Pellentesque vitae neque quam. Nulla eu justo volutpat nisl volutpat dictum eget vel lacus. Vivamus a posuere mi, vitae blandit tellus. Nunc non nisi aliquam, rutrum quam mollis, vulputate purus. In nec velit ut velit dapibus imperdiet et eu risus. Sed rutrum nec sapien a semper. Nullam sit amet lacinia velit.</p>
                    </div>
                  </div>
                  <div className="column">
                    <div className="column-header">
                      <span>Section 2 column 2</span>
                    </div>
                    <div className="column-content" text-align="">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt, lorem ac tincidunt aliquam, sapien est ullamcorper neque, molestie ornare augue magna vel tortor. Vestibulum elit justo, vulputate condimentum velit et, egestas hendrerit felis. Etiam egestas lorem id purus semper vestibulum. Etiam viverra sapien ac tellus dignissim, eu pretium tellus semper. Pellentesque finibus leo a ultricies efficitur. Duis cursus mollis vestibulum. Mauris eleifend quis mauris sed venenatis. Aliquam tempor tellus non laoreet pretium. In at urna non enim posuere venenatis. Morbi in lectus quis orci ullamcorper imperdiet at a nunc. Quisque non orci finibus, hendrerit orci in, ornare lorem. Donec porttitor risus at dolor dignissim interdum. Morbi ac posuere tellus. Curabitur nec metus ullamcorper, tristique mi at, pretium tellus. Curabitur feugiat ut libero et condimentum.</p>

<p>Fusce iaculis, metus lobortis congue blandit, nulla ex dictum risus, vitae finibus ante metus vel augue. Phasellus nec nibh eget felis consectetur euismod. Maecenas eleifend augue faucibus nunc hendrerit aliquam. Integer auctor vehicula ultrices. Fusce ornare, sem quis commodo molestie, orci purus tristique ex, ac bibendum mi erat ac libero. In vitae ligula turpis. Cras sem ipsum, varius eu consequat a, commodo id augue. Pellentesque vitae neque quam. Nulla eu justo volutpat nisl volutpat dictum eget vel lacus. Vivamus a posuere mi, vitae blandit tellus. Nunc non nisi aliquam, rutrum quam mollis, vulputate purus. In nec velit ut velit dapibus imperdiet et eu risus. Sed rutrum nec sapien a semper. Nullam sit amet lacinia velit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <div className="footer-left">
                <h4 className="footer-title">SECTION 3</h4>
                <p className="footer-subtitle">Footer here</p>
              </div>
              <div className="footer-buttons">
                <button className="btn btn-cancel">Cancel</button>
                <button className="btn btn-add">Add Patient</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}