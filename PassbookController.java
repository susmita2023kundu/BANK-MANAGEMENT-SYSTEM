@RestController
@RequestMapping("/api/passbook")
public class PassbookController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping("/{accountId}")
    public List<Transaction> getPassbook(@PathVariable Long accountId) {
        // Retrieve transactions for the specified account
        Account account = // Fetch account by ID using AccountService
        return transactionService.getTransactionsByAccount(account);
    }
}
