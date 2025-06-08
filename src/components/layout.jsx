function Layout({ children, footer }) {
  return (
    <div className="">
      <main className="layout-content">{children}</main>
      {footer && <footer className="layout-footer">{footer}</footer>}
    </div>
  );
}

export { Layout };
