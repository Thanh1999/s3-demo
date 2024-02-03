if (context.payload.pull_request.body === null) {
    github.rest.pulls.update({
      owner: context.repo.owner,
      repo: context.repo.repo,
      body: `Your pull request access link will be https://${{env.S3-BUCKET}}.s3.us-east-1.amazonaws.com/
            + '\n' + For example: https://${{env.S3-BUCKET}}.s3.us-east-1.amazonaws.com/images/logos/lastv.png
            + '\n' + context.payload.pull_request.body`
    })
  }