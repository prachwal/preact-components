import { useState } from 'preact/hooks';
import {
  ThemeProvider,
  Sidebar,
  Container,
  Flex,
  Space,
  Heading,
  Paragraph,
  Footer,
  Main,
  Logo,
} from '@/components';
import { ThemeSwitcher } from '@/components/demo/ThemeSwitcher';
import { VariantSelector } from '@/components/demo/VariantSelector';
import { DashboardPage } from '@/components/demo/pages/DashboardPage';
import { ComponentsPage } from '@/components/demo/pages/ComponentsPage';
import { FormsPage } from '@/components/demo/pages/FormsPage';
import { DataDisplayPage } from '@/components/demo/pages/DataDisplayPage';
import { SettingsPage } from '@/components/demo/pages/SettingsPage';
import '@/styles/index.scss';
import './app.scss';

type PageId = 'dashboard' | 'components' | 'forms' | 'data' | 'settings';

const menuItems = [
  { id: 'dashboard' as PageId, label: 'Dashboard', icon: '📊' },
  { id: 'components' as PageId, label: 'Components', icon: '🧩' },
  { id: 'forms' as PageId, label: 'Forms', icon: '📝' },
  { id: 'data' as PageId, label: 'Data Display', icon: '📈' },
  { id: 'settings' as PageId, label: 'Settings', icon: '⚙️' },
];

function AppHeader({ onMenuToggle }: { onMenuToggle: () => void }) {
  return (
    <header className="app-header">
      <Container maxWidth="xl" className="app-header__container">
        <Flex align="center" justify="between" className="w-100">
          <Flex align="center" gap={16}>
            <button
              className="app-header__hamburger"
              onClick={onMenuToggle}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <Flex align="center" gap={8}>
              <Logo />
              <Heading level={4} className="m-0 app-header__title">Preact UI</Heading>
            </Flex>
          </Flex>
          <Flex align="center" gap={12}>
            <VariantSelector />
            <ThemeSwitcher />
          </Flex>
        </Flex>
      </Container>
    </header>
  );
}

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Start collapsed on desktop
  const [activePage, setActivePage] = useState<PageId>('dashboard');

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handlePageChange = (pageId: PageId) => {
    setActivePage(pageId);
    // Don't auto-close sidebar on desktop
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'components':
        return <ComponentsPage />;
      case 'forms':
        return <FormsPage />;
      case 'data':
        return <DataDisplayPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="app-layout">
      <AppHeader onMenuToggle={handleMenuToggle} />

      <Sidebar
        collapsed={!sidebarOpen}
        onCollapse={(collapsed) => setSidebarOpen(!collapsed)}
        breakpoint="md"
      >
        <div className="sidebar-menu">
          <Space direction="vertical" size="small" className="w-100">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`sidebar-menu__item ${
                  activePage === item.id ? 'sidebar-menu__item--active' : ''
                }`}
                onClick={() => handlePageChange(item.id)}
                aria-label={item.label}
                aria-current={activePage === item.id ? 'page' : undefined}
              >
                <span className="sidebar-menu__icon" aria-hidden="true">{item.icon}</span>
                {sidebarOpen && (
                  <span className="sidebar-menu__label">{item.label}</span>
                )}
              </button>
            ))}
          </Space>
        </div>
      </Sidebar>

      <Main className={`app-main ${sidebarOpen ? 'app-main--expanded' : ''}`}>
        <Container maxWidth="xl" className="app-main__content">
          {renderPage()}
        </Container>

        <Footer className="app-footer">
          <Container maxWidth="xl">
            <Flex
              direction="column"
              gap={16}
              className="flex-sm-row justify-sm-between align-sm-center"
            >
              <Paragraph variant="muted" className="mb-0">
                © 2024 Preact Component Library. All rights reserved.
              </Paragraph>
              <Space size="large">
                <a href="#github" className="footer-link" title="GitHub">
                  GitHub
                </a>
                <a href="#twitter" className="footer-link" title="Twitter">
                  Twitter
                </a>
                <a href="#discord" className="footer-link" title="Discord">
                  Discord
                </a>
              </Space>
            </Flex>
          </Container>
        </Footer>
      </Main>
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider defaultTheme="system" defaultVariant="base">
      <AppContent />
    </ThemeProvider>
  );
}
