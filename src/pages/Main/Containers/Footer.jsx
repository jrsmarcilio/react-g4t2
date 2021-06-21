import React, { memo } from 'react';

function Footer() {
  return (
    <>
      <footer className="bg-black text-center py-5">
        <div className="container px-5">
          <div className="text-white-50 small">
            <div className="mb-2">
              &copy; Afya Labs - Grupo 04 Turma 02 &middot; 2021 &middot; All
              Rights Reserved.
            </div>
            <a href="https://github.com/jrsmarcilio/backend-g4t2">
              Documentação
            </a>
            <span className="mx-1" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default memo(Footer);
