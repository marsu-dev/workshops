import re
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
LANGUAGES = ("fr", "en", "es", "it", "de")
REQUIRED_TOKENS = (
    "83696968'",
    "HMAC-SHA512",
    "bip-entropy-from-k",
    "m/83696968'/39'",
    "BIP32",
    "BIP39",
    "https://bips.dev/85/",
)


class Bip85PresentationTests(unittest.TestCase):
    def test_five_translations_exist_with_complete_slide_deck(self):
        for language in LANGUAGES:
            path = ROOT / "presentations" / f"13-bip85.{language}.md"
            self.assertTrue(path.is_file(), path)
            content = path.read_text(encoding="utf-8")
            slides = [part for part in re.split(r"\n(?:---|\*\*\*)\n", content) if part.strip()]
            self.assertGreaterEqual(len(slides), 15, f"{path}: only {len(slides)} slides")
            self.assertRegex(content, r"(?m)^# .*(BIP[- ]?85|BIP 85)")
            for token in REQUIRED_TOKENS:
                self.assertIn(token, content, f"{path}: missing {token}")

    def test_coldcard_q_derivations_and_workflow_are_documented(self):
        coldcard_tokens = (
            "COLDCARD Q",
            "Advanced/Tools > Derive Seeds (BIP-85)",
            "m/83696968'/39'/0'/12'/0'",
            "m/83696968'/2'/0'",
            "m/83696968'/32'/0'",
            "m/83696968'/128169'/32'/0'",
            "m/83696968'/128169'/64'/0'",
            "m/83696968'/707764'/21'/0'",
            "WIF",
            "XPRV",
            "MicroSD",
            "NFC",
            "QR",
            "QWERTY",
            "https://coldcard.com/docs/bip85/",
            "https://coldcard.com/docs/bip85-passwords/",
        )
        for language in LANGUAGES:
            path = ROOT / "presentations" / f"13-bip85.{language}.md"
            content = path.read_text(encoding="utf-8")
            slides = [part for part in re.split(r"\n(?:---|\*\*\*)\n", content) if part.strip()]
            self.assertGreaterEqual(len(slides), 22, f"{path}: only {len(slides)} slides")
            for token in coldcard_tokens:
                self.assertIn(token, content, f"{path}: missing {token}")

    def test_non_custodial_bip39_wallet_examples_are_documented(self):
        wallet_tokens = (
            "Phoenix Wallet",
            "AQUA Wallet",
            "BULL Wallet",
            "m/83696968'/39'/0'/12'/10'",
            "m/83696968'/39'/0'/12'/11'",
            "m/83696968'/39'/0'/12'/12'",
            "https://phoenix.acinq.co/content/faq.md",
            "https://github.com/AquaWallet/aqua-wallet",
            "https://github.com/SatoshiPortal/bullbitcoin-mobile",
        )
        for language in LANGUAGES:
            path = ROOT / "presentations" / f"13-bip85.{language}.md"
            content = path.read_text(encoding="utf-8")
            slides = [part for part in re.split(r"\n(?:---|\*\*\*)\n", content) if part.strip()]
            self.assertGreaterEqual(len(slides), 29, f"{path}: only {len(slides)} slides")
            for token in wallet_tokens:
                self.assertIn(token, content, f"{path}: missing {token}")

    def test_index_registers_bip85_in_every_supported_language(self):
        index = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("id: 13", index)
        self.assertIn("file: 'presentations/13-bip85'", index)
        self.assertIn("link: 'https://bips.dev/85/'", index)
        block = index[index.index("id: 13"):]
        for language in LANGUAGES:
            self.assertRegex(block, rf"{language}:\s*'[^']*BIP-?85[^']*'")

    def test_readme_lists_bip85(self):
        readme = (ROOT / "README.md").read_text(encoding="utf-8")
        self.assertIn("13-bip85.{lang}.md", readme)


if __name__ == "__main__":
    unittest.main()
