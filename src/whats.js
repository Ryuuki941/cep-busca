import Paper from "material-ui/Paper";
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from "material-ui/List";
import Tooltip from "material-ui/Tooltip";
import Divider from "material-ui/Divider";


<Paper>
            {alunos ? (
              <List {...isWidthDown("md", width) && { dense: true }}>
                {alunos.map((aluno, index) => (
                  <Tooltip
                    id="tooltip-icon"
                    title={`Ver detalhes sobre: ${aluno.name.first}`}
                    enterDelay={300}
                    placement="bottom"
                    key={index}
                  >
                    <ListItem
                      key={index}
                      className={classes.listItem}
                      divider={true}
                    >
                      <ListItemText
                        primary={capitalizeEvery(
                          aluno.name.first,
                          aluno.name.last
                        )}
                        {...isWidthUp("sm", width) && {
                          secondary: aluno.email
                        }}
                      />
                    </ListItem>
                  </Tooltip>
                ))}
              </List>
            ) : (
              <CircularProgress />
            )}
            <Divider />
          </Paper>