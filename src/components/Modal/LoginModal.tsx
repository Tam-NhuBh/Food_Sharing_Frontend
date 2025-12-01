interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LoginModal({ open, onClose }: LoginModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white font-worksans p-6 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-2xl dark:text-white font-semibold font-lobster">Please log in</h2>
        <p className="mt-2 text-sm dark:text-white sm:text-lg">You need to log in before adding a recipe.</p>
        <div className="mt-4 flex gap-2 dark:text-white justify-end">
          {/* Cancel button */}
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border dark:text-white border-gray-300 rounded hover:bg-gray-100 hover:border-gray-400 transition"
          >
            Cancel
          </button>
          {/* Login button */}
          <a
            href="/login"
            className="px-4 py-2 bg-primary text-white dark:text-white rounded hover:bg-primary/90 hover:shadow-md transition"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
