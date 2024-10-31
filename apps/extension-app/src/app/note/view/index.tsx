import { Button } from "@/components/ui/button";

export default function Note() {
  return <Button>{chrome.i18n.getMessage("create_note")}</Button>;
}
