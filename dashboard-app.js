function DashboardApp() {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        window.location.href = 'about.html';
        return null;
      case 'careers':
        window.location.href = 'careers.html';
        return null;
      case 'app-details':
        window.location.href = 'app-details.html';
        return null;
      case 'exam-prep':
        window.location.href = 'exam-prep.html';
        return null;
      case 'tutors':
        window.location.href = 'tutors.html';
        return null;
      case 'profile':
        window.location.href = 'profile.html';
        return null;
      case 'reports':
        window.location.href = 'reports.html';
        return null;
      default:
        return <HomePage />;
    }
  };

  try {
    return (
      <div className="min-h-screen bg-[var(--surface)] flex">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    );
  } catch (error) {
    console.error('DashboardApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DashboardApp />);