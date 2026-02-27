export type SiteRule = {
  domain: string;
  displayName: string;
  rules: {
    min_length?: number;
    max_length?: number;
    require_uppercase?: boolean;
    require_lowercase?: boolean;
    require_number?: boolean;
    require_special?: boolean;
    allowed_special_chars?: string;
    no_spaces?: boolean;
    notes?: string;
  };
};

export const siteRules: SiteRule[] = [
  {
    domain: "google.com",
    displayName: "Google",
    rules: {
      min_length: 8,
      max_length: 100,
      notes: "Requires a mix of letters, numbers, and symbols",
    },
  },
  {
    domain: "chase.com",
    displayName: "Chase Bank",
    rules: {
      min_length: 8,
      max_length: 32,
      require_uppercase: true,
      require_lowercase: true,
      require_number: true,
      require_special: true,
      allowed_special_chars: "! @ # $ % ^ & * ( )",
      no_spaces: true,
    },
  },
  {
    domain: "github.com",
    displayName: "GitHub",
    rules: {
      min_length: 8,
      require_uppercase: true,
      require_lowercase: true,
      require_number: true,
      notes:
        "At least 15 characters OR at least 8 characters with 1 number and 1 lowercase letter",
    },
  },
  {
    domain: "apple.com",
    displayName: "Apple",
    rules: {
      min_length: 8,
      max_length: 32,
      require_uppercase: true,
      require_lowercase: true,
      require_number: true,
      notes: "Cannot contain more than 3 consecutive identical characters",
    },
  },
  {
    domain: "paypal.com",
    displayName: "PayPal",
    rules: {
      min_length: 8,
      max_length: 20,
      require_uppercase: true,
      require_lowercase: true,
      require_number: true,
      require_special: true,
      no_spaces: true,
    },
  },
  {
    domain: "adobe.com",
    displayName: "Adobe",
    rules: {
      min_length: 8,
      require_uppercase: true,
      require_lowercase: true,
      require_number: true,
      require_special: true,
      notes: "Must contain uppercase, lowercase, number, and special character",
    },
  },
  {
    domain: "taobao.com",
    displayName: "淘宝 (Taobao)",
    rules: {
      min_length: 6,
      max_length: 20,
      notes: "6-20 characters, letters and numbers",
    },
  },
  {
    domain: "steampowered.com",
    displayName: "Steam",
    rules: {
      min_length: 7,
      max_length: 64,
      require_uppercase: true,
      require_lowercase: true,
      require_number: true,
    },
  },
];
