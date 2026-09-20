import { profile } from "@/data/content";
import Ticker from "./Ticker";

export default function Footer() {
  return (
    <footer>
      <Ticker text={profile.name} />
      <div className="bg-forest-deep py-6 text-center text-xs text-cream-soft/60">
        © {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  );
}
