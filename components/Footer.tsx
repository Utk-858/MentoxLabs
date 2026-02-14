'use client'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-20 bg-black text-white py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src="/assets/logo/logo1_blackbg.png" alt="Lexora Logo" className="h-10 w-auto mb-4" />
            <p className="text-gray-400 mb-6">
              Building the future of enterprise reasoning with Lexora - The Agentic Reasoning Framework
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/careers" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Mentox Labs. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer