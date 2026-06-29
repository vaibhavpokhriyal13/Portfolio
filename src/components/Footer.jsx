export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card border-t border-border mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Vaibhav Pokhriyal. All rights reserved.
      </p>
    </footer>
  );
};
