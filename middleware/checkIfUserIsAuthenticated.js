export default function(context) {
  if (!context.store.getters.checkIfThereIsAToken) {
    context.redirect("/profile/auth");
  }
}
