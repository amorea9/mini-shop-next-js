import Anchor from "./Anchor";
function Layout({ children, navData }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Anchor href="/">Home</Anchor>
            </li>
            {navData.map((item) => {
              return (
                <li key={item.id}>
                  <Anchor href={`/products/${item.id}`}>{item.id}</Anchor>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;
